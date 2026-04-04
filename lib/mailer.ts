import nodemailer from "nodemailer";
import type { ContactFormData } from "./validations";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT || 587),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

const projectTypeLabels: Record<string, string> = {
  fullstack: "Full Stack",
  java: "Java",
  python: "Python",
  cpp: "C++",
  aiml: "AI / ML",
  datascience: "Data Science",
  custom: "Custom Stack",
  other: "Other",
};

export async function sendAdminNotification(
  data: ContactFormData,
  meetLink?: string,
  scheduledTime?: string
) {
  const waLink = `https://wa.me/91${data.whatsapp}`;
  const meetSection = meetLink && scheduledTime
    ? `<p><strong>📅 Discovery Call:</strong> ${scheduledTime}<br/><a href="${meetLink}">Join Google Meet →</a></p>`
    : "";

  await transporter.sendMail({
    from: `"Project X" <${process.env.SMTP_USER}>`,
    to: process.env.ADMIN_EMAIL,
    subject: `[Project X] New Request — ${projectTypeLabels[data.projectType] || data.projectType} | ${data.name}`,
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 24px;">
        <h2 style="color: #16A34A; margin-top: 0;">🚀 New Project Request</h2>
        ${meetSection}
        <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
          <tr style="border-bottom: 1px solid #e2e8f0;">
            <td style="padding: 10px 0; color: #64748B; width: 140px;"><strong>Name</strong></td>
            <td style="padding: 10px 0;">${data.name}</td>
          </tr>
          <tr style="border-bottom: 1px solid #e2e8f0;">
            <td style="padding: 10px 0; color: #64748B;"><strong>Email</strong></td>
            <td style="padding: 10px 0;">${data.email}</td>
          </tr>
          <tr style="border-bottom: 1px solid #e2e8f0;">
            <td style="padding: 10px 0; color: #64748B;"><strong>WhatsApp</strong></td>
            <td style="padding: 10px 0;"><a href="${waLink}" style="color: #22C55E;">+91 ${data.whatsapp}</a></td>
          </tr>
          <tr style="border-bottom: 1px solid #e2e8f0;">
            <td style="padding: 10px 0; color: #64748B;"><strong>Project Type</strong></td>
            <td style="padding: 10px 0;">${projectTypeLabels[data.projectType] || data.projectType}</td>
          </tr>
          <tr style="border-bottom: 1px solid #e2e8f0;">
            <td style="padding: 10px 0; color: #64748B;"><strong>Deadline</strong></td>
            <td style="padding: 10px 0;">${new Date(data.deadline).toDateString()}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; color: #64748B; vertical-align: top;"><strong>Description</strong></td>
            <td style="padding: 10px 0;">${data.description}</td>
          </tr>
        </table>
      </div>
    `,
  });
}

export async function sendStudentAutoReply(
  data: ContactFormData,
  meetLink?: string,
  scheduledTime?: string
) {
  const firstName = data.name.split(" ")[0];
  const meetSection =
    meetLink && scheduledTime
      ? `
        <div style="background:#f0fdf4; border:1px solid #22c55e; border-radius:8px; padding:16px; margin:16px 0;">
          <strong>📅 Your discovery call is scheduled:</strong><br/>
          <strong>${scheduledTime}</strong><br/><br/>
          <a href="${meetLink}" style="background:#22C55E; color:white; padding:10px 20px; border-radius:6px; text-decoration:none; font-weight:600;">
            Join Google Meet →
          </a>
        </div>
      `
      : `<p style="color:#475569;">We'll WhatsApp or email you within <strong>24 hours</strong> to schedule a quick 5-min call.</p>`;

  await transporter.sendMail({
    from: `"Project X" <${process.env.SMTP_USER}>`,
    to: data.email,
    subject: `Got it, ${firstName}! Your Project X request is in 🚀`,
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 24px;">
        <h2 style="color: #16A34A; margin-top: 0;">We received your request!</h2>
        <p>Hey ${firstName},</p>
        <p>Thanks for reaching out to <strong>Project X</strong>.
           We've received your request for a <strong>${(projectTypeLabels[data.projectType] || data.projectType).toUpperCase()}</strong> project
           with a deadline of <strong>${new Date(data.deadline).toDateString()}</strong>.</p>

        ${meetSection}

        <h3 style="color: #1e293b;">What to prepare for your call:</h3>
        <ul style="color: #475569; line-height: 1.8;">
          <li>Any reference links, examples, or college question paper</li>
          <li>Exact tech stack required (if specified by your college)</li>
          <li>Whether you need documentation / PPT alongside the code</li>
        </ul>

        <p style="color: #475569;">Questions? Just reply to this email or WhatsApp us anytime.</p>
        <p style="color: #94a3b8; font-size: 0.9rem;">— The Project X Team</p>

        <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 20px 0;" />
        <p style="color: #94a3b8; font-size: 0.75rem;">
          You're receiving this because you submitted a request at projectx.app
        </p>
      </div>
    `,
  });
}
