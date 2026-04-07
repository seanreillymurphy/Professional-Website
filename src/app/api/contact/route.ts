import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY || 'dummy-key-for-build');

export async function POST(request: Request) {
  try {
    // Check if API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not set');
      return NextResponse.json(
        { error: 'Server configuration error.' },
        { status: 500 }
      );
    }

    const { name, email, company, message } = await request.json();

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address.' },
        { status: 400 }
      );
    }

    // TODO: Update 'from' and 'to' with your own email addresses
    // 'from' must use a domain you've verified in Resend, or use 'onboarding@resend.dev' for testing
    await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: ['your@email.com'],
      replyTo: email,
      subject: `Contact Form: ${name}${company ? ` (${company})` : ''}`,
      text: `Name: ${name}
Email: ${email}
Company: ${company || 'Not provided'}

Message:
${message}`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', JSON.stringify(error, null, 2));
    return NextResponse.json(
      { error: 'Failed to send message. Please try again.' },
      { status: 500 }
    );
  }
}
