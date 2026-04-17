import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const brandMap = {
  "mindsheep.com.au": "Mindsheep Labs Australia",
  "www.mindsheep.com.au": "Mindsheep Labs Australia",
  "mindsheeplabs.com": "Mindsheep Labs Global",
  "www.mindsheeplabs.com": "Mindsheep Labs Global",
};

export async function POST(req) {
  try {
    const { name, email, business, budget } = await req.json();
    const host = req.headers.get("host") || "mindsheep.com.au";
    const brandName = brandMap[host] || "Mindsheep Labs";

    if (!name || !email || !business) {
      return Response.json(
        { error: "Name, email, and business description are required." },
        { status: 400 }
      );
    }

    const budgetLabels = {
      under5k: "Under $5,000",
      "5k-15k": "$5,000 \u2013 $15,000",
      "15k-50k": "$15,000 \u2013 $50,000",
      "50k+": "$50,000+",
    };

    const { data, error } = await resend.emails.send({
      from: `${brandName} <david@mindsheep.com.au>`,
      to: ["david@mindsheep.com.au"],
      subject: `New Lead: ${name} \u2014 ${brandName}`,
      html: `
        <h2>New enquiry from ${host}</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Business:</strong></p>
        <p>${business.replace(/\n/g, "<br/>")}</p>
        <p><strong>Monthly Ad Budget:</strong> ${budgetLabels[budget] || "Not specified"}</p>
      `,
      replyTo: email,
    });

    if (error) {
      console.error("Resend error:", error);
      return Response.json({ error: error.message }, { status: 500 });
    }

    return Response.json({ success: true, id: data.id });
  } catch (err) {
    console.error("Contact form error:", err);
    return Response.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
