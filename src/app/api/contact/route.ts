import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, subject, message } = body;

    // Validasi input dasar
    if (!firstName || !lastName || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Semua field wajib diisi' },
        { status: 400 }
      );
    }

    // Konfigurasi transporter email
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST || 'smtp.gmail.com',
      port: Number(process.env.EMAIL_PORT) || 587,
      secure: process.env.EMAIL_SECURE === 'true' ? true : false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Email penerima dari konfigurasi atau default ke email yang ditentukan
    const recipientEmail = process.env.EMAIL_RECIPIENT || 'jerlyjy@gmail.com';

    // Siapkan content email
    const mailOptions = {
      from: `${firstName} ${lastName} <${email}>`,
      to: recipientEmail,
      subject: `Pesan Baru dari Website: ${subject}`,
      html: `
        <h3>Pesan Baru dari Website Moon Astra Studio</h3>
        <p><strong>Nama:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${phone ? `<p><strong>Telepon:</strong> ${phone}</p>` : ''}
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Pesan:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
      replyTo: email,
    };

    // Kirim email
    // Untuk development tanpa konfigurasi SMTP yang valid, kita akan simulasi pengiriman berhasil
    if (process.env.NODE_ENV === 'production' || (process.env.EMAIL_USER && process.env.EMAIL_PASSWORD)) {
      await transporter.sendMail(mailOptions);
      console.log(`Email berhasil dikirim ke ${recipientEmail}`);
    } else {
      // Log untuk debugging di development
      console.log('Email akan dikirim dengan konfigurasi (development mode):', mailOptions);
      // Simulasi delay pengiriman email
      await new Promise(resolve => setTimeout(resolve, 1000));
    }

    return NextResponse.json(
      { success: true, message: 'Email berhasil dikirim' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error saat mengirim email:', error);
    return NextResponse.json(
      { error: 'Gagal mengirim email, silakan coba lagi nanti' },
      { status: 500 }
    );
  }
} 