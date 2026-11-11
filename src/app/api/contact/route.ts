import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { inquirySchema } from "@/lib/schemas/inquiry";

/* ── Rate limiter (in-memory, per IP) ───────────────────────
   Max 3 submissions per IP per 15 minutes.
   In production, replace with Redis/Upstash for multi-instance. */
const rateMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT  = 3;
const RATE_WINDOW = 15 * 60 * 1000; // 15 min in ms

function checkRateLimit(ip: string): boolean {
  const now   = Date.now();
  const entry = rateMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW });
    return true;
  }
  if (entry.count >= RATE_LIMIT) return false;
  entry.count++;
  return true;
}

/* ── Idempotency store (in-memory) ──────────────────────── */
const accepted = new Map<string, string>();

/* ── Nodemailer transporter ─────────────────────────────── */
function createTransporter() {
  return nodemailer.createTransport({
    host:   process.env.SMTP_HOST   ?? "smtp.gmail.com",
    port:   Number(process.env.SMTP_PORT ?? 465),
    secure: process.env.SMTP_SECURE !== "false",
    auth: {
      user: process.env.SMTP_USER ?? "",
      pass: process.env.SMTP_PASS ?? "",
    },
  });
}

/* ── HTML email — notification to FINWEB ───────────────── */
function buildNotificationEmail(data: {
  reference:   string;
  inquiryType: string;
  name:        string;
  email:       string;
  company:     string;
  country?:    string;
  website?:    string;
  budgetRange?: string;
  timeline?:   string;
  message:     string;
  secureTransfer?: boolean;
  submittedAt: string;
  ip:          string;
  userAgent:   string;
}): string {
  const row = (label: string, value: string) =>
    value
      ? `<tr>
           <td style="padding:10px 16px;font-weight:700;color:#071d3b;background:#f4f7fb;border-bottom:1px solid #dbe2ea;white-space:nowrap;width:160px;">${label}</td>
           <td style="padding:10px 16px;color:#526070;border-bottom:1px solid #dbe2ea;">${value}</td>
         </tr>`
      : "";

  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"/><meta name="viewport" content="width=device-width,initial-scale=1"/></head>
<body style="margin:0;padding:0;background:#f4f7fb;font-family:'Inter',system-ui,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f7fb;padding:40px 16px;">
  <tr><td align="center">
    <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 32px rgba(7,29,59,0.10);">

      <!-- Header -->
      <tr>
        <td style="background:#071d3b;padding:28px 32px;">
          <div style="font-size:18px;font-weight:900;color:#ffffff;letter-spacing:-0.03em;">
            FINWEB<span style="color:#0b5bd3;">.</span>
          </div>
          <div style="font-size:13px;color:rgba(255,255,255,0.5);margin-top:4px;">New Inquiry Notification</div>
        </td>
      </tr>

      <!-- Ref banner -->
      <tr>
        <td style="background:#0b5bd3;padding:14px 32px;">
          <span style="font-size:13px;font-weight:800;color:rgba(255,255,255,0.7);text-transform:uppercase;letter-spacing:0.1em;">Reference</span>
          <span style="font-size:18px;font-weight:900;color:#ffffff;margin-left:12px;">${data.reference}</span>
        </td>
      </tr>

      <!-- Fields -->
      <tr>
        <td style="padding:24px 32px 8px;">
          <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #dbe2ea;border-radius:10px;overflow:hidden;">
            ${row("Inquiry Type",   data.inquiryType)}
            ${row("Name",           data.name)}
            ${row("Email",          data.email)}
            ${row("Company",        data.company)}
            ${row("Country",        data.country  ?? "")}
            ${row("Website",        data.website  ?? "")}
            ${row("Budget Range",   data.budgetRange ?? "")}
            ${row("Timeline",       data.timeline ?? "")}
            ${row("Secure Transfer",data.secureTransfer ? "Requested" : "")}
          </table>
        </td>
      </tr>

      <!-- Message -->
      <tr>
        <td style="padding:8px 32px 24px;">
          <div style="font-size:12px;font-weight:800;text-transform:uppercase;letter-spacing:0.1em;color:#8496ab;margin-bottom:8px;">Message</div>
          <div style="background:#f4f7fb;border:1px solid #dbe2ea;border-radius:10px;padding:16px 20px;font-size:15px;color:#526070;line-height:1.75;white-space:pre-wrap;">${data.message.replace(/</g,"&lt;").replace(/>/g,"&gt;")}</div>
        </td>
      </tr>

      <!-- Meta -->
      <tr>
        <td style="padding:0 32px 32px;">
          <div style="border-top:1px solid #dbe2ea;padding-top:16px;">
            <div style="font-size:12px;color:#8496ab;line-height:1.8;">
              <strong>Submitted:</strong> ${data.submittedAt}<br/>
              <strong>IP:</strong> ${data.ip}<br/>
              <strong>User Agent:</strong> ${data.userAgent.slice(0, 120)}
            </div>
          </div>
        </td>
      </tr>

      <!-- Footer -->
      <tr>
        <td style="background:#f4f7fb;padding:20px 32px;border-top:1px solid #dbe2ea;">
          <div style="font-size:12px;color:#8496ab;text-align:center;">
            This message was sent from the FINWEB SOLUTION contact form.
          </div>
        </td>
      </tr>

    </table>
  </td></tr>
</table>
</body>
</html>`;
}

/* ── HTML email — auto-reply to sender ──────────────────── */
function buildAutoReplyEmail(name: string, reference: string): string {
  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"/><meta name="viewport" content="width=device-width,initial-scale=1"/></head>
<body style="margin:0;padding:0;background:#f4f7fb;font-family:'Inter',system-ui,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f7fb;padding:40px 16px;">
  <tr><td align="center">
    <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 32px rgba(7,29,59,0.10);">

      <!-- Header -->
      <tr>
        <td style="background:#071d3b;padding:28px 32px;">
          <div style="font-size:18px;font-weight:900;color:#ffffff;letter-spacing:-0.03em;">
            FINWEB<span style="color:#0b5bd3;">.</span>
          </div>
          <div style="font-size:13px;color:rgba(255,255,255,0.5);margin-top:4px;">Inquiry Confirmation</div>
        </td>
      </tr>

      <!-- Body -->
      <tr>
        <td style="padding:40px 32px;">
          <div style="font-size:24px;font-weight:800;color:#071d3b;letter-spacing:-0.02em;line-height:1.2;margin-bottom:16px;">
            We've received your inquiry, ${name.split(" ")[0]}.
          </div>
          <p style="font-size:16px;color:#526070;line-height:1.75;margin:0 0 24px;">
            Thank you for reaching out to FINWEB SOLUTION. Your message has been safely received and will be reviewed carefully.
          </p>
          <p style="font-size:16px;color:#526070;line-height:1.75;margin:0 0 24px;">
            We typically respond within <strong style="color:#071d3b;">24 hours</strong> on business days. If your matter is urgent, please reply directly to this email.
          </p>

          <!-- Reference box -->
          <div style="background:#f4f7fb;border:1px solid #dbe2ea;border-radius:10px;padding:16px 20px;margin-bottom:24px;">
            <div style="font-size:12px;font-weight:800;text-transform:uppercase;letter-spacing:0.1em;color:#8496ab;margin-bottom:6px;">Your Reference</div>
            <div style="font-size:20px;font-weight:900;color:#0b5bd3;letter-spacing:-0.02em;">${reference}</div>
            <div style="font-size:13px;color:#8496ab;margin-top:4px;">Keep this for your records.</div>
          </div>

          <p style="font-size:15px;color:#526070;line-height:1.75;margin:0;">
            In the meantime, you can review our work at
            <a href="https://finwebsolution.com/portfolio" style="color:#0b5bd3;font-weight:700;">finwebsolution.com/portfolio</a>.
          </p>
        </td>
      </tr>

      <!-- Footer -->
      <tr>
        <td style="background:#f4f7fb;padding:20px 32px;border-top:1px solid #dbe2ea;">
          <div style="font-size:12px;color:#8496ab;text-align:center;line-height:1.6;">
            FINWEB SOLUTION · Financial Operations &amp; Digital Engineering<br/>
            International · US · UK · EU
          </div>
        </td>
      </tr>

    </table>
  </td></tr>
</table>
</body>
</html>`;
}

/* ── POST handler ───────────────────────────────────────── */
export async function POST(request: Request) {
  const noStore = { "Cache-Control": "no-store" } as const;

  /* 1. IP-based rate limiting */
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0].trim() ??
    request.headers.get("x-real-ip") ??
    "unknown";

  if (!checkRateLimit(ip)) {
    return NextResponse.json(
      { error: { code: "RATE_LIMITED", message: "Too many submissions. Please wait 15 minutes and try again." } },
      { status: 429, headers: noStore }
    );
  }

  /* 2. Idempotency key */
  const idempotencyKey = request.headers.get("idempotency-key") ?? "";
  if (idempotencyKey.length < 8) {
    return NextResponse.json(
      { error: { code: "IDEMPOTENCY_REQUIRED", message: "Please retry the form." } },
      { status: 400, headers: noStore }
    );
  }

  /* Replay — return existing reference */
  const existing = accepted.get(idempotencyKey);
  if (existing) {
    return NextResponse.json(
      { reference: existing, status: "accepted" },
      { headers: noStore }
    );
  }

  /* 3. Parse body */
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: { code: "INVALID_JSON", message: "Malformed request body." } },
      { status: 400, headers: noStore }
    );
  }

  /* 4. Validate with Zod */
  const parsed = inquirySchema.safeParse(body);
  if (!parsed.success) {
    const fieldErrors = parsed.error.flatten().fieldErrors;
    return NextResponse.json(
      { error: { code: "VALIDATION_FAILED", message: "Please review the highlighted fields.", fields: fieldErrors } },
      { status: 400, headers: noStore }
    );
  }

  const data = parsed.data;

  /* 5. Honeypot — silent reject */
  if (data._hp) {
    return NextResponse.json(
      { reference: "FW-BLOCKED", status: "accepted" },
      { headers: noStore }
    );
  }

  /* 6. Generate reference */
  const reference = `FW-${crypto.randomUUID().slice(0, 8).toUpperCase()}`;
  accepted.set(idempotencyKey, reference);

  /* 7. Send emails */
  const submittedAt = new Date().toUTCString();
  const userAgent   = request.headers.get("user-agent") ?? "unknown";

  const to   = process.env.CONTACT_TO   ?? "attackerv21@gmail.com";
  const from = process.env.CONTACT_FROM ?? "FINWEB SOLUTION <noreply@finwebsolution.com>";

  try {
    const transporter = createTransporter();

    /* Notification email → FINWEB inbox */
    await transporter.sendMail({
      from,
      to,
      subject: `[FINWEB] New Inquiry — ${data.inquiryType} — ${data.company} (${reference})`,
      html: buildNotificationEmail({
        reference,
        inquiryType:   data.inquiryType,
        name:          data.name,
        email:         data.email,
        company:       data.company,
        country:       data.country,
        website:       data.website,
        budgetRange:   data.budgetRange,
        timeline:      data.timeline,
        message:       data.message,
        secureTransfer: data.secureTransfer,
        submittedAt,
        ip,
        userAgent,
      }),
    });

    /* Auto-reply → sender */
    await transporter.sendMail({
      from,
      to:      data.email,
      subject: `We've received your inquiry — FINWEB SOLUTION (${reference})`,
      html:    buildAutoReplyEmail(data.name, reference),
    });
  } catch (err) {
    console.error("[contact/route] Email send failed:", err);
    /* Remove reference so the form can retry */
    accepted.delete(idempotencyKey);
    return NextResponse.json(
      {
        error: {
          code: "EMAIL_FAILED",
          message:
            "Your inquiry was received but we could not send a confirmation email. " +
            "Please email us directly at hello@finwebsolution.com if you do not hear back.",
        },
      },
      { status: 500, headers: noStore }
    );
  }

  return NextResponse.json(
    { reference, status: "accepted", nextStep: "We will review your inquiry and respond within 24 hours." },
    { status: 201, headers: noStore }
  );
}
