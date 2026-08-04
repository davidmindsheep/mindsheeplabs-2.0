import { Resend } from "resend";

// Instantiated per-request, not at module scope — the build must not require secrets.
function getResend() {
  const key = process.env.RESEND_API_KEY;
  if (!key) return null;
  return new Resend(key);
}

const BRAND = "Mindsheep Labs Australia";

function esc(v = "") {
  return String(v)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export async function POST(req) {
  try {
    const { name, email, business, budget } = await req.json();

    if (!name || !email || !business) {
      return Response.json(
        { error: "Name, email, and business description are required." },
        { status: 400 }
      );
    }

    const resend = getResend();
    if (!resend) {
      console.error("RESEND_API_KEY is not configured.");
      return Response.json(
        { error: "Email is not configured." },
        { status: 500 }
      );
    }

    const budgetLabels = {
      under5k: "Under $5,000",
      "5k-15k": "$5,000 – $15,000",
      "15k-50k": "$15,000 – $50,000",
      "50k+": "$50,000+",
    };

    const { data, error } = await resend.emails.send({
      from: `${BRAND} <david@mindsheep.com.au>`,
      to: ["david@mindsheep.com.au"],
      subject: `New Lead: ${name} — ${BRAND}`,
      replyTo: email,
      html: `
        <h2>New enquiry from mindsheep.com.au</h2>
        <p><strong>Name:</strong> ${esc(name)}</p>
        <p><strong>Email:</strong> <a href="mailto:${esc(email)}">${esc(email)}</a></p>
        <p><strong>Business:</strong></p>
        <p>${esc(business).replace(/\n/g, "<br/>")}</p>
        <p><strong>Monthly Ad Budget:</strong> ${budgetLabels[budget] || "Not specified"}</p>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return Response.json({ error: error.message }, { status: 500 });
    }

    return Response.json({ success: true, id: data?.id });
  } catch (err) {
    console.error("Contact form error:", err);
    return Response.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
