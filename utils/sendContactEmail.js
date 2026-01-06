const nodemailer = require("nodemailer");

const sendContactEmail = async ({
  name,
  email,
  phoneNo,
  subject,
  question,
  recipientEmails,
}) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.SMTP_EMAIL,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  const emailTemplate = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; background-color: #f9f9f9; border: 1px solid #e0e0e0; border-radius: 10px;">
        <h2 style="color: #333333;">New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone No.:</strong> ${phoneNo}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Question:</strong></p>
        <p style="color: #555555;">${question}</p>
        <hr style="border: none; border-top: 1px solid #e0e0e0; margin: 20px 0;">
        <p style="font-size: 12px; color: #999999; text-align: center;">
          &copy; 2024 NBTC. All rights reserved.
        </p>
      </div>
    `;

  await transporter.sendMail({
    from: `"NBTC Contact Form" <${process.env.SMTP_EMAIL}>`,
    to: recipientEmails,
    subject: `New Contact Form Submission: ${subject}`,
    html: emailTemplate,
  });
};

module.exports = { sendContactEmail };
