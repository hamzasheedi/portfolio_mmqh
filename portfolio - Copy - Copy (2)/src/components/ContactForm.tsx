"use client";

import { useState, useRef, FormEvent, ChangeEvent } from "react";
import Link from "next/link";
import { AlertCircle, CheckCircle2, Loader2, Lock, Send } from "lucide-react";

type FieldErrors = Partial<Record<string, string[]>>;

interface FormState {
  inquiryType:    string;
  name:           string;
  email:          string;
  company:        string;
  country:        string;
  website:        string;
  budgetRange:    string;
  timeline:       string;
  message:        string;
  secureTransfer: boolean;
  consent:        boolean;
}

const INITIAL: FormState = {
  inquiryType:    "general",
  name:           "",
  email:          "",
  company:        "",
  country:        "",
  website:        "",
  budgetRange:    "",
  timeline:       "",
  message:        "",
  secureTransfer: false,
  consent:        false,
};

function validateField(name: keyof FormState, value: string | boolean): string {
  switch (name) {
    case "name":
      if (typeof value === "string" && value.trim().length < 2)
        return "Name must be at least 2 characters.";
      break;
    case "email":
      if (typeof value === "string" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim()))
        return "Please enter a valid email address.";
      break;
    case "company":
      if (typeof value === "string" && value.trim().length < 1)
        return "Company name is required.";
      break;
    case "website":
      if (typeof value === "string" && value.trim() && !/^https?:\/\/.+/.test(value.trim()))
        return "Website must start with https://";
      break;
    case "message":
      if (typeof value === "string" && value.trim().length < 20)
        return "Please describe your project in at least 20 characters.";
      break;
    case "consent":
      if (value !== true) return "You must accept the privacy policy to continue.";
      break;
  }
  return "";
}

export function ContactForm({ initialType }: { initialType?: string }) {
  const [form, setForm]       = useState<FormState>({ ...INITIAL, inquiryType: initialType ?? "general" });
  const [touched, setTouched] = useState<Partial<Record<keyof FormState, boolean>>>({});
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [submitState, setSubmitState] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [serverMessage, setServerMessage] = useState("");
  const [reference, setReference] = useState("");
  const idempotencyKey = useRef(crypto.randomUUID());

  function resetKey() { idempotencyKey.current = crypto.randomUUID(); }

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    const { name, value, type } = e.target;
    const newVal = type === "checkbox" ? (e.target as HTMLInputElement).checked : value;
    setForm((p) => ({ ...p, [name]: newVal }));
    if (touched[name as keyof FormState]) {
      const err = validateField(name as keyof FormState, newVal as string | boolean);
      setFieldErrors((p) => ({ ...p, [name]: err ? [err] : [] }));
    }
  }

  function handleBlur(e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setTouched((p) => ({ ...p, [name]: true }));
    const err = validateField(name as keyof FormState, value);
    setFieldErrors((p) => ({ ...p, [name]: err ? [err] : [] }));
  }

  function getError(field: keyof FormState): string {
    return touched[field] ? (fieldErrors[field]?.[0] ?? "") : "";
  }

  function validateAll(): boolean {
    const required: (keyof FormState)[] = ["name", "email", "company", "message", "consent"];
    const errs: FieldErrors = {};
    const allTouched: Partial<Record<keyof FormState, boolean>> = {};
    let valid = true;
    for (const field of required) {
      allTouched[field] = true;
      const err = validateField(field, form[field] as string | boolean);
      errs[field] = err ? [err] : [];
      if (err) valid = false;
    }
    if (form.website) {
      const err = validateField("website", form.website);
      errs.website = err ? [err] : [];
      allTouched.website = true;
      if (err) valid = false;
    }
    setTouched((p) => ({ ...p, ...allTouched }));
    setFieldErrors((p) => ({ ...p, ...errs }));
    return valid;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validateAll() || submitState === "loading") return;
    setSubmitState("loading");
    setServerMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Idempotency-Key": idempotencyKey.current },
        body: JSON.stringify({
          _hp:           "",
          inquiryType:   form.inquiryType,
          name:          form.name.trim(),
          email:         form.email.trim(),
          company:       form.company.trim(),
          country:       form.country.trim()  || undefined,
          website:       form.website.trim()  || undefined,
          budgetRange:   form.budgetRange     || undefined,
          timeline:      form.timeline        || undefined,
          message:       form.message.trim(),
          secureTransfer: form.secureTransfer,
          consent:       true,
        }),
      });
      const json = await res.json();
      if (!res.ok) {
        if (json.error?.fields) setFieldErrors(json.error.fields);
        throw new Error(json.error?.message ?? "Submission failed. Please try again.");
      }
      setReference(json.reference ?? "");
      setSubmitState("success");
    } catch (err) {
      setServerMessage(err instanceof Error ? err.message : "We could not send your inquiry. Please email hello@finwebsolution.com directly.");
      setSubmitState("error");
      resetKey();
    }
  }

  /* ── Success state ─────────────────────────────────────── */
  if (submitState === "success") {
    return (
      <div className="ct-success">
        <div className="ct-success-icon"><CheckCircle2 size={44} /></div>
        <h3>Inquiry received.</h3>
        <p>Thank you for reaching out. We will review your message and respond within <strong>24 hours</strong> on business days.</p>
        {reference && (
          <div className="ct-success-ref">
            <span className="ct-ref-label">Your reference</span>
            <span className="ct-ref-value">{reference}</span>
          </div>
        )}
        <p className="ct-success-email-note">A confirmation email has been sent to <strong>{form.email}</strong>.</p>
        <button className="btn btn--secondary btn--sm" onClick={() => { setForm({ ...INITIAL }); setTouched({}); setFieldErrors({}); setSubmitState("idle"); setReference(""); resetKey(); }}>
          Send another inquiry
        </button>
      </div>
    );
  }

  const isLoading = submitState === "loading";

  return (
    <form className="ct-form" onSubmit={handleSubmit} noValidate aria-label="Contact form">
      {/* Honeypot */}
      <input type="text" name="_hp" aria-hidden="true" tabIndex={-1} autoComplete="off"
        style={{ position: "absolute", left: "-9999px", opacity: 0, pointerEvents: "none" }}
        onChange={() => {}} />

      {/* Inquiry Type */}
      <div className="ct-form-group">
        <div className="ct-group-label">What can we help you with?</div>
        <div className="ct-type-grid">
          {[
            { value: "general",         label: "General Inquiry" },
            { value: "financial",       label: "Financial Services" },
            { value: "web-development", label: "Web Development" },
            { value: "partnership",     label: "Partnership" },
          ].map((opt) => (
            <label key={opt.value} className={`ct-type-chip${form.inquiryType === opt.value ? " ct-type-chip--active" : ""}`}>
              <input type="radio" name="inquiryType" value={opt.value} checked={form.inquiryType === opt.value}
                onChange={handleChange} className="ct-sr-only" />
              {opt.label}
            </label>
          ))}
        </div>
      </div>

      {/* Name + Email */}
      <div className="ct-form-row">
        <div className={`field${getError("name") ? " field--error" : ""}`}>
          <label htmlFor="ct-name">Full Name <span className="ct-req">*</span></label>
          <input id="ct-name" name="name" type="text" autoComplete="name" placeholder="Jane Smith"
            value={form.name} onChange={handleChange} onBlur={handleBlur} disabled={isLoading}
            aria-invalid={!!getError("name")} />
          {getError("name") && <span className="error" role="alert">{getError("name")}</span>}
        </div>
        <div className={`field${getError("email") ? " field--error" : ""}`}>
          <label htmlFor="ct-email">Work Email <span className="ct-req">*</span></label>
          <input id="ct-email" name="email" type="email" autoComplete="email" placeholder="jane@company.com"
            value={form.email} onChange={handleChange} onBlur={handleBlur} disabled={isLoading}
            aria-invalid={!!getError("email")} />
          {getError("email") && <span className="error" role="alert">{getError("email")}</span>}
        </div>
      </div>

      {/* Company + Country */}
      <div className="ct-form-row">
        <div className={`field${getError("company") ? " field--error" : ""}`}>
          <label htmlFor="ct-company">Company <span className="ct-req">*</span></label>
          <input id="ct-company" name="company" type="text" autoComplete="organization" placeholder="Acme Inc."
            value={form.company} onChange={handleChange} onBlur={handleBlur} disabled={isLoading}
            aria-invalid={!!getError("company")} />
          {getError("company") && <span className="error" role="alert">{getError("company")}</span>}
        </div>
        <div className="field">
          <label htmlFor="ct-country">Country <span className="ct-opt">(optional)</span></label>
          <input id="ct-country" name="country" type="text" autoComplete="country-name" placeholder="United States"
            value={form.country} onChange={handleChange} disabled={isLoading} />
        </div>
      </div>

      {/* Website */}
      <div className={`field${getError("website") ? " field--error" : ""}`}>
        <label htmlFor="ct-website">Website <span className="ct-opt">(optional)</span></label>
        <input id="ct-website" name="website" type="url" autoComplete="url" placeholder="https://yourcompany.com"
          value={form.website} onChange={handleChange} onBlur={handleBlur} disabled={isLoading}
          aria-invalid={!!getError("website")} />
        {getError("website") && <span className="error" role="alert">{getError("website")}</span>}
      </div>

      {/* Budget + Timeline */}
      <div className="ct-form-row">
        <div className="field">
          <label htmlFor="ct-budget">Budget Range <span className="ct-opt">(optional)</span></label>
          <select id="ct-budget" name="budgetRange" value={form.budgetRange} onChange={handleChange} disabled={isLoading}>
            <option value="">Select range</option>
            <option value="Under $500">Under $500</option>
            <option value="$500 – $1,000">$500 – $1,000</option>
            <option value="$1,000 – $5,000">$1,000 – $5,000</option>
            <option value="$5,000 – $10,000">$5,000 – $10,000</option>
            <option value="$10,000+">$10,000+</option>
            <option value="Not sure yet">Not sure yet</option>
          </select>
        </div>
        <div className="field">
          <label htmlFor="ct-timeline">Project Timeline <span className="ct-opt">(optional)</span></label>
          <select id="ct-timeline" name="timeline" value={form.timeline} onChange={handleChange} disabled={isLoading}>
            <option value="">Select timeline</option>
            <option value="As soon as possible">As soon as possible</option>
            <option value="Within 1 month">Within 1 month</option>
            <option value="1 – 3 months">1 – 3 months</option>
            <option value="3 – 6 months">3 – 6 months</option>
            <option value="Just exploring">Just exploring</option>
          </select>
        </div>
      </div>

      {/* Message */}
      <div className={`field${getError("message") ? " field--error" : ""}`}>
        <label htmlFor="ct-message">Project Details <span className="ct-req">*</span></label>
        <textarea id="ct-message" name="message" rows={6}
          placeholder="Describe what you are working on, what problem you need solved, and any relevant context…"
          value={form.message} onChange={handleChange} onBlur={handleBlur} disabled={isLoading}
          aria-invalid={!!getError("message")} />
        <div className="ct-char-count" aria-live="polite">{form.message.length} / 3000</div>
        {getError("message") && <span className="error" role="alert">{getError("message")}</span>}
      </div>

      {/* Checkboxes */}
      <div className="ct-checks">
        <label className="ct-check-label">
          <input type="checkbox" name="secureTransfer" checked={form.secureTransfer} onChange={handleChange} disabled={isLoading} />
          <span><Lock size={13} /> I may require a secure document transfer.</span>
        </label>
        <label className={`ct-check-label${getError("consent") ? " ct-check--error" : ""}`}>
          <input type="checkbox" name="consent" checked={form.consent} onChange={handleChange} onBlur={handleBlur} disabled={isLoading} />
          <span>
            I agree to the{" "}
            <Link href="/privacy/request" className="ct-inline-link">privacy policy</Link>
            {" "}and consent to FINWEB processing my inquiry.{" "}
            <span className="ct-req">*</span>
          </span>
        </label>
        {getError("consent") && <span className="error" role="alert">{getError("consent")}</span>}
      </div>

      {/* Server error */}
      {submitState === "error" && serverMessage && (
        <div className="ct-server-error" role="alert">
          <AlertCircle size={16} />
          <span>{serverMessage}</span>
        </div>
      )}

      {/* Submit */}
      <div className="ct-form-footer">
        <button type="submit" className="btn btn--primary ct-submit-btn" disabled={isLoading} aria-busy={isLoading}>
          {isLoading
            ? <><Loader2 size={16} className="ct-spin" /> Sending…</>
            : <><Send size={16} /> Send Inquiry</>}
        </button>
        <p className="ct-form-note">
          <Lock size={12} /> Sent securely · We typically reply within 24 hours
        </p>
      </div>
    </form>
  );
}
