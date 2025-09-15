import { sendRegistrationEmails } from "../services/emailService.js";

export const registerUser = async (req, res) => {
    try {
        const {firstName, lastName, email, contact } = req.body;
        if (!firstName || !lastName || !email || !contact ) {
            return res.status(400).json({success: false, message: "All fields are required."});
        }

        await sendRegistrationEmails({ firstName, lastName, email, contact});

        res.json({success: true, message: "Registration successful, emails sent."})
    } catch (error) {
        console.error("Registration error:", error);
        res.status(500).json({ success: false, message: "Something went wrong"});
    }
}