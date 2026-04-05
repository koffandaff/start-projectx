import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { name, email, deadline, requirements } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"Un·Project Intake" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `[Un·Project] New Requirement Intake: ${name}`,
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
