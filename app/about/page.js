import Image from "next/image";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ContactSection from "../components/ContactSection";
import RevealObserver from "../components/RevealObserver";

export const metadata = {
  title: "About | Mindsheep Labs",
  description: "Meet the team combining 16+ years of marketing expertise with cutting-edge AI to grow your business faster.",
};

const differentiators = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3c-1.2 0-2.4.6-3 1.5A3.5 3.5 0 0 0 5 8c-1.7 0-3 1.3-3 3 0 1.4 1 2.6 2.3 2.9C4.1 14.6 4 15.3 4 16c0 2.2 1.8 4 4 4h8c2.2 0 4-1.8 4-4 0-.7-.1-1.4-.3-2.1C21 13.6 22 12.4 22 11c0-1.7-1.3-3-3-3a3.5 3.5 0 0 0-4-3.5A3.4 3.4 0 0 0 12 3z"/>
      </svg>
    ),
    iconClass: "diff-icon",
    title: "We Build, Not Just Manage",
    desc: "Most agencies run your existing tools. We build custom AI systems on top of them — tools that are specific to your business, your data, and your competitive environment.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21.21 15.89A10 10 0 1 1 8 2.83"/>
        <path d="M22 12A10 10 0 0 0 12 2v10z"/>
      </svg>
    ),
    iconClass: "diff-icon diff-icon-secondary",
    title: "We Measure Everything",
    desc: "No vanity metrics. Every engagement is tracked from first click to closed deal. If we can't measure it, we build the tracking — then we optimise.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
      </svg>
    ),
    iconClass: "diff-icon diff-icon-accent",
    title: "We Move Fast",
    desc: "AI lets us compress timelines that used to take weeks into days. New landing pages, new ad creative, new data models — shipped fast, tested faster.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    iconClass: "diff-icon",
    title: "Owner-Operated",
    desc: "You work directly with the people doing the work. No account managers passing messages, no juniors learning on your budget. The founder is in every strategy session.",
  },
];

const team = [
  {
    initials: "D",
    name: "David",
    role: "Founder & Strategist",
    desc: "16+ years in tech leadership, Google Ads, SEO, and B2B growth. Rebuilt the agency around AI in 2024.",
    gradient: "linear-gradient(135deg, #4f46e5, #06b6d4)",
  },
  {
    initials: "T",
    name: "Theresa",
    role: "Google Ads Specialist",
    desc: "Manages search, shopping, and PMax campaigns across the client portfolio. Deep expertise in ROAS optimisation.",
    gradient: "linear-gradient(135deg, #06b6d4, #4f46e5)",
  },
  {
    initials: "R",
    name: "Rio",
    role: "Web Developer",
    desc: "Builds and optimises landing pages, Shopify stores, and client-facing web properties. Obsessed with Core Web Vitals.",
    gradient: "linear-gradient(135deg, #f43f5e, #4f46e5)",
  },
  {
    initials: "R",
    name: "Rod",
    role: "Dev & Automation",
    desc: "Builds the AI systems and automations under the hood — from custom analytics pipelines to creative generation tools.",
    gradient: "linear-gradient(135deg, #4f46e5, #f43f5e)",
  },
];

export default function AboutPage() {
  return (
    <>
      <RevealObserver />
      <div className="bg-glow" />
      <NavBar activePage="about" />

      <main>
        {/* Hero */}
        <section className="container page-hero reveal">
          <p
            className="text-sm font-semibold uppercase tracking-wide mb-4"
            style={{ color: "var(--secondary)" }}
          >
            Who We Are
          </p>
          <h1>
            Marketing + AI. <span className="text-gradient">Finally in the Same Room.</span>
          </h1>
          <p className="page-hero-desc mt-4">
            We started in Google Ads and SEO. Then we rebuilt everything around AI. The result is a team that speaks both languages — and builds the tools to connect them.
          </p>
        </section>

        {/* Our Story */}
        <section className="container py-16 reveal">
          <div className="glass-panel p-10 md:p-16 about-story-panel">
            <div
              style={{
                display: "flex",
                gap: "3rem",
                alignItems: "flex-start",
                flexWrap: "wrap",
              }}
            >
              <div style={{ flexShrink: 0 }}>
                <Image
                  src="/WhatsApp Image 2025-09-22 at 10.31.29.jpeg"
                  alt="David — Founder of Mindsheep Labs"
                  width={140}
                  height={140}
                  className="about-founder-img"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div style={{ flex: 1, minWidth: "280px" }}>
                <p
                  className="text-sm font-semibold uppercase tracking-wide mb-4"
                  style={{ color: "var(--secondary)" }}
                >
                  Our Story
                </p>
                <h2 className="mb-6" style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}>
                  Built in the Trenches.<br />
                  <span className="text-gradient">Rebuilt Around AI.</span>
                </h2>
                <p className="text-gray-300 mb-4" style={{ lineHeight: "1.8" }}>
                  Mindsheep Labs started with a simple frustration: why do marketing agencies and AI companies operate in completely separate worlds? David spent years deep in Google Ads, SEO, and B2B lead generation before going all-in on AI — not as a buzzword, but as the backbone of how campaigns get built, optimised, and scaled.
                </p>
                <p className="text-gray-300 mb-4" style={{ lineHeight: "1.8" }}>
                  In 2024, we rebuilt the entire agency around AI. Not by bolting automation onto old processes, but by rethinking how every part of a marketing operation works — from creative generation to bid management to analytics. The result is a way of working that traditional agencies simply can't replicate.
                </p>
                <p className="text-gray-300" style={{ lineHeight: "1.8" }}>
                  Today, Mindsheep Labs is a tight crew of marketing specialists and AI engineers who treat your ad spend like it&apos;s our own. We&apos;re not a 200-person agency. We move fast, build smart, and stay close to every client.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What Makes Us Different */}
        <section className="section-alt py-20 reveal">
          <div className="container">
            <div className="mb-12 text-center">
              <p
                className="text-sm font-semibold uppercase tracking-wide mb-4"
                style={{ color: "var(--secondary)" }}
              >
                Why Mindsheep Labs
              </p>
              <h2 className="mb-4">
                What Makes Us <span className="text-gradient">Different</span>
              </h2>
              <p
                className="max-w-2xl mx-auto"
                style={{ fontSize: "1.05rem", color: "#cbd5e1" }}
              >
                A lot of agencies say they use AI. Here&apos;s the difference between saying it and building it.
              </p>
            </div>
            <div className="differentiators-grid max-w-4xl mx-auto">
              {differentiators.map((d, i) => (
                <div className="diff-card" key={i}>
                  <div className={d.iconClass}>{d.icon}</div>
                  <div>
                    <p className="diff-title">{d.title}</p>
                    <p className="diff-desc">{d.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* The Team */}
        <section className="container py-20 reveal">
          <div className="mb-12 text-center">
            <p
              className="text-sm font-semibold uppercase tracking-wide mb-4"
              style={{ color: "var(--secondary)" }}
            >
              The People
            </p>
            <h2 className="mb-4">
              Meet the <span className="text-gradient">Team</span>
            </h2>
            <p
              className="max-w-2xl mx-auto"
              style={{ fontSize: "1.05rem", color: "#cbd5e1" }}
            >
              Small by design. Every person on the team is a specialist — and you work with them directly.
            </p>
          </div>
          <div className="team-grid max-w-4xl mx-auto">
            {team.map((member, i) => (
              <div className="glass-panel team-card" key={i}>
                <div
                  className="team-avatar-initials"
                  style={{ background: member.gradient }}
                >
                  {member.initials}
                </div>
                <p className="team-name">{member.name}</p>
                <p className="team-role">{member.role}</p>
                <p className="team-desc">{member.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Stats strip */}
        <section className="section-alt py-16 reveal">
          <div className="container">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div className="stat-block">
                <div className="stat-number">16+</div>
                <div className="stat-label">Years of hands-on marketing experience</div>
              </div>
              <div className="stat-block">
                <div className="stat-number">385</div>
                <div className="stat-label">Leads/month for a single client, from zero</div>
              </div>
              <div className="stat-block">
                <div className="stat-number">40%</div>
                <div className="stat-label">Average cost reduction across client campaigns</div>
              </div>
              <div className="stat-block">
                <div className="stat-number">2024</div>
                <div className="stat-label">Year we rebuilt the entire agency around AI</div>
              </div>
            </div>
          </div>
        </section>

        <ContactSection />
      </main>

      <Footer />
    </>
  );
}
