import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { name, email, deadline, requirements } = await req.json();

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: `"Project X Intake" <${process.env.SMTP_USER}>`,
      to: process.env.ADMIN_EMAIL || process.env.SMTP_USER,
      subject: `New Requirement Intake: ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Deadline: ${deadline}
        
        Requirements:
        ${requirements}
      `,
      html: `
        <h3>New Project Requirement</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Deadline:</strong> ${deadline}</p>
        <br/>
        <p><strong>Requirements:</strong></p>
        <p style="white-space: pre-wrap;">${requirements}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Requirements transmitted successfully' }, { status: 200 });
  } catch (error) {
    console.error('NodeMailer error:', error);
    return NextResponse.json({ message: 'Error transmitting requirements' }, { status: 500 });
  }
}
