import { NextResponse } from 'next/server';
import { sendAdminNotification } from '@/lib/mailer';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { name, email, deadline, projectType, requirements, whatsapp } = data;

    // Send admin notification only
    await sendAdminNotification({
      name,
      email,
      deadline,
      projectType,
      requirements,
      whatsapp: whatsapp || "",
    });

    return NextResponse.json({ message: 'Requirements transmitted successfully' }, { status: 200 });
  } catch (error) {
    console.error('Transmission error:', error);
    return NextResponse.json({ message: 'Error transmitting requirements' }, { status: 500 });
  }
}
