import { NextResponse } from 'next/server';
import { render } from '@react-email/render';
import nodemailer from 'nodemailer';
import Welcome from '@/components/Welcome';

export async function POST(req: Request) {
  try {
    const { email, username, title, html, styles, mergeTags } = await req.json();

    const emailHtml = await render(
      <Welcome
        email={email}
        title={title}
        username={username}
        html={html}
        styles={styles}
        preview={true}
      />
    );

    
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASS,
      },
    });

    const info = await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: email,
      subject: title,
      html: emailHtml,
    });

    return NextResponse.json({ success: true, message: 'Email sent', info });
  } catch (err: any) {
    console.error('Send Mail Error:', err);
    return NextResponse.json(
      { success: false, message: err.message },
      { status: 500 }
    );
  }
}
