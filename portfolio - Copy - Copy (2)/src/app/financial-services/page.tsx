import Link from "next/link";
import type { ReactElement } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart2,
  BarChart3,
  BookOpen,
  Calculator,
  CheckCircle2,
  ClipboardList,
  Database,
  Eye,
  FileCheck2,
  FileSpreadsheet,
  FileText,
  Layers,
  LineChart,
  Lock,
  RefreshCw,
  Search,
  Settings2,
  Shield,
  ShieldCheck,
  Target,
  TrendingUp,
  Workflow,
  Zap,
} from "lucide-react";

export const metadata = {
  title: "Financial Operations & Accounting",
  description:
    "Enterprise-grade financial operations consulting. Management reporting, bookkeeping, financial analysis, bank reconciliation, Excel engineering and accounting controls — built on real, documented experience.",
};

/* ═══════════════════════════════════════════════════════════
   HERO FINANCIAL EXPERTISE VISUAL
═══════════════════════════════════════════════════════════ */
function FinancialExpertiseVisual() {
  const assets = [
    "Financial Statements",
    "Cash Flow Forecast",
    "Management Reporting",
    "Bookkeeping",
    "QuickBooks",
    "Financial Controls",
    "Forecast Models",
    "Excel Dashboards",
  ];

  return (
    <div className="fin-expertise-visual" aria-hidden="true">
      <div className="fin-expertise-intro">
        <div className="fin-expertise-topline">
          <span className="fin-expertise-label">Financial Expertise</span>
          <span className="fin-expertise-kicker">Connected practice</span>
        </div>
        <div className="fin-expertise-title">
          From source records to decision-ready reporting.
        </div>
        <div className="fin-expertise-summary">
          Practical financial assets designed around accurate records, clear analysis and maintainable controls.
        </div>
      </div>

      <div className="fin-expertise-primary">
        {assets.slice(0, 2).map((asset, index) => (
          <div key={asset} className="fin-expertise-primary-item">
            <span className="fin-expertise-index">0{index + 1}</span>
            <span>{asset}</span>
          </div>
        ))}
      </div>

      <div className="fin-expertise-map">
        {assets.slice(2).map((asset, index) => (
          <div key={asset} className="fin-expertise-map-item">
            <span className="fin-expertise-marker" />
            <span>{asset}</span>
            <span className="fin-expertise-index">0{index + 3}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   SECTION 2 — FINANCIAL EXPERTISE CAPABILITIES
═══════════════════════════════════════════════════════════ */
const expertiseCards = [
  {
    Icon: BarChart3,
    title: "Financial Reporting",
    desc: "Executive-ready reports that communicate performance clearly to leadership and stakeholders.",
    deliverables: ["P&L Statements", "Balance Sheets", "Executive Dashboards", "KPI Reports"],
  },
  {
    Icon: BookOpen,
    title: "Bookkeeping & Accounting",
    desc: "Accurate, structured daily bookkeeping that keeps records clean and decisions reliable.",
    deliverables: ["General Ledger", "Journal Entries", "Trial Balance", "Monthly Close"],
  },
  {
    Icon: LineChart,
    title: "Financial Analysis",
    desc: "Revenue, expense, and profitability analysis that surfaces what the numbers actually mean.",
    deliverables: ["Revenue Analysis", "Expense Tracking", "Gross Profit Analysis", "Variance Reports"],
  },
  {
    Icon: RefreshCw,
    title: "Bank Reconciliation",
    desc: "Complete reconciliation of bank statements, cash positions, and deposit records.",
    deliverables: ["Bank Reconciliation", "Cash Reconciliation", "Deposit Matching", "Discrepancy Resolution"],
  },
  {
    Icon: FileCheck2,
    title: "Financial Controls",
    desc: "Internal controls and documentation standards that support accuracy and audit readiness.",
    deliverables: ["Control Documentation", "Record Standardisation", "Audit Readiness", "Compliance Support"],
  },
  {
    Icon: FileSpreadsheet,
    title: "Excel Engineering",
    desc: "Advanced financial templates, spreadsheet automation, and data engineering built for scale.",
    deliverables: ["Financial Templates", "PDF to Excel", "Data Cleaning", "Spreadsheet Automation"],
  },
  {
    Icon: Layers,
    title: "Accounting Operations",
    desc: "End-to-end accounting operations support — from daily entries to financial statement preparation.",
    deliverables: ["Accounts Payable", "Accounts Receivable", "Asset Management", "Liability Tracking"],
  },
  {
    Icon: FileText,
    title: "Business Reporting",
    desc: "Structured management reports and business performance documentation for decision-makers.",
    deliverables: ["Management Accounts", "Board Packs", "Performance Reports", "Cash Flow Reports"],
  },
];

function ExpertiseSection() {
  return (
    <section className="section section--soft" id="expertise">
      <div className="container">
        <div className="fin-section-header">
          <div>
            <span className="eyebrow">Financial Expertise</span>
            <h2>Eight disciplines. One integrated practice.</h2>
          </div>
          <p>
            Every capability listed here is backed by real engagement experience — not theoretical knowledge. Each discipline connects to documented deliverables and measurable outcomes.
          </p>
        </div>
        <div className="fin-expertise-grid">
          {expertiseCards.map(({ Icon, title, desc, deliverables }) => (
            <div key={title} className="fin-exp-card">
              <div className="fin-exp-icon"><Icon size={22} /></div>
              <h3>{title}</h3>
              <p>{desc}</p>
              <ul className="fin-exp-list">
                {deliverables.map((d) => (
                  <li key={d}><CheckCircle2 size={12} />{d}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   SECTION 3 — CASE STUDIES (Upgraded)
═══════════════════════════════════════════════════════════ */
type CaseStudy = {
  tag:          string;
  industry:     string;
  role:         string;
  title:        string;
  challenge:    string;
  approach:     string;
  deliverables: string[];
  tools:        string[];
  areas:        string[];
  outcome:      string;
  timeframe:    string;
  accent:       string;
  accentBorder: string;
  Visual:       () => ReactElement;
};

function EngagementCover({
  Icon,
  label,
  title,
  stages,
  badges,
  background,
  borderColor,
}: {
  Icon: typeof BarChart3;
  label: string;
  title: string;
  stages: string[];
  badges: string[];
  background: string;
  borderColor: string;
}) {
  return (
    <div className="fin-cs-visual" style={{ background, borderColor }} aria-hidden="true">
      <div className="fin-cs-visual-label"><Icon size={13} /> {label}</div>
      <div className="fin-cs-visual-title">{title}</div>
      <div className="fin-cs-rows">
        {stages.map((stage, index) => (
          <div key={stage} className="fin-cs-row">
            <span>{stage}</span>
            <span className="fin-cs-val">{String(index + 1).padStart(2, "0")}</span>
          </div>
        ))}
      </div>
      <div className="fin-cs-badge-row">
        {badges.map((badge) => <span key={badge} className="fin-cs-badge">{badge}</span>)}
      </div>
    </div>
  );
}

function ConstructionVisual() {
  return <EngagementCover Icon={BarChart3} label="Financial Modelling" title="Projection and planning architecture" stages={["Revenue assumptions", "Expense structure", "Profit analysis", "Cash flow planning"]} badges={["Excel Dashboard", "Forecasting Model"]} background="linear-gradient(135deg,#e8f1ff 0%,#f7faff 100%)" borderColor="rgba(11,91,211,0.15)" />;
}

function CoachingVisual() {
  return <EngagementCover Icon={BookOpen} label="Bookkeeping" title="Financial statement foundation" stages={["QuickBooks configuration", "Chart of accounts", "Financial statements", "Owner handover"]} badges={["QuickBooks Online", "Financial Reporting"]} background="linear-gradient(135deg,#f0fdf6 0%,#ffffff 100%)" borderColor="rgba(16,163,92,0.15)" />;
}

function RetailVisual() {
  return <EngagementCover Icon={Layers} label="Financial Architecture" title="Structured accounting framework" stages={["Account architecture", "Category standards", "Historical migration", "Team training"]} badges={["Chart of Accounts", "Financial Structure"]} background="linear-gradient(135deg,#fff8f0 0%,#ffffff 100%)" borderColor="rgba(234,142,30,0.15)" />;
}

function MultiEntityVisual() {
  return <EngagementCover Icon={RefreshCw} label="Bookkeeping Clean-Up" title="Multi-entity reconciliation workflow" stages={["Transaction catch-up", "Account reconciliation", "Intercompany treatment", "Audit trail handover"]} badges={["Multi-entity", "Bank Reconciliation"]} background="linear-gradient(135deg,#f5f0ff 0%,#ffffff 100%)" borderColor="rgba(139,92,246,0.15)" />;
}

const caseStudies: CaseStudy[] = [
  {
    tag:       "Financial Modelling",
    industry:  "Construction",
    role:      "Financial Analyst",
    title:     "Financial Projection Dashboard",
    challenge: "A construction business had no forward-looking financial visibility. Revenue, expenses, and cash flow existed in disconnected records with no unified view of where the business was heading financially.",
    approach:  "Built a structured Excel financial model connecting revenue forecasting, expense tracking by category, profit margin analysis, and a 90-day cash flow projection — all driven from a single source of truth with documented assumptions.",
    deliverables: ["Revenue Forecasting Model","Expense Tracking System","Profit Margin Analysis","Cash Flow Projection (90-day)","Excel Financial Dashboard"],
    tools:     ["Microsoft Excel","Financial Modelling","Chart of Accounts","Data Validation"],
    areas:     ["Financial Reporting","Cash Flow Analysis","Expense Management","Revenue Analysis"],
    outcome:   "Leadership gained a proactive financial view they could update weekly — replacing reactive cash management with planned, documented operations and a reusable model.",
    timeframe: "1–7 days",
    accent:    "#e8f1ff",
    accentBorder: "rgba(11,91,211,0.15)",
    Visual:    ConstructionVisual,
  },
  {
    tag:       "Bookkeeping",
    industry:  "Coaching",
    role:      "Accountant",
    title:     "QuickBooks Financial Statements",
    challenge: "A coaching business was operating without structured financial records. Income and expenses existed in a bank account, but there were no proper books, no P&L, and no balance sheet — making tax preparation and business planning impossible.",
    approach:  "Configured QuickBooks from scratch with a chart of accounts tailored to coaching services. Produced clean P&L, balance sheet, and budget reports. Transferred knowledge to the owner for independent maintenance.",
    deliverables: ["QuickBooks Setup & Configuration","Chart of Accounts Design","Profit & Loss Statement","Balance Sheet","Budget Reports"],
    tools:     ["QuickBooks Online","Chart of Accounts","Financial Reporting","Budget Management"],
    areas:     ["Bookkeeping","Financial Statements","Accounting Operations","Business Reporting"],
    outcome:   "The owner had clean, professional financial statements ready for tax preparation and a sustainable accounting system they could operate independently.",
    timeframe: "1–7 days",
    accent:    "#f0fdf6",
    accentBorder: "rgba(16,163,92,0.15)",
    Visual:    CoachingVisual,
  },
  {
    tag:       "Financial Architecture",
    industry:  "Retail & Wholesale",
    role:      "Financial Consultant",
    title:     "Chart of Accounts Implementation",
    challenge: "A retail and wholesale operation had grown organically without a structured financial architecture. Revenue streams, cost categories, and inventory expenses were commingled — making accurate reporting and tax compliance unreliable.",
    approach:  "Designed a complete chart of accounts for the retail/wholesale environment, migrated historical transactions into the new structure, delivered a reporting framework, and trained the internal team on classification standards.",
    deliverables: ["Chart of Accounts Design","Financial Structure Architecture","Expense Categorisation System","Historical Data Migration","Team Training","Reporting Framework"],
    tools:     ["QuickBooks","Chart of Accounts","Financial Architecture","Data Migration"],
    areas:     ["Accounting Operations","Financial Controls","Record Standardisation","Business Reporting"],
    outcome:   "Clean, trustworthy financial records with a structure the business can maintain — and reports that accurately reflect business performance.",
    timeframe: "1–7 days",
    accent:    "#fff8f0",
    accentBorder: "rgba(234,142,30,0.15)",
    Visual:    RetailVisual,
  },
  {
    tag:       "Bookkeeping Clean-Up",
    industry:  "Business Services",
    role:      "Senior Accountant",
    title:     "Bookkeeping Cleanup & Catch-Up",
    challenge: "A multi-entity business services operation had months of backlogged bookkeeping across two companies with intercompany transactions. Accounts were unreconciled, transactions were misclassified, and tax deadlines were approaching.",
    approach:  "Completed a full catch-up engagement: categorised and reconciled all transactions across both entities, resolved intercompany accounting treatment, reconciled all bank accounts, and delivered tax-ready books with clean audit trails.",
    deliverables: ["Multi-company Bookkeeping Catch-Up","Intercompany Accounting Resolution","Bank Reconciliation (all accounts)","Tax-Ready Financial Records","Audit Trail Documentation"],
    tools:     ["QuickBooks","Multi-entity Accounting","Bank Reconciliation","Financial Cleanup"],
    areas:     ["Bookkeeping","Bank Reconciliation","Financial Controls","Accounting Operations"],
    outcome:   "Both entities had fully reconciled, tax-ready books with intercompany transactions properly structured — and a clear audit trail for each account.",
    timeframe: "1–7 days",
    accent:    "#f5f0ff",
    accentBorder: "rgba(139,92,246,0.15)",
    Visual:    MultiEntityVisual,
  },
];

function CaseStudiesSection() {
  return (
    <section className="section" id="case-studies">
      <div className="container">
        <div className="fin-section-header">
          <div>
            <span className="eyebrow">Consulting Engagements</span>
            <h2>Evidence you can inspect.</h2>
          </div>
          <p>
            Real client engagements documented as consulting case studies. Each shows the business problem, the approach taken, the deliverables produced, and the outcome achieved.
          </p>
        </div>
        <div className="fin-cs-list">
          {caseStudies.map((cs, i) => (
            <article key={cs.title} className={`fin-cs-case${i % 2 !== 0 ? " fin-cs-case--rev" : ""}`}>
              <cs.Visual />
              <div className="fin-cs-body">
                <div className="fin-cs-meta">
                  <span className="pill">{cs.tag}</span>
                  <span className="pill">{cs.industry}</span>
                  <span className="fin-cs-role">{cs.role}</span>
                </div>
                <h3>{cs.title}</h3>
                <div className="fin-cs-block">
                  <div className="fin-cs-block-label">Business Challenge</div>
                  <p>{cs.challenge}</p>
                </div>
                <div className="fin-cs-block">
                  <div className="fin-cs-block-label">Solution — Current Approach</div>
                  <p>{cs.approach}</p>
                </div>
                <div className="fin-cs-deliverables">
                  <div className="fin-cs-block-label">Deliverables</div>
                  <ul>
                    {cs.deliverables.map((d) => (
                      <li key={d}><CheckCircle2 size={12} />{d}</li>
                    ))}
                  </ul>
                </div>
                <div className="fin-cs-block">
                  <div className="fin-cs-block-label">Practice Areas</div>
                  <div className="fin-cs-tools">
                    {cs.areas.map((area) => <span key={area} className="fin-tool-tag">{area}</span>)}
                  </div>
                </div>
                <div className="fin-cs-block">
                  <div className="fin-cs-block-label">Tools</div>
                  <div className="fin-cs-tools">
                    {cs.tools.map((t) => <span key={t} className="fin-tool-tag">{t}</span>)}
                  </div>
                </div>
                <div className="fin-cs-block">
                  <div className="fin-cs-block-label">Business Outcome</div>
                  <div className="fin-cs-outcome">
                    <TrendingUp size={14} />
                    <span>{cs.outcome}</span>
                  </div>
                </div>
                <div className="fin-cs-footer">
                  <span className="fin-cs-timeframe">Timeline: {cs.timeframe}</span>
                  <Link href="/contact?interest=financial" className="btn btn--secondary btn--sm">
                    Discuss similar work <ArrowUpRight size={13} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}


/* ═══════════════════════════════════════════════════════════
   SECTION 4 — ACCOUNTING OPERATIONS
═══════════════════════════════════════════════════════════ */
const accountingOps = [
  { Icon: BookOpen,      title: "Daily Bookkeeping",        desc: "Accurate daily entry and categorisation of transactions to keep records current and reliable." },
  { Icon: Database,      title: "General Ledger",           desc: "Maintained and reconciled general ledger with consistent coding and clean audit trails." },
  { Icon: FileText,      title: "Journal Entries",          desc: "Properly structured journal entries with supporting documentation for every adjustment." },
  { Icon: ClipboardList, title: "Trial Balance",            desc: "Prepared and reviewed trial balance to verify ledger accuracy before financial statements." },
  { Icon: RefreshCw,     title: "Monthly Close",            desc: "Structured month-end close process with clear ownership, checklists, and sign-off workflows." },
  { Icon: BarChart2,     title: "Financial Statements",     desc: "Complete financial statement preparation: P&L, balance sheet, and cash flow." },
  { Icon: TrendingUp,    title: "Revenue Tracking",         desc: "Systematic revenue recognition and tracking aligned with business reporting requirements." },
  { Icon: Target,        title: "Expense Tracking",         desc: "Categorised expense records with clear cost centre allocation and budget variance analysis." },
  { Icon: FileCheck2,    title: "Financial Documentation",  desc: "Organised, complete supporting documentation for every financial record and transaction." },
  { Icon: Layers,        title: "Asset & Liability Management", desc: "Accurate tracking of assets, liabilities, and inventory for balance sheet integrity." },
];

function AccountingOpsSection() {
  return (
    <section className="section section--soft" id="accounting-operations">
      <div className="container">
        <div className="fin-section-header">
          <div>
            <span className="eyebrow">Accounting Operations</span>
            <h2>The operational layer that holds everything together.</h2>
          </div>
          <p>
            Sound financial reporting starts with sound bookkeeping. These are the operational disciplines that keep records accurate, auditable, and decision-ready at every level of the business.
          </p>
        </div>
        <div className="fin-ops-grid">
          {accountingOps.map(({ Icon, title, desc }) => (
            <div key={title} className="fin-ops-card">
              <div className="fin-ops-icon"><Icon size={20} /></div>
              <h4>{title}</h4>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   SECTION 5 — FINANCIAL REPORTING & ANALYSIS
═══════════════════════════════════════════════════════════ */
const reportingItems = [
  { label: "Profit & Loss Statement",     detail: "Monthly and YTD P&L with gross and net margin analysis" },
  { label: "Balance Sheet",               detail: "Assets, liabilities, and equity structured for executive review" },
  { label: "Gross Profit Analysis",       detail: "Revenue less direct costs with category-level breakdown" },
  { label: "Net Profit Analysis",         detail: "Bottom-line profitability after all operational expenses" },
  { label: "Business Performance Report", detail: "Consolidated performance view for operational decision-making" },
  { label: "Executive Reports",           detail: "Board-ready summaries with commentary and KPI highlights" },
  { label: "Cash Flow Reporting",         detail: "Operating, investing, and financing cash flow by period" },
  { label: "Management Accounts",         detail: "Monthly management accounts with variance analysis" },
  { label: "KPI Reporting",              detail: "Key performance indicators tracked against targets" },
  { label: "Executive Dashboards",        detail: "Visual dashboard summaries for leadership teams" },
];

function ReportingSection() {
  return (
    <section className="section" id="reporting-analysis">
      <div className="container">
        <div className="fin-rpt-grid">
          <div className="fin-rpt-copy">
            <span className="eyebrow">Financial Reporting & Analysis</span>
            <h2>Reports that earn their place in the room.</h2>
            <p>
              Financial reports are only valuable when decision-makers can understand and act on them. Every report produced is designed around clarity, accuracy, and the specific decision it needs to support.
            </p>
            <p>
              From daily transaction summaries to executive board packs, the standard is the same: accurate data, clean presentation, and documented methodology.
            </p>
            <Link href="/contact?interest=financial" className="btn btn--primary" style={{ marginTop: "var(--sp-4)", display: "inline-flex", alignItems: "center", gap: 8 }}>
              Discuss reporting requirements <ArrowRight size={16} />
            </Link>
          </div>
          <div className="fin-rpt-list">
            {reportingItems.map(({ label, detail }) => (
              <div key={label} className="fin-rpt-item">
                <div className="fin-rpt-item-dot" />
                <div>
                  <div className="fin-rpt-item-label">{label}</div>
                  <div className="fin-rpt-item-detail">{detail}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   SECTION 6 — BANKING & RECONCILIATION
═══════════════════════════════════════════════════════════ */
const reconciliationItems = [
  { Icon: RefreshCw,  title: "Bank Reconciliation",    desc: "Full reconciliation of bank statements against the general ledger, with every discrepancy investigated and resolved." },
  { Icon: Database,   title: "Cash Reconciliation",    desc: "Cash position verification across accounts to confirm reported balances reflect actual holdings." },
  { Icon: LineChart,  title: "Loan Tracking",          desc: "Accurate tracking of loan balances, repayment schedules, and interest accruals across all facilities." },
  { Icon: Calculator, title: "Interest Tracking",      desc: "Monthly interest expense verification and allocation against the correct cost centres." },
  { Icon: Eye,        title: "Bank Charge Monitoring", desc: "Review and categorisation of bank charges, fees, and service costs for accurate expense reporting." },
  { Icon: CheckCircle2, title: "Deposit Reconciliation", desc: "Matching deposit records to source transactions with full documentation for audit purposes." },
];

function BankingSection() {
  return (
    <section className="section section--soft" id="banking-reconciliation">
      <div className="container">
        <div className="fin-section-header">
          <div>
            <span className="eyebrow">Banking & Reconciliation</span>
            <h2>Every account. Every period. Fully reconciled.</h2>
          </div>
          <p>
            Bank reconciliation is the foundation of financial accuracy. Unreconciled accounts introduce errors that compound across every report, forecast, and tax return that depends on them.
          </p>
        </div>
        <div className="fin-bank-grid">
          {reconciliationItems.map(({ Icon, title, desc }) => (
            <div key={title} className="fin-bank-card card">
              <div className="card-icon"><Icon size={20} /></div>
              <h4>{title}</h4>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   SECTION 7 — EXCEL & FINANCIAL DATA
═══════════════════════════════════════════════════════════ */
const excelCapabilities = [
  {
    title:    "Advanced Financial Templates",
    desc:     "Purpose-built Excel templates for financial reporting, budgeting, forecasting, and analysis — designed to be maintained without specialist support.",
    features: ["P&L templates","Cash flow models","Budget variance trackers","Financial dashboards"],
  },
  {
    title:    "Spreadsheet Automation",
    desc:     "Formula engineering, macro-free automation using structured Excel features, and data validation systems that reduce manual errors.",
    features: ["Automated calculations","Data validation rules","Conditional formatting","Structured references"],
  },
  {
    title:    "PDF to Excel Conversion",
    desc:     "Accurate conversion of financial documents, bank statements, and reports from PDF format into structured, analysis-ready Excel data.",
    features: ["Bank statement extraction","Report conversion","Data structuring","Format standardisation"],
  },
  {
    title:    "Data Cleaning & Standardisation",
    desc:     "Large-dataset processing: duplicate removal, format standardisation, error correction, and data validation at scale.",
    features: ["Duplicate removal","Format standardisation","Error correction","Data validation"],
  },
];

function ExcelDataSection() {
  return (
    <section className="section" id="excel-data">
      <div className="container">
        <div className="fin-section-header">
          <div>
            <span className="eyebrow">Excel & Financial Data Engineering</span>
            <h2>Where data becomes decision-ready.</h2>
          </div>
          <p>
            Excel remains the dominant tool in financial operations. The difference between a useful model and a liability is engineering discipline — structured data, documented assumptions, and validation built in from the start.
          </p>
        </div>
        <div className="fin-excel-grid">
          {excelCapabilities.map(({ title, desc, features }) => (
            <div key={title} className="fin-excel-card">
              <div className="fin-excel-icon"><FileSpreadsheet size={22} /></div>
              <h3>{title}</h3>
              <p>{desc}</p>
              <div className="fin-excel-features">
                {features.map((f) => <span key={f} className="fin-excel-tag">{f}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   SECTION 8 — FINANCIAL CONTROLS
═══════════════════════════════════════════════════════════ */
const controlItems = [
  { Icon: ShieldCheck, title: "Accounting Accuracy",       desc: "Systematic review and verification of entries to maintain ledger integrity across all accounts and periods." },
  { Icon: FileCheck2,  title: "Financial Validation",      desc: "Structured validation of financial data before it flows into reports, ensuring source accuracy." },
  { Icon: FileText,    title: "Documentation Standards",   desc: "Complete supporting documentation for every transaction, adjustment, and financial decision." },
  { Icon: Database,    title: "Record Standardisation",    desc: "Consistent coding, naming, and classification standards applied across all financial records." },
  { Icon: Lock,        title: "Internal Controls",         desc: "Control frameworks that reduce the risk of error, inconsistency, and misclassification." },
  { Icon: Shield,      title: "Audit Readiness",           desc: "Records maintained to audit-ready standard at all times — not just at year-end." },
];

function FinancialControlsSection() {
  return (
    <section className="section section--soft" id="financial-controls">
      <div className="container">
        <div className="fin-section-header">
          <div>
            <span className="eyebrow">Financial Controls</span>
            <h2>Accuracy you can trust under scrutiny.</h2>
          </div>
          <p>
            Financial controls are not an audit-season exercise. They are the ongoing discipline that keeps records accurate, reports reliable, and the business protected from the compounding cost of financial errors.
          </p>
        </div>
        <div className="fin-ctrl-grid">
          {controlItems.map(({ Icon, title, desc }) => (
            <div key={title} className="fin-ctrl-card card">
              <div className="card-icon"><Icon size={20} /></div>
              <h4>{title}</h4>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


/* ═══════════════════════════════════════════════════════════
   SECTION 9 — CORE SERVICES
═══════════════════════════════════════════════════════════ */
const services = [
  {
    Icon: LineChart,
    num: "01",
    title: "Management Reporting",
    desc: "Decision-ready reporting that gives leadership a shared, accurate view of financial performance — monthly accounts, executive dashboards, and board packs.",
    deliverables: ["Monthly management accounts", "Board-ready dashboards", "KPI tracking & commentary", "Variance analysis"],
  },
  {
    Icon: Database,
    num: "02",
    title: "Bookkeeping & Accounting Operations",
    desc: "Accurate, structured bookkeeping from daily transactions through to financial statement preparation — built on sound accounting discipline.",
    deliverables: ["General ledger maintenance", "Journal entries & trial balance", "Financial statement preparation", "Month-end close procedures"],
  },
  {
    Icon: Workflow,
    num: "03",
    title: "Financial Controls & Compliance",
    desc: "Internal control frameworks, documentation standards, and audit-ready record-keeping that protect the business and support confident reporting.",
    deliverables: ["Internal control documentation", "Audit trail maintenance", "Record standardisation", "Compliance calendar support"],
  },
  {
    Icon: FileSpreadsheet,
    num: "04",
    title: "Excel Engineering & Data Management",
    desc: "Financial model engineering, data cleaning, template automation, and PDF-to-Excel conversion for businesses managing large financial datasets.",
    deliverables: ["Financial templates & models", "Data cleaning & validation", "PDF to Excel conversion", "Spreadsheet automation"],
  },
] as const;

function CoreServicesSection() {
  return (
    <section className="section" id="core-services">
      <div className="container">
        <div className="fin-section-header">
          <div>
            <span className="eyebrow">Core Services</span>
            <h2>From monthly scramble to steady signal.</h2>
          </div>
          <p>
            Four integrated service areas — each designed to connect the finance detail to the decision it enables.
          </p>
        </div>
        <div className="cs-grid">
          {services.map(({ Icon, num, title, desc, deliverables }) => (
            <article className="cs-card" key={title}>
              <div className="cs-card-head">
                <div className="cs-icon"><Icon size={24} /></div>
                <span className="cs-num">{num}</span>
              </div>
              <h3>{title}</h3>
              <p>{desc}</p>
              <ul className="cs-deliverables">
                {deliverables.map((d) => <li key={d} className="cs-deliverable">{d}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   SECTION 10 — HOW WE WORK (TIMELINE)
═══════════════════════════════════════════════════════════ */
const steps = [
  { num: "01", label: "Understand",  Icon: Search,       title: "Map the operating reality",    body: "Audit current systems, records, and processes before touching anything. No assumptions." },
  { num: "02", label: "Plan",        Icon: ClipboardList, title: "Prioritise the right change",  body: "Focus on the control or visibility improvement that creates the most value first." },
  { num: "03", label: "Implement",   Icon: Settings2,    title: "Work with your team",          body: "Deliver alongside your people — clean handovers, documented, no dependency on us to run." },
  { num: "04", label: "Validate",    Icon: BarChart2,    title: "Measure and confirm",          body: "Review the evidence, confirm the outcome, define the next improvement explicitly." },
] as const;

function TimelineSection() {
  return (
    <section className="timeline-section">
      <div className="container">
        <div className="fin-section-header">
          <div>
            <span className="eyebrow">How We Work</span>
            <h2>Clear first. Then connected.</h2>
          </div>
          <p>Four deliberate steps. No wasted motion — just steady, compounding improvement.</p>
        </div>
        <div className="timeline-grid">
          {steps.map(({ num, label, Icon, title, body }) => (
            <div className="timeline-step" key={num}>
              <div className="timeline-step-num" aria-hidden="true">{num}</div>
              <div className="timeline-step-icon"><Icon size={20} /></div>
              <span className="timeline-step-label">{label}</span>
              <h3>{title}</h3>
              <p>{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   SECTION 11 — EXPANDED RESULTS
═══════════════════════════════════════════════════════════ */
const results = [
  { Icon: Eye,          title: "Better financial visibility",     body: "One clear picture of performance. No more spreadsheet archaeology before every board call." },
  { Icon: BookOpen,     title: "More accurate books",             body: "Consistent coding, reconciled accounts, and records that reflect the actual state of the business." },
  { Icon: TrendingUp,   title: "Faster reporting",                body: "Structured close procedures that compress reporting cycles from weeks to days." },
  { Icon: FileCheck2,   title: "Cleaner financial records",       body: "Well-organised, documented records that any accountant, auditor, or stakeholder can navigate confidently." },
  { Icon: Zap,          title: "Reduced manual work",             body: "Automation and structured workflows replace the repetitive manual steps that create errors and delays." },
  { Icon: BarChart3,    title: "Structured documentation",        body: "Complete supporting documentation for every transaction, adjustment, and financial decision." },
  { Icon: CheckCircle2, title: "Audit-ready records",             body: "Books maintained to audit-ready standard at all times — not scrambled into shape at year-end." },
  { Icon: Target,       title: "Reliable decision-making",        body: "When the numbers are trustworthy and timely, every leadership decision becomes simpler and more defensible." },
  { Icon: LineChart,    title: "Improved executive reporting",    body: "Board-ready reports that communicate performance clearly without requiring a finance specialist in the room." },
  { Icon: Shield,       title: "Stronger financial controls",     body: "Control frameworks that reduce the risk of error, misclassification, and undocumented financial exposure." },
] as const;

function ResultsSection() {
  return (
    <section className="results-section">
      <div className="container">
        <div className="fin-section-header">
          <div>
            <span className="eyebrow">What Clients Gain</span>
            <h2>The outcomes that matter.</h2>
          </div>
          <p>Not promises — patterns delivered repeatedly across financial operations engagements.</p>
        </div>
        <div className="results-grid">
          {results.map(({ Icon, title, body }) => (
            <div className="result-block" key={title}>
              <div className="result-block-icon"><Icon size={22} /></div>
              <h3>{title}</h3>
              <p>{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   SECTION 12 — TECHNOLOGY & TOOLS
═══════════════════════════════════════════════════════════ */
const techGroups = [
  { label: "Microsoft Excel",           tags: ["Financial modelling","Spreadsheet design","Formula engineering","Dashboard creation"] },
  { label: "Financial Reporting",       tags: ["P&L preparation","Balance sheet","Cash flow reports","Executive dashboards"] },
  { label: "QuickBooks",                tags: ["Setup & configuration","Chart of accounts","Financial statements","Budget reports"] },
  { label: "Spreadsheet Automation",    tags: ["Data validation","Conditional logic","Structured references","Error-proofing"] },
  { label: "Accounting Documentation",  tags: ["Journal entries","Trial balance","Audit trails","Record standardisation"] },
  { label: "PDF Processing",            tags: ["PDF to Excel","Data extraction","Format conversion","Structured output"] },
  { label: "Data Validation",           tags: ["Duplicate removal","Data cleaning","Format standardisation","Quality checks"] },
  { label: "Structured Reporting",      tags: ["Management accounts","Board packs","KPI tracking","Commentary"] },
];

function TechnologySection() {
  return (
    <section className="section section--soft" id="technology">
      <div className="container">
        <div className="fin-section-header fin-section-header--center">
          <span className="eyebrow">Technology & Tools</span>
          <h2>The tools behind the work.</h2>
          <p>Every tool listed here maps to real, documented deliverables — not a technology list built for marketing.</p>
        </div>
        <div className="fin-tech-grid">
          {techGroups.map(({ label, tags }) => (
            <div key={label} className="fin-tech-card">
              <h4>{label}</h4>
              <div className="fin-tech-tags">
                {tags.map((t) => <span key={t} className="fin-tech-tag">{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   SECTION 13 — WHY FINWEB (upgraded alternating blocks)
═══════════════════════════════════════════════════════════ */
function WhyVisualBars() {
  const rows = ["Source records", "Documented assumptions", "Review context", "Decision-ready output"];
  return (
    <div className="why-block-visual" aria-hidden="true">
      <ul className="check-list" style={{ width: "100%" }}>
        {rows.map((item) => <li key={item}>{item}</li>)}
      </ul>
    </div>
  );
}

function WhyVisualDocs() {
  return (
    <div className="why-block-visual">
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--sp-1)", width: "100%" }}>
        {["General Ledger — Reconciled","Trial Balance — Verified","Bank Statements — Matched","Audit Trail — Complete"].map((item) => (
          <div key={item} style={{ display: "flex", alignItems: "center", gap: "var(--sp-2)", padding: "8px 12px", background: "var(--soft)", borderRadius: "var(--radius-sm)", border: "1px solid var(--line)" }}>
            <CheckCircle2 size={14} style={{ color: "var(--blue)", flexShrink: 0 }} />
            <span style={{ fontSize: "var(--text-sm)", fontWeight: 600, color: "var(--navy)" }}>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function WhyVisualProcess() {
  return (
    <div className="why-block-visual" aria-hidden="true">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--sp-2)", width: "100%" }}>
        {["Close checklist", "Reconciliation sequence", "Defined ownership", "Documented handover"].map((label) => (
          <div key={label} style={{ background: "var(--soft)", border: "1px solid var(--line)", borderRadius: "var(--radius-sm)", padding: "var(--sp-2)", textAlign: "center" }}>
            <Workflow size={20} style={{ color: "var(--blue)", marginInline: "auto" }} />
            <div style={{ fontSize: 11, color: "var(--subtle)", marginTop: 6 }}>{label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function WhyVisualLongTerm() {
  return (
    <div className="why-block-visual">
      <ul className="check-list" style={{ width: "100%" }}>
        {["Documented so your team can maintain it","Structured to survive staff changes","Auditable at any point in time","Built to run without a specialist present"].map((i) => <li key={i}>{i}</li>)}
      </ul>
    </div>
  );
}

const whyBlocks = [
  {
    Icon: ShieldCheck,
    title: "Evidence-based reporting",
    body: "Every financial report carries a source, a period, and documented assumptions. No vague claims. No borrowed credibility. You can inspect the numbers and trace every figure back to its origin.",
    Visual: WhyVisualBars,
    reverse: false,
  },
  {
    Icon: FileCheck2,
    title: "Accounting discipline",
    body: "Books are only useful when they are accurate. Every engagement applies the same standards: consistent coding, complete documentation, and reconciliation that holds up under review.",
    Visual: WhyVisualDocs,
    reverse: true,
  },
  {
    Icon: Workflow,
    title: "Process-oriented delivery",
    body: "We replace manual, fragile processes with structured, repeatable workflows. Month-end close runs on a checklist. Reconciliation follows a defined sequence. Nothing depends on memory.",
    Visual: WhyVisualProcess,
    reverse: false,
  },
  {
    Icon: TrendingUp,
    title: "Long-term maintainability",
    body: "Work is delivered with documentation, structured files, and clear instructions. The client should be more capable after the engagement — not more dependent on us to keep things running.",
    Visual: WhyVisualLongTerm,
    reverse: true,
  },
] as const;

function WhyFinwebSection() {
  return (
    <section className="why-section" id="why-finweb">
      <div className="container">
        <div className="fin-section-header">
          <div>
            <span className="eyebrow">Why FINWEB</span>
            <h2>Proof over promises.</h2>
          </div>
          <p>Four principles that shape every financial engagement — and make the difference between a project and a lasting system.</p>
        </div>
        <div className="why-block-list">
          {whyBlocks.map(({ Icon, title, body, Visual, reverse }) => (
            <div key={title} className={`why-block${reverse ? " why-block--reverse" : ""}`}>
              <div className="why-block-copy">
                <div className="why-block-icon"><Icon size={26} /></div>
                <h3>{title}</h3>
                <p>{body}</p>
              </div>
              <Visual />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   PAGE ROOT
═══════════════════════════════════════════════════════════ */
export default function FinancialServices() {
  return (
    <>
      {/* 1. HERO */}
      <section className="fin-hero">
        <div className="container fin-hero-grid">
          <div className="fin-hero-copy">
            <span className="eyebrow">Financial Operations & Accounting</span>
            <h1>Know where the numbers are taking you.</h1>
            <p>
              Enterprise-grade financial operations consulting — from daily bookkeeping and bank reconciliation to executive reporting and financial model engineering. Every engagement is built on accounting discipline, not assumptions.
            </p>
            <div className="actions">
              <Link className="btn btn--primary" href="/contact?interest=financial">
                Discuss your finance system <ArrowRight size={17} />
              </Link>
              <Link className="btn btn--secondary" href="/portfolio">
                See the evidence
              </Link>
            </div>
            <div className="fin-trust">
              {["Financial Reporting","Bookkeeping","Bank Reconciliation","Excel Engineering","Financial Controls"].map((t) => (
                <span key={t} className="fin-trust-item">{t}</span>
              ))}
            </div>
          </div>
          <FinancialExpertiseVisual />
        </div>
      </section>

      {/* 2. EXPERTISE */}
      <ExpertiseSection />

      {/* 3. CASE STUDIES */}
      <CaseStudiesSection />

      {/* 4. ACCOUNTING OPERATIONS */}
      <AccountingOpsSection />

      {/* 5. REPORTING & ANALYSIS */}
      <ReportingSection />

      {/* 6. BANKING & RECONCILIATION */}
      <BankingSection />

      {/* 7. EXCEL & DATA */}
      <ExcelDataSection />

      {/* 8. FINANCIAL CONTROLS */}
      <FinancialControlsSection />

      {/* 9. CORE SERVICES */}
      <CoreServicesSection />

      {/* 10. TIMELINE */}
      <TimelineSection />

      {/* 11. RESULTS */}
      <ResultsSection />

      {/* 12. TECHNOLOGY */}
      <TechnologySection />

      {/* 13. WHY FINWEB */}
      <WhyFinwebSection />

      {/* 14. CTA */}
      <section className="fin-cta">
        <div className="fin-cta-inner">
          <span className="eyebrow">Ready when you are</span>
          <h2>Bring us the numbers.<br />We&rsquo;ll make them speak.</h2>
          <p>
            One conversation is enough to understand whether we are the right fit. No pitch deck, no pressure — just a direct discussion about what your financial operations need.
          </p>
          <div className="actions">
            <Link className="btn btn--primary" href="/contact?interest=financial">
              Discuss your finance system <ArrowRight size={17} />
            </Link>
            <Link className="btn btn--ghost" href="/about">
              Learn about FINWEB
            </Link>
          </div>
          <p className="fin-cta-note">
            FINWEB SOLUTION is not a law firm and does not provide legal advice.
          </p>
        </div>
      </section>
    </>
  );
}
