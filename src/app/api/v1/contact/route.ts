import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const ADMIN_EMAIL = "admin@fluxypy.com";
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || "noreply@fluxypy.com";

export async function POST(req: NextRequest) {
  try {
    const { name, email, company, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    // 1. Notify admin
    await resend.emails.send({
      from: FROM_EMAIL,
      to: ADMIN_EMAIL,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:auto;">
          <h2 style="color:#0ea5e9;">New Contact Request — Fluxypy</h2>
          <table style="width:100%;border-collapse:collapse;">
            <tr><td style="padding:8px 0;font-weight:600;color:#374151;">Name</td><td style="padding:8px 0;color:#6b7280;">${name}</td></tr>
            <tr><td style="padding:8px 0;font-weight:600;color:#374151;">Email</td><td style="padding:8px 0;color:#6b7280;">${email}</td></tr>
            <tr><td style="padding:8px 0;font-weight:600;color:#374151;">Company</td><td style="padding:8px 0;color:#6b7280;">${company || "—"}</td></tr>
          </table>
          <div style="margin-top:16px;">
            <p style="font-weight:600;color:#374151;">Message</p>
            <p style="color:#6b7280;white-space:pre-wrap;">${message}</p>
          </div>
          <hr style="margin-top:32px;border-color:#e5e7eb;" />
          <p style="font-size:12px;color:#9ca3af;">Submitted via Fluxypy contact form</p>
        </div>
      `,
    });

    // 2. Confirm to the sender
    await resend.emails.send({
      from: FROM_EMAIL,
      to: email,
      subject: "We've received your message — Fluxypy",
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:auto;">
          <h2 style="color:#0ea5e9;">Hi ${name}, thanks for reaching out!</h2>
          <p style="color:#6b7280;">We've received your message and will get back to you within <strong>24 hours</strong>.</p>
          <div style="margin-top:24px;padding:16px;background:#f9fafb;border-radius:8px;border:1px solid #e5e7eb;">
            <p style="font-weight:600;color:#374151;margin:0 0 8px;">Your message</p>
            <p style="color:#6b7280;white-space:pre-wrap;margin:0;">${message}</p>
          </div>
          <p style="margin-top:24px;color:#6b7280;">In the meantime, feel free to reply to this email if you have any additional details to share.</p>
          <p style="color:#374151;margin-top:32px;">— The Fluxypy Team</p>
          <hr style="margin-top:32px;border-color:#e5e7eb;" />
          <p style="font-size:12px;color:#9ca3af;">Fluxypy · Jagat Farm, Greater Noida, Uttar Pradesh, India</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact email error:", error);
    return NextResponse.json(
      { error: "Failed to send emails." },
      { status: 500 }
    );
  }
}
