import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Bot,
  Brain,
  Building2,
  Calculator,
  CheckCircle2,
  ChevronRight,
  Code2,
  Eye,
  FileText,
  Globe2,
  Layers,
  LineChart,
  Lock,
  MessageSquare,
  Settings,
  Shield,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";

export const metadata = {
  title: "About — FINWEB SOLUTION",
  description:
    "FINWEB is an international consulting partner combining Financial Operations and Digital Engineering. Learn how we think, how we work, and why businesses trust us.",
};

/* ─────────────────────────────────────────────────────────────
   HERO VISUAL — company identity composition
─────────────────────────────────────────────────────────────── */
function AboutHeroVisual() {
  return (
    <div className="ab-hero-visual" aria-hidden="true">

      {/* Top — mission and vision */}
      <div className="ab-ui-card ab-ui-card--accent">
        <div className="ab-ui-card-top">
          <span className="ab-ui-label">
            <Target size={12} /> Mission &amp; Vision
          </span>
          <span className="ab-ui-live">FINWEB</span>
        </div>
        <div className="ab-ui-rows">
          <div className="ab-ui-row">
            <span className="ab-ui-row-label">Mission</span>
            <span className="ab-ui-row-val">Clarity through connected systems</span>
          </div>
          <div className="ab-ui-row">
            <span className="ab-ui-row-label">Vision</span>
            <span className="ab-ui-row-val">Confident business decisions</span>
          </div>
        </div>
      </div>

      {/* Middle row — core expertise */}
      <div className="ab-ui-pair">
        <div className="ab-ui-card ab-ui-card--sm">
          <div className="ab-ui-label">
            <Calculator size={12} /> Core Expertise
          </div>
          <div className="ab-ui-value">Financial Operations</div>
          <div className="ab-ui-sub">Reporting · controls · business process</div>
        </div>
        <div className="ab-ui-card ab-ui-card--sm ab-ui-card--dark">
          <div className="ab-ui-label ab-label-light">
            <Code2 size={12} /> Core Expertise
          </div>
          <div className="ab-ui-value ab-val-light">Digital Engineering</div>
          <div className="ab-ui-sub ab-sub-light">Secure, maintainable systems</div>
        </div>
      </div>

      {/* Bottom — professional identity */}
      <div className="ab-ui-card">
        <div className="ab-ui-label">
          <Globe2 size={12} /> Professional Identity
        </div>
        <div className="ab-ui-arch">
          <div className="ab-ui-arch-node ab-node-blue">
            <Shield size={14} />
            <span>International Standards</span>
          </div>
          <div className="ab-ui-arch-arrow">
            <ChevronRight size={14} />
          </div>
          <div className="ab-ui-arch-node ab-node-navy">
            <Layers size={14} />
            <span>Business Process</span>
          </div>
          <div className="ab-ui-arch-arrow">
            <ChevronRight size={14} />
          </div>
          <div className="ab-ui-arch-node ab-node-blue">
            <Users size={14} />
            <span>Professional Values</span>
          </div>
        </div>
      </div>

    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   SECTION 1 — HERO
─────────────────────────────────────────────────────────────── */
function HeroSection() {
  return (
    <section className="ab-hero">
      <div className="container">
        <div className="ab-hero-grid">

          {/* Left — copy */}
          <div className="ab-hero-copy">
            <span className="eyebrow">About FINWEB</span>
            <h1>
              Serious about the work.<br />
              <em>Human about the way.</em>
            </h1>
            <p>
              FINWEB is an international consulting partner built around two
              disciplines that belong together — Financial Operations and Digital
              Engineering. We exist to give businesses the clarity and systems
              they need to make confident decisions.
            </p>
            <div className="actions">
              <Link href="/contact" className="btn btn--primary">
                Start a conversation <ArrowRight size={16} />
              </Link>
              <Link href="/portfolio" className="btn btn--secondary">
                See the work
              </Link>
            </div>
            <div className="ab-trust-row">
              {[
                "International Partner",
                "Financial Operations",
                "Digital Engineering",
                "Evidence Driven",
              ].map((label) => (
                <span key={label} className="ab-trust-badge">
                  <CheckCircle2 size={12} />
                  {label}
                </span>
              ))}
            </div>
          </div>

          {/* Right — visual */}
          <AboutHeroVisual />

        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   SECTION 2 — WHY FINWEB EXISTS
─────────────────────────────────────────────────────────────── */
function WhyExistsSection() {
  return (
    <section className="section section--sm" id="why-finweb">
      <div className="container">
        <div className="ab-why-grid">

          {/* Left — problem framing */}
          <div className="ab-why-copy">
            <span className="eyebrow">The Problem We Solve</span>
            <h2>Two worlds. One business. Zero connection.</h2>
            <p>
              Most businesses operate with a fracture running through the middle.
              Financial systems live in one place. Digital systems live in
              another. The people making decisions rarely have a clear view of
              both.
            </p>
            <p>
              The result is predictable: reporting lags behind reality, digital
              investments are hard to justify, and operational momentum stalls
              waiting for clarity that never arrives.
            </p>
            <p>
              FINWEB was built to close that gap — not by adding more tools, but
              by connecting the financial and engineering layers that every
              growing business depends on.
            </p>
            <Link href="/portfolio" className="ab-text-link">
              See how we connect them <ChevronRight size={15} />
            </Link>
          </div>

          {/* Right — problem / solution visual */}
          <div className="ab-why-visual" aria-hidden="true">
            <div className="ab-why-before">
              <div className="ab-why-block-label ab-label-muted">Before FINWEB</div>
              <div className="ab-why-block ab-block-disconnected">
                <div className="ab-why-pill ab-pill-grey">
                  <Calculator size={14} /> Financial Systems
                </div>
                <div className="ab-why-gap">
                  <span>No connection</span>
                </div>
                <div className="ab-why-pill ab-pill-grey">
                  <Code2 size={14} /> Digital Systems
                </div>
              </div>
              <p className="ab-why-caption">Decisions made without full visibility</p>
            </div>
            <div className="ab-why-after">
              <div className="ab-why-block-label ab-label-blue">With FINWEB</div>
              <div className="ab-why-block ab-block-connected">
                <div className="ab-why-pill ab-pill-blue">
                  <Calculator size={14} /> Financial Operations
                </div>
                <div className="ab-why-bridge">
                  <span>Unified system</span>
                  <div className="ab-bridge-line" />
                </div>
                <div className="ab-why-pill ab-pill-blue">
                  <Code2 size={14} /> Digital Engineering
                </div>
              </div>
              <p className="ab-why-caption ab-caption-blue">Confident decisions from connected data</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   SECTION 3 — THE TWO ENGINES
─────────────────────────────────────────────────────────────── */
function TwoEnginesSection() {
  return (
    <section className="section section--soft" id="two-engines">
      <div className="container">
        <div className="ab-engines-header">
          <span className="eyebrow">How FINWEB Is Structured</span>
          <h2>Two specialist engines. One integrated partner.</h2>
          <p>
            Each discipline is developed to a specialist standard. Together,
            they create a consulting partner that understands the full picture —
            from balance sheet to backend architecture.
          </p>
        </div>

        <div className="ab-engines-grid">

          {/* Engine 1 — Financial */}
          <div className="ab-engine ab-engine--finance">
            <div className="ab-engine-num" aria-hidden="true">01</div>
            <div className="ab-engine-icon">
              <Calculator size={24} />
            </div>
            <div className="ab-engine-label">Engine One</div>
            <h3>Financial Operations</h3>
            <p>
              Structured financial systems that give leadership the visibility
              they need to make decisions with confidence — not guesswork.
            </p>
            <ul className="ab-engine-list">
              {[
                { icon: <BarChart3 size={15} />,  label: "Financial Reporting" },
                { icon: <TrendingUp size={15} />, label: "Forecasting & Projections" },
                { icon: <FileText size={15} />,   label: "Accounting Controls" },
                { icon: <Eye size={15} />,        label: "Cash Flow Visibility" },
                { icon: <Settings size={15} />,   label: "QuickBooks Systems" },
              ].map((item) => (
                <li key={item.label}>
                  {item.icon}
                  <span>{item.label}</span>
                </li>
              ))}
            </ul>
            <Link href="/financial-services" className="btn btn--secondary btn--sm">
              Financial services <ArrowRight size={14} />
            </Link>
          </div>

          {/* Centre connector */}
          <div className="ab-engine-connector" aria-hidden="true">
            <div className="ab-connector-line" />
            <div className="ab-connector-node">
              <Sparkles size={18} />
              <span>Integrated</span>
            </div>
            <div className="ab-connector-line" />
          </div>

          {/* Engine 2 — Engineering */}
          <div className="ab-engine ab-engine--eng">
            <div className="ab-engine-num" aria-hidden="true">02</div>
            <div className="ab-engine-icon ab-engine-icon--dark">
              <Code2 size={24} />
            </div>
            <div className="ab-engine-label">Engine Two</div>
            <h3>Digital Engineering</h3>
            <p>
              Production-grade software and AI systems that automate the
              repetitive, secure the sensitive, and surface the insight.
            </p>
            <ul className="ab-engine-list">
              {[
                { icon: <Globe2 size={15} />,     label: "Web Platforms" },
                { icon: <Zap size={15} />,        label: "Automation Systems" },
                { icon: <Bot size={15} />,        label: "AI Applications" },
                { icon: <Layers size={15} />,     label: "System Architecture" },
                { icon: <Lock size={15} />,       label: "Secure Engineering" },
              ].map((item) => (
                <li key={item.label}>
                  {item.icon}
                  <span>{item.label}</span>
                </li>
              ))}
            </ul>
            <Link href="/web-development" className="btn btn--secondary btn--sm">
              Engineering services <ArrowRight size={14} />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   SECTION 4 — INTERNATIONAL BY DEFAULT
─────────────────────────────────────────────────────────────── */
function InternationalSection() {
  return (
    <section className="section" id="international">
      <div className="container">
        <div className="ab-intl-grid">

          {/* Left — copy */}
          <div className="ab-intl-copy">
            <span className="eyebrow">International by Default</span>
            <h2>No regional theatre. Just relevant, precise work.</h2>
            <p>
              FINWEB operates without geographical limits. The work is designed
              for businesses operating in the US, UK, and EU — with
              documentation, communication, and delivery standards that hold up
              in any professional environment.
            </p>
            <p>
              Clear written communication. Process-driven delivery. Evidence
              that travels across time zones and organisational layers without
              losing meaning.
            </p>
            <div className="ab-intl-regions">
              {[
                { label: "United States", flag: "🇺🇸", desc: "GAAP-aware, USD native" },
                { label: "United Kingdom", flag: "🇬🇧", desc: "UK English, HMRC-aware" },
                { label: "European Union", flag: "🇪🇺", desc: "GDPR-compliant, multi-currency" },
              ].map((r) => (
                <div key={r.label} className="ab-intl-region">
                  <span className="ab-intl-flag">{r.flag}</span>
                  <div>
                    <div className="ab-intl-region-name">{r.label}</div>
                    <div className="ab-intl-region-desc">{r.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — standards visual */}
          <div className="ab-intl-visual" aria-hidden="true">
            {[
              { icon: <FileText size={18} />,     label: "Clear Documentation",        sub: "Every deliverable is documented." },
              { icon: <MessageSquare size={18} />,label: "Structured Communication",   sub: "Written, precise, traceable." },
              { icon: <Settings size={18} />,     label: "Process-Driven Delivery",    sub: "Repeatable. Reliable. Auditable." },
              { icon: <Shield size={18} />,       label: "International Standards",    sub: "GDPR · GAAP · professional grade." },
            ].map((item) => (
              <div key={item.label} className="ab-intl-standard-card">
                <div className="ab-intl-standard-icon">{item.icon}</div>
                <div>
                  <div className="ab-intl-standard-label">{item.label}</div>
                  <div className="ab-intl-standard-sub">{item.sub}</div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   SECTION 5 — HOW WE WORK (Principles as premium cards)
─────────────────────────────────────────────────────────────── */
function HowWeWorkSection() {
  const principles = [
    {
      icon: <Eye size={28} />,
      headline: "Make the important thing easier to see.",
      body: "Clarity is not a design choice — it is an engineering constraint. Every system, report, and interface is evaluated by whether it surfaces what matters and suppresses what doesn't.",
    },
    {
      icon: <Brain size={28} />,
      headline: "Ask the useful question before adding the clever tool.",
      body: "The right question is worth more than the right technology. We diagnose before we prescribe — and we refuse to add complexity that doesn't earn its place.",
    },
    {
      icon: <Building2 size={28} />,
      headline: "Prefer a dependable system over a heroic workaround.",
      body: "Workarounds accumulate into technical debt. Systems compound into competitive advantage. Every engagement is designed to produce something that works reliably — not something that works once.",
    },
    {
      icon: <Users size={28} />,
      headline: "Leave people with more confidence, not more dependency.",
      body: "The measure of good work is whether the client can operate without us. We document thoroughly, transfer knowledge deliberately, and resist the incentive to create lock-in.",
    },
  ];

  return (
    <section className="section section--soft" id="how-we-work">
      <div className="container">
        <div className="ab-section-header ab-section-header--center">
          <span className="eyebrow">Our Standard</span>
          <h2>How we approach every engagement.</h2>
          <p>
            Four operating principles that apply equally to a QuickBooks setup
            and a multi-agent AI system. They are not aspirational — they are
            constraints.
          </p>
        </div>
        <div className="ab-principles-grid">
          {principles.map((p) => (
            <div key={p.headline} className="ab-principle-card card">
              <div className="ab-principle-icon">{p.icon}</div>
              <h3 className="ab-principle-headline">"{p.headline}"</h3>
              <p>{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


/* ─────────────────────────────────────────────────────────────
   SECTION 6 — OPERATING PRINCIPLES (alternating blocks)
─────────────────────────────────────────────────────────────── */
const operatingPrinciples = [
  {
    icon: <Target size={22} />,
    title: "Evidence over assumptions",
    body: "Every recommendation is grounded in data, documentation, or demonstrated precedent. We do not present opinions as facts, and we do not build systems on assumptions that have not been tested.",
    detail: "This means financial models built from real transaction data. Engineering architectures scoped from actual requirements. Deliverables that can be audited.",
    visual: (
      <div className="ab-oprin-visual ab-oprin-evidence" aria-hidden="true">
        <div className="ab-oprin-doc">
          <div className="ab-oprin-doc-bar" />
          <div className="ab-oprin-doc-bar ab-bar-sm" />
          <div className="ab-oprin-doc-bar" />
          <div className="ab-oprin-doc-check">
            <CheckCircle2 size={18} /> Evidence-led
          </div>
        </div>
      </div>
    ),
  },
  {
    icon: <Layers size={22} />,
    title: "Systems over shortcuts",
    body: "A shortcut solves one problem once. A system solves the same class of problem reliably, indefinitely. Every engagement is evaluated by whether we are building something that compounds — or something that just gets through the week.",
    detail: "We design for maintainability, handover, and longevity. The client should be more capable after working with us — not more dependent.",
    visual: (
      <div className="ab-oprin-visual ab-oprin-systems" aria-hidden="true">
        <div className="ab-oprin-stack">
          {["Presentation", "Logic", "Data", "Infrastructure"].map((l, i) => (
            <div key={l} className="ab-oprin-layer" style={{ opacity: 1 - i * 0.15 }}>
              {l}
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    icon: <Eye size={22} />,
    title: "Clarity over complexity",
    body: "Complexity is sometimes necessary. Unnecessary complexity is always a failure. We reduce, simplify, and strip back until what remains is exactly what is needed — no more.",
    detail: "This applies to financial reports that are too dense to act on. To codebases that no one can navigate. To proposals that obscure the recommendation inside the credentials.",
    visual: (
      <div className="ab-oprin-visual ab-oprin-clarity" aria-hidden="true">
        <div className="ab-oprin-before">
          <div className="ab-oprin-noise-bar" />
          <div className="ab-oprin-noise-bar ab-noise-sm" />
          <div className="ab-oprin-noise-bar ab-noise-lg" />
          <div className="ab-oprin-noise-bar" />
          <div className="ab-oprin-noise-bar ab-noise-sm" />
        </div>
        <div className="ab-oprin-arrow-right" aria-hidden="true">→</div>
        <div className="ab-oprin-after">
          <div className="ab-oprin-clean-bar" />
        </div>
      </div>
    ),
  },
  {
    icon: <TrendingUp size={22} />,
    title: "Long-term value over quick fixes",
    body: "Every engagement has a short-term deliverable and a long-term effect. We care about both. A financial cleanup that leaves disorganised habits intact has not solved the problem. An engineering system that cannot be maintained has created a new one.",
    detail: "We design for the client's capability six months after delivery — not just for the handover date.",
    visual: (
      <div className="ab-oprin-visual ab-oprin-longterm" aria-hidden="true">
        <div className="ab-oprin-timeline">
          {["Delivery", "3 months", "6 months", "1 year"].map((t, i) => (
            <div key={t} className="ab-oprin-tl-step">
              <div className="ab-oprin-tl-dot" style={{ background: i === 0 ? "var(--blue)" : undefined }} />
              <span>{t}</span>
            </div>
          ))}
          <div className="ab-oprin-tl-line" />
        </div>
        <div className="ab-oprin-growth">
          {[30, 45, 65, 88].map((h, i) => (
            <div key={i} className="ab-oprin-grow-bar" style={{ height: `${h}%` }} />
          ))}
        </div>
      </div>
    ),
  },
];

function OperatingPrinciplesSection() {
  return (
    <section className="section" id="operating-principles">
      <div className="container">
        <div className="ab-section-header">
          <div>
            <span className="eyebrow">How We Think</span>
            <h2>Operating principles.</h2>
          </div>
          <p>
            These four principles are not values on a wall. They are constraints
            applied to every engagement — financial and technical alike.
          </p>
        </div>
        <div className="ab-oprin-list">
          {operatingPrinciples.map((p, i) => (
            <div
              key={p.title}
              className={`ab-oprin-block${i % 2 !== 0 ? " ab-oprin-block--rev" : ""}`}
            >
              <div className="ab-oprin-content">
                <div className="feature-icon-wrap">{p.icon}</div>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
                <p className="ab-oprin-detail">{p.detail}</p>
              </div>
              {p.visual}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   SECTION 7 — ACCOUNTABILITY & TRANSPARENCY
─────────────────────────────────────────────────────────────── */
function AccountabilitySection() {
  return (
    <section className="section section--soft" id="accountability">
      <div className="container">
        <div className="ab-acct-grid">

          {/* Left — copy */}
          <div className="ab-acct-copy">
            <span className="eyebrow">Accountable in Public</span>
            <h2>Visible boundaries. Real deliverables.</h2>
            <p>
              Accountability is not a posture. It is a set of concrete
              commitments about what we will produce, what we will not claim,
              and how we will behave when the evidence changes.
            </p>
            <p>
              We do not exaggerate outcomes. We do not present work as more
              current than it is. We keep our scope visible and our claims
              falsifiable.
            </p>
          </div>

          {/* Right — accountability cards */}
          <div className="ab-acct-cards">
            {[
              {
                icon: <FileText size={18} />,
                label: "Clear Evidence",
                body: "Every deliverable is documented. Claims are supported by demonstrable work — not credentials or assertions.",
              },
              {
                icon: <Eye size={18} />,
                label: "Visible Boundaries",
                body: "We publish what we do and what we do not do. Scope boundaries are explicit from the first conversation.",
              },
              {
                icon: <CheckCircle2 size={18} />,
                label: "Current Information",
                body: "We do not present outdated work as current. Everything on this site reflects live, maintained capability.",
              },
              {
                icon: <MessageSquare size={18} />,
                label: "Transparent Communication",
                body: "Direct, written communication. No ambiguity about timelines, deliverables, or decisions.",
              },
              {
                icon: <Target size={18} />,
                label: "Real Deliverables",
                body: "The work is the output. Not a presentation about the work. Not a framework for thinking about the work.",
              },
              {
                icon: <Shield size={18} />,
                label: "No Exaggerated Claims",
                body: "We will not inflate outcomes, manufacture urgency, or present speculation as expertise.",
              },
            ].map((c) => (
              <div key={c.label} className="ab-acct-card">
                <div className="ab-acct-card-icon">{c.icon}</div>
                <div>
                  <div className="ab-acct-card-label">{c.label}</div>
                  <div className="ab-acct-card-body">{c.body}</div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   SECTION 8 — WHO WE WORK WITH
─────────────────────────────────────────────────────────────── */
const clientTypes = [
  {
    icon: <TrendingUp size={22} />,
    role: "Founders & CEOs",
    desc: "Building companies that need financial structure and digital momentum — without hiring two separate specialist firms.",
    value: "One integrated partner. Full visibility across both engines.",
  },
  {
    icon: <Calculator size={22} />,
    role: "CFOs & Finance Leaders",
    desc: "Organisations that need accounting cleanup, forecasting models, or QuickBooks systems built to a professional standard.",
    value: "Clean books. Dependable reporting. Tax-ready records.",
  },
  {
    icon: <Settings size={22} />,
    role: "COOs & Operations Leaders",
    desc: "Teams where operational and digital systems need to be connected — and where manual processes are costing time they cannot afford.",
    value: "Automation that holds. Systems that compound.",
  },
  {
    icon: <Code2 size={22} />,
    role: "CTOs & Engineering Leads",
    desc: "Technical leadership that needs a reliable partner for AI integration, secure application development, or data pipeline engineering.",
    value: "Production-grade work. Documented. Maintainable.",
  },
  {
    icon: <Globe2 size={22} />,
    role: "International Teams",
    desc: "Businesses operating across US, UK, and EU markets who need consistent standards — not localised exceptions.",
    value: "International by default. No regional theatre.",
  },
  {
    icon: <Zap size={22} />,
    role: "Growing Scale-Ups",
    desc: "Companies at the stage where informal systems are starting to break — and where the right financial and engineering foundations matter most.",
    value: "Built to scale. Not built to impress.",
  },
];

function WhoWeWorkWithSection() {
  return (
    <section className="section" id="who-we-work-with">
      <div className="container">
        <div className="ab-section-header ab-section-header--center">
          <span className="eyebrow">Where FINWEB Creates Value</span>
          <h2>Who we work with.</h2>
          <p>
            FINWEB is not for everyone. We work best with organisations that
            value clarity over speed, and systems over shortcuts.
          </p>
        </div>
        <div className="ab-clients-grid">
          {clientTypes.map((c) => (
            <div key={c.role} className="ab-client-card card">
              <div className="card-icon">{c.icon}</div>
              <h4>{c.role}</h4>
              <p>{c.desc}</p>
              <div className="ab-client-value">
                <CheckCircle2 size={13} />
                <span>{c.value}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   SECTION 9 — FINAL CTA
─────────────────────────────────────────────────────────────── */
function FinalCTASection() {
  return (
    <section className="cta-section" id="start">
      <div className="cta-inner">
        <span className="eyebrow">Ready to Work Together</span>
        <h2>One conversation changes the picture.</h2>
        <p>
          Whether you need financial structure, engineering capability, or both
          — the right place to start is a single, direct conversation about
          what you are trying to solve.
        </p>
        <div className="actions">
          <Link href="/contact" className="btn btn--primary">
            Start a conversation <ArrowRight size={16} />
          </Link>
          <Link href="/portfolio" className="btn btn--ghost">
            Review the work first
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   PAGE ROOT
─────────────────────────────────────────────────────────────── */
export default function AboutPage() {
  return (
    <>
      <HeroSection />
      <WhyExistsSection />
      <TwoEnginesSection />
      <InternationalSection />
      <HowWeWorkSection />
      <OperatingPrinciplesSection />
      <AccountabilitySection />
      <WhoWeWorkWithSection />
      <FinalCTASection />
    </>
  );
}
