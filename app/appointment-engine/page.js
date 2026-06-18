"use client";
import { useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import RevealObserver from "../components/RevealObserver";
import useBrand from "../hooks/useBrand";

export default function AppointmentEnginePage() {
  const brand = useBrand();
  const [formStatus, setFormStatus] = useState("idle");

  async function handleSubmit(e) {
    e.preventDefault();
    setFormStatus("sending");
    const form = e.target;
    const data = {
      name: form.name.value,
      email: form.email.value,
      business: `[APPOINTMENT ENGINE ENQUIRY] ${form.business.value}`,
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

  return (
    <>
      <RevealObserver />
      <div className="bg-glow" />
      <NavBar activePage="appointment-engine" />

      <main>
        {/* ==================== HERO ==================== */}
        <section className="container page-hero reveal">
          <div className="partnership-badge mb-6">
            <span>{brand.nameCaps}</span>
            <span className="partnership-x">×</span>
            <span>Stellar Voice Agents</span>
          </div>
          <p className="text-sm font-semibold uppercase tracking-wide mb-4" style={{ color: "var(--secondary)" }}>
            The Appointment Engine
          </p>
          <h1>
            Replace Your SDR Team with <span className="text-gradient">AI That Calls in 30 Seconds.</span>
          </h1>
          <p className="page-hero-desc mt-4">
            Every lead gets a call within 30 seconds. The AI pre-qualifies them, handles objections, and books confirmed appointments straight into your calendar. Your sales team only touches qualified opportunities.
          </p>
          <div className="flex gap-4 justify-center mt-8 flex-wrap">
            <a href="#pilot" className="btn btn-primary">Start a 2-Week Pilot</a>
            <a href="#how-it-works" className="btn btn-secondary">See How It Works</a>
          </div>
        </section>

        {/* ==================== PROBLEM ==================== */}
        <section className="container py-16 reveal">
          <div className="mb-12 text-center">
            <h2 className="mb-4">
              Why Most Lead Funnels <span className="text-gradient">Lose Money</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-panel p-8">
              <h3 className="mb-3" style={{ fontSize: "1.15rem" }}>SDR teams are expensive and fragile</h3>
              <p className="text-gray-300" style={{ fontSize: "0.95rem", lineHeight: "1.7" }}>
                A team of 4–5 setters costs six figures a year. Training takes weeks. Turnover is constant. One person leaves and the pipeline drops.
              </p>
            </div>
            <div className="glass-panel p-8">
              <h3 className="mb-3" style={{ fontSize: "1.15rem" }}>Leads go cold fast</h3>
              <p className="text-gray-300" style={{ fontSize: "0.95rem", lineHeight: "1.7" }}>
                The industry average follow-up time is 47 hours. By then, the lead has forgotten they opted in — or already spoken to a competitor.
              </p>
            </div>
            <div className="glass-panel p-8">
              <h3 className="mb-3" style={{ fontSize: "1.15rem" }}>Closers are ready, the calendar is empty</h3>
              <p className="text-gray-300" style={{ fontSize: "0.95rem", lineHeight: "1.7" }}>
                The bottleneck is rarely the close — it&apos;s the front of the funnel. Fix appointment flow and everything downstream improves.
              </p>
            </div>
          </div>
        </section>

        {/* ==================== HOW IT WORKS ==================== */}
        <section id="how-it-works" className="section-alt py-20 reveal">
          <div className="container">
            <div className="mb-16 text-center">
              <h2 className="mb-4">
                Four Steps. <span className="text-gradient">One Engine.</span>
              </h2>
              <p className="max-w-2xl mx-auto" style={{ fontSize: "1.05rem" }}>
                Prospecting, ads, instant AI calling, and booked appointments — all in one managed system.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  step: "01",
                  title: "Prospect",
                  desc: "AI prospecting agent builds your ideal buyer list and identifies high-intent targets.",
                },
                {
                  step: "02",
                  title: "Attract",
                  desc: "Google Ads campaigns (managed by Mindsheep) capture leads actively searching for your services.",
                },
                {
                  step: "03",
                  title: "Call",
                  desc: "The AI Voice SDR calls every lead within 30 seconds. Pre-qualifies. Handles objections. Books the appointment.",
                },
                {
                  step: "04",
                  title: "Close",
                  desc: "Your sales team gets a qualified, booked appointment — and closes the deal.",
                },
              ].map((s) => (
                <div key={s.step} className="glass-panel p-8 engine-step">
                  <div className="engine-step-number">{s.step}</div>
                  <h3 className="mb-2" style={{ fontSize: "1.2rem" }}>{s.title}</h3>
                  <p className="text-gray-300" style={{ fontSize: "0.95rem", lineHeight: "1.65" }}>
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ==================== WHAT'S INCLUDED ==================== */}
        <section className="container py-20 reveal">
          <div className="mb-16 text-center">
            <h2 className="mb-4">
              The Full <span className="text-gradient">System</span>
            </h2>
            <p className="max-w-2xl mx-auto" style={{ fontSize: "1.05rem" }}>
              Six components working as one engine — fully managed, with a single point of contact.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "AI Prospecting Agent",
                desc: "Builds your ICP, identifies and researches target buyers, generates lead lists for outbound and ad targeting.",
              },
              {
                title: "Google Ads (by Mindsheep)",
                desc: "Search and display campaigns built around ROAS. Keyword research, ad copy, A/B testing, bid optimisation — all managed.",
              },
              {
                title: "Custom Landing Pages",
                desc: "Built per campaign, designed to pre-qualify before the call. Lead magnets tailored to your industry.",
              },
              {
                title: "AI Voice SDR",
                desc: "Calls every lead in 30 seconds. Natural conversation, not a robocall. Pre-qualifies, handles objections, books appointments. Fully compliant by region.",
              },
              {
                title: "Flexible CRM & Automation",
                desc: "Works with your existing CRM (HubSpot, Salesforce, Pipedrive, GHL) or we set one up. Automated follow-up sequences, pipeline tracking, no-show recovery.",
              },
              {
                title: "Reporting & Support",
                desc: "Monthly report on leads, calls, appointments, show rate, and cost per appointment. Direct WhatsApp support line — no tickets, no waiting.",
              },
            ].map((item, i) => (
              <div key={i} className="glass-panel p-8">
                <h3 className="mb-3" style={{ fontSize: "1.15rem", color: "var(--primary)" }}>{item.title}</h3>
                <p className="text-gray-300" style={{ fontSize: "0.95rem", lineHeight: "1.7" }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ==================== WHY GOOGLE ADS ==================== */}
        <section className="section-alt py-20 reveal">
          <div className="container">
            <div className="glass-panel p-10 md:p-16">
              <h2 className="mb-6 text-center">
                Why <span className="text-gradient">Google Ads</span>
              </h2>
              <p className="text-lg text-center max-w-3xl mx-auto mb-8 text-gray-300" style={{ lineHeight: "1.8" }}>
                Google Ads captures intent. When someone searches &ldquo;HVAC repair near me&rdquo; or &ldquo;commercial loan broker,&rdquo; they&apos;re actively looking for a solution right now. That&apos;s the highest-quality lead you can buy.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div>
                  <h3 className="mb-2 text-primary" style={{ fontSize: "1.1rem" }}>Intent at the moment of need</h3>
                  <p className="text-gray-300" style={{ fontSize: "0.95rem", lineHeight: "1.7" }}>
                    Google Ads appear at the exact moment someone is searching for what you sell. They&apos;ve already declared the problem and are hunting for a solution.
                  </p>
                </div>
                <div>
                  <h3 className="mb-2 text-primary" style={{ fontSize: "1.1rem" }}>Speed-to-lead amplified</h3>
                  <p className="text-gray-300" style={{ fontSize: "0.95rem", lineHeight: "1.7" }}>
                    A lead who just searched for your service and gets a call 30 seconds later is the most convertible lead possible. Still on their phone, still thinking about the problem.
                  </p>
                </div>
                <div>
                  <h3 className="mb-2 text-primary" style={{ fontSize: "1.1rem" }}>Lower cost per booked appointment</h3>
                  <p className="text-gray-300" style={{ fontSize: "0.95rem", lineHeight: "1.7" }}>
                    Search clicks carry a premium, but the conversion is significantly higher. The metric that matters — cost per booked appointment — consistently comes in lower.
                  </p>
                </div>
                <div>
                  <h3 className="mb-2 text-primary" style={{ fontSize: "1.1rem" }}>Built for service businesses</h3>
                  <p className="text-gray-300" style={{ fontSize: "0.95rem", lineHeight: "1.7" }}>
                    Home services, healthcare, real estate, financial services — when someone needs a plumber or a loan, they Google it. Capturing them there is the most cost-efficient way to fill a calendar.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================== PILOT ==================== */}
        <section id="pilot" className="container py-20 reveal">
          <div
            className="glass-panel p-10 md:p-16 text-center"
            style={{
              background: "linear-gradient(135deg, rgba(79,70,229,0.10) 0%, rgba(6,182,212,0.08) 100%)",
              borderColor: "rgba(79,70,229,0.25)",
            }}
          >
            <p className="text-sm font-semibold uppercase tracking-wide mb-4" style={{ color: "var(--secondary)" }}>
              Low Risk. Fast Proof of Value.
            </p>
            <h2 className="mb-4">
              The <span className="text-gradient">14-Day Pilot</span>
            </h2>
            <p className="max-w-2xl mx-auto mb-8" style={{ fontSize: "1.1rem", color: "#cbd5e1", lineHeight: "1.75" }}>
              We build the full system, launch your Google Ads campaign, and have the AI calling leads within days. If we don&apos;t book qualified appointments within 14 days, you get your money back.
            </p>
            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-10 text-left">
              {[
                "AI voice agent configured for your business",
                "Google Ads campaign built and launched",
                "Landing page live and capturing leads",
                "AI calling active within the first few days",
                "CRM and automations wired up",
                "Money-back guarantee on qualified appointments",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: "2px" }}>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span style={{ fontSize: "0.95rem", color: "#cbd5e1" }}>{item}</span>
                </div>
              ))}
            </div>
            <a href="#contact" className="btn btn-primary">Apply for a Pilot Spot</a>
          </div>
        </section>

        {/* ==================== PARTNERSHIP ==================== */}
        <section className="container pb-20 reveal">
          <div className="glass-panel p-10 md:p-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-wide mb-4" style={{ color: "var(--secondary)" }}>
              A Partnership
            </p>
            <h2 className="mb-6" style={{ fontSize: "1.8rem" }}>
              {brand.nameCaps} <span className="text-gradient">×</span> Stellar Voice Agents
            </h2>
            <p className="max-w-3xl mx-auto text-gray-300" style={{ fontSize: "1.05rem", lineHeight: "1.8" }}>
              The Appointment Engine combines {brand.nameCaps}&apos;s Google Ads expertise with Stellar Voice Agents&apos; AI voice technology. You get the best of both: high-intent traffic from search, instantly qualified by AI, booked directly into your calendar.
            </p>
          </div>
        </section>

        {/* ==================== CONTACT ==================== */}
        <section id="contact" className="section-alt py-20 reveal">
          <div className="container">
            <div className="mb-12 text-center">
              <h2 className="mb-4">
                Ready to <span className="text-gradient">Fill Your Calendar?</span>
              </h2>
              <p className="max-w-xl mx-auto" style={{ fontSize: "1.05rem" }}>
                Tell us about your business and we&apos;ll come back with a tailored pilot plan within 24 hours.
              </p>
            </div>
            <div className="glass-panel p-10 md:p-16 max-w-2xl mx-auto contact-panel">
              {formStatus === "sent" ? (
                <div className="text-center py-8">
                  <h3 className="text-2xl mb-4 text-primary">Application received!</h3>
                  <p className="text-gray-300">Thanks for your interest. We&apos;ll be in touch within 24 hours to discuss your pilot.</p>
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
                    <label htmlFor="business" className="text-sm font-semibold text-gray-300">Tell us about your business</label>
                    <textarea
                      id="business"
                      name="business"
                      rows={4}
                      placeholder="What do you sell, who do you sell to, and what's your current lead flow like?"
                      className="form-input"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="budget" className="text-sm font-semibold text-gray-300">Monthly ad budget (approximate)</label>
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
                    {formStatus === "sending" ? "Sending..." : "Apply for Pilot"}
                  </button>
                  {formStatus === "error" && (
                    <p className="text-center text-red-400 text-sm">Something went wrong. Please try again.</p>
                  )}
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
