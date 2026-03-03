export const runtime = "nodejs";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const ADMIN_EMAIL = "admin@fluxypy.com";
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || "noreply@contact.fluxypy.com";

console.log("Using Resend API Key:", !!process.env.RESEND_API_KEY);
console.log("Using Resend From Email:", FROM_EMAIL);

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
      subject:  "Confirmation: We received your message",
      text: `
        Hi ${name},

        Thank you for contacting Fluxypy.

        This is to confirm that we have received your message. 
        Our team will review your inquiry and respond within 24 business hours.

        For your reference, here is a copy of your message:

        "${message}"

        If you did not submit this request, please ignore this email.

        Best regards,
        Fluxypy Team
        admin@fluxypy.com
        Greater Noida, Uttar Pradesh, India
          `,
          html: `
            <div style="font-family:Arial, sans-serif; max-width:600px; margin:auto; color:#333;">
              <p>Hi ${name},</p>

              <p>Thank you for contacting <strong>Fluxypy</strong>.</p>

              <p>This email confirms that we have received your message. 
              Our team will review your inquiry and respond within 
              <strong>24 business hours</strong>.</p>

              <div style="margin:20px 0; padding:15px; background:#f4f4f4; border-radius:6px;">
                <p style="margin:0 0 8px;"><strong>Your message:</strong></p>
                <p style="margin:0; white-space:pre-wrap;">${message}</p>
              </div>

              <p>If you did not submit this request, you may safely ignore this email.</p>

              <p style="margin-top:30px;">
                Best regards,<br/>
                <strong>Fluxypy Team</strong><br/>
                admin@fluxypy.com<br/>
                Greater Noida, Uttar Pradesh, India
              </p>
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
