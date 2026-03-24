import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ContactSection from "../components/ContactSection";
import RevealObserver from "../components/RevealObserver";

const services = [
  {
    id: "google-ads",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z"/>
        <path d="M2 17l10 5 10-5"/>
        <path d="M2 12l10 5 10-5"/>
      </svg>
    ),
    iconClass: "service-card-icon-primary",
    title: "Google Ads & Shopping",
    description:
      "We build and manage Google Ads campaigns that are engineered around one thing: return on ad spend. No vanity metrics, no black boxes — just campaigns that convert.",
    included: [
      "Search campaign strategy and keyword architecture",
      "Google Shopping and Performance Max (PMax) campaigns",
      "Display and remarketing network campaigns",
      "Conversion tracking and ROAS-focused bid strategies",
      "Monthly performance reports with clear attribution",
      "Ongoing optimisation — negative keywords, ad copy testing, audience layering",
    ],
    variant: "acquisition",
  },
  {
    id: "seo",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
    iconClass: "service-card-icon-secondary",
    title: "SEO & Content",
    description:
      "Organic traffic that compounds over time. We combine technical rigour with content strategy to build search visibility that doesn't disappear the moment you pause spending.",
    included: [
      "Technical SEO audit and remediation",
      "On-page optimisation (titles, metadata, schema, internal links)",
      "Keyword research and content gap analysis",
      "Content strategy and creation briefs",
      "Core Web Vitals and page speed improvements",
      "Monthly ranking and traffic reports",
    ],
    variant: "acquisition",
  },
  {
    id: "b2b-leads",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    iconClass: "service-card-icon-primary",
    title: "B2B Lead Generation",
    description:
      "Multi-channel lead funnels designed for businesses that sell to other businesses. We build the entire system — from first touch to qualified opportunity — and integrate it with your CRM.",
    included: [
      "Multi-channel funnel design (Google, LinkedIn, content)",
      "CRM integration and pipeline automation",
      "Lead scoring and qualification frameworks",
      "Automated nurture sequences",
      "Landing pages optimised for B2B conversion",
      "Weekly lead quality reporting",
    ],
    variant: "acquisition",
  },
  {
    id: "ai-landing-pages",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/>
        <line x1="8" y1="21" x2="16" y2="21"/>
        <line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
    iconClass: "service-card-icon-accent",
    title: "AI Landing Pages",
    description:
      "High-converting pages that used to take weeks now take hours. We use AI to generate, test, and iterate landing pages at a pace traditional agencies simply can't match.",
    included: [
      "AI-assisted landing page generation and copywriting",
      "Conversion rate optimisation (CRO) principles built in",
      "Automatic A/B testing setup and analysis",
      "Campaign-specific variants (per keyword group, audience, offer)",
      "Mobile-first, fast-loading page builds",
      "Ongoing iteration based on real conversion data",
    ],
    variant: "ai",
  },
  {
    id: "ai-analytics",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21.21 15.89A10 10 0 1 1 8 2.83"/>
        <path d="M22 12A10 10 0 0 0 12 2v10z"/>
      </svg>
    ),
    iconClass: "service-card-icon-secondary",
    title: "AI Analytics & Insights",
    description:
      "Real-time monitoring that surfaces what matters. Our AI analytics layer sits across your marketing stack and tells you what's working, what's broken, and what to do next.",
    included: [
      "Real-time campaign performance monitoring",
      "Anomaly detection and automated alerts",
      "Custom dashboards built for your KPIs",
      "Cross-channel attribution modelling",
      "Competitor and market trend analysis",
      "AI-generated weekly insight summaries",
    ],
    variant: "ai",
  },
  {
    id: "ai-automations",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3c-1.2 0-2.4.6-3 1.5A3.5 3.5 0 0 0 5 8c-1.7 0-3 1.3-3 3 0 1.4 1 2.6 2.3 2.9C4.1 14.6 4 15.3 4 16c0 2.2 1.8 4 4 4h8c2.2 0 4-1.8 4-4 0-.7-.1-1.4-.3-2.1C21 13.6 22 12.4 22 11c0-1.7-1.3-3-3-3a3.5 3.5 0 0 0-4-3.5A3.4 3.4 0 0 0 12 3z"/>
      </svg>
    ),
    iconClass: "service-card-icon-accent",
    title: "Custom AI Automations",
    description:
      "Bespoke AI tools built specifically for your business. From creative generation pipelines to intelligent bid management systems — we build what your stack is missing.",
    included: [
      "AI creative generation (ad copy, images, video scripts)",
      "Automated bid management and budget pacing",
      "Workflow automation for reporting and ops",
      "Custom API integrations with your existing tools",
      "AI-powered audience segmentation",
      "Ongoing maintenance and model improvement",
    ],
    variant: "ai",
  },
];

export const metadata = {
  title: "Services | Mindsheep Labs",
  description: "Google Ads, SEO, B2B lead generation, AI landing pages, analytics, and custom automations — all under one roof.",
};

export default function ServicesPage() {
  return (
    <>
      <RevealObserver />
      <div className="bg-glow" />
      <NavBar activePage="services" />

      <main>
        {/* Hero */}
        <section className="container page-hero reveal">
          <p className="text-sm font-semibold uppercase tracking-wide text-secondary mb-4" style={{ color: "var(--secondary)" }}>
            What We Do
          </p>
          <h1>
            Every Service. <span className="text-gradient">One Team.</span>
          </h1>
          <p className="page-hero-desc mt-4">
            Six specialised services, all built around a single goal: more revenue from your marketing spend. We combine proven acquisition channels with AI systems that give you an edge.
          </p>
        </section>

        {/* Services Grid */}
        <section className="container pt-6 pb-16 reveal">

          {/* Acquisition Engine */}
          <div className="mb-12">
            <div className="service-engine-label service-engine-label-acquisition">
              <span className="service-engine-label-dot" />
              Acquisition Engine
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.filter((s) => s.variant === "acquisition").map((service) => (
                <div
                  key={service.id}
                  className="glass-panel p-8 service-page-card"
                >
                  <div className={`service-card-icon ${service.iconClass}`}>
                    {service.icon}
                  </div>
                  <h3 className="mb-3" style={{ fontSize: "1.25rem" }}>
                    {service.title}
                  </h3>
                  <p className="text-gray-300" style={{ fontSize: "0.95rem", lineHeight: "1.75" }}>
                    {service.description}
                  </p>
                  <p className="included-heading">What&apos;s Included</p>
                  <ul className="included-list">
                    {service.included.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* AI Engine */}
          <div>
            <div className="service-engine-label service-engine-label-ai">
              <span className="service-engine-label-dot" />
              AI Engine
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.filter((s) => s.variant === "ai").map((service) => (
                <div
                  key={service.id}
                  className="glass-panel p-8 service-page-card service-page-card-ai"
                >
                  <div className={`service-card-icon ${service.iconClass}`}>
                    {service.icon}
                  </div>
                  <h3 className="mb-3" style={{ fontSize: "1.25rem" }}>
                    {service.title}
                  </h3>
                  <p className="text-gray-300" style={{ fontSize: "0.95rem", lineHeight: "1.75" }}>
                    {service.description}
                  </p>
                  <p className="included-heading">What&apos;s Included</p>
                  <ul className="included-list">
                    {service.included.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

        </section>

        {/* CTA Banner */}
        <section className="container py-16 reveal">
          <div
            className="glass-panel p-10 md:p-16 text-center"
            style={{
              background:
                "linear-gradient(135deg, rgba(79,70,229,0.08) 0%, rgba(6,182,212,0.06) 100%)",
              borderColor: "rgba(79,70,229,0.2)",
            }}
          >
            <h2 className="mb-4">
              Not Sure Which Services <span className="text-gradient">You Need?</span>
            </h2>
            <p
              className="max-w-2xl mx-auto mb-8"
              style={{ fontSize: "1.05rem", color: "#cbd5e1", lineHeight: "1.8" }}
            >
              Most clients start with a strategy call. We&apos;ll look at your current setup, identify the biggest gaps, and recommend exactly where to focus for the fastest results.
            </p>
            <a href="/#contact" className="btn btn-primary">
              Book a Strategy Call
            </a>
          </div>
        </section>

        <ContactSection />
      </main>

      <Footer />
    </>
  );
}
