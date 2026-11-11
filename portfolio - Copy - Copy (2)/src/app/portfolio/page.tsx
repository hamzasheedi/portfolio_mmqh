import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  Bot,
  Brain,
  Building2,
  Calculator,
  CheckCircle2,
  ChevronRight,
  Code2,
  Database,
  Eye,
  FileCheck2,
  FileSpreadsheet,
  FileText,
  FolderOpen,
  Globe,
  Key,
  Layers,
  LineChart,
  Lock,
  RefreshCw,
  Settings,
  Shield,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Store,
  Terminal,
  TrendingUp,
  Users,
  Wrench,
  Zap,
} from "lucide-react";

export const metadata = {
  title: "Portfolio — Real Work in Financial Operations & Software Engineering",
  description:
    "FINWEB's project portfolio: real financial consulting case studies and production-grade engineering projects spanning AI, automation, security, and data systems.",
};

/* ─────────────────────────────────────────────────────────────────
   HERO VISUAL — selected work collage (aria-hidden)
───────────────────────────────────────────────────────────────── */
function PortfolioHeroVisual() {
  return (
    <div className="pf-hero-visual" aria-hidden="true">

      {/* Financial case studies */}
      <div className="pf-ui-card pf-ui-card--top pf-ui-card--accent">
        <div className="pf-ui-card-header">
          <span className="pf-ui-label">
            <Calculator size={13} /> Financial Case Studies
          </span>
          <span className="pf-ui-badge pf-ui-badge--green">Selected work</span>
        </div>
        <div className="pf-ui-value pf-ui-value--sm">Financial Projection Dashboard</div>
        <div className="pf-ui-sub">
          QuickBooks Financial Statements · Bookkeeping Cleanup &amp; Catch-Up
        </div>
      </div>

      {/* Engineering project previews */}
      <div className="pf-ui-row">
        <div className="pf-ui-card pf-ui-card--small">
          <div className="pf-ui-label">
            <Brain size={12} /> AI Systems
          </div>
          <div className="pf-ui-value pf-ui-value--sm">AI &amp; Agent Engineering</div>
          <div className="pf-ui-sub">Machine Learning Systems</div>
        </div>
        <div className="pf-ui-card pf-ui-card--small">
          <div className="pf-ui-label">
            <Zap size={12} /> Automation Platforms
          </div>
          <div className="pf-ui-value pf-ui-value--sm">Workflow Automation</div>
          <div className="pf-ui-sub">Task and file-processing tools</div>
        </div>
      </div>

      {/* Security and data projects */}
      <div className="pf-ui-card pf-ui-card--dark">
        <div className="pf-ui-card-header">
          <span className="pf-ui-label">
            <ShieldCheck size={13} /> Engineering Projects
          </span>
        </div>
        <div className="pf-ui-row">
          <div>
            <div className="pf-ui-value pf-ui-value--sm">Secure Applications</div>
            <div className="pf-ui-sub">Privacy-first application systems</div>
          </div>
          <div>
            <div className="pf-ui-value pf-ui-value--sm">Data Tools</div>
            <div className="pf-ui-sub">Processing and transformation utilities</div>
          </div>
        </div>
      </div>

    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────
   SECTION 1 — HERO
───────────────────────────────────────────────────────────────── */
function HeroSection() {
  return (
    <section className="pf-hero">
      <div className="container">
        <div className="pf-hero-grid">

          {/* Left — copy */}
          <div className="pf-hero-copy">
            <span className="eyebrow">Selected Work · Real Projects</span>
            <h1>
              Financial clarity.<br />
              Engineering <em>precision.</em>
            </h1>
            <p>
              Every project here is real. Two specialist disciplines — Financial
              Operations and Digital Engineering — working in tandem to build
              systems that hold up under scrutiny.
            </p>
            <div className="actions">
              <Link href="#financial" className="btn btn--primary">
                Financial Work <ArrowRight size={16} />
              </Link>
              <Link href="#engineering" className="btn btn--secondary">
                Engineering Projects
              </Link>
            </div>
            <div className="pf-hero-trust">
              {[
                "Real Client Work",
                "Financial Operations",
                "Software Engineering",
                "AI Applications",
              ].map((label) => (
                <span key={label} className="pf-trust-badge">
                  <CheckCircle2 size={13} />
                  {label}
                </span>
              ))}
            </div>
          </div>

          {/* Right — visual */}
          <PortfolioHeroVisual />
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────
   SECTION 2 — PROOF OF WORK (two engine nav cards)
───────────────────────────────────────────────────────────────── */
function ProofOfWorkSection() {
  return (
    <section className="section section--sm" id="proof-of-work">
      <div className="container">
        <div className="pf-pow-header">
          <span className="eyebrow">Two Disciplines · One Firm</span>
          <h2>Where the evidence lives</h2>
          <p>
            FINWEB operates through two specialist engines. Each discipline has
            its own body of work — explore them independently or see how they
            connect.
          </p>
        </div>

        <div className="pf-pow-grid">
          {/* Card 1 — Financial */}
          <a href="#financial" className="pf-pow-card pf-pow-card--finance">
            <div className="pf-pow-card-num">01</div>
            <div className="pf-pow-icon">
              <Calculator size={28} />
            </div>
            <h3>Financial Operations Portfolio</h3>
            <p>
              QuickBooks systems, chart of accounts, cash flow projections, and
              multi-company bookkeeping — built for real businesses across four
              industries.
            </p>
            <div className="pf-pow-meta">
              {["Construction", "Coaching", "Retail", "Business Services"].map((t) => (
                <span key={t} className="pill">{t}</span>
              ))}
            </div>
            <span className="pf-pow-cta">
              View financial work <ChevronRight size={16} />
            </span>
          </a>

          {/* Card 2 — Engineering */}
          <a href="#engineering" className="pf-pow-card pf-pow-card--eng">
            <div className="pf-pow-card-num">02</div>
            <div className="pf-pow-icon">
              <Terminal size={28} />
            </div>
            <h3>Engineering &amp; AI</h3>
            <p>
              AI agents, machine learning systems, secure applications,
              automation platforms, and developer tools — all built and
              maintained as open-source projects.
            </p>
            <div className="pf-pow-meta">
              {["AI Agents", "ML Systems", "Security", "Automation"].map((t) => (
                <span key={t} className="pill">{t}</span>
              ))}
            </div>
            <span className="pf-pow-cta">
              View engineering work <ChevronRight size={16} />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────
   SECTION 3 — FINANCIAL OPERATIONS PORTFOLIO
   Sub-sections:
     3a. Executive Overview (intro + impact metrics)
     3b. Financial Capabilities (capability cards)
     3c. Selected Engagements (expanded case studies)
     3d. Industries Supported
───────────────────────────────────────────────────────────────── */

/* ── 3a. Practice scope ────────────────────────────────────── */
const practiceScope = [
  {
    value: "Financial Records",
    label: "Structured Operations",
    sub:   "Bookkeeping, reconciliation and close support",
  },
  {
    value: "Management Reporting",
    label: "Decision Support",
    sub:   "Financial statements, forecasts and commentary",
  },
  {
    value: "Financial Controls",
    label: "Operational Confidence",
    sub:   "Documented processes and review-ready records",
  },
  {
    value: "Multi-Industry",
    label: "Business Context",
    sub:   "Construction · Retail · Coaching · Services",
  },
];

/* ── 3b. Financial capability cards ───────────────────────── */
const financialCapabilities = [
  {
    Icon: BarChart3,
    title: "Financial Reporting",
    desc:  "P&L statements, balance sheets, and executive dashboards designed for leadership decision-making.",
    deliverables: ["P&L Statement", "Balance Sheet", "Executive Dashboard", "KPI Reports"],
  },
  {
    Icon: BookOpen,
    title: "Bookkeeping",
    desc:  "Accurate daily bookkeeping — general ledger, journal entries, and month-end close.",
    deliverables: ["General Ledger", "Journal Entries", "Trial Balance", "Monthly Close"],
  },
  {
    Icon: LineChart,
    title: "Financial Analysis",
    desc:  "Revenue, expense, and profitability analysis that surfaces what the numbers actually mean.",
    deliverables: ["Revenue Analysis", "Expense Analysis", "Gross Profit", "Variance Reports"],
  },
  {
    Icon: RefreshCw,
    title: "Bank Reconciliation",
    desc:  "Full reconciliation of bank accounts, cash positions, and deposit records.",
    deliverables: ["Bank Reconciliation", "Cash Reconciliation", "Deposit Matching", "Discrepancy Resolution"],
  },
  {
    Icon: FileCheck2,
    title: "Financial Controls",
    desc:  "Internal controls, documentation standards, and audit-ready records maintained continuously.",
    deliverables: ["Control Documentation", "Record Standardisation", "Audit Readiness", "Compliance Support"],
  },
  {
    Icon: FileSpreadsheet,
    title: "Excel Engineering",
    desc:  "Advanced financial templates, data automation, PDF-to-Excel conversion, and large dataset processing.",
    deliverables: ["Financial Templates", "PDF to Excel", "Data Cleaning", "Spreadsheet Automation"],
  },
  {
    Icon: Layers,
    title: "Accounting Operations",
    desc:  "End-to-end accounting support — from daily entries through financial statement preparation.",
    deliverables: ["Accounts Payable", "Accounts Receivable", "Asset Management", "Liability Tracking"],
  },
  {
    Icon: FileText,
    title: "Business Reporting",
    desc:  "Structured management reports and business performance documentation for decision-makers.",
    deliverables: ["Management Accounts", "Board Packs", "Cash Flow Reports", "Performance Reports"],
  },
  {
    Icon: Eye,
    title: "Executive Reporting",
    desc:  "Board-ready executive summaries that communicate financial performance without requiring specialist interpretation.",
    deliverables: ["Executive Summaries", "Business Performance", "Strategic KPIs", "Commentary"],
  },
  {
    Icon: Database,
    title: "Data Validation & Cleaning",
    desc:  "Large-dataset processing: duplicate removal, format standardisation, and data quality assurance.",
    deliverables: ["Duplicate Removal", "Format Standardisation", "Data Validation", "Quality Checks"],
  },
];

/* ── 3c. Case studies data ─────────────────────────────────── */
const financialProjects = [
  {
    id: "construction-dashboard",
    industry: "Construction",
    role: "Financial Analyst",
    icon: <Building2 size={20} />,
    title: "Financial Projection Dashboard",
    context: "A construction business managing multiple active projects had no forward-looking financial model. Revenue, project costs, and cash positions were tracked in separate, disconnected files with no unified view.",
    challenge: "Cash flow managed reactively. Leadership made capital decisions without forward-looking data, creating financial risk during high-expenditure project phases.",
    objectives: ["Create a single source of financial truth","Build a 90-day cash flow projection","Enable weekly updates without specialist support"],
    solution: "Built a structured Excel financial dashboard connecting revenue forecasting, expense tracking by category, profit margin analysis, and a 90-day cash flow projection — all driven from a single input layer with documented assumptions.",
    deliverables: ["Revenue Forecasting Model","Expense Tracking by Category","Profit Margin Analysis","Cash Flow Projection (90-day)","Excel Financial Dashboard"],
    areas: ["Cash Flow Analysis","Revenue Forecasting","Expense Management","Financial Reporting"],
    tools: ["Microsoft Excel","Financial Modelling","Chart of Accounts","Data Validation"],
    outcome: "Leadership gained a proactive financial view they could update weekly — replacing reactive cash management with planned, documented operations.",
    lessons: "Construction businesses need project-level cost visibility connected to company-wide cash flow. A single model serving both levels eliminates the information gap.",
    related: ["Financial Reporting","Cash Flow Analysis","Excel Engineering"],
    duration: "1–7 Days",
    accent: "#e8f3ff",
    accentBorder: "rgba(11,91,211,0.15)",
  },
  {
    id: "quickbooks-coaching",
    industry: "Coaching",
    role: "Accountant",
    icon: <BookOpen size={20} />,
    title: "QuickBooks Financial Statements",
    context: "A solo coaching business had been operating for over a year without structured bookkeeping. Revenue was deposited and expenses were paid, but no accounting structure existed — making profitability measurement and tax preparation impossible.",
    challenge: "No accounting structure and no visibility into true profitability. Tax season required reconstructing months of transactions from bank statements each year.",
    objectives: ["Establish a clean accounting foundation in QuickBooks","Produce audit-ready financial statements","Enable owner-operated ongoing bookkeeping"],
    solution: "Configured QuickBooks from scratch with a chart of accounts tailored to coaching services. Produced clean P&L, balance sheet, and budget reports with a system designed for independent maintenance.",
    deliverables: ["QuickBooks Setup & Configuration","Chart of Accounts (Coaching-specific)","Profit & Loss Statement","Balance Sheet","Budget Reports"],
    areas: ["Bookkeeping","Financial Statements","Accounting Operations","Business Reporting"],
    tools: ["QuickBooks Online","Chart of Accounts Design","Financial Reporting","Budget Management"],
    outcome: "Clean, professional financial statements ready for tax preparation and a sustainable accounting system the owner operates independently.",
    lessons: "Service businesses need a chart of accounts that reflects how revenue is actually earned. Specificity makes ongoing categorisation intuitive and accurate.",
    related: ["Bookkeeping","Financial Statements","QuickBooks"],
    duration: "1–7 Days",
    accent: "#f0fdf6",
    accentBorder: "rgba(16,163,92,0.15)",
  },
  {
    id: "chart-of-accounts-retail",
    industry: "Retail & Wholesale",
    role: "Financial Consultant",
    icon: <ShoppingBag size={20} />,
    title: "Chart of Accounts Implementation",
    context: "A retail and wholesale operation had grown organically over several years without a formal financial architecture. Revenue streams from retail and wholesale channels were recorded inconsistently, and inventory costs were commingled with operating expenses.",
    challenge: "Commingled categories made accurate profitability reporting impossible. Historical data could not be trusted for business decisions or tax compliance — requiring a complete structural rebuild.",
    objectives: ["Design a COA reflecting retail/wholesale revenue separation","Migrate historical transactions into the new structure","Deliver a reporting framework for the internal team"],
    solution: "Designed a complete chart of accounts for the retail/wholesale environment, migrated historical transactions, established expense categorisation standards, and delivered a reporting framework with team training.",
    deliverables: ["Chart of Accounts Design","Financial Structure Architecture","Expense Categorisation System","Historical Data Migration","Team Training","Reporting Framework"],
    areas: ["Accounting Operations","Financial Controls","Record Standardisation","Business Reporting"],
    tools: ["QuickBooks","Chart of Accounts","Financial Architecture","Data Migration"],
    outcome: "Clean, trustworthy financial records with a structure the business maintains independently — and reports that accurately reflect performance by channel.",
    lessons: "Retail/wholesale businesses need channel-level revenue separation from day one. Retrofitting this structure is always more expensive than building it correctly at the start.",
    related: ["Chart of Accounts","Financial Controls","Accounting Operations"],
    duration: "1–7 Days",
    accent: "#fff8f0",
    accentBorder: "rgba(234,142,30,0.15)",
  },
  {
    id: "bookkeeping-cleanup",
    industry: "Business Services",
    role: "Senior Accountant",
    icon: <FileText size={20} />,
    title: "Bookkeeping Cleanup & Catch-Up",
    context: "A multi-entity business services operation had months of backlogged bookkeeping across two companies with intercompany transactions. Tax deadlines were approaching and books were not in condition for filing.",
    challenge: "Multi-company backlog across two entities. Unreconciled bank accounts. Intercompany transactions misclassified. Audit trail absent. Tax-readiness required a full rebuild from source data.",
    objectives: ["Reconcile all bank accounts across both entities","Correctly classify all intercompany transactions","Deliver tax-ready books with complete audit trail"],
    solution: "Completed a full catch-up engagement: categorised and reconciled all transactions across both entities, resolved intercompany accounting, reconciled all bank accounts, and delivered tax-ready books with documented audit trails.",
    deliverables: ["Multi-company Bookkeeping Catch-Up","Intercompany Accounting Resolution","Bank Reconciliation (all accounts)","Tax-ready Financial Records","Audit Trail Documentation"],
    areas: ["Bookkeeping","Bank Reconciliation","Financial Controls","Accounting Operations"],
    tools: ["QuickBooks","Multi-entity Accounting","Bank Reconciliation","Financial Cleanup"],
    outcome: "Both entities had fully reconciled, tax-ready books with intercompany transactions properly structured — and a clear audit trail for each account.",
    lessons: "Multi-entity cleanup requires resolving intercompany balances before any entity can be considered reconciled. Attempting to reconcile entities independently produces circular errors.",
    related: ["Bank Reconciliation","Multi-entity Accounting","Financial Controls"],
    duration: "1–7 Days",
    accent: "#fdf4ff",
    accentBorder: "rgba(139,92,246,0.15)",
  },
  {
    id: "financial-statement-prep",
    industry: "Professional Services",
    role: "Financial Reporting Specialist",
    icon: <BarChart3 size={20} />,
    title: "Financial Statement Preparation",
    context: "A professional services firm required complete financial statements prepared from raw accounting data. Existing records had structural inconsistencies that needed resolution before statements could be produced.",
    challenge: "Inconsistently structured records. Missing documentation for several transaction categories. Balance sheet did not balance — indicating misclassified entries requiring investigation and correction.",
    objectives: ["Investigate and resolve balance sheet discrepancies","Prepare complete financial statements from source data","Document all adjustments with supporting rationale"],
    solution: "Conducted a systematic review of the general ledger, identified and corrected misclassified entries, reconciled balance sheet items, and prepared a complete financial statement set with full supporting documentation.",
    deliverables: ["Profit & Loss Statement","Balance Sheet","Trial Balance","General Ledger Review","Adjusting Journal Entries","Financial Documentation"],
    areas: ["Financial Statements","General Ledger","Trial Balance","Financial Reporting"],
    tools: ["Microsoft Excel","Financial Reporting","General Ledger","Documentation Standards"],
    outcome: "Clean, balanced financial statements supported by a complete audit trail — ready for external accountant review and tax filing.",
    lessons: "Financial statement preparation is only as reliable as the underlying ledger. Starting with a trial balance reconciliation before preparing statements prevents cascading errors.",
    related: ["Financial Reporting","General Ledger","Balance Sheet Management"],
    duration: "1–7 Days",
    accent: "#f0f6ff",
    accentBorder: "rgba(11,91,211,0.12)",
  },
  {
    id: "pdf-to-excel-data",
    industry: "Multiple Industries",
    role: "Data & Financial Systems Analyst",
    icon: <FileSpreadsheet size={20} />,
    title: "PDF to Excel Conversion & Data Cleaning",
    context: "Multiple client engagements required converting financial data locked in PDF documents — bank statements, supplier invoices, and financial reports — into structured, analysis-ready Excel formats for accounting processing.",
    challenge: "PDF financial documents cannot be analysed, reconciled, or imported into accounting systems without conversion. Manual re-entry introduced errors and consumed significant time across repeated engagements.",
    objectives: ["Convert PDF financial records to structured Excel format","Standardise data across inconsistent source formats","Validate and clean extracted data before accounting use"],
    solution: "Engineered a systematic PDF-to-Excel conversion and data cleaning process covering bank statements, reports, and financial documents — applying format standardisation, duplicate detection, and data validation at each stage.",
    deliverables: ["Structured Excel Data Files","Data Cleaning & Validation Report","Duplicate Detection & Removal","Format Standardisation","Data Quality Documentation"],
    areas: ["Data Management","Excel Engineering","Financial Data Processing","Accounting Operations"],
    tools: ["Microsoft Excel","PDF Processing","Data Validation","Data Cleaning","Format Standardisation"],
    outcome: "Financial data previously inaccessible in PDF format converted to analysis-ready Excel files — reducing manual processing time and eliminating transcription errors.",
    lessons: "Data quality at the point of extraction determines the accuracy of every downstream report, reconciliation, and analysis. Validation at the source is not optional.",
    related: ["Excel Engineering","Data Validation","Financial Data Processing"],
    duration: "1–5 Days",
    accent: "#f5f0ff",
    accentBorder: "rgba(139,92,246,0.12)",
  },
];

/* ── 3c. Case study card ───────────────────────────────────── */
function FinancialProjectCard({
  project,
  index,
}: {
  project: (typeof financialProjects)[0];
  index: number;
}) {
  const isReverse = index % 2 !== 0;
  return (
    <article className={`pf-fin-case${isReverse ? " pf-fin-case--rev" : ""}`} id={project.id}>

      {/* Visual panel */}
      <div className="pf-fin-visual" style={{ background: project.accent, borderColor: project.accentBorder }} aria-hidden="true">
        <div className="pf-fin-vis-label">
          {project.icon}
          <span>{project.industry}</span>
          <span className="pf-fin-vis-role">{project.role}</span>
        </div>
        <div className="pf-fin-vis-title">{project.title}</div>
        <div className="pf-fin-deliverable-list">
          {project.deliverables.map((d) => (
            <div key={d} className="pf-fin-deliverable-item">
              <CheckCircle2 size={12} />
              <span>{d}</span>
            </div>
          ))}
        </div>
        <div className="pf-fin-vis-meta">
          <div className="pf-fin-meta-item">
            <span className="pf-fin-meta-label">Timeline</span>
            <span className="pf-fin-meta-value">{project.duration}</span>
          </div>
          <div className="pf-fin-meta-item">
            <span className="pf-fin-meta-label">Engagement</span>
            <span className="pf-fin-meta-value">Consulting case study</span>
          </div>
        </div>
      </div>

      {/* Content panel */}
      <div className="pf-fin-body">
        <div className="pf-fin-meta-row">
          {project.icon}
          <span className="pf-fin-industry">{project.industry}</span>
          <span className="pf-fin-role-tag">{project.role}</span>
        </div>
        <h3>{project.title}</h3>

        <div className="pf-fin-block">
          <div className="pf-fin-block-label">Business Context</div>
          <p>{project.context}</p>
        </div>
        <div className="pf-fin-block">
          <div className="pf-fin-block-label">Business Challenge</div>
          <p>{project.challenge}</p>
        </div>

        <div className="pf-fin-objectives">
          <div className="pf-fin-block-label">Objectives</div>
          <ul>
            {project.objectives.map((o) => (
              <li key={o}><CheckCircle2 size={12} />{o}</li>
            ))}
          </ul>
        </div>

        <div className="pf-fin-block">
          <div className="pf-fin-block-label">Approach & Solution</div>
          <p>{project.solution}</p>
        </div>

        <div className="pf-fin-objectives">
          <div className="pf-fin-block-label">Deliverables</div>
          <ul>
            {project.deliverables.map((deliverable) => (
              <li key={deliverable}><CheckCircle2 size={12} />{deliverable}</li>
            ))}
          </ul>
        </div>

        <div className="pf-fin-areas">
          <div className="pf-fin-block-label">Financial Areas</div>
          <div className="pf-fin-area-tags">
            {project.areas.map((a) => <span key={a} className="pf-fin-area-tag">{a}</span>)}
          </div>
        </div>

        <div className="pf-fin-block">
          <div className="pf-fin-block-label">Technologies & Tools</div>
          <div className="pf-fin-tools">
            {project.tools.map((t) => <span key={t} className="pf-tool-tag">{t}</span>)}
          </div>
        </div>

        <div className="pf-fin-block">
          <div className="pf-fin-block-label">Business Outcome</div>
          <div className="pf-case-outcome">
            <TrendingUp size={14} />
            <span>{project.outcome}</span>
          </div>
        </div>

        <div className="pf-fin-block">
          <div className="pf-fin-block-label">Timeline</div>
          <p>{project.duration}</p>
        </div>

        <div className="pf-fin-lessons">
          <span className="pf-fin-lessons-label">Key Lesson</span>
          <span>{project.lessons}</span>
        </div>

        <div className="actions">
          <Link href="/contact?interest=financial" className="btn btn--primary btn--sm">
            Start a similar project <ArrowRight size={14} />
          </Link>
          <Link href="/financial-services" className="btn btn--secondary btn--sm">
            Financial services
          </Link>
        </div>
      </div>
    </article>
  );
}

/* ── 3d. Industries supported ──────────────────────────────── */
const industriesSupported = [
  { icon: <Building2 size={20} />,  label: "Construction",         desc: "Cash flow projections, project cost tracking, revenue forecasting, and financial dashboard engineering." },
  { icon: <Store size={20} />,      label: "Retail & Wholesale",   desc: "Chart of accounts design, channel-level revenue separation, inventory reporting, and expense categorisation." },
  { icon: <Users size={20} />,      label: "Coaching & Services",  desc: "QuickBooks setup, P&L preparation, balance sheet management, and budget reporting for service businesses." },
  { icon: <ShieldCheck size={20} />,label: "Business Services",    desc: "Multi-entity bookkeeping, intercompany accounting, bank reconciliation, and tax-ready book preparation." },
  { icon: <Settings size={20} />,   label: "Professional Services",desc: "Financial statement preparation, general ledger review, trial balance reconciliation, and audit-trail documentation." },
  { icon: <Globe size={20} />,      label: "Multiple Industries",  desc: "PDF-to-Excel conversion, data cleaning, financial data standardisation, and reporting system engineering." },
];

/* ── 3. Full Financial Section ────────────────────────────── */
function FinancialSection() {
  return (
    <section className="section section--soft" id="financial">
      <div className="container">

        {/* Section header */}
        <div className="pf-section-header">
          <div>
            <span className="eyebrow">Engine One · Financial Operations</span>
            <h2>Selected Financial Engagements</h2>
          </div>
          <p>
            Six real consulting engagements documenting the business challenge, approach, deliverables, financial areas covered, and outcome — structured to the standard of an enterprise consulting practice.
          </p>
        </div>

        {/* Executive overview — practice scope */}
        <div className="pf-fin-impact">
          {practiceScope.map((item) => (
            <div key={item.label} className="pf-fin-impact-item">
              <div className="pf-fin-impact-value">{item.value}</div>
              <div className="pf-fin-impact-label">{item.label}</div>
              <div className="pf-fin-impact-sub">{item.sub}</div>
            </div>
          ))}
        </div>

        {/* Financial capabilities */}
        <div className="pf-fin-cap-header">
          <span className="eyebrow">Financial Capabilities</span>
          <h3>The accounting disciplines behind every engagement.</h3>
        </div>
        <div className="pf-fin-cap-grid">
          {financialCapabilities.map(({ Icon, title, desc, deliverables }) => (
            <div key={title} className="pf-fin-cap-card">
              <div className="pf-fin-cap-icon"><Icon size={20} /></div>
              <h4>{title}</h4>
              <p>{desc}</p>
              <ul className="pf-fin-cap-list">
                {deliverables.map((d) => (
                  <li key={d}><CheckCircle2 size={11} />{d}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Case studies */}
        <div className="pf-fin-cases-header">
          <span className="eyebrow">Consulting Engagements</span>
          <h3>Six engagements. Real work. Documented outcomes.</h3>
          <p>
            Each engagement is presented as a full consulting case study: context, challenge, objectives, approach, deliverables, financial areas, outcome, and key lesson.
          </p>
        </div>
        <div className="pf-cases-list">
          {financialProjects.map((project, i) => (
            <FinancialProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* Industries supported */}
        <div className="pf-fin-ind-header">
          <span className="eyebrow">Industries Supported</span>
          <h3>Financial operations experience across multiple sectors.</h3>
          <p>Each industry presents distinct accounting challenges. The work described reflects real engagement experience across each sector.</p>
        </div>
        <div className="pf-fin-ind-grid">
          {industriesSupported.map(({ icon, label, desc }) => (
            <div key={label} className="pf-fin-ind-card card">
              <div className="card-icon">{icon}</div>
              <h4>{label}</h4>
              <p>{desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}




/* ─────────────────────────────────────────────────────────────────
   SECTION 4 — ENGINEERING & AI PROJECTS
───────────────────────────────────────────────────────────────── */
const engineeringProjects = [
  {
    id: "ai-agent-engineering",
    category: "AI & Agent Engineering",
    icon: <Bot size={22} />,
    capabilities: ["Multi-agent orchestration", "Tool-use pipelines", "MCP server integration", "Streaming responses"],
    overview:
      "Production-quality AI engineering built around the OpenAI ecosystem and the Model Context Protocol — spanning raw API integration to fully autonomous agent architectures that connect AI to real business tools.",
    problem:
      "Building reliable AI systems requires more than calling an API. Real-world agent systems demand orchestration, tool delegation, context management, and the emerging MCP standard for connecting AI to external data sources.",
    solution:
      "Designed and built multi-agent workflows using the OpenAI Agent SDK, implemented MCP-compatible servers for structured context delivery, and engineered agentic AI pipelines suitable for production business environments.",
    technologies: ["Python", "OpenAI SDK", "Agent SDK", "Model Context Protocol", "GPT-4o", "Async Python"],
    architecture: "Multi-agent orchestration · Tool-use patterns · MCP server integration · Streaming responses",
    features: [
      "Autonomous agent workflows with tool delegation",
      "Model Context Protocol server implementations",
      "Structured output and response validation",
      "Async agent pipelines with error recovery",
      "Production-ready agentic AI architecture",
    ],
    businessValue: "Demonstrates the capability to build autonomous AI systems that integrate with real business tools — not just chatbots.",
    accent: "#eef4ff",
  },
  {
    id: "machine-learning-systems",
    category: "Machine Learning Systems",
    icon: <Brain size={22} />,
    capabilities: ["Supervised & unsupervised learning", "Clean data pipelines", "Reproducible experiments", "Modular model components"],
    overview:
      "End-to-end machine learning implementations covering the full ML pipeline — from data preprocessing and feature engineering through model training, evaluation, and deployment-ready packaging.",
    problem:
      "Machine learning in practice requires clean pipelines, reproducible experiments, and well-documented code that can be maintained and extended. Most ML code is exploratory — these systems are built to be production-ready.",
    solution:
      "Built structured ML systems covering supervised and unsupervised learning, implemented scikit-learn and deep learning pipelines, and documented every model decision for reproducibility and peer review.",
    technologies: ["Python", "scikit-learn", "Pandas", "NumPy", "Matplotlib", "Jupyter"],
    architecture: "Pipeline-first ML architecture · Clean feature engineering · Reproducible experiments · Modular model components",
    features: [
      "Supervised learning: regression, classification, ensembles",
      "Unsupervised learning: clustering, dimensionality reduction",
      "Clean data pipelines with preprocessing layers",
      "Model evaluation with cross-validation and metrics",
      "Documented experiments with reproducible results",
    ],
    businessValue: "Demonstrates the ability to apply ML rigorously — from problem framing through to a deployable, interpretable model.",
    accent: "#f0f9ff",
  },
  {
    id: "secure-applications",
    category: "Secure Applications",
    icon: <Shield size={22} />,
    capabilities: ["AES-256 encryption", "PBKDF2 key derivation", "Access control", "Audit trails"],
    overview:
      "A suite of security-focused applications built with encryption, authentication, and privacy as first-class concerns — not afterthoughts. Each system implements security patterns found in enterprise environments.",
    problem:
      "Most application security is bolted on after the fact. These systems were designed security-first: defining the threat model before writing the first line of code, then implementing cryptographic primitives correctly.",
    solution:
      "Built secure file management, encrypted vault storage, and credential management systems using industry-standard cryptographic libraries. Every input is validated, every secret is hashed, and every session is bounded.",
    technologies: ["Python", "AES-256", "PBKDF2", "FastAPI", "SQLite", "Streamlit", "Cryptography"],
    architecture: "Defense-in-depth · Input validation at every boundary · Encrypted at rest · Zero plaintext secrets",
    features: [
      "AES-256 file encryption with PBKDF2 key derivation",
      "Secure vault with authentication and access control",
      "Credential management with encrypted local storage",
      "Session management and secure logout",
      "Audit trail for all sensitive operations",
    ],
    businessValue: "Clients handling sensitive financial data or personal information can trust that engineering defaults to secure-by-design.",
    accent: "#f5f0ff",
  },
  {
    id: "automation-platforms",
    category: "Automation Platforms",
    icon: <Zap size={22} />,
    capabilities: ["AI task delegation", "Workflow automation", "File conversion", "Streamlit UIs"],
    overview:
      "Productivity-focused automation applications that eliminate repetitive work. From task management to file conversion pipelines, these systems are built on the principle that software should reduce friction, not create it.",
    problem:
      "Business operations generate recurring, low-value tasks that consume time without creating value. Automation tools need to be reliable enough to run unsupervised and simple enough that non-technical users can operate them.",
    solution:
      "Built an AI-powered task assistant for intelligent delegation, a structured task management application with priority logic, and a multi-format file conversion utility — all with clean interfaces built on Streamlit.",
    technologies: ["Python", "Streamlit", "FastAPI", "OpenAI API", "SQLite", "Pandas"],
    architecture: "Event-driven task processing · Clean state management · API-first design · Streamlit frontend",
    features: [
      "AI-powered task assistant with intelligent delegation",
      "Priority-based task management with persistence",
      "Multi-format file conversion (CSV, Excel, JSON, PDF)",
      "Clean Streamlit interfaces for non-technical users",
      "Event-driven workflow triggers",
    ],
    businessValue: "Demonstrates ability to build internal tools that real teams adopt — not just technical demos.",
    accent: "#fffbf0",
  },
  {
    id: "data-processing-tools",
    category: "Data Processing Tools",
    icon: <Database size={22} />,
    capabilities: ["Multi-file merge", "Automated deduplication", "Schema validation", "Format-agnostic input"],
    overview:
      "Data utility tools built for the messy realities of business data — inconsistent formats, duplicate records, and files that need to be merged, cleaned, and transformed before they are useful.",
    problem:
      "Raw business data is rarely clean. Before analysis or reporting can happen, data must be merged from multiple sources, validated for consistency, duplicates removed, and outputs standardised for downstream systems.",
    solution:
      "Built a file fusion tool for merging and transforming structured files across formats, an automated data cleaning and deduplication system, and a Python utilities library covering common data engineering patterns.",
    technologies: ["Python", "Pandas", "Streamlit", "OpenPyXL", "CSV", "JSON", "Excel"],
    architecture: "Transform pipeline pattern · Schema validation · Idempotent processing · Format-agnostic input",
    features: [
      "Multi-file merge with schema alignment",
      "Automated duplicate detection and removal",
      "Data type inference and normalisation",
      "Export to Excel, CSV, and JSON",
      "Visual data preview before processing",
    ],
    businessValue: "Financial reporting and operations depend on clean data. These tools address the data preparation layer that most projects ignore.",
    accent: "#f0fff8",
  },
  {
    id: "developer-utilities",
    category: "Developer Utilities",
    icon: <Wrench size={22} />,
    capabilities: ["CLI-first design", "Composable modules", "Clean interfaces", "Documented public API"],
    overview:
      "A set of developer-focused utilities that solve specific, high-friction problems in everyday engineering workflows — format conversion, code scaffolding, and reusable Python patterns.",
    problem:
      "Developer productivity suffers from accumulated small frictions: converting file formats by hand, writing the same boilerplate repeatedly, or searching for a reliable implementation of a common pattern.",
    solution:
      "Built and documented a utility library covering common Python engineering patterns, a multi-format converter, and scaffolding templates — all structured as importable, well-tested modules.",
    technologies: ["Python", "Typer", "Rich", "Pathlib", "Click", "pytest"],
    architecture: "CLI-first design · Composable modules · Clean interfaces · Documented public API",
    features: [
      "Multi-format conversion (CSV → Excel → JSON → PDF)",
      "Reusable Python utility modules",
      "CLI tools built with Typer and Rich",
      "Well-documented with examples",
      "Tested with pytest",
    ],
    businessValue: "Code that is structured as reusable utilities is code that can be maintained, extended, and handed off — not thrown away.",
    accent: "#fff0f5",
  },
];

function EngineeringProjectCard({ project, index }: { project: (typeof engineeringProjects)[0]; index: number }) {
  const isReverse = index % 2 !== 0;
  return (
    <article className={`pf-eng-case${isReverse ? " pf-eng-case--reverse" : ""}`} id={project.id}>
      {/* Visual */}
      <div className="pf-eng-visual" style={{ background: project.accent }} aria-hidden="true">
        <div className="pf-eng-visual-inner">
          <div className="pf-eng-cat-badge">
            {project.icon}
            <span>{project.category}</span>
          </div>
          <div className="pf-eng-cap-list">
            {project.capabilities.map((c) => (
              <div key={c} className="pf-eng-cap-item">
                <CheckCircle2 size={12} />
                <span>{c}</span>
              </div>
            ))}
          </div>
          <div className="pf-eng-arch">{project.architecture}</div>
        </div>
      </div>

      {/* Content */}
      <div className="pf-eng-content">
        <div className="pf-eng-cat-label">
          {project.icon}
          <span>{project.category}</span>
        </div>
        <h3>{project.category}</h3>
        <p className="pf-case-overview">{project.overview}</p>

        <div className="pf-case-block">
          <div className="pf-case-block-label">The Problem</div>
          <p>{project.problem}</p>
        </div>

        <div className="pf-case-block">
          <div className="pf-case-block-label">Engineering Approach</div>
          <p>{project.solution}</p>
        </div>

        <div className="pf-eng-features">
          {project.features.map((f) => (
            <div key={f} className="pf-eng-feature-item">
              <CheckCircle2 size={13} />
              <span>{f}</span>
            </div>
          ))}
        </div>

        <div className="pf-case-tools">
          {project.technologies.map((t) => (
            <span key={t} className="pf-tool-tag">{t}</span>
          ))}
        </div>

        <div className="pf-case-outcome">
          <Sparkles size={14} />
          <span>{project.businessValue}</span>
        </div>

        <div className="actions">
          <Link href="/contact" className="btn btn--primary btn--sm">
            Discuss this work <ArrowRight size={14} />
          </Link>
          <Link href="/web-development" className="btn btn--secondary btn--sm">
            View all engineering services
          </Link>
        </div>
      </div>
    </article>
  );
}

function EngineeringSection() {
  return (
    <section className="section" id="engineering">
      <div className="container">
        <div className="pf-section-header">
          <div>
            <span className="eyebrow">Engine Two · Digital Engineering</span>
            <h2>Engineering &amp; AI Projects</h2>
          </div>
          <p>
            Sixteen GitHub repositories grouped into six engineering disciplines.
            Each represents a real, maintained body of work — not a tutorial
            clone, not a demo project.
          </p>
        </div>
        <div className="pf-cases-list">
          {engineeringProjects.map((project, i) => (
            <EngineeringProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────
   SECTION 5 — TECHNOLOGY EXPERTISE
───────────────────────────────────────────────────────────────── */
const techGroups = [
  {
    label: "Frontend",
    icon: <Globe size={20} />,
    desc: "Modern web interfaces",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "CSS Modules"],
  },
  {
    label: "Backend",
    icon: <Layers size={20} />,
    desc: "APIs and server systems",
    tags: ["FastAPI", "Node.js", "REST", "Python", "SQLite"],
  },
  {
    label: "AI & Agents",
    icon: <Bot size={20} />,
    desc: "Autonomous AI systems",
    tags: ["OpenAI SDK", "Agent SDK", "GPT-4o", "MCP", "Tool Use"],
  },
  {
    label: "Machine Learning",
    icon: <Brain size={20} />,
    desc: "Data-driven models",
    tags: ["scikit-learn", "Pandas", "NumPy", "Jupyter", "Matplotlib"],
  },
  {
    label: "Security",
    icon: <Lock size={20} />,
    desc: "Cryptography & access control",
    tags: ["AES-256", "PBKDF2", "Auth", "Encryption", "Audit Trails"],
  },
  {
    label: "Data Tools",
    icon: <Database size={20} />,
    desc: "Processing & transformation",
    tags: ["Pandas", "Streamlit", "Excel", "CSV", "OpenPyXL"],
  },
  {
    label: "Financial Systems",
    icon: <Calculator size={20} />,
    desc: "Accounting & forecasting",
    tags: ["QuickBooks", "Excel", "Financial Modelling", "Chart of Accounts"],
  },
  {
    label: "Developer Tools",
    icon: <Terminal size={20} />,
    desc: "CLI and utility libraries",
    tags: ["Typer", "Rich", "Click", "pytest", "Pathlib"],
  },
];

function TechExpertiseSection() {
  return (
    <section className="section section--soft" id="technology">
      <div className="container">
        <div className="pf-section-header pf-section-header--center">
          <span className="eyebrow">Full-Stack Capability</span>
          <h2>Technology Expertise</h2>
          <p>
            Eight domains of expertise built through real projects — not
            certifications alone. Every category maps to production work in the
            portfolio above.
          </p>
        </div>
        <div className="pf-tech-grid">
          {techGroups.map((group) => (
            <div key={group.label} className="pf-tech-card">
              <div className="card-icon">{group.icon}</div>
              <h4>{group.label}</h4>
              <p className="pf-tech-desc">{group.desc}</p>
              <div className="pf-tech-tags">
                {group.tags.map((t) => (
                  <span key={t} className="pf-tech-tag">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────
   SECTION 6 — HOW WE SOLVE PROBLEMS (Timeline)
───────────────────────────────────────────────────────────────── */
const processSteps = [
  {
    num: "01",
    label: "Discover",
    icon: <BookOpen size={20} />,
    desc: "Understand the business, the systems already in place, and the specific problem that needs solving. No assumptions — only documented requirements.",
  },
  {
    num: "02",
    label: "Plan",
    icon: <FileText size={20} />,
    desc: "Map the solution architecture before writing a line of code or touching a spreadsheet. Deliverables, timeline, and scope agreed in writing.",
  },
  {
    num: "03",
    label: "Build",
    icon: <Code2 size={20} />,
    desc: "Execute with precision. Financial systems are built to accounting standards. Engineering projects follow clean architecture and are tested before delivery.",
  },
  {
    num: "04",
    label: "Validate",
    icon: <CheckCircle2 size={20} />,
    desc: "Every deliverable is checked against the original requirements. Financial work is reconciled. Software is tested. Nothing ships until it is verified.",
  },
  {
    num: "05",
    label: "Deliver",
    icon: <FolderOpen size={20} />,
    desc: "Structured handover. Documentation included. The client receives the work and understands how to use and maintain it independently.",
  },
  {
    num: "06",
    label: "Support",
    icon: <RefreshCw size={20} />,
    desc: "Available for questions, amendments, and follow-on work. Long-term relationships are built from reliable delivery, not from lock-in.",
  },
];

function ProcessSection() {
  return (
    <section className="section" id="process">
      <div className="container">
        <div className="pf-section-header pf-section-header--center">
          <span className="eyebrow">How We Work</span>
          <h2>How we solve problems</h2>
          <p>
            A consistent process applied to every engagement — whether it is a
            QuickBooks setup or a multi-agent AI system.
          </p>
        </div>
        <div className="pf-timeline">
          {processSteps.map((step, i) => (
            <div key={step.num} className="pf-timeline-step">
              <div className="pf-timeline-connector">
                <div className="pf-timeline-node">
                  <div className="card-icon">{step.icon}</div>
                </div>
                {i < processSteps.length - 1 && (
                  <div className="pf-timeline-line" aria-hidden="true" />
                )}
              </div>
              <div className="pf-timeline-body">
                <div className="pf-timeline-num">{step.num}</div>
                <h4>{step.label}</h4>
                <p>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


/* ─────────────────────────────────────────────────────────────────
   SECTION 7 — ENGINEERING PRINCIPLES
───────────────────────────────────────────────────────────────── */
const principles = [
  {
    icon: <Zap size={22} />,
    title: "Performance First",
    body: "Every system is designed with performance as a constraint, not an afterthought. Fast interfaces, efficient queries, and lean pipelines.",
    visual: (
      <div className="pf-principle-visual pf-pv-access" aria-hidden="true">
        <div className="pf-pv-access-label">Performance priorities</div>
        <div className="pf-pv-access-checks">
          {["Fast interfaces", "Efficient queries", "Lean pipelines", "Purposeful assets"].map((c) => (
            <div key={c} className="pf-pv-check">
              <CheckCircle2 size={13} />{c}
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    icon: <Globe size={22} />,
    title: "Accessibility by Default",
    body: "WCAG AA compliance is the baseline. Semantic HTML, proper heading hierarchy, keyboard navigation, and visible focus states — built in, not added later.",
    visual: (
      <div className="pf-principle-visual pf-pv-access" aria-hidden="true">
        <div className="pf-pv-access-badge">AA</div>
        <div className="pf-pv-access-label">WCAG Compliance</div>
        <div className="pf-pv-access-checks">
          {["Keyboard nav", "Focus states", "Semantic HTML", "Colour contrast"].map((c) => (
            <div key={c} className="pf-pv-check">
              <CheckCircle2 size={13} />{c}
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    icon: <Layers size={22} />,
    title: "Scalable Architecture",
    body: "Systems are designed to grow. A financial model built for 10 transactions should still work cleanly at 10,000. A codebase built for one developer should be navigable by a team.",
    visual: (
      <div className="pf-principle-visual pf-pv-layers" aria-hidden="true">
        {["Presentation", "Business Logic", "Data Layer", "Infrastructure"].map((l, i) => (
          <div key={l} className="pf-pv-layer" style={{ opacity: 1 - i * 0.15 }}>
            {l}
          </div>
        ))}
      </div>
    ),
  },
  {
    icon: <Shield size={22} />,
    title: "Security by Design",
    body: "Threat modelling before the first line of code. Secrets never in plaintext. Input validated at every boundary. Encryption applied to data at rest and in transit.",
    visual: (
      <div className="pf-principle-visual pf-pv-security" aria-hidden="true">
        <Lock size={32} style={{ color: "var(--blue)", margin: "0 auto 12px" }} />
        <div className="pf-pv-security-items">
          {["AES-256 encryption", "PBKDF2 key derivation", "Input validation", "Zero plaintext secrets"].map((s) => (
            <div key={s} className="pf-pv-check"><Key size={11} />{s}</div>
          ))}
        </div>
      </div>
    ),
  },
  {
    icon: <RefreshCw size={22} />,
    title: "Maintainability",
    body: "Code is written to be read by humans, not just executed by machines. Clear naming, documented decisions, and consistent structure that future maintainers can follow.",
    visual: (
      <div className="pf-principle-visual pf-pv-layers" aria-hidden="true">
        {["Clear Naming", "Documented Decisions", "Consistent Structure", "Practical Handover"].map((l, i) => (
          <div key={l} className="pf-pv-layer" style={{ opacity: 1 - i * 0.15 }}>
            {l}
          </div>
        ))}
      </div>
    ),
  },
  {
    icon: <Code2 size={22} />,
    title: "Reusable Components",
    body: "Interfaces are built from composable parts, not one-off screens. Financial models share logic. Engineering modules are designed for re-use from the start.",
    visual: (
      <div className="pf-principle-visual pf-pv-components" aria-hidden="true">
        <div className="pf-pv-comp-grid">
          {["Interface", "Workflow", "Data", "Validation", "Access", "Reporting"].map((c) => (
            <div key={c} className="pf-pv-comp">{c}</div>
          ))}
        </div>
      </div>
    ),
  },
  {
    icon: <FileText size={22} />,
    title: "Clean Code",
    body: "Every function does one thing. Every module has a clear boundary. Dependencies are explicit. Complexity is earned, not inherited from careless construction.",
    visual: (
      <div className="pf-principle-visual pf-pv-access" aria-hidden="true">
        <div className="pf-pv-access-label">Engineering qualities</div>
        <div className="pf-pv-access-checks">
          {["Focused responsibilities", "Clear module boundaries", "Explicit dependencies", "Readable structure"].map((c) => (
            <div key={c} className="pf-pv-check">
              <CheckCircle2 size={13} />{c}
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    icon: <TrendingUp size={22} />,
    title: "Business-Focused Development",
    body: "Technical decisions are always tied to business outcomes. The goal is never just working code — it is working code that solves a real problem for real people.",
    visual: (
      <div className="pf-principle-visual pf-pv-business" aria-hidden="true">
        <div className="pf-pv-biz-items">
          {["Real problem identified", "Solution scoped clearly", "Delivered on time", "Client can maintain it"].map((s, i) => (
            <div key={s} className="pf-pv-biz-step">
              <div className="pf-pv-biz-num">{i + 1}</div>
              <span>{s}</span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
];

function PrinciplesSection() {
  return (
    <section className="section section--soft" id="principles">
      <div className="container">
        <div className="pf-section-header">
          <div>
            <span className="eyebrow">How We Think</span>
            <h2>Engineering Principles</h2>
          </div>
          <p>
            Eight principles that guide every project — financial or technical.
            These are not aspirational values. They are constraints applied from
            day one.
          </p>
        </div>
        <div className="pf-principles-list">
          {principles.map((p, i) => (
            <div
              key={p.title}
              className={`pf-principle-block${i % 2 !== 0 ? " pf-principle-block--reverse" : ""}`}
            >
              <div className="pf-principle-content">
                <div className="feature-icon-wrap">{p.icon}</div>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
              </div>
              {p.visual}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────
   SECTION 8 — RESULTS & DELIVERABLES
───────────────────────────────────────────────────────────────── */
const deliverables = [
  { icon: <BarChart3 size={20} />, label: "Financial Dashboards", desc: "Excel-based dashboards with live P&L, cash flow, and margin views" },
  { icon: <TrendingUp size={20} />, label: "Cash Flow Forecasts", desc: "90-day and annual projections based on real revenue and cost data" },
  { icon: <FileSpreadsheet size={20} />, label: "Tax-Ready Books", desc: "Reconciled, categorised accounts ready for accountants and tax filing" },
  { icon: <Calculator size={20} />, label: "QuickBooks Systems", desc: "Full QuickBooks setup, chart of accounts, and reporting structure" },
  { icon: <Bot size={20} />, label: "AI Applications", desc: "Autonomous agent systems built on the OpenAI SDK and MCP" },
  { icon: <Zap size={20} />, label: "Automation Platforms", desc: "Workflow automation tools that reduce manual, repetitive operations" },
  { icon: <Lock size={20} />, label: "Secure File Systems", desc: "Encrypted storage, vault management, and password utilities" },
  { icon: <Brain size={20} />, label: "Machine Learning Projects", desc: "End-to-end ML pipelines: data prep, training, evaluation, deployment" },
  { icon: <Globe size={20} />, label: "Streamlit Applications", desc: "Interactive data applications with clean UIs for non-technical users" },
  { icon: <Database size={20} />, label: "Data Processing Tools", desc: "File merge, cleaning, and transformation pipelines for messy data" },
];

function ResultsSection() {
  return (
    <section className="section" id="results">
      <div className="container">
        <div className="pf-section-header pf-section-header--center">
          <span className="eyebrow">What Gets Built</span>
          <h2>Results &amp; Deliverables</h2>
          <p>
            Tangible outputs — not reports, not recommendations, not theory.
            Every engagement ends with something the client can use.
          </p>
        </div>
        <div className="pf-deliverables-grid">
          {deliverables.map((d) => (
            <div key={d.label} className="pf-deliverable-card card">
              <div className="card-icon">{d.icon}</div>
              <h4>{d.label}</h4>
              <p>{d.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────
   SECTION 9 — ENGINEERING DEPTH
───────────────────────────────────────────────────────────────── */
function EngineeringDepthSection() {
  return (
    <section className="section section--soft" id="engineering-depth">
      <div className="container">
        <div className="pf-gh-grid">
          <div className="pf-gh-copy">
            <span className="eyebrow">Built by FINWEB · Engineered for Business</span>
            <h2>Engineering built to a professional standard.</h2>
            <p>
              Every engineering capability at FINWEB is grounded in practical,
              working systems — not certifications or theoretical knowledge. From
              AI agent architectures to encrypted security platforms, the work
              reflects the standard applied to every client engagement.
            </p>
            <p>
              FINWEB builds software that is secure, maintainable, and aligned
              to a business outcome — delivered under the FINWEB brand, owned by
              the client.
            </p>
            <div className="actions">
              <Link href="/contact" className="btn btn--primary">
                Start a project <ArrowRight size={16} />
              </Link>
              <Link href="/web-development" className="btn btn--secondary">
                Engineering services
              </Link>
            </div>
          </div>
          <div className="pf-gh-cards" aria-hidden="true">
            {[
              { icon: <Bot size={18} />,      label: "AI & Agent Systems",       sub: "OpenAI SDK · MCP · GPT-4o" },
              { icon: <Brain size={18} />,    label: "Machine Learning",         sub: "scikit-learn · Pandas · Python" },
              { icon: <Shield size={18} />,   label: "Secure Applications",      sub: "AES-256 · PBKDF2 · Auth" },
              { icon: <Zap size={18} />,      label: "Automation Platforms",     sub: "Streamlit · FastAPI · SQLite" },
              { icon: <Database size={18} />, label: "Data Processing",          sub: "Pandas · Excel · JSON · CSV" },
              { icon: <Code2 size={18} />,    label: "Clean Architecture",       sub: "Tested · Documented · Modular" },
            ].map((item) => (
              <div key={item.label} className="pf-gh-card">
                <div className="pf-gh-card-icon">{item.icon}</div>
                <div>
                  <div className="pf-gh-card-label">{item.label}</div>
                  <div className="pf-gh-card-sub">{item.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────
   SECTION 10 — FINAL CTA
───────────────────────────────────────────────────────────────── */
function FinalCTASection() {
  return (
    <section className="cta-section" id="start-a-project">
      <div className="cta-inner">
        <span className="eyebrow">Ready to Start</span>
        <h2>Let's build something that works.</h2>
        <p>
          Whether you need clean financial books, a cash flow model, an AI
          application, or a complete engineering system — the work starts with
          one conversation.
        </p>
        <div className="actions">
          <Link href="/contact" className="btn btn--primary">
            Start a conversation <ArrowRight size={16} />
          </Link>
          <Link href="/financial-services" className="btn btn--ghost">
            Explore financial services
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────
   PAGE ROOT
───────────────────────────────────────────────────────────────── */
export default function PortfolioPage() {
  return (
    <>
      <HeroSection />
      <ProofOfWorkSection />
      <FinancialSection />
      <EngineeringSection />
      <TechExpertiseSection />
      <ProcessSection />
      <PrinciplesSection />
      <ResultsSection />
      <EngineeringDepthSection />
      <FinalCTASection />
    </>
  );
}
