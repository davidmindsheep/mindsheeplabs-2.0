"use client";

import { useState } from "react";
import Image from "next/image";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ContactSection from "../components/ContactSection";

const caseStudies = [
  {
    id: "aldott-homes",
    logo: "/clients/aldott-homes.webp",
    logoWidth: 140,
    logoHeight: 42,
    client: "Aldott Homes",
    stat: "385",
    statSuffix: " leads/mo",
    headline: "From zero to 385 leads/month in just 6 months",
    industry: "Home Building",
    services: "Google Ads · AI Landing Pages",
    avatar: "/clients/denes.jpg",
    author: "Denes",
    authorRole: "Director, Aldott Homes",
    challenge:
      "Aldott Homes came to us with no digital marketing presence and a brand-new website. They were relying entirely on word-of-mouth referrals in a competitive home building market and needed a scalable, predictable lead pipeline — fast.",
    solution:
      "We built a full Google Ads account from scratch, launching Search and Performance Max campaigns targeting buyers actively searching for custom home builders in their area. Alongside this, we deployed AI-generated landing pages optimised for each campaign theme, with A/B testing baked in from day one. We tracked every lead through to qualified opportunity and used that data to continuously sharpen our targeting.",
    results: [
      { value: "385", label: "Leads per month" },
      { value: "6mo", label: "Time to reach target" },
      { value: "0", label: "Starting lead volume" },
      { value: "↑", label: "Still growing" },
    ],
    quote:
      "We are now constantly growing. Be prepared — it will take off quicker than you think.",
  },
  {
    id: "willship",
    logo: "/clients/willship-logo.webp",
    logoWidth: 140,
    logoHeight: 28,
    client: "Willship International",
    stat: "2.07x",
    statSuffix: " leads",
    headline: "2.07× lead increase with 40.7% cost reduction in 4 months",
    industry: "Freight Forwarding",
    services: "Google Ads · AI Analytics",
    avatar: "/clients/nick.png",
    author: "Nick",
    authorRole: "Director, Willship International",
    challenge:
      "Willship had been running Google Ads with another agency but was seeing flat or declining lead volumes at rising costs. The account had grown bloated over the years — lots of campaigns, lots of spend, but no clear attribution or optimisation logic.",
    solution:
      "We performed a full campaign restructure, cutting wasted spend, rebuilding ad group architecture around intent signals, and layering in AI analytics to surface the keywords and audiences driving actual qualified leads. Within the first month, cost-per-lead dropped sharply as we redirected budget to what was actually converting.",
    results: [
      { value: "2.07×", label: "Lead volume increase" },
      { value: "40.7%", label: "Cost reduction" },
      { value: "4mo", label: "Time to achieve" },
      { value: "↓", label: "CPL still trending down" },
    ],
    quote:
      "I'd definitely recommend Mindsheep to anyone looking for a marketing partner.",
  },
  {
    id: "highline-sheds",
    logo: "/clients/highline-sheds.webp",
    logoWidth: 140,
    logoHeight: 45,
    client: "Highline Sheds",
    stat: "2.09x",
    statSuffix: " leads",
    headline: "2.09× lead increase with 30.5% cost reduction in 3 months",
    industry: "Sheds & Construction",
    services: "Google Ads · SEO",
    avatar: "/clients/steve.jpg",
    author: "Steve",
    authorRole: "Owner, Highline Sheds",
    challenge:
      "Highline Sheds had strong word-of-mouth but needed to scale beyond referrals. Their Google Ads were running but underperforming — high spend, low conversion rates, and no SEO foundation to capture organic demand in a market where people are actively searching.",
    solution:
      "We restructured their Google Ads from the ground up, implementing granular match type strategies and removing wasted spend on irrelevant search terms. In parallel, we launched an SEO programme targeting high-intent shed and garage keywords, ensuring they owned both the paid and organic real estate for their most valuable searches.",
    results: [
      { value: "2.09×", label: "Lead volume increase" },
      { value: "30.5%", label: "Cost reduction" },
      { value: "3mo", label: "Time to achieve" },
      { value: "Top 3", label: "Organic rankings gained" },
    ],
    quote:
      "You are doing too well! We are flat out with inquiries!",
  },
  {
    id: "westcoast-hifi",
    logo: "/clients/westcoast-hifi.svg",
    logoWidth: 160,
    logoHeight: 42,
    client: "WestCoast HiFi",
    stat: "40%",
    statSuffix: " faster",
    headline: "40% speed increase powering e-commerce sales growth",
    industry: "Consumer Electronics",
    services: "Shopify · Google Shopping",
    avatar: "/clients/michael.jpg",
    author: "Michael",
    authorRole: "Director, WestCoast HiFi",
    challenge:
      "WestCoast HiFi is an established consumer electronics retailer moving aggressively into e-commerce. A slow, technically bloated Shopify store was hurting conversion rates and Google Shopping performance, while their ad campaigns lacked the structure to compete with major retailers.",
    solution:
      "We overhauled their Shopify store with a focus on Core Web Vitals and page speed, resulting in a 40% speed improvement that directly improved Google's quality scores and user experience metrics. We then restructured their Google Shopping campaigns with smarter product feed optimisation and segmented campaign structures, allowing budget to flow to the highest-margin products.",
    results: [
      { value: "40%", label: "Page speed increase" },
      { value: "↑", label: "E-commerce sales growing" },
      { value: "↑", label: "Google Shopping ROAS" },
      { value: "↓", label: "Bounce rate" },
    ],
    quote:
      "Reliability and Trust is what David & the team provide for us — we know we are in safe hands.",
  },
];

function ChevronIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="2 4 6 8 10 4" />
    </svg>
  );
}

function CaseStudyCard({ study }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`glass-panel p-8 case-study-card${open ? " expanded" : ""}`}
      onClick={() => setOpen((o) => !o)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && setOpen((o) => !o)}
      aria-expanded={open}
    >
      {/* Header — always visible */}
      <div className="case-logo-wrap">
        <Image
          src={study.logo}
          alt={study.client}
          width={study.logoWidth}
          height={study.logoHeight}
          className="client-logo"
          style={{ opacity: 0.85, filter: "brightness(0) invert(1)" }}
        />
      </div>

      <div className="case-study-stat">
        {study.stat}
        <span style={{ fontSize: "1.25rem", fontWeight: 600, background: "none", WebkitTextFillColor: "inherit" }}>
          {study.statSuffix}
        </span>
      </div>
      <p className="case-study-headline">{study.headline}</p>

      <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", alignItems: "center" }}>
        <span className="industry-tag">{study.industry}</span>
        <span className="industry-tag" style={{ background: "rgba(6,182,212,0.08)", borderColor: "rgba(6,182,212,0.2)" }}>
          {study.services}
        </span>
      </div>

      <div className="expand-toggle">
        <span className={`expand-toggle-icon${open ? " rotated" : ""}`}>
          <ChevronIcon />
        </span>
        {open ? "Collapse" : "View full case study"}
      </div>

      {/* Expanded content */}
      <div className={`case-study-expanded${open ? " open" : ""}`}>
        <hr className="expanded-divider" />

        <div style={{ display: "grid", gap: "1.5rem" }}>
          <div>
            <p
              className="included-heading"
              style={{ marginTop: 0 }}
            >
              The Challenge
            </p>
            <p style={{ fontSize: "0.95rem", color: "#cbd5e1", lineHeight: "1.75" }}>
              {study.challenge}
            </p>
          </div>
          <div>
            <p className="included-heading" style={{ marginTop: 0 }}>
              Our Solution
            </p>
            <p style={{ fontSize: "0.95rem", color: "#cbd5e1", lineHeight: "1.75" }}>
              {study.solution}
            </p>
          </div>
          <div>
            <p className="included-heading" style={{ marginTop: 0 }}>
              Results
            </p>
            <div className="result-grid">
              {study.results.map((r, i) => (
                <div className="result-item" key={i}>
                  <div className="result-value">{r.value}</div>
                  <div className="result-label">{r.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="case-study-quote">
          <p style={{ fontSize: "0.95rem", color: "#e2e8f0", fontStyle: "italic", lineHeight: "1.7", marginBottom: "0.75rem" }}>
            &ldquo;{study.quote}&rdquo;
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <Image
              src={study.avatar}
              alt={study.author}
              width={40}
              height={40}
              className="testimonial-avatar"
              style={{ width: "40px", height: "40px" }}
            />
            <div>
              <p style={{ fontSize: "0.85rem", fontWeight: 700, color: "#e2e8f0", marginBottom: 0 }}>
                {study.author}
              </p>
              <p style={{ fontSize: "0.8rem", color: "#6b7280", marginBottom: 0 }}>
                {study.authorRole}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CaseStudiesPage() {
  return (
    <>
      <div className="bg-glow" />
      <NavBar />

      <main>
        {/* Hero */}
        <section className="container page-hero reveal">
          <p
            className="text-sm font-semibold uppercase tracking-wide mb-4"
            style={{ color: "var(--secondary)" }}
          >
            Proof of Work
          </p>
          <h1>
            Real Clients. <span className="text-gradient">Real Results.</span>
          </h1>
          <p className="page-hero-desc mt-4">
            We let the numbers do the talking. Every result below is from a real client engagement — no cherry-picking, no projections.
          </p>
        </section>

        {/* Case Study Cards */}
        <section className="container py-8 pb-20">
          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((study) => (
              <CaseStudyCard key={study.id} study={study} />
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="container py-8 pb-20 reveal">
          <div
            className="glass-panel p-10 md:p-16 text-center"
            style={{
              background:
                "linear-gradient(135deg, rgba(79,70,229,0.08) 0%, rgba(6,182,212,0.06) 100%)",
              borderColor: "rgba(79,70,229,0.2)",
            }}
          >
            <h2 className="mb-4">
              Want Results <span className="text-gradient">Like These?</span>
            </h2>
            <p
              className="max-w-2xl mx-auto mb-8"
              style={{ fontSize: "1.05rem", color: "#cbd5e1", lineHeight: "1.8" }}
            >
              Every client story above started with a single conversation. Let&apos;s talk about what&apos;s possible for your business.
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
