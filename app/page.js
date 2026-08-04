"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import LeadFunnel from "./components/LeadFunnel";

const PAINS = [
  {
    title: "Weak, half-finished leads",
    body: "A prospect fills in a basic form with partial information, and your team calls back, chases details and qualifies from scratch — often for someone who was never going to buy.",
  },
  {
    title: "Wasted team time",
    body: "Skilled staff burn hours on low-quality enquiries and back-and-forth instead of closing the good ones.",
  },
  {
    title: "Slow quotes lose deals",
    body: "Complex jobs need a human to work up a price, so prospects wait — and the faster competitor wins the job.",
  },
  {
    title: "Ad spend that doesn't learn",
    body: "Google and Facebook optimise toward “form submitted”, not toward “good lead”, so budget keeps buying you the wrong prospects.",
  },
];

const TIERS = [
  {
    label: "Tier A",
    title: "Full control",
    body: "We build the AI lead-gen system and hand you the keys. You run and adjust it yourself, with full control over campaigns, flows and quoting logic.",
  },
  {
    label: "Tier B",
    title: "Done-for-you",
    body: "We design, build and launch the whole system for you, set up and ready to run — then you take it from there.",
  },
  {
    label: "Tier C",
    title: "Fully managed",
    body: "We run and optimise the entire engine on an ongoing basis: ads, AI flows, quoting logic, lead scoring and the feedback loop, continuously tuned.",
  },
];

export default function Home() {
  const [formStatus, setFormStatus] = useState("idle");

  async function handleSubmit(e) {
    e.preventDefault();
    setFormStatus("sending");
    const form = e.target;
    const data = {
      name: form.name.value,
      email: form.email.value,
      business: form.business.value,
      budget: form.budget.value,
    };
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setFormStatus("sent");
        form.reset();
      } else {
        setFormStatus("error");
      }
    } catch {
      setFormStatus("error");
    }
  }

  useEffect(() => {
    const nav = document.querySelector(".glass-nav");
    const topBranding = document.querySelector(".top-branding");
    if (!nav) return;

    const handleScroll = () => {
      if (window.scrollY > 80) {
        nav.classList.add("nav-visible");
        if (topBranding) topBranding.classList.add("branding-hidden");
      } else {
        nav.classList.remove("nav-visible");
        if (topBranding) topBranding.classList.remove("branding-hidden");
      }
    };

    const revealEls = Array.from(document.querySelectorAll(".reveal"));
    const reveal = (el) => {
      el.classList.remove("reveal-pending");
      el.classList.add("revealed");
    };
    let observer;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      revealEls.forEach(reveal);
    } else {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              reveal(entry.target);
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0, rootMargin: "0px 0px -8% 0px" }
      );
      const vh = window.innerHeight;
      revealEls.forEach((el) => {
        if (el.getBoundingClientRect().top < vh) reveal(el);
        else {
          el.classList.add("reveal-pending");
          observer.observe(el);
        }
      });
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (observer) observer.disconnect();
    };
  }, []);

  return (
    <>
      <div className="bg-glow"></div>

      {/* Top branding — fades out on scroll */}
      <div className="top-branding">
        <span className="top-branding-text">mindsheep</span>
      </div>

      {/* Navigation — slides in on scroll */}
      <nav className="glass-nav">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-2" style={{ height: "60px" }}>
            <span className="nav-brand-text">mindsheep</span>
          </div>
          <div className="flex items-center gap-8">
            <a href="#how-it-works" className="nav-link text-sm font-semibold tracking-wide">How it works</a>
            <a href="#tiers" className="nav-link text-sm font-semibold tracking-wide">How you engage</a>
            <a href="#contact" className="btn btn-primary">Book a Strategy Call</a>
          </div>
        </div>
      </nav>

      <main>
        {/* ==================== 1. HERO ==================== */}
        <section className="container pt-4 pb-8 flex flex-col items-center justify-center text-center animate-fade-in relative">
          <h1 className="mb-4">
            Stop collecting form fills.<br />
            <span className="text-gradient">Start capturing qualified, quoted leads.</span>
          </h1>

          <p className="mb-8 max-w-3xl mx-auto" style={{ fontSize: "1.15rem", lineHeight: "1.7" }}>
            Mindsheep Marketing replaces the static contact form with an AI that chats, calls,
            gathers everything, quotes instantly, and hands your team only the leads worth their
            time — while teaching Google and Facebook to bring you more of them.
          </p>

          <div className="flex gap-4 justify-center delay-100 animate-fade-in" style={{ flexWrap: "wrap" }}>
            <a href="#contact" className="btn btn-primary">Book a Strategy Call</a>
            <a href="#how-it-works" className="btn btn-secondary">See how it works</a>
          </div>

          <p className="mt-8 text-sm text-gray-500" style={{ letterSpacing: "0.04em" }}>
            More leads. Better leads. Less time chasing them.
          </p>
        </section>

        {/* ==================== 2. THE PROBLEM ==================== */}
        <section className="container py-20 reveal" id="problem">
          <div className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-wide mb-4" style={{ color: "var(--secondary)" }}>
              The problem
            </p>
            <h2 className="mb-4">
              Your form asks for a name.<br />
              <span className="text-gradient">Your competitor&apos;s AI already quoted the job.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {PAINS.map((p) => (
              <div key={p.title} className="glass-panel p-8">
                <h3 className="mb-3" style={{ fontSize: "1.15rem" }}>{p.title}</h3>
                <p className="text-gray-300" style={{ fontSize: "0.95rem", lineHeight: "1.7" }}>
                  {p.body}
                </p>
              </div>
            ))}
          </div>
          <p className="text-center mt-8">
            <a href="#contact" className="text-sm font-semibold" style={{ color: "var(--secondary)" }}>
              Sound familiar? Let&apos;s talk →
            </a>
          </p>
        </section>

        {/* ==================== 3. THE SOLUTION ==================== */}
        <section className="section-alt py-20 reveal" id="solution">
          <div className="container">
            <div className="mb-12 text-center">
              <p className="text-sm font-semibold uppercase tracking-wide mb-4" style={{ color: "var(--secondary)" }}>
                The solution
              </p>
              <h2 className="mb-4">
                AI that captures, qualifies and quotes —<br />
                <span className="text-gradient">before your team picks up the phone.</span>
              </h2>
            </div>
            <div className="glass-panel p-10 md:p-16 max-w-3xl mx-auto">
              <p className="text-lg text-gray-300 mb-6" style={{ lineHeight: "1.8" }}>
                The classic call to action — &ldquo;fill in this form&rdquo; — becomes
                &ldquo;get an instant quote now by chatting to our AI.&rdquo; Instead of a dead
                form, the prospect chats, takes a voice call, or moves through an interactive flow
                that feels like talking to your best salesperson.
              </p>
              <p className="text-lg text-gray-300 mb-0" style={{ lineHeight: "1.8" }}>
                The AI gathers everything up front, qualifies against your criteria, and passes
                through only the genuinely good leads. Weak ones are filtered or nurtured
                automatically. Strong ones arrive <strong>complete and already quoted</strong> — so
                your team closes more and spends less time chasing dead ends.
              </p>
            </div>
          </div>
        </section>

        {/* ==================== 4. THE FUNNEL ==================== */}
        <section className="container py-20 reveal" id="how-it-works">
          <div className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-wide mb-4" style={{ color: "var(--secondary)" }}>
              How it works
            </p>
            <h2 className="mb-4">
              From ad click to scored, quoted lead —<br />
              <span className="text-gradient">automatically.</span>
            </h2>
            <p className="max-w-2xl mx-auto" style={{ fontSize: "1.05rem" }}>
              Many clicks go in. Only qualified, quoted leads come out — and every outcome is fed
              back to the ad platform.
            </p>
          </div>
          <LeadFunnel />
          <p className="text-center mt-8">
            <a href="#case-study" className="text-sm font-semibold" style={{ color: "var(--secondary)" }}>
              See it on a real business →
            </a>
          </p>
        </section>

        {/* ==================== 5. THE FEEDBACK LOOP ==================== */}
        <section className="section-alt py-20 reveal" id="feedback-loop">
          <div className="container">
            <div className="mb-12 text-center">
              <p className="text-sm font-semibold uppercase tracking-wide mb-4" style={{ color: "var(--secondary)" }}>
                The differentiator
              </p>
              <h2 className="mb-4">
                Leads that get <span className="text-gradient">better every month.</span>
              </h2>
              <p className="max-w-3xl mx-auto" style={{ fontSize: "1.05rem" }}>
                Ecommerce advertisers have always had an advantage: the platform sees a dollar
                figure on every sale, so it learns to chase revenue. Lead generation normally
                can&apos;t do that — a form fill is just &ldquo;a lead&rdquo;, with no value
                attached. Qualifying and quoting inside the funnel changes that.
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <div className="score-compare">
                <div className="score-col">
                  <h4>What a normal lead form sends back</h4>
                  <div className="score-signal score-signal-dim">conversion: lead</div>
                  <div className="score-signal score-signal-dim">value: unknown</div>
                  <div className="score-signal score-signal-dim">timing: unknown</div>
                  <div className="score-signal score-signal-dim">score: —</div>
                </div>
                <div className="score-col score-col-good">
                  <h4>What we can send back</h4>
                  <div className="score-signal">conversion: qualified_lead</div>
                  <div className="score-signal">value: $5,000</div>
                  <div className="score-signal">timing: ready this week</div>
                  <div className="score-signal">score: 92 / 100</div>
                </div>
              </div>

              <div className="glass-panel p-8 mt-8">
                <p className="text-gray-300 mb-4" style={{ lineHeight: "1.8" }}>
                  Because the AI has already asked the qualifying questions and produced a quote, we
                  know what each lead is actually worth and how ready they are to move. Value and
                  timing combine into a single score the ad platforms can act on.
                </p>
                <p className="text-gray-300 mb-4" style={{ lineHeight: "1.8" }}>
                  How those two are weighted is set per business, because the right answer differs.
                  A $2,000 job someone wants done this week may be worth far more to you than a
                  $5,000 job three months out — or the reverse, if you&apos;re building a forward
                  order book. We tune the model to what actually matters for your operation.
                </p>
                <p className="text-gray-300 mb-0" style={{ lineHeight: "1.8" }}>
                  That score goes back to Google or Facebook as the conversion signal, so they
                  optimise toward the prospects genuinely worth winning — the same value-based
                  bidding ecommerce has always enjoyed, brought to lead generation. Most agencies
                  optimise for volume of form fills. This optimises for quality of outcome, and it
                  is the hardest thing for a competitor to copy.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ==================== 6. COMPLEX INSTANT QUOTING ==================== */}
        <section className="container py-20 reveal" id="quoting">
          <div className="glass-panel p-10 md:p-16">
            <div className="text-center mb-8">
              <p className="text-sm font-semibold uppercase tracking-wide mb-4" style={{ color: "var(--secondary)" }}>
                Headline capability
              </p>
              <h2 className="mb-4">
                20 questions and a human?<br />
                <span className="text-gradient">Now it&apos;s instant.</span>
              </h2>
            </div>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto text-center mb-0" style={{ lineHeight: "1.8" }}>
              For businesses where a quote currently needs seven, ten, twenty or more questions —
              and often a specialist to work it up — the AI gathers everything and generates an
              accurate quote automatically, even for complicated, multi-variable, edge-case-heavy
              pricing. Prospects who would otherwise wait days get a real quote in minutes, and you
              capture a fully qualified, already-quoted lead without a specialist lifting a finger.
            </p>
          </div>
        </section>

        {/* ==================== 7. HOW YOU ENGAGE ==================== */}
        <section className="section-alt py-20 reveal" id="tiers">
          <div className="container">
            <div className="mb-12 text-center">
              <p className="text-sm font-semibold uppercase tracking-wide mb-4" style={{ color: "var(--secondary)" }}>
                How you engage
              </p>
              <h2 className="mb-4">
                Full control, done-for-you,<br />
                <span className="text-gradient">or fully managed.</span>
              </h2>
              <p className="max-w-2xl mx-auto" style={{ fontSize: "1.05rem" }}>
                We can run the Google Ads and generate the leads, or help you handle the ones you
                already get far more effectively. You choose how hands-on you want to be.
              </p>
            </div>
            <div className="tier-grid">
              {TIERS.map((t) => (
                <div key={t.label} className="glass-panel p-8 tier-card">
                  <span className="tier-label">{t.label}</span>
                  <h3>{t.title}</h3>
                  <p className="text-gray-300">{t.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ==================== 8. CASE STUDY — WILLSHIP ==================== */}
        <section className="container py-20 reveal" id="case-study">
          <div className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-wide mb-4" style={{ color: "var(--secondary)" }}>
              Case study
            </p>
            <h2 className="mb-4">
              How WillShip turned instant quoting into a{" "}
              <span className="text-gradient">lead engine.</span>
            </h2>
          </div>

          <div className="glass-panel p-10 md:p-16 max-w-3xl mx-auto">
            <div className="flex items-center gap-4 mb-8" style={{ flexWrap: "wrap" }}>
              <Image
                src="/clients/willship-logo.webp"
                alt="WillShip International"
                width={150}
                height={30}
                className="client-logo"
              />
              <span className="text-sm text-gray-500">
                Freight, logistics and vehicle shipping
              </span>
            </div>

            <h3 className="mb-3" style={{ fontSize: "1.1rem" }}>The challenge</h3>
            <p className="text-gray-300 mb-8" style={{ lineHeight: "1.8" }}>
              Quoting international freight and vehicle shipping is exactly the kind of pricing that
              normally needs an expert and a long list of questions. That slowed lead response and
              tied up specialist time on every enquiry, qualified or not.
            </p>

            <h3 className="mb-3" style={{ fontSize: "1.1rem" }}>What we built</h3>
            <div className="case-timeline">
              <div className="case-step">
                <div className="case-step-label">System one</div>
                <h4>&ldquo;Alex&rdquo;</h4>
                <p>
                  We productionised Nick&apos;s own prototype into a commercial AI chatbot that
                  captures and qualifies freight leads and pushes deals into WillShip&apos;s CRM.
                  Live mid-July 2026.
                </p>
              </div>
              <div className="case-step">
                <div className="case-step-label">System two</div>
                <h4>&ldquo;Sam&rdquo; + quote wizard</h4>
                <p>
                  It worked well enough that Nick commissioned the automotive chatbot plus a rebuilt
                  instant-quote wizard for vehicle shipping.
                </p>
              </div>
              <div className="case-step">
                <div className="case-step-label">Now</div>
                <h4>Website redesign</h4>
                <p>
                  With both systems delivering, WillShip has moved on to a redesign to modernise the
                  site and showcase the AI.
                </p>
              </div>
            </div>

            <h3 className="mb-3 mt-8" style={{ fontSize: "1.1rem" }}>How it works for them</h3>
            <p className="text-gray-300 mb-0" style={{ lineHeight: "1.8" }}>
              Prospects get an instant online quote, which generates and qualifies the lead at the
              same time. Every enquiry arrives complete and quoted before the sales team sees it, so
              specialist time goes to the jobs worth winning.
            </p>

            <div className="case-quotes">
              <blockquote className="case-quote">
                &ldquo;Great work on the whole project mate, you&apos;ve done an amazing job.
                I&apos;ve just flicked it live.&rdquo;
                <span className="case-quote-attr">Nick Proctor, WillShip International</span>
              </blockquote>
              <blockquote className="case-quote">
                &ldquo;Rod is amazing, he&apos;s done a great job… really looking forward to pushing
                live.&rdquo;
                <span className="case-quote-attr">Nick Proctor, WillShip International</span>
              </blockquote>
              <blockquote className="case-quote">
                &ldquo;Wow, incredible work Rod! Love it mate, this is amazing.&rdquo;
                <span className="case-quote-attr">Nick Proctor, WillShip International</span>
              </blockquote>
            </div>

            <div className="text-center mt-8">
              <a href="#contact" className="btn btn-primary">
                Want instant quoting like WillShip?
              </a>
            </div>
          </div>
        </section>

        {/* ==================== 9. FINAL CTA ==================== */}
        <section id="contact" className="section-alt py-20 reveal">
          <div className="container">
            <div className="mb-12 text-center">
              <h2 className="mb-4">
                Let&apos;s turn your ad spend into{" "}
                <span className="text-gradient">qualified, quoted leads.</span>
              </h2>
              <p className="max-w-xl mx-auto" style={{ fontSize: "1.05rem" }}>
                Tell us what you sell and how leads reach you today. We&apos;ll come back with a
                clear view of what AI lead generation would look like for your business.
              </p>
            </div>
            <div className="glass-panel p-10 md:p-16 max-w-2xl mx-auto contact-panel">
              {formStatus === "sent" ? (
                <div className="text-center" style={{ padding: "2rem 0" }}>
                  <h3 className="mb-4 text-primary">Message sent.</h3>
                  <p className="text-gray-300">
                    Thanks for reaching out — we&apos;ll be in touch within one business day.
                  </p>
                  <button onClick={() => setFormStatus("idle")} className="btn btn-secondary mt-6">
                    Send another message
                  </button>
                </div>
              ) : (
                <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-sm font-semibold text-gray-300">Name</label>
                    <input type="text" id="name" name="name" placeholder="Your name" className="form-input" required />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-sm font-semibold text-gray-300">Email</label>
                    <input type="email" id="email" name="email" placeholder="you@company.com" className="form-input" required />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="business" className="text-sm font-semibold text-gray-300">
                      What do you sell, and how do leads reach you today?
                    </label>
                    <textarea
                      id="business"
                      name="business"
                      rows={4}
                      placeholder="What you sell, whether jobs need quoting, and what happens when an enquiry comes in."
                      className="form-input"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="budget" className="text-sm font-semibold text-gray-300">
                      Monthly ad budget (approximate)
                    </label>
                    <select id="budget" name="budget" className="form-input">
                      <option value="">Select a range</option>
                      <option value="under5k">Under $5,000</option>
                      <option value="5k-15k">$5,000 – $15,000</option>
                      <option value="15k-50k">$15,000 – $50,000</option>
                      <option value="50k+">$50,000+</option>
                    </select>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary"
                    style={{ width: "100%", textAlign: "center", padding: "1rem" }}
                    disabled={formStatus === "sending"}
                  >
                    {formStatus === "sending" ? "Sending…" : "Book a Strategy Call"}
                  </button>
                  {formStatus === "error" && (
                    <p className="text-center text-sm" style={{ color: "#fb7185" }}>
                      Something went wrong. Please try again.
                    </p>
                  )}
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="site-footer">
        <div className="container">
          <div className="footer-top">
            <div className="footer-brand">
              <Image
                src="/MINDSHEEP LOGO.svg"
                alt="Mindsheep Marketing"
                width={140}
                height={40}
                className="footer-logo"
              />
              <p className="footer-tagline">
                AI-powered lead generation. More leads, better leads, less time chasing them.
              </p>
            </div>
            <div className="footer-links">
              <div className="footer-link-group">
                <h4 className="footer-link-heading">Navigate</h4>
                <a href="#how-it-works">How it works</a>
                <a href="#tiers">How you engage</a>
                <a href="#case-study">Case study</a>
              </div>
              <div className="footer-link-group">
                <h4 className="footer-link-heading">Get Started</h4>
                <a href="#contact">Book a Strategy Call</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Mindsheep Marketing. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
