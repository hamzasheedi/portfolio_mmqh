"use client";
import Link from "next/link";
import { useMemo, useState } from "react";
import type { CaseStudy } from "@/lib/cms";

export function PortfolioExplorer({ cases }: { cases: CaseStudy[] }) {
  const [industry, setIndustry] = useState("All");
  const [service, setService] = useState("All");
  const filtered = useMemo(() => cases.filter((item) => (industry === "All" || item.industry === industry) && (service === "All" || item.service === service)), [cases, industry, service]);
  const industries = ["All", ...Array.from(new Set(cases.map((item) => item.industry)))];
  return <><div className="filters"><div className="field"><label htmlFor="industry">Industry</label><select id="industry" value={industry} onChange={(event) => setIndustry(event.target.value)}>{industries.map((value) => <option key={value}>{value}</option>)}</select></div><div className="field"><label htmlFor="service">Service engine</label><select id="service" value={service} onChange={(event) => setService(event.target.value)}><option>All</option><option value="financial">Financial</option><option value="web">Web</option></select></div></div><p aria-live="polite"><strong>{filtered.length}</strong> selected case {filtered.length === 1 ? "study" : "studies"}</p><div className="grid-3">{filtered.map((item) => <article className="card service-card" key={item.slug} style={{background:`linear-gradient(160deg,white 55%,${item.accent})`}}><div><div className="case-meta"><span className="pill">{item.industry}</span><span className="pill">{item.service === "web" ? "Web" : "Financial"}</span></div><h3 style={{fontSize:"1.8rem",marginTop:"1.2rem"}}>{item.title}</h3><p>{item.summary}</p><div className="metric"><strong>{item.metric.value}</strong><span>{item.metric.label}</span></div></div><Link className="button secondary" href={`/portfolio/${item.slug}`}>Read the case study</Link></article>)}</div>{filtered.length === 0 && <div className="notice">No published case studies match those filters. <button onClick={() => {setIndustry("All");setService("All");}}>Reset filters</button></div>}</>;
}
