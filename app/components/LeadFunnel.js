/**
 * The six-stage lead funnel with the closed feedback loop.
 *
 * The blueprint calls out two visual ideas that "tell the whole story at a
 * glance": the funnel narrowing (many clicks in, few qualified leads out) and
 * the return arrow looping stage 6 back to stage 1. Both are load-bearing here.
 */

const STAGES = [
  {
    n: 1,
    title: "Ad click",
    body: "A high-intent prospect clicks a Google or Facebook ad and lands on the experience.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 9l5 12 1.8-5.2L21 14z" />
        <path d="M7.2 2.2 8 5.1" />
        <path d="m5.1 8-2.9-.8" />
      </svg>
    ),
  },
  {
    n: 2,
    title: "AI interaction",
    body: "Instead of a form, they chat with an AI, take an AI voice call, or move through an interactive flow.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    n: 3,
    title: "Gather + qualify",
    body: "The AI asks everything your best salesperson would and qualifies against your criteria.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
      </svg>
    ),
  },
  {
    n: 4,
    title: "Instant quote",
    body: "For quotable jobs the AI produces an accurate quote on the spot — even complex, multi-variable pricing.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    n: 5,
    title: "Scored lead → CRM",
    body: "The lead is scored for quality and pushed into your CRM, pre-qualified and pre-quoted, ready for sales.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  {
    n: 6,
    title: "Score back to the ad platform",
    body: "That score goes back to Google or Facebook, so the platform learns to buy more of what converts.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 2v6h6" />
        <path d="M21 12A9 9 0 0 0 6 5.3L3 8" />
        <path d="M21 22v-6h-6" />
        <path d="M3 12a9 9 0 0 0 15 6.7l3-2.7" />
      </svg>
    ),
  },
];

export default function LeadFunnel() {
  return (
    <div className="funnel">
      <ol className="funnel-track">
        {STAGES.map((s, i) => (
          <li
            key={s.n}
            className={`funnel-stage${s.n === 6 ? " funnel-stage-loop" : ""}`}
            style={{ "--narrow": `${i * 4}%` }}
          >
            <div className="funnel-stage-head">
              <span className="funnel-icon">{s.icon}</span>
              <span className="funnel-num">Stage {s.n}</span>
            </div>
            <h3 className="funnel-title">{s.title}</h3>
            <p className="funnel-body">{s.body}</p>
          </li>
        ))}
      </ol>

      <div className="funnel-loop" role="note">
        <svg
          className="funnel-loop-arrow"
          viewBox="0 0 100 24"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="loopGrad" x1="100%" y1="0%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#4f46e5" />
            </linearGradient>
            <marker
              id="loopHead"
              viewBox="0 0 10 10"
              refX="8"
              refY="5"
              markerWidth="5"
              markerHeight="5"
              orient="auto-start-reverse"
            >
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#4f46e5" />
            </marker>
          </defs>
          <path
            d="M 98 2 C 98 18, 80 22, 50 22 C 20 22, 2 18, 2 2"
            fill="none"
            stroke="url(#loopGrad)"
            strokeWidth="0.7"
            strokeDasharray="2 1.6"
            markerEnd="url(#loopHead)"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
        <p className="funnel-loop-label">
          The closed loop — every scored outcome teaches the ads what a good lead
          looks like
        </p>
      </div>
    </div>
  );
}
