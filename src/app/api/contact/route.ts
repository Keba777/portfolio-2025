import { type NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

export async function POST(request: NextRequest) {
    const { email, name, message } = await request.json();

    const transport = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,

        auth: {
            user: process.env.MY_EMAIL,
            pass: process.env.MY_PASSWORD,
        },
    });

    const mailOptions: Mail.Options = {
        from: process.env.MY_EMAIL,
        to: process.env.MY_EMAIL,
        subject: `📩 New Contact from ${name}! 🚀`,
        text: `👤 Name: ${name} \n📧 Email: ${email} \n💬 Message: ${message}`,
        html: `
            <h2>📩 New Contact Submission!</h2>
            <p><strong>👤 Name:</strong> ${name}</p>
            <p><strong>📧 Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>💬 Message:</strong></p>
            <blockquote style="background:#f4f4f4;padding:10px;border-left:5px solid #007BFF;">${message}</blockquote>
            <p>📅 Received on: <strong>${new Date().toLocaleString()}</strong></p>
        `,
    };

    const sendMailPromise = () =>
        new Promise<string>((resolve, reject) => {
            transport.sendMail(mailOptions, function (err) {
                if (!err) {
                    resolve('Email sent');
                } else {
                    reject(err.message);
                }
            });
        });

    try {
        await sendMailPromise();
        return NextResponse.json({ message: 'Email sent' });
    } catch (err) {
        console.error("Email sending failed:", err);
        return NextResponse.json({ error: String(err) }, { status: 500 });
    }

}