import Link from "next/link";
import type { ReactElement } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  Box,
  Code2,
  Database,
  FileCode2,
  Fingerprint,
  FolderOpen,
  Globe,
  Key,
  Layers,
  LayoutDashboard,
  Lock,
  Microscope,
  MonitorSmartphone,
  Package,
  RefreshCw,
  Settings,
  ShieldCheck,
  Sparkles,
  Terminal,
  TrendingUp,
  Zap,
} from "lucide-react";

export const metadata = {
  title: "Digital Architecture & Web Development",
  description:
    "Full-stack engineering, AI applications, automation systems and secure platforms. Built on real open-source projects — not generic web services.",
};

/* ─────────────────────────────────────────────
   ENGINEERING CAPABILITY PREVIEW — right panel
───────────────────────────────────────────── */
function WdUIPreview() {
  const capabilities = [
    { Icon: Bot, title: "AI Applications", detail: "Agentic workflows and purposeful AI products" },
    { Icon: Lock, title: "Secure Platforms", detail: "Security-first systems for sensitive workflows" },
    { Icon: RefreshCw, title: "Automation Systems", detail: "Reliable tools for repeatable business operations" },
    { Icon: Database, title: "Data Processing Tools", detail: "Accessible interfaces for structured data work" },
    { Icon: Microscope, title: "Machine Learning Projects", detail: "Practical model and data pipeline implementations" },
    { Icon: Package, title: "Developer Utilities", detail: "Reusable tools and open-source contributions" },
  ];

  return (
    <div className="wd-ui-preview" aria-hidden="true">
      <div className="wd-ui-card wd-ui-card--dark">
        <div className="wd-ui-label">Engineering Showcase</div>
        <div className="wd-ui-value" style={{ fontSize: "1.5rem", marginTop: "var(--sp-2)" }}>
          Modern systems built around real product needs.
        </div>
        <div className="wd-ui-sub">Architecture, security, automation and maintainability considered together.</div>
      </div>
      <div className="wd-ui-row-grid">
        {capabilities.slice(0, 2).map(({ Icon, title, detail }) => (
          <div key={title} className="wd-ui-card wd-ui-card--accent">
            <Icon size={20} style={{ color: "var(--blue)", marginBottom: 10 }} />
            <div className="wd-ui-label">{title}</div>
            <div className="wd-ui-sub">{detail}</div>
          </div>
        ))}
      </div>
      <div className="wd-ui-card">
        {capabilities.slice(2).map(({ Icon, title, detail }) => (
          <div key={title} className="wd-ui-row">
            <span className="wd-ui-row-label" style={{ display: "flex", alignItems: "center", gap: 7 }}><Icon size={14} />{title}</span>
            <span className="wd-ui-row-value">{detail}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   PROJECT VISUAL SUB-COMPONENTS
───────────────────────────────────────────── */
function ProjectCover({ Icon, title, items, dark = false }: { Icon: typeof Lock; title: string; items: string[]; dark?: boolean }) {
  return (
    <div className="wd-proj-visual" aria-hidden="true" style={{ background: dark ? "linear-gradient(135deg, #0d2d52 0%, #071d3b 100%)" : "linear-gradient(135deg, #e8f1ff 0%, #f5f9ff 100%)" }}>
      <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: "var(--sp-2)", color: dark ? "white" : "var(--navy)" }}>
        <Icon size={30} style={{ color: dark ? "var(--mint)" : "var(--blue)" }} />
        <div style={{ fontSize: "var(--text-lg)", fontWeight: 800 }}>{title}</div>
        {items.map((item) => (
          <div key={item} style={{ padding: "10px 12px", borderRadius: "var(--radius-sm)", border: dark ? "1px solid rgba(255,255,255,0.12)" : "1px solid var(--line)", background: dark ? "rgba(255,255,255,0.06)" : "white", fontSize: "var(--text-sm)", fontWeight: 600 }}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

function SecureHubVisual() {
  return <ProjectCover Icon={ShieldCheck} title="Secure Hub — platform architecture" items={["Encrypted file workflows", "Authenticated access", "Administrative management", "API-led integration"]} />;
}

function AIAgentVisual() {
  return <ProjectCover Icon={Bot} title="Agentic AI Suite — workflow architecture" items={["Tool-enabled agents", "Context-aware task execution", "Multi-agent handoffs", "External service integrations"]} dark />;
}

function DataToolsVisual() {
  return <ProjectCover Icon={Database} title="Data Sweeper & Automation Toolkit" items={["CSV and Excel processing", "Data cleaning workflows", "Conversion utilities", "Accessible web interfaces"]} />;
}

/* ─────────────────────────────────────────────
   FEATURED PROJECTS DATA
───────────────────────────────────────────── */
type WdProject = {
  id: string;
  tag: string;
  category: string;
  title: string;
  overview: string;
  problem: string;
  solution: string;
  features: string[];
  stack: string[];
  reverse: boolean;
  Visual: () => ReactElement;
};

const projects: WdProject[] = [
  {
    id: "secure-hub",
    tag: "Security Platform",
    category: "Full Stack",
    title: "Secure Hub — File Encryption Platform",
    overview:
      "A production-grade file encryption and management platform combining AES-256 encryption, a FastAPI REST backend and a full admin dashboard.",
    problem:
      "Businesses sharing sensitive files over email or cloud storage expose data to interception. No existing lightweight tool offered end-to-end encryption with an admin interface.",
    solution:
      "Built a full-stack platform with FastAPI for the backend API, AES-256 + PBKDF2 for key derivation, JWT-based authentication and a responsive admin dashboard for file management.",
    features: [
      "AES-256 encryption with PBKDF2 key derivation",
      "FastAPI REST backend with JWT auth",
      "Admin dashboard for file & user management",
      "Secure Vault companion for local encryption",
    ],
    stack: ["Python", "FastAPI", "AES-256", "JWT", "REST API", "Admin UI"],
    reverse: false,
    Visual: SecureHubVisual,
  },
  {
    id: "ai-agents",
    tag: "AI Engineering",
    category: "AI / Agentic",
    title: "Agentic AI Suite — OpenAI SDK & MCP",
    overview:
      "A collection of production-ready AI agent implementations using the OpenAI Agent SDK and Model Context Protocol for autonomous task execution.",
    problem:
      "Most AI demos are one-shot prompts. Real business automation requires agents that can use tools, maintain context, call APIs and hand off between sub-agents.",
    solution:
      "Implemented multi-agent workflows using the OpenAI Agent SDK, built MCP server integrations for tool use, and developed a Learn Agentic AI curriculum covering real patterns.",
    features: [
      "OpenAI Agent SDK with tool-use patterns",
      "Model Context Protocol (MCP) server integrations",
      "Multi-agent handoff and orchestration",
      "Personal Employee — digital workforce automation",
    ],
    stack: ["Python", "OpenAI SDK", "MCP", "Agentic AI", "Async", "Model APIs"],
    reverse: true,
    Visual: AIAgentVisual,
  },
  {
    id: "data-tools",
    tag: "Data & Automation",
    category: "Streamlit / Python",
    title: "Data Sweeper & Automation Toolkit",
    overview:
      "A suite of Streamlit-powered data tools — CSV/Excel cleaning, unit conversion, password analysis and file management — all deployable as standalone web apps.",
    problem:
      "Operations teams waste hours on manual data cleaning, unit conversions and file organisation tasks that could be automated but lack accessible web interfaces.",
    solution:
      "Built Data Sweeper for CSV/Excel processing, Convertify for unit conversion, Password Pedia for security analysis, and File Fusion as a unified file management platform.",
    features: [
      "CSV & Excel cleaning with Pandas (Data Sweeper)",
      "Multi-category unit converter (Convertify)",
      "Password strength analyser & generator (Password Pedia)",
      "File management platform (File Fusion)",
    ],
    stack: ["Python", "Streamlit", "Pandas", "Excel", "CSV", "Web UI"],
    reverse: false,
    Visual: DataToolsVisual,
  },
];

/* ─────────────────────────────────────────────
   EXPERTISE CARDS DATA
───────────────────────────────────────────── */
const expertise = [
  { Icon: Bot,           title: "AI Applications",        desc: "End-to-end AI products using model APIs, agent orchestration and tool-use patterns for real business automation.", techs: ["OpenAI", "Model APIs", "Agents", "Python"] },
  { Icon: Layers,        title: "Full Stack Development",  desc: "Complete web platforms from FastAPI REST backends to responsive frontends — production-ready and maintainable.", techs: ["FastAPI", "Python", "REST API", "HTML/CSS"] },
  { Icon: Lock,          title: "Secure File Systems",     desc: "AES-256 encryption, JWT authentication and secure file handling. Built with security-first architecture.", techs: ["AES-256", "JWT", "FastAPI", "Cryptography"] },
  { Icon: LayoutDashboard, title: "Dashboard Development", desc: "Admin dashboards and analytics interfaces that make complex data immediately actionable for teams.", techs: ["Streamlit", "Charts", "Admin UI", "Pandas"] },
  { Icon: RefreshCw,     title: "Automation Systems",      desc: "Workflow automation and data processing tools that replace manual operations with reliable, repeatable pipelines.", techs: ["Python", "Automation", "Pandas", "Scripting"] },
  { Icon: Microscope,    title: "Machine Learning",        desc: "ML course implementations and real model training workflows — from data preparation to evaluation.", techs: ["Python", "ML", "Scikit-learn", "Notebooks"] },
  { Icon: Terminal,      title: "Python Development",      desc: "Clean, idiomatic Python across CLI tools, web apps, automation scripts and data pipelines.", techs: ["Python", "CLI", "Libraries", "OOP"] },
  { Icon: Globe,         title: "MCP Integrations",        desc: "Model Context Protocol server and client implementations for extending AI agents with external tool capabilities.", techs: ["MCP", "OpenAI SDK", "Async", "APIs"] },
  { Icon: MonitorSmartphone, title: "Responsive UI",       desc: "Accessible, mobile-first interfaces built with modern CSS — performant across every device and screen size.", techs: ["HTML", "CSS", "JavaScript", "WCAG AA"] },
] as const;

/* ─────────────────────────────────────────────
   TECH STACK DATA
───────────────────────────────────────────── */
const techGroups = [
  {
    Icon: Globe,
    name: "Frontend",
    items: ["HTML5", "CSS3", "JavaScript", "Responsive UI", "WCAG AA"],
  },
  {
    Icon: Terminal,
    name: "Backend",
    items: ["Python", "FastAPI", "REST APIs", "Async", "JWT"],
  },
  {
    Icon: Bot,
    name: "AI & Agents",
    items: ["OpenAI SDK", "Model APIs", "MCP", "Agentic AI", "Prompting"],
  },
  {
    Icon: Database,
    name: "Data",
    items: ["Pandas", "Excel", "CSV", "Streamlit", "ML"],
  },
  {
    Icon: ShieldCheck,
    name: "Security",
    items: ["AES-256", "PBKDF2", "JWT", "Cryptography", "Auth"],
  },
] as const;

/* ─────────────────────────────────────────────
   DEV PROCESS DATA
───────────────────────────────────────────── */
const processSteps = [
  { num: "01", Icon: Microscope, label: "Discover",  title: "Understand",  body: "Map requirements, constraints and technical architecture before writing any code." },
  { num: "02", Icon: Layers,     label: "Design",    title: "Design",      body: "System architecture, data models and UI wireframes — decided before build begins." },
  { num: "03", Icon: Code2,      label: "Develop",   title: "Develop",     body: "Clean, documented code with tests. Each feature built to production standard from day one." },
  { num: "04", Icon: Zap,        label: "Optimise",  title: "Optimise",    body: "Performance audits, security review and accessibility checks baked into every release." },
  { num: "05", Icon: Package,    label: "Deploy",    title: "Deploy",      body: "CI-ready builds, documented deployment and environment configuration handover." },
  { num: "06", Icon: RefreshCw,  label: "Maintain",  title: "Maintain",    body: "Ongoing support, dependency updates and clear documentation so teams can continue independently." },
] as const;

/* ─────────────────────────────────────────────
   OPEN SOURCE REPOS DATA
───────────────────────────────────────────── */
const repos = [
  { Icon: Lock,        cat: "Security",    name: "Secure Hub",              desc: "File encryption platform with FastAPI backend, AES-256 and admin dashboard.", lang: "Python",     langColor: "#3572A5" },
  { Icon: Bot,         cat: "AI",          name: "OpenAI Agent SDK",        desc: "Production patterns for OpenAI agent implementations with tool use and handoffs.", lang: "Python",  langColor: "#3572A5" },
  { Icon: Fingerprint, cat: "MCP",         name: "Model Context Protocol",  desc: "MCP server and client integrations for AI agents to use external tools and data.", lang: "Python",  langColor: "#3572A5" },
  { Icon: RefreshCw,   cat: "Data",        name: "Data Sweeper",            desc: "Streamlit app for cleaning and transforming CSV and Excel files with Pandas.", lang: "Python",    langColor: "#3572A5" },
  { Icon: Key,         cat: "Security",    name: "Password Pedia",          desc: "Password generator and strength analyser with scoring and recommendations.", lang: "Python",     langColor: "#3572A5" },
  { Icon: FolderOpen,  cat: "Platform",    name: "File Fusion",             desc: "Unified file management platform with categorisation and bulk operations.", lang: "Python",     langColor: "#3572A5" },
  { Icon: Settings,    cat: "Utility",     name: "Convertify",              desc: "Multi-category unit converter web app with clean Streamlit interface.", lang: "Python",         langColor: "#3572A5" },
  { Icon: Sparkles,    cat: "AI",          name: "Learn Agentic AI",        desc: "Hands-on curriculum for building production AI agent systems from scratch.", lang: "Python",     langColor: "#3572A5" },
  { Icon: FileCode2,   cat: "ML",          name: "Machine Learning Course", desc: "Practical ML implementations covering supervised learning, data pipelines and evaluation.", lang: "Python", langColor: "#3572A5" },
] as const;

/* ─────────────────────────────────────────────
   ENGINEERING PRINCIPLES DATA
───────────────────────────────────────────── */
function PrincipleVisualPerf() {
  const items = ["Lean delivery", "Responsive interfaces", "Efficient data flows", "Scalable architecture"];
  return (
    <div className="wd-principle-visual" aria-hidden="true">
      <ul className="check-list" style={{ width: "100%" }}>
        {items.map((item) => <li key={item}>{item}</li>)}
      </ul>
    </div>
  );
}

function PrincipleVisualSecurity() {
  const items = ["Encryption", "Authentication", "Input validation", "Accessible interfaces"];
  return (
    <div className="wd-principle-visual" aria-hidden="true">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--sp-2)", width: "100%" }}>
        {items.map((label) => (
          <div key={label} style={{ background: "var(--soft)", border: "1px solid var(--line)", borderRadius: "var(--radius-sm)", padding: "var(--sp-2)", textAlign: "center" }}>
            <ShieldCheck size={20} style={{ color: "var(--blue)", marginInline: "auto" }} />
            <div style={{ fontSize: 11, color: "var(--subtle)", marginTop: 6 }}>{label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function PrincipleVisualCode() {
  const items = ["Documented functions", "Typed interfaces", "Clear separation of concerns", "Zero magic numbers"];
  return (
    <div className="wd-principle-visual">
      <ul className="check-list" style={{ width: "100%" }}>
        {items.map((i) => <li key={i}>{i}</li>)}
      </ul>
    </div>
  );
}

const principles = [
  { Icon: Zap,        title: "Performance First",        body: "Performance is treated as an architectural concern from day one, shaping delivery, interfaces, data flows and long-term scalability.", Visual: PrincipleVisualPerf, reverse: false },
  { Icon: ShieldCheck, title: "Security by Design",       body: "Encryption, authentication and input validation built into the data model — not bolted on after the fact. Demonstrated in Secure Hub and Password Pedia.", Visual: PrincipleVisualSecurity, reverse: true },
  { Icon: Code2,       title: "Maintainable, Clean Code", body: "Typed, documented and modular. Every codebase is handed over with the expectation that a team member who was not involved can understand and extend it.", Visual: PrincipleVisualCode, reverse: false },
] as const;

/* ─────────────────────────────────────────────
   WHY FINWEB DATA
───────────────────────────────────────────── */
const whyCards = [
  { Icon: Box,         title: "Modern tech stack",          body: "Python, FastAPI, OpenAI SDK and MCP — not legacy frameworks. Every project uses the tools that will still be relevant in five years." },
  { Icon: Microscope,  title: "Real engineering experience", body: "Every project in the portfolio reflects production-grade work — tested, documented, and built to a standard that holds up to scrutiny." },
  { Icon: TrendingUp,  title: "Business-focused delivery",   body: "Engineering decisions are made in the context of business outcomes — not for technical elegance alone. Fast, maintainable, purposeful." },
  { Icon: Sparkles,    title: "AI-ready solutions",          body: "Agent SDK, MCP integrations and OpenAI patterns already in production. Building AI into your product is a core capability, not an experiment." },
  { Icon: ShieldCheck, title: "Security first",              body: "AES-256, JWT, PBKDF2 and secure-by-default architecture in every platform that handles sensitive data." },
  { Icon: RefreshCw,   title: "Maintainable codebase",       body: "Clean architecture, typed interfaces and full documentation mean you own the system after handover — no lock-in, no mystery." },
] as const;


/* ─────────────────────────────────────────────
   PAGE
───────────────────────────────────────────── */
export default function WebDevelopment() {
  return (
    <>
      {/* ══ 1. HERO ══════════════════════════════════════════ */}
      <section className="wd-hero">
        <div className="container wd-hero-grid">
          <div className="wd-hero-copy">
            <span className="eyebrow">Digital architecture & web development</span>
            <h1>Make your expertise<br />easy to choose.</h1>
            <p>
              Full-stack engineering, AI applications, automation systems and
              secure platforms — built on real open-source projects, not
              template marketing.
            </p>
            <div className="actions">
              <Link className="btn btn--primary" href="/contact?interest=web">
                Start a project <ArrowRight size={17} />
              </Link>
              <Link className="btn btn--secondary" href="/portfolio">
                See the evidence
              </Link>
            </div>
            <div className="wd-trust">
              {["AI Applications", "Full Stack Systems", "Automation", "Secure Platforms", "Performance Optimised"].map((t) => (
                <span key={t} className="wd-trust-item">{t}</span>
              ))}
            </div>
          </div>
          <WdUIPreview />
        </div>
      </section>

      {/* ══ 2. FEATURED ENGINEERING PROJECTS ════════════════ */}
      <section className="wd-projects-section">
        <div className="container">
          <div className="section-header">
            <div>
              <span className="eyebrow">Featured projects</span>
              <h2>Engineering you can inspect.</h2>
            </div>
            <p>
              Three real engineering projects — each grouped by capability, each
              showing the problem, solution and architecture.
            </p>
          </div>

          <div className="wd-proj-grid">
            {projects.map(({ id, tag, category, title, overview, problem, solution, features, stack, reverse, Visual }) => (
              <article
                key={id}
                className={`wd-proj-card${reverse ? " wd-proj-card--reverse" : ""}`}
              >
                <Visual />
                <div className="wd-proj-body">
                  <div className="wd-proj-meta">
                    <span className="pill">{tag}</span>
                    <span className="pill">{category}</span>
                  </div>

                  <h3 className="wd-proj-title">{title}</h3>

                  <div>
                    <div className="wd-proj-section-label">Overview</div>
                    <p>{overview}</p>
                  </div>

                  <div>
                    <div className="wd-proj-section-label">Problem</div>
                    <p>{problem}</p>
                  </div>

                  <div>
                    <div className="wd-proj-section-label">Solution</div>
                    <p>{solution}</p>
                  </div>

                  <div>
                    <div className="wd-proj-section-label">Key features</div>
                    <ul className="wd-proj-features">
                      {features.map((f) => (
                        <li key={f} className="wd-proj-feature">{f}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="wd-proj-stack">
                    {stack.map((s) => (
                      <span key={s} className="wd-stack-tag">{s}</span>
                    ))}
                  </div>

                  <div className="wd-proj-links">
                    <Link className="btn btn--primary btn--sm" href="/contact?interest=web">
                      Discuss this work <ArrowUpRight size={14} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 3. ENGINEERING EXPERTISE ═════════════════════════ */}
      <section className="wd-expertise-section">
        <div className="container">
          <div className="section-header">
            <div>
              <span className="eyebrow">Engineering expertise</span>
              <h2>Capabilities, not categories.</h2>
            </div>
            <p>
              Each capability is grounded in named projects and practical
              engineering work — not listed from a service brochure.
            </p>
          </div>

          <div className="wd-expertise-grid">
            {expertise.map(({ Icon, title, desc, techs }) => (
              <div className="wd-exp-card" key={title}>
                <div className="wd-exp-icon"><Icon size={22} /></div>
                <h3>{title}</h3>
                <p>{desc}</p>
                <div className="wd-exp-techs">
                  {techs.map((t) => (
                    <span key={t} className="wd-exp-tech">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 4. TECHNOLOGY STACK ══════════════════════════════ */}
      <section className="wd-stack-section">
        <div className="container">
          <div className="section-header">
            <div>
              <span className="eyebrow">Technology stack</span>
              <h2>Tools chosen for longevity.</h2>
            </div>
            <p>
              No legacy frameworks chosen for familiarity. Every tool is here
              because it earns its place in a production codebase.
            </p>
          </div>

          <div className="wd-stack-groups">
            {techGroups.map(({ Icon, name, items }) => (
              <div className="wd-stack-group" key={name}>
                <div className="wd-stack-group-head">
                  <div className="wd-stack-group-icon"><Icon size={16} /></div>
                  <span className="wd-stack-group-name">{name}</span>
                </div>
                <ul className="wd-stack-items">
                  {items.map((item) => (
                    <li key={item} className="wd-stack-item">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 5. DEVELOPMENT PROCESS ═══════════════════════════ */}
      <section className="wd-process-section">
        <div className="container">
          <div className="section-header">
            <div>
              <span className="eyebrow">How we build</span>
              <h2>Six steps. No surprises.</h2>
            </div>
            <p>
              A repeatable process that produces maintainable, documented
              software — every time.
            </p>
          </div>

          <div className="wd-process-grid">
            {processSteps.map(({ num, Icon, label, title, body }) => (
              <div className="wd-process-step" key={num}>
                <div className="wd-process-num" aria-hidden="true">{num}</div>
                <div style={{ display: "grid", placeItems: "center", width: 36, height: 36, borderRadius: 10, background: "rgba(255,255,255,0.07)", color: "rgba(255,255,255,0.6)", marginTop: "var(--sp-1)" }}>
                  <Icon size={18} />
                </div>
                <h3>{title}</h3>
                <p>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 6. OPEN SOURCE REPOS ═════════════════════════════ */}
      <section className="wd-repos-section">
        <div className="container">
          <div className="section-header">
            <div>
              <span className="eyebrow">Engineering work</span>
              <h2>Modern software engineered for performance, security and scalability.</h2>
            </div>
            <p>
              Explore named applications, platforms and utilities that show how
              practical engineering capabilities translate into working products.
            </p>
          </div>

          <div className="wd-repos-grid">
            {repos.map(({ Icon, cat, name, desc, lang, langColor }) => (
              <div
                key={name}
                className="wd-repo-card"
              >
                <div className="wd-repo-header">
                  <div className="wd-repo-icon"><Icon size={18} /></div>
                  <span className="wd-repo-cat">{cat}</span>
                </div>
                <div className="wd-repo-name">{name}</div>
                <p className="wd-repo-desc">{desc}</p>
                <div className="wd-repo-footer">
                  <span className="wd-repo-lang">
                    <span className="wd-repo-lang-dot" style={{ background: langColor }} />
                    {lang}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 7. ENGINEERING PRINCIPLES ════════════════════════ */}
      <section className="wd-principles-section">
        <div className="container">
          <div className="section-header">
            <div>
              <span className="eyebrow">Engineering principles</span>
              <h2>How we write software.</h2>
            </div>
            <p>
              Three non-negotiables that apply to every project, regardless of
              size or timeline.
            </p>
          </div>

          <div className="wd-principles-list">
            {principles.map(({ Icon, title, body, Visual, reverse }) => (
              <div
                key={title}
                className={`wd-principle-block${reverse ? " wd-principle-block--reverse" : ""}`}
              >
                <div className="wd-principle-copy">
                  <div className="wd-principle-icon"><Icon size={26} /></div>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </div>
                <Visual />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 8. WHY FINWEB ════════════════════════════════════ */}
      <section className="wd-why-section">
        <div className="container">
          <div className="section-header">
            <div>
              <span className="eyebrow">Why FINWEB</span>
              <h2>Engineering that means business.</h2>
            </div>
            <p>
              Six reasons clients choose FINWEB for technical work — each one
              backed by something you can verify.
            </p>
          </div>

          <div className="wd-why-grid">
            {whyCards.map(({ Icon, title, body }) => (
              <div className="wd-why-card" key={title}>
                <div className="wd-why-icon"><Icon size={22} /></div>
                <h3>{title}</h3>
                <p>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 9. CTA ═══════════════════════════════════════════ */}
      <section className="wd-cta">
        <div className="wd-cta-inner">
          <span className="eyebrow">Ready to build</span>
          <h2>
            Turn your idea into<br />
            production software.
          </h2>
          <p>
            Whether it&rsquo;s an AI product, a secure platform or a business
            automation tool — one conversation is enough to know if we are the
            right team.
          </p>
          <div className="actions">
            <Link className="btn btn--primary" href="/contact?interest=web">
              Start a project <ArrowRight size={17} />
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
