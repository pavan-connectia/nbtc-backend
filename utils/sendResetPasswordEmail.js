import nodemailer from "nodemailer";

const sendResetPasswordEmail = async (toEmail, name, resetUrl) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    auth: {
      user: process.env.SMTP_EMAIL,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  const emailTemplate = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; background-color: #f9f9f9; border: 1px solid #e0e0e0; border-radius: 10px;">
      <div style="text-align: center;">
        <img src="${process.env.HOST}/logo.png" alt="Logo" style="max-width: 150px; margin-bottom: 20px;">
      </div>
      <h2 style="color: #333333; text-align: center;">Reset Your Password</h2>
      <p style="color: #555555;">Hi <strong>${name}</strong>,</p>
      <p style="color: #555555;">It seems like you requested a password reset for your NBTC account. Click the button below to reset your password:</p>
      <div style="text-align: center; margin: 20px 0;">
        <a href='${resetUrl}' style="display: inline-block; padding: 12px 24px; background-color: black; color: #ffffff; text-decoration: none; font-weight: bold; border-radius: 6px;">Reset Password</a>
      </div>
      <p style="color: #555555;">If you didn’t request this change, you can safely ignore this email.</p>
      <p style="color: #555555;">Thank you,<br>The NBTC Team</p>
      <hr style="border: none; border-top: 1px solid #e0e0e0; margin: 20px 0;">
      <p style="font-size: 12px; color: #999999; text-align: center;">
        &copy; 2024 NBTC. All rights reserved.<br>
      </p>
    </div>
  `;

  try {
    await transporter.sendMail({
      from: `"NBTC Support" <${process.env.SMTP_USER}>`,
      to: toEmail,
      subject: `Reset Your Password - NBTC`,
      html: emailTemplate,
    });
  } catch (err) {
    throw new Error("Failed to send reset password email. Please try again.");
  }
};

export default sendResetPasswordEmail;
