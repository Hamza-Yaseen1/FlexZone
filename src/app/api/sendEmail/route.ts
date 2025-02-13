import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const { firstName,lastName, email } = await req.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NEXT_PUBLIC_EMAIL_USER,
      pass: process.env.NEXT_PUBLIC_EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: `Thank you for contacting us, ${firstName} ${lastName}!`,
      html: `
<html>
  <body style="font-family: Arial, sans-serif; padding: 20px; background-color: #f4f4f4;">
    <div style="max-width: 600px; margin: auto; background: #fff; padding: 20px; border-radius: 10px; box-shadow: 0 0 10px rgba(0,0,0,0.1);">
      <h2 style="color: #333;">Hello ${firstName} ${lastName},</h2>
      <p style="font-size: 16px; color: #555;">
        Thank you for reaching out to us. Your request has been received, and our team will review it shortly.
      </p>
      <p style="font-size: 16px; color: #555;">
        If any further details are needed, we will get in touch with you soon. Stay tuned!
      </p>
      <p style="font-size: 16px; color: #555;"><strong>Best regards,</strong></p>
      <p style="font-size: 16px; color: #ff4500;"><strong>Gym Team</strong></p>
    </div>
  </body>
</html>
`
    });

    return NextResponse.json({ message: "Email sent successfully!" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Failed to send email", error }, { status: 500 });
  }
}
