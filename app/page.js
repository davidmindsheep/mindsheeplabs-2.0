"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import ElectricStrings from "./components/ElectricStrings";

export default function Home() {
  const [formStatus, setFormStatus] = useState('idle'); // idle | sending | sent | error

  async function handleSubmit(e) {
    e.preventDefault();
    setFormStatus('sending');
    const form = e.target;
    const data = {
      name: form.name.value,
      email: form.email.value,
      business: form.business.value,
      budget: form.budget.value,
    };
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setFormStatus('sent');
        form.reset();
      } else {
        setFormStatus('error');
      }
    } catch {
      setFormStatus('error');
    }
  }

  useEffect(() => {
    const nav = document.querySelector('.glass-nav');
    const scrollIndicator = document.querySelector('.scroll-indicator');
    const topBranding = document.querySelector('.top-branding');
    if (!nav) return;

    const navThreshold = 80;

    // Show scroll indicator after a short delay
    let indicatorTimer = setTimeout(() => {
      if (scrollIndicator) scrollIndicator.classList.add('scroll-indicator-visible');
    }, 1500);

    const handleScroll = () => {
      // Nav visibility + top branding fade
      if (window.scrollY > navThreshold) {
        nav.classList.add('nav-visible');
        if (topBranding) topBranding.classList.add('branding-hidden');
      } else {
        nav.classList.remove('nav-visible');
        if (topBranding) topBranding.classList.remove('branding-hidden');
      }

      // Fade out scroll indicator once user scrolls
      if (scrollIndicator && window.scrollY > 30) {
        scrollIndicator.classList.remove('scroll-indicator-visible');
        scrollIndicator.classList.add('scroll-indicator-hidden');
      }

      // Active nav link highlighting
      const navLinks = nav.querySelectorAll('a[data-nav]');
      const sections = document.querySelectorAll('section[id]');
      let currentId = '';
      sections.forEach((section) => {
        const top = section.offsetTop - 120;
        if (window.scrollY >= top) {
          currentId = section.getAttribute('id');
        }
      });
      navLinks.forEach((link) => {
        link.classList.remove('nav-link-active');
        if (link.getAttribute('data-nav') === currentId) {
          link.classList.add('nav-link-active');
        }
      });
    };

    // Scroll-triggered reveal animations
    const revealEls = document.querySelectorAll('.reveal');
    const vh = window.innerHeight;

    // Immediately reveal elements already in viewport
    revealEls.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < vh) {
        el.classList.add('revealed');
      } else {
        el.classList.add('reveal-pending');
      }
    });

    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('reveal-pending');
          entry.target.classList.add('revealed');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });

    revealEls.forEach((el) => {
      if (!el.classList.contains('revealed')) {
        revealObserver.observe(el);
      }
    });

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(indicatorTimer);
      revealObserver.disconnect();
    };
  }, []);

  return (
    <>
      {/* Background Glow */}
      <div className="bg-glow"></div>

      {/* Top Branding — disappears on scroll */}
      <div className="top-branding">
        <span className="top-branding-text">mindsheep labs</span>
      </div>

      {/* Navigation — slides in on scroll */}
      <nav className="glass-nav">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-2" style={{ height: '60px' }}>
            <span className="nav-brand-text">mindsheep labs</span>
          </div>
          <div className="flex items-center gap-8">
            <a href="/services" data-nav="services" className="nav-link text-sm font-semibold tracking-wide hover:text-primary transition-colors">Services</a>
            <a href="/about" data-nav="about" className="nav-link text-sm font-semibold tracking-wide hover:text-primary transition-colors">About</a>
            <a href="#contact" className="btn btn-primary">Get Started</a>
          </div>
        </div>
      </nav>

      <main>
        {/* ==================== HERO ==================== */}
        <div className="hero-canvas-wrap" style={{ position: 'relative', overflow: 'hidden' }}>
          <ElectricStrings />
        <section className="container pt-4 pb-8 flex flex-col items-center justify-center text-center animate-fade-in relative" style={{ position: 'relative', zIndex: 1 }}>

          {/* Breathing Logo Transition */}
          <div className="logo-morph-container mb-8">
            <div className="logo-morph-blur">
              <Image
                src="/HERO LOGO.svg"
                alt=""
                width={300}
                height={300}
                priority
              />
            </div>
            <div className="logo-morph-clear">
              <Image
                src="/MindsheepLabs Logo copy.png"
                alt="Mindsheep Labs Logo"
                width={260}
                height={260}
                className="logo-morph-invert"
                priority
              />
            </div>
          </div>

          <h1 className="mb-4">
            Your Marketing Runs on Google.<br/>
            <span className="text-gradient">Now It Runs on AI Too.</span>
          </h1>

          <p className="mb-8 max-w-2xl mx-auto" style={{fontSize: '1.15rem', lineHeight: '1.7'}}>
            We pair deep Google Ads and SEO expertise with custom-built AI systems — so you get more leads, lower costs, and campaigns that move faster than your competition.
          </p>

          <div className="flex gap-4 justify-center delay-100 animate-fade-in">
            <a href="#contact" className="btn btn-primary">Book a Strategy Call</a>
            <a href="#services" className="btn btn-secondary">See How It Works</a>
          </div>

          {/* Scroll indicator */}
          <div className="scroll-indicator" aria-hidden="true">
            <svg className="scroll-chevron" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 12 15 18 9"/>
            </svg>
          </div>
        </section>

        {/* ==================== RESULTS + CLIENT LOGOS ==================== */}
        <section className="container pt-8 pb-16 reveal">
          <p className="text-center text-sm text-gray-500 mb-10 uppercase tracking-wide font-semibold">Real results for real businesses</p>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="stat-block">
              <div className="stat-logo-wrap">
                <Image src="/clients/aldott-homes.webp" alt="Aldott Homes" width={140} height={42} className="client-logo stat-client-logo" />
              </div>
              <div className="stat-number" data-target="385">385</div>
              <div className="stat-label">Leads per month from zero in just 6 months</div>
            </div>
            <div className="stat-block">
              <div className="stat-logo-wrap">
                <Image src="/clients/willship-logo.webp" alt="Willship International" width={140} height={28} className="client-logo stat-client-logo" />
              </div>
              <div className="stat-number" data-target="2.07">2.07x</div>
              <div className="stat-label">Increase in leads and 40.7% cost reduction over 4 months</div>
            </div>
            <div className="stat-block">
              <div className="stat-logo-wrap">
                <Image src="/clients/highline-sheds.webp" alt="Highline Sheds" width={140} height={45} className="client-logo stat-client-logo" />
              </div>
              <div className="stat-number" data-target="2.09">2.09x</div>
              <div className="stat-label">Increase in leads with costs reduced by 30.5% in 3 months</div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8 text-center mt-8 max-w-2xl mx-auto">
            <div className="stat-block">
              <div className="stat-logo-wrap">
                <Image src="/clients/westcoast-hifi.svg" alt="WestCoast Hifi" width={160} height={42} className="client-logo stat-client-logo" />
              </div>
              <div className="stat-number" data-target="40">40%</div>
              <div className="stat-label">Website speed increase and improved performance</div>
            </div>
            <div className="stat-block">
              <div className="stat-logo-wrap">
                <Image src="/clients/progressive-audio.png" alt="Progressive Car Sound" width={160} height={42} className="client-logo client-logo-nofilter stat-client-logo" />
              </div>
              <div className="stat-number" data-target="3.5">$3.5K</div>
              <div className="stat-label">Revenue generated in just 6 weeks from a brand new campaign</div>
            </div>
          </div>
        </section>

        {/* ==================== PROBLEM / SOLUTION ==================== */}
        <section id="evolution" className="container py-20 reveal">
          <div className="glass-panel p-10 md:p-16 problem-solution-panel">
            <h2 className="mb-6 text-center">Most Agencies Pick a Lane.<br/><span className="text-gradient">We Built a Faster Road.</span></h2>
            <p className="text-lg text-center mb-0 max-w-3xl mx-auto text-gray-300" style={{lineHeight: '1.8'}}>
              Traditional agencies know marketing funnels. AI startups know automation.
              But neither speaks the other's language — and that gap is where your budget goes to die.
            </p>
            <p className="text-lg text-center mb-0 max-w-3xl mx-auto text-gray-300 mt-6" style={{lineHeight: '1.8'}}>
              Mindsheep Labs was born in the trenches of Google Ads and SEO, then rebuilt from the ground up around AI.
              We don't bolt AI onto old processes. <strong>We build custom tools that make every dollar in your funnel work harder</strong> — from audience targeting to creative generation to real-time bid optimisation.
            </p>
          </div>
        </section>

        </div>

        {/* ==================== SERVICES ==================== */}
        <section id="services" className="section-alt py-20 reveal">
          <div className="container">

          <div className="mb-16 text-center">
            <h2 className="mb-4">Two Engines. <span className="text-gradient">One Machine.</span></h2>
            <p className="max-w-2xl mx-auto" style={{fontSize: '1.05rem'}}>Every engagement combines battle-tested acquisition channels with AI systems we build specifically for your business.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">

            {/* Acquisition Engine */}
            <div className="glass-panel p-8 engine-card">
              <div className="engine-card-header">
                <div className="engine-icon engine-icon-acquisition">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
                  </svg>
                </div>
                <div>
                  <h3 className="mb-1 text-primary">Acquisition Engine</h3>
                  <p className="mb-0 text-sm text-gray-300">The proven channels that capture high-intent buyers — managed by specialists, not generalists.</p>
                </div>
              </div>
              <ul className="flex flex-col gap-5 mt-6">
                <li className="service-item">
                  <div className="service-icon service-icon-acquisition">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
                    </svg>
                  </div>
                  <div>
                    <strong>Google Ads & Shopping</strong>
                    <p className="text-sm text-gray-300 mt-1">Search, Shopping, Display, and Performance Max campaigns built around ROAS, not vanity metrics.</p>
                  </div>
                </li>
                <li className="service-item">
                  <div className="service-icon service-icon-acquisition">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
                    </svg>
                  </div>
                  <div>
                    <strong>SEO & Content</strong>
                    <p className="text-sm text-gray-300 mt-1">Technical SEO, on-page optimisation, and content strategies that compound organic traffic over time.</p>
                  </div>
                </li>
                <li className="service-item">
                  <div className="service-icon service-icon-acquisition">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                    </svg>
                  </div>
                  <div>
                    <strong>B2B Lead Generation</strong>
                    <p className="text-sm text-gray-300 mt-1">Multi-channel lead funnels with CRM integration, lead scoring, and automated nurture sequences.</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* AI Engine */}
            <div className="glass-panel p-8 engine-card engine-card-ai">
              <div className="engine-card-header">
                <div className="engine-icon engine-icon-ai">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2a4 4 0 0 0-4 4c0 2 2 3 2 6H14c0-3 2-4 2-6a4 4 0 0 0-4-4z"/><line x1="10" y1="16" x2="14" y2="16"/><line x1="10" y1="19" x2="14" y2="19"/><line x1="11" y1="22" x2="13" y2="22"/>
                  </svg>
                </div>
                <div>
                  <h3 className="mb-1 text-accent">AI Engine</h3>
                  <p className="mb-0 text-sm text-gray-300">Custom-built AI systems that give you an unfair speed and cost advantage.</p>
                </div>
              </div>
              <ul className="flex flex-col gap-5 mt-6">
                <li className="service-item">
                  <div className="service-icon service-icon-ai">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
                    </svg>
                  </div>
                  <div>
                    <strong>AI Landing Pages</strong>
                    <p className="text-sm text-gray-300 mt-1">High-converting pages generated and deployed in hours, not weeks. A/B tested automatically.</p>
                  </div>
                </li>
                <li className="service-item">
                  <div className="service-icon service-icon-ai">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21.21 15.89A10 10 0 1 1 8 2.83"/><path d="M22 12A10 10 0 0 0 12 2v10z"/>
                    </svg>
                  </div>
                  <div>
                    <strong>AI Analytics & Insights</strong>
                    <p className="text-sm text-gray-300 mt-1">Deep performance analysis that surfaces opportunities human analysts miss — delivered in real time.</p>
                  </div>
                </li>
                <li className="service-item">
                  <div className="service-icon service-icon-ai">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 3c-1.2 0-2.4.6-3 1.5A3.5 3.5 0 0 0 5 8c-1.7 0-3 1.3-3 3 0 1.4 1 2.6 2.3 2.9C4.1 14.6 4 15.3 4 16c0 2.2 1.8 4 4 4h8c2.2 0 4-1.8 4-4 0-.7-.1-1.4-.3-2.1C21 13.6 22 12.4 22 11c0-1.7-1.3-3-3-3a3.5 3.5 0 0 0-4-3.5A3.4 3.4 0 0 0 12 3z"/>
                    </svg>
                  </div>
                  <div>
                    <strong>Custom AI Automations</strong>
                    <p className="text-sm text-gray-300 mt-1">Bespoke tools for creative generation, bid management, and workflow automation — built for your stack.</p>
                  </div>
                </li>
              </ul>
            </div>

          </div>
          </div>
        </section>

        {/* ==================== TESTIMONIALS ==================== */}
        <section className="container py-20 reveal">
          <div className="mb-12 text-center">
            <h2 className="mb-4">What Our <span className="text-gradient">Clients Say</span></h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8" style={{maxWidth: '900px', margin: '0 auto'}}>
            <div className="glass-panel p-8 testimonial-card">
              <div className="testimonial-quote-mark">&ldquo;</div>
              <p className="text-gray-300 mb-6" style={{lineHeight: '1.7', fontStyle: 'italic'}}>&ldquo;We are now constantly growing. Be prepared — it will take off quicker than you think.&rdquo;</p>
              <div className="flex items-center gap-4">
                <Image src="/clients/denes.jpg" alt="Denes" width={56} height={56} className="testimonial-avatar" />
                <div>
                  <strong className="text-sm">Denes</strong>
                  <p className="text-sm text-gray-500">Aldott Homes</p>
                </div>
              </div>
            </div>
            <div className="glass-panel p-8 testimonial-card">
              <div className="testimonial-quote-mark">&ldquo;</div>
              <p className="text-gray-300 mb-6" style={{lineHeight: '1.7', fontStyle: 'italic'}}>&ldquo;You are doing too well! We are flat out with inquiries!&rdquo;</p>
              <div className="flex items-center gap-4">
                <Image src="/clients/steve.jpg" alt="Steve" width={56} height={56} className="testimonial-avatar" />
                <div>
                  <strong className="text-sm">Steve</strong>
                  <p className="text-sm text-gray-500">Highline Sheds</p>
                </div>
              </div>
            </div>
            <div className="glass-panel p-8 testimonial-card">
              <div className="testimonial-quote-mark">&ldquo;</div>
              <p className="text-gray-300 mb-6" style={{lineHeight: '1.7', fontStyle: 'italic'}}>&ldquo;I&apos;d definitely recommend Mindsheep to anyone looking for a marketing partner.&rdquo;</p>
              <div className="flex items-center gap-4">
                <Image src="/clients/nick.png" alt="Nick" width={56} height={56} className="testimonial-avatar" />
                <div>
                  <strong className="text-sm">Nick</strong>
                  <p className="text-sm text-gray-500">Willship International</p>
                </div>
              </div>
            </div>
            <div className="glass-panel p-8 testimonial-card">
              <div className="testimonial-quote-mark">&ldquo;</div>
              <p className="text-gray-300 mb-6" style={{lineHeight: '1.7', fontStyle: 'italic'}}>&ldquo;Reliability and Trust is what David &amp; the team provide for us — we know we are in safe hands.&rdquo;</p>
              <div className="flex items-center gap-4">
                <Image src="/clients/michael.jpg" alt="Michael" width={56} height={56} className="testimonial-avatar" />
                <div>
                  <strong className="text-sm">Michael</strong>
                  <p className="text-sm text-gray-500">WestCoast Hifi</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================== ABOUT / FOUNDER ==================== */}
        <section id="about" className="container py-20 reveal">
          <div className="glass-panel p-10 md:p-16 founder-panel">
            <div className="flex flex-col items-center gap-12">
              <div className="founder-image-wrap">
                <Image
                  src="/WhatsApp Image 2025-09-22 at 10.31.29.jpeg"
                  alt="David - Founder of Mindsheep Labs"
                  width={200}
                  height={200}
                  className="founder-image"
                  style={{objectFit: 'cover'}}
                />
              </div>
              <div className="text-center" style={{maxWidth: '720px'}}>
                <h2 className="mb-2">Meet the <span className="text-gradient">Founder</span></h2>
                <h3 className="text-gray-400 mb-6" style={{fontWeight: 400}}>David — Founder & Strategist</h3>
                <p className="text-gray-300 mb-4" style={{lineHeight: '1.8'}}>
                  Mindsheep Labs started with a simple frustration: why do marketing agencies and AI companies operate in completely separate worlds? David spent years deep in Google Ads, SEO, and B2B lead generation before going all-in on AI — not as a buzzword, but as the backbone of how campaigns get built, optimised, and scaled.
                </p>
                <p className="text-gray-300" style={{lineHeight: '1.8'}}>
                  Today, the Mindsheep team combines hands-on marketing specialists with AI engineers who build the custom tools that give our clients an edge. We&apos;re not a 200-person agency. We&apos;re a tight crew that moves fast, builds smart, and treats your ad spend like it&apos;s our own.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ==================== CONTACT ==================== */}
        <section id="contact" className="section-alt py-20 reveal">
          <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4">Let&apos;s Talk <span className="text-gradient">Growth</span></h2>
            <p className="max-w-xl mx-auto" style={{fontSize: '1.05rem'}}>Tell us about your business and we&apos;ll come back with a clear plan — no obligation, no fluff.</p>
          </div>
          <div className="glass-panel p-10 md:p-16 max-w-2xl mx-auto contact-panel">
            {formStatus === 'sent' ? (
              <div className="text-center py-8">
                <h3 className="text-2xl mb-4 text-primary">Message sent!</h3>
                <p className="text-gray-300">Thanks for reaching out. We&apos;ll get back to you within 24 hours.</p>
                <button onClick={() => setFormStatus('idle')} className="btn btn-secondary mt-6">Send another message</button>
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
                <textarea id="business" name="business" rows={4} placeholder="What do you sell, who do you sell to, and what's your biggest growth challenge right now?" className="form-input" required></textarea>
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
              <button type="submit" className="btn btn-primary" style={{width: '100%', textAlign: 'center', padding: '1rem'}} disabled={formStatus === 'sending'}>
                {formStatus === 'sending' ? 'Sending...' : 'Send Message'}
              </button>
              {formStatus === 'error' && (
                <p className="text-center text-red-400 text-sm">Something went wrong. Please try again.</p>
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
                alt="Mindsheep Labs"
                width={140}
                height={40}
                className="footer-logo"
              />
              <p className="footer-tagline">AI-powered marketing that moves faster than your competition.</p>
            </div>
            <div className="footer-links">
              <div className="footer-link-group">
                <h4 className="footer-link-heading">Navigate</h4>
                <a href="/services">Services</a>
                <a href="/about">About</a>
                <a href="#contact">Contact</a>
              </div>
              <div className="footer-link-group">
                <h4 className="footer-link-heading">Get Started</h4>
                <a href="#contact">Book a Strategy Call</a>
                <a href="/services">See How It Works</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Mindsheep Labs Global. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
