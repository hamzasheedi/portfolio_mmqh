import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Boxes,
  Check,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

/* ─────────────────────────────────────────────
   HERO — FINWEB capability overview
───────────────────────────────────────────── */
function HeroVisual() {
  const capabilities = [
    ["Financial Operations", "Reporting, controls and dependable finance rhythms"],
    ["Digital Engineering", "Secure, scalable products and platforms"],
    ["Business Automation", "Connected workflows for repetitive operations"],
    ["Financial Reporting", "Clear information for leadership decisions"],
    ["AI Solutions", "Purposeful applications built around real workflows"],
    ["Process Optimization", "Structured systems designed for long-term use"],
  ];

  return (
    <div className="hero-visual" aria-hidden="true">
      <div className="hero-card hero-card--accent">
        <div className="hero-card-header">
          <span className="hero-card-label">FINWEB Overview</span>
          <span className="hero-card-badge hero-card-badge--blue">Integrated practice</span>
        </div>
        <div className="hero-card-value" style={{ fontSize: "1.5rem" }}>
          Finance and technology, connected.
        </div>
        <div className="hero-card-sub">
          One contextual view of the capabilities that support clearer decisions and stronger delivery.
        </div>
      </div>

      <div className="hero-cards-row">
        {capabilities.slice(0, 2).map(([label, detail]) => (
          <div key={label} className="hero-card">
            <div className="hero-card-label">{label}</div>
            <div className="hero-card-sub">{detail}</div>
          </div>
        ))}
      </div>

      <div className="hero-card">
        {capabilities.slice(2).map(([label, detail]) => (
          <div key={label} className="hero-card-row">
            <span className="hero-card-row-label">{label}</span>
            <span className="hero-card-row-value">{detail}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   FEATURE VISUAL — qualitative illustrations
───────────────────────────────────────────── */
function FeatureVisualBars() {
  const items = ["Traceable sources", "Documented context", "Review-ready outputs", "Clear next steps"];
  return (
    <div className="feature-visual">
      <ul className="check-list" style={{ width: "100%" }}>
        {items.map((item) => <li key={item}>{item}</li>)}
      </ul>
    </div>
  );
}

function FeatureVisualDots() {
  const items = ["Direct communication", "Shared understanding", "Decision context", "Practical handover"];
  return (
    <div className="feature-visual">
      <div className="feature-dots" style={{ width: "100%" }}>
        {items.map((label) => (
          <div key={label} className="feature-dot-card">
            <div className="feature-dot-card-label">{label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function FeatureVisualCheck() {
  const items = [
    "Accessible, WCAG AA",
    "Fast by default",
    "Version-controlled",
    "Evidence-led delivery",
  ];
  return (
    <div className="feature-visual">
      <ul className="check-list" style={{ width: "100%" }}>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

/* ─────────────────────────────────────────────
   PAGE
───────────────────────────────────────────── */
export default function Home() {
  return (
    <>
      {/* ── 1. HERO ───────────────────────────────── */}
      <section className="hero">
        <div className="container hero-grid">
          {/* Left — copy */}
          <div className="hero-copy">
            <span className="eyebrow">One partner. Two engines.</span>
            <h1>
              Make the complex<br />
              feel <em>clear.</em>
            </h1>
            <p>
              FINWEB SOLUTION brings financial operations and digital
              architecture into one focused system for ambitious international
              businesses.
            </p>
            <div className="actions">
              <Link className="btn btn--primary" href="/contact">
                Start with a conversation <ArrowRight size={17} />
              </Link>
              <Link className="btn btn--secondary" href="/portfolio">
                See the evidence
              </Link>
            </div>

            {/* Trust strip */}
            <div className="hero-trust">
              <span className="hero-trust-item">
                <Check size={14} /> US businesses
              </span>
              <span className="hero-trust-divider" />
              <span className="hero-trust-item">
                <Check size={14} /> UK businesses
              </span>
              <span className="hero-trust-divider" />
              <span className="hero-trust-item">
                <Check size={14} /> EU companies
              </span>
            </div>
          </div>

          {/* Right — dashboard cards */}
          <HeroVisual />
        </div>
      </section>

      {/* ── 2. STATS STRIP ────────────────────────── */}
      <section className="stats-strip" aria-label="Key metrics">
        <div className="container">
          <div className="stats-strip-inner">
            <div className="stat-item">
              <div className="stat-number" style={{ fontSize: "var(--text-xl)" }}>
                Rigour
              </div>
              <div className="stat-label">for dependable financial operations</div>
            </div>
            <div className="stat-item">
              <div className="stat-number" style={{ fontSize: "var(--text-xl)" }}>
                Clarity
              </div>
              <div className="stat-label">across technical decisions and delivery</div>
            </div>
            <div className="stat-item">
              <div className="stat-number" style={{ fontSize: "var(--text-xl)" }}>
                Momentum
              </div>
              <div className="stat-label">
                through connected systems for decisions and growth
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. THE TWO ENGINES ────────────────────── */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <div>
              <span className="eyebrow">The two engines</span>
              <h2>
                Rigour where it matters.<br />
                Momentum where it counts.
              </h2>
            </div>
            <p>
              Different problems. A shared standard of clarity, evidence and
              care.
            </p>
          </div>

          <div className="engines-grid">
            {/* Engine 01 — Financial */}
            <div className="engine-panel engine-panel--blue">
              <div className="engine-number" aria-hidden="true">01</div>
              <div className="engine-icon">
                <BarChart3 size={24} />
              </div>
              <div>
                <span
                  className="eyebrow"
                  style={{ color: "rgba(189,243,220,0.7)" }}
                >
                  Financial operations
                </span>
                <h3>Financial Operations &amp; Accounting</h3>
                <p>
                  Build a dependable finance rhythm with systems, reporting and
                  workflows your team can trust.
                </p>
              </div>
              <ul className="check-list">
                <li>Management reporting</li>
                <li>Process &amp; controls</li>
                <li>Financial systems &amp; data automation</li>
                <li>Tax support</li>
              </ul>
              <Link
                className="btn btn--ghost"
                href="/financial-services"
                style={{ alignSelf: "flex-start" }}
              >
                Explore financial operations{" "}
                <ArrowUpRight size={16} />
              </Link>
            </div>

            {/* Engine 02 — Web */}
            <div className="engine-panel engine-panel--white">
              <div className="engine-number" aria-hidden="true">02</div>
              <div className="engine-icon">
                <Boxes size={24} />
              </div>
              <div>
                <span className="eyebrow">Digital architecture</span>
                <h3>Digital Architecture &amp; Web Development</h3>
                <p>
                  Turn complex propositions into fast, credible digital
                  experiences that move people to act.
                </p>
              </div>
              <ul className="check-list">
                <li>Clarity that converts</li>
                <li>Performance as a feature</li>
                <li>Architecture that scales</li>
                <li>A sharper expression</li>
              </ul>
              <Link
                className="btn btn--secondary"
                href="/web-development"
                style={{ alignSelf: "flex-start" }}
              >
                Explore web development{" "}
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. WHY FINWEB ─────────────────────────── */}
      <section className="section section--soft">
        <div className="container">
          <div className="section-header">
            <div>
              <span className="eyebrow">Why FINWEB</span>
              <h2>Proof over promises.</h2>
            </div>
            <p>
              We make the work legible: what changed, how we changed it, and
              what you can measure next.
            </p>
          </div>

          <div className="features-list">
            {/* Feature 1 — Evidence-led */}
            <div className="feature-block">
              <div className="feature-content">
                <div className="feature-icon-wrap">
                  <ShieldCheck size={26} />
                </div>
                <h3>Evidence-led</h3>
                <p>
                  Clear sources, review dates and context for every public
                  outcome. No vague claims, no borrowed credibility.
                </p>
              </div>
              <FeatureVisualBars />
            </div>

            {/* Feature 2 — Human clarity (reversed) */}
            <div className="feature-block feature-block--reverse">
              <div className="feature-content">
                <div className="feature-icon-wrap">
                  <Sparkles size={26} />
                </div>
                <h3>Human clarity</h3>
                <p>
                  Calm, direct communication for the decisions that keep teams
                  moving. No jargon, no theatre.
                </p>
              </div>
              <FeatureVisualDots />
            </div>

            {/* Feature 3 — Built to endure */}
            <div className="feature-block">
              <div className="feature-content">
                <div className="feature-icon-wrap">
                  <Check size={26} />
                </div>
                <h3>Built to endure</h3>
                <p>
                  Accessible, performant systems that remain useful after launch
                  day. We build for longevity, not applause.
                </p>
              </div>
              <FeatureVisualCheck />
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. CTA ────────────────────────────────── */}
      <section className="cta-section">
        <div className="cta-inner">
          <span className="eyebrow">Ready when you are</span>
          <h2>
            Bring us the knot.<br />
            We&rsquo;ll find the thread.
          </h2>
          <p>
            One conversation is enough to know if we are the right fit. No
            pitch decks, no pressure.
          </p>
          <div className="actions">
            <Link className="btn btn--primary" href="/contact">
              Start a conversation <ArrowRight size={17} />
            </Link>
            <Link className="btn btn--ghost" href="/portfolio">
              See the evidence
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
