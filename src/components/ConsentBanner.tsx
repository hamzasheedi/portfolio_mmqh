"use client";
import { useEffect, useState } from "react";

const key = "finweb-consent-v1";
export function ConsentBanner() {
  const [open, setOpen] = useState(false);
  useEffect(() => setOpen(!localStorage.getItem(key)), []);
  const choose = (analytics: boolean) => { localStorage.setItem(key, JSON.stringify({ policyVersion: "1.0", analytics, timestamp: new Date().toISOString() })); setOpen(false); };
  if (!open) return null;
  return <aside className="consent" aria-label="Cookie preferences" id="cookie-preferences"><p><strong>Your privacy, your choice.</strong><br/>Essential storage keeps this site working. Analytics stays off unless you choose it.</p><div className="consent-actions"><button className="button secondary" onClick={() => choose(false)}>Reject analytics</button><button className="button" onClick={() => choose(true)}>Accept analytics</button></div></aside>;
}
