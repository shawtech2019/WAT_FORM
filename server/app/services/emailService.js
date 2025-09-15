import transporter from "../config/mailer.js";

export const sendRegistrationEmails = async (formData) => {
  try {
    const { firstName, lastName, email, contact } = formData;

    // Email to admin
    await transporter.sendMail({
      from: `"WinesAndThings Event" <${process.env.EMAIL_USER}>`,
      to: process.env.ADMIN_EMAIL,
      subject: "New Registration",
      html: `
        <h2>New Registration</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Contact:</strong> ${contact}</p>
      `,
    });

    // Email to user
    await transporter.sendMail({
      from: `"WinesAndThings Event" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Registration Confirmation - WinesAndThings 2025",
      html: `
        <h2>Hi ${firstName},</h2>
        <p>Thank you for registering!</p>
        <p>We look forward to seeing you at the WinesAndThings Wine Tasting Event 2025.</p>
      `,
    });

    return { success: true };
  } catch (err) {
    console.error("❌ Error sending emails:", err.message);
    return { success: false, error: err.message };
  }
};
