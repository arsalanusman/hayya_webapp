const sgMail = require("@sendgrid/mail");

export default async (req, res) => {
  try {
    const { firstName, lastName, email, dob, nationality, countryResidence, documentType, documentNumber } = req.body;

    const apiKey = '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';
    if (!apiKey) {
      throw new Error("SendGrid API key not provided");
    }

    sgMail.setApiKey(apiKey);

    const msg = {
      to: email,
      from: "info@theroyalpunch.com", // Replace with your verified sender email
      subject: "Booking Confirmation",
      html: `<p>Thank you for the reservation</p>
            <p>Event Details:</p>
            <p>Name: Qatar Vs Lebanon</p>
            <p>Session: Match Day</p>
            <p>Date: 15/January/24</p>
            <p>Time: 19:30 pm</p>`,
    };

    await sgMail.send(msg);

    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "An error occurred while sending the email" });
  }
};
