import transporter from "../config/mailer.js";

export const sendRegistrationEmails = async (formData) => {
  try {
    const { firstName, lastName, email, contact } = formData;

    // Collect all admin emails from environment variables
    const adminEmails = [
      process.env.ADMIN_EMAIL,
      process.env.ADMIN_EMAIL_ONE,
      process.env.ADMIN_EMAIL_TWO,
    ].filter(Boolean); // remove undefined or empty values

    if (adminEmails.length > 0) {
      await transporter.sendMail({
        from: `"WinesAndThings Event" <${process.env.EMAIL_USER}>`,
        to: adminEmails, // array of recipients
        subject: "New Registration",
        html: `
          <h2>New Registration</h2>
          <p><strong>Name:</strong> ${firstName} ${lastName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Contact:</strong> ${contact}</p>
        `,
      });
    }

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
    console.error("Error sending emails:", err.message);
    return { success: false, error: err.message };
  }
};
