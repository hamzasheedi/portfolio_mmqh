import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Bot,
  Calculator,
  CheckCircle2,
  ChevronDown,
  Clock,
  Code2,
  FileText,
  Globe2,
  Handshake,
  Lock,
  Mail,
  MessageSquare,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import { ContactForm } from "@/components/ContactForm";

export const metadata = {
  title: "Contact — Start a Conversation",
  description:
    "Reach out to FINWEB SOLUTION for financial operations consulting, web development, AI engineering, or a general inquiry. We respond within 24 hours.",
};

/* ─────────────────────────────────────────────────────────────
   HERO VISUAL — client engagement workflow
─────────────────────────────────────────────────────────────── */
function ContactHeroVisual() {
  return (
    <div className="ct-hero-visual" aria-hidden="true">

      {/* Discovery and strategy */}
      <div className="ct-vis-card ct-vis-card--top ct-vis-card--accent">
        <div className="ct-vis-card-header">
          <span className="ct-vis-label"><MessageSquare size={12} /> Project Discovery</span>
          <span className="ct-vis-badge ct-badge-blue">First step</span>
        </div>
        <div className="ct-vis-heading">Strategy Session</div>
        <div className="ct-vis-description">
          Clarify the business context, project priorities, constraints, and the most useful next step.
        </div>
      </div>

      {/* Engagement paths */}
      <div className="ct-vis-row">
        <div className="ct-vis-card ct-vis-card--sm">
          <div className="ct-vis-label"><Globe2 size={11} /> International Clients</div>
          <div className="ct-vis-path">Business Consultation</div>
          <div className="ct-vis-sub">Clear, structured collaboration</div>
        </div>
        <div className="ct-vis-card ct-vis-card--sm">
          <div className="ct-vis-label"><Lock size={11} /> Secure Communication</div>
          <div className="ct-vis-path">Discovery Call</div>
          <div className="ct-vis-sub">Confidential project discussion</div>
        </div>
      </div>

      {/* Response workflow */}
      <div className="ct-vis-card">
        <div className="ct-vis-label"><Handshake size={12} /> Response Process</div>
        <div className="ct-vis-trust-list">
          {[
            { icon: <FileText size={13} />, text: "Review the project context" },
            { icon: <MessageSquare size={13} />, text: "Confirm the right engagement path" },
            { icon: <CheckCircle2 size={13} />, text: "Move into project planning" },
          ].map((t) => (
            <div key={t.text} className="ct-vis-trust-item">
              {t.icon}
              <span>{t.text}</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   SECTION 1 — HERO
─────────────────────────────────────────────────────────────── */
function HeroSection({ initialType }: { initialType: string }) {
  return (
    <section className="ct-hero">
      <div className="container">
        <div className="ct-hero-grid">
          <div className="ct-hero-copy">
            <span className="eyebrow">Start a Conversation</span>
            <h1>
              Tell us where<br />
              the <em>friction</em> lives.
            </h1>
            <p>
              Whether you need financial clarity, a working software system, or
              both — the right place to start is a direct conversation. We
              collect only what is needed to understand the next useful step.
            </p>
            <div className="actions">
              <a href="#contact-form" className="btn btn--primary">
                Send an inquiry <ArrowRight size={16} />
              </a>
              <Link href="/portfolio" className="btn btn--secondary">
                See our work first
              </Link>
            </div>
            <div className="ct-trust-badges">
              {[
                "Usually replies within 24 hours",
                "International Clients",
                "Confidential Discussions",
              ].map((t) => (
                <span key={t} className="ct-trust-badge">
                  <CheckCircle2 size={12} /> {t}
                </span>
              ))}
            </div>
          </div>
          <ContactHeroVisual />
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   SECTION 2 — CONTACT OPTIONS
─────────────────────────────────────────────────────────────── */
const contactOptions = [
  {
    href:  "#contact-form",
    icon:  <MessageSquare size={22} />,
    label: "General Inquiry",
    desc:  "Not sure where to start? Tell us about your situation and we will point you in the right direction.",
    next:  "We review every message personally and respond within 24 hours.",
    param: "general",
  },
  {
    href:  "#contact-form",
    icon:  <Calculator size={22} />,
    label: "Financial Services",
    desc:  "QuickBooks setup, bookkeeping cleanup, financial dashboards, or cash flow projections.",
    next:  "We will ask a few questions to scope the right engagement.",
    param: "financial",
  },
  {
    href:  "#contact-form",
    icon:  <Code2 size={22} />,
    label: "Web Development",
    desc:  "AI systems, automation platforms, secure applications, or full-stack web engineering.",
    next:  "We will review your requirements and suggest an architecture.",
    param: "web-development",
  },
  {
    href:  "#contact-form",
    icon:  <Handshake size={22} />,
    label: "Partnership",
    desc:  "Agency partnerships, referral arrangements, or co-delivery on client projects.",
    next:  "We will schedule a brief discovery call to explore the fit.",
    param: "partnership",
  },
];

function ContactOptionsSection() {
  return (
    <section className="section section--sm section--soft" id="contact-options">
      <div className="container">
        <div className="ct-opts-header">
          <span className="eyebrow">How Can We Help</span>
          <h2>Choose the path that fits.</h2>
          <p>Each option leads to the same form — select whichever best describes your situation.</p>
        </div>
        <div className="ct-opts-grid">
          {contactOptions.map((opt) => (
            <a key={opt.label} href={opt.href} className="ct-opt-card">
              <div className="ct-opt-icon">{opt.icon}</div>
              <h3>{opt.label}</h3>
              <p>{opt.desc}</p>
              <div className="ct-opt-next">
                <Sparkles size={12} />
                <span>{opt.next}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   SECTION 3 — FORM
─────────────────────────────────────────────────────────────── */
function FormSection({ initialType }: { initialType: string }) {
  return (
    <section className="section" id="contact-form">
      <div className="container">
        <div className="ct-form-layout">

          {/* Left — form */}
          <div className="ct-form-main">
            <div className="ct-form-heading">
              <span className="eyebrow">Send an Inquiry</span>
              <h2>Start the conversation.</h2>
              <p>
                Fill in what you know. You do not need all the answers — just
                enough to give us context for a useful first response.
              </p>
            </div>
            <div className="ct-form-shell">
              <ContactForm initialType={initialType} />
            </div>
          </div>

          {/* Right — sticky sidebar */}
          <aside className="ct-form-sidebar">
            <div className="ct-sidebar-card">
              <div className="ct-sidebar-title">What happens next</div>
              <div className="ct-sidebar-steps">
                {[
                  { n: "01", label: "We receive your inquiry",      sub: "Instantly, with a reference number." },
                  { n: "02", label: "We review your message",       sub: "Within 24 business hours." },
                  { n: "03", label: "We send a personal response",  sub: "With questions or a clear next step." },
                  { n: "04", label: "Discovery discussion",         sub: "A brief call or written exchange." },
                  { n: "05", label: "Proposal & scope",             sub: "Fixed scope, clear deliverables." },
                ].map((step, i, arr) => (
                  <div key={step.n} className="ct-sidebar-step">
                    <div className="ct-step-connector">
                      <div className="ct-step-dot">{step.n}</div>
                      {i < arr.length - 1 && <div className="ct-step-line" />}
                    </div>
                    <div className="ct-step-body">
                      <div className="ct-step-label">{step.label}</div>
                      <div className="ct-step-sub">{step.sub}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="ct-sidebar-card ct-sidebar-trust">
              <div className="ct-sidebar-title">Our commitments</div>
              {[
                { icon: <Clock size={14} />,       text: "24-hour response on business days" },
                { icon: <ShieldCheck size={14} />, text: "Confidential — NDAs available" },
                { icon: <FileText size={14} />,    text: "No obligation to proceed" },
                { icon: <Globe2 size={14} />,      text: "International clients welcome" },
                { icon: <Lock size={14} />,        text: "Secure document transfer available" },
              ].map((c) => (
                <div key={c.text} className="ct-commit-item">
                  <div className="ct-commit-icon">{c.icon}</div>
                  <span>{c.text}</span>
                </div>
              ))}
            </div>
          </aside>

        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   SECTION 4 — WHAT HAPPENS NEXT (full timeline)
─────────────────────────────────────────────────────────────── */
function TimelineSection() {
  const steps = [
    { icon: <Mail size={20} />,        label: "Inquiry Received",      body: "Your message arrives instantly. You receive an automatic confirmation with a reference number." },
    { icon: <FileText size={20} />,    label: "Review",                body: "We read every inquiry personally. We look for the real problem behind the stated request." },
    { icon: <MessageSquare size={20} />,label: "Discovery Discussion", body: "A written exchange or brief call to clarify scope, constraints, and the outcome you are optimising for." },
    { icon: <BarChart3 size={20} />,   label: "Proposal",              body: "A clear, fixed-scope proposal with deliverables, timeline, and investment. No surprises." },
    { icon: <Bot size={20} />,         label: "Project Starts",        body: "Work begins with a documented brief, clear milestones, and regular progress communication." },
    { icon: <CheckCircle2 size={20} />, label: "Delivery & Handover",  body: "Work is delivered with full documentation. You can operate independently. No lock-in." },
  ];

  return (
    <section className="section section--soft" id="what-happens-next">
      <div className="container">
        <div className="ct-tl-header">
          <span className="eyebrow">The Process</span>
          <h2>What happens after you send an inquiry.</h2>
          <p>A predictable, professional engagement from first message to final handover.</p>
        </div>
        <div className="ct-timeline-grid">
          {steps.map((step) => (
            <div key={step.label} className="ct-tl-step">
              <div className="ct-tl-icon">{step.icon}</div>
              <h4>{step.label}</h4>
              <p>{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   SECTION 5 — FAQ
─────────────────────────────────────────────────────────────── */
const faqs = [
  {
    q: "How quickly do you reply?",
    a: "We respond to every inquiry within 24 hours on business days. Time-sensitive requests are prioritised — just mention urgency in your message.",
  },
  {
    q: "Do you sign NDAs?",
    a: "Yes. If your project involves confidential information, we are happy to sign a mutual NDA before any detailed discussion takes place.",
  },
  {
    q: "Can we work together internationally?",
    a: "Yes. FINWEB works with clients across the US, UK, and EU. All communication is in English, all deliverables are produced to international professional standards, and time-zone differences are managed through asynchronous communication.",
  },
  {
    q: "Can you review our existing systems?",
    a: "Yes. We often begin engagements with a structured review of existing financial records, accounting systems, or codebases — then scope the work from there.",
  },
  {
    q: "How do fixed-scope projects work?",
    a: "We agree deliverables, timeline, and investment in writing before any work begins. There are no surprise invoices and no scope creep without your explicit approval.",
  },
  {
    q: "What if I am not sure what I need?",
    a: "That is fine. Send a general inquiry describing your situation. We will ask the useful questions and help you identify the right scope — without pressure to proceed.",
  },
];

function FAQSection() {
  return (
    <section className="section" id="faq">
      <div className="container">
        <div className="ct-faq-header">
          <span className="eyebrow">Common Questions</span>
          <h2>Frequently asked questions.</h2>
        </div>
        <div className="ct-faq-grid">
          {faqs.map((faq) => (
            <details key={faq.q} className="ct-faq-item">
              <summary className="ct-faq-q">
                {faq.q}
                <ChevronDown size={16} className="ct-faq-chevron" aria-hidden="true" />
              </summary>
              <p className="ct-faq-a">{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   SECTION 6 — FINAL CTA
─────────────────────────────────────────────────────────────── */
function FinalCTASection() {
  return (
    <section className="cta-section">
      <div className="cta-inner">
        <span className="eyebrow">Ready When You Are</span>
        <h2>One message. One step forward.</h2>
        <p>
          Every engagement starts with a single, direct conversation. There is
          no commitment until you decide there should be.
        </p>
        <div className="actions">
          <a href="#contact-form" className="btn btn--primary">
            Send an inquiry <ArrowRight size={16} />
          </a>
          <Link href="/portfolio" className="btn btn--ghost">
            Review our work first
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   PAGE ROOT
─────────────────────────────────────────────────────────────── */
export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ interest?: string }>;
}) {
  const { interest } = await searchParams;
  const initialType =
    interest === "financial"      ? "financial"       :
    interest === "web"            ? "web-development"  :
    interest === "partnership"    ? "partnership"      :
    "general";

  return (
    <>
      <HeroSection initialType={initialType} />
      <ContactOptionsSection />
      <FormSection initialType={initialType} />
      <TimelineSection />
      <FAQSection />
      <FinalCTASection />
    </>
  );
}
