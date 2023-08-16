const sgMail = require("@sendgrid/mail");

export default async (req, res) => {
  try {
    const { email, event_name, event_date, event_session, event_time } = req.body;

    const apiKey = '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';
    if (!apiKey) {
      throw new Error("SendGrid API key not provided");
    }

    sgMail.setApiKey(apiKey);
    console.log(email)
    const msg = {
      to: 'jas1987leo@gmail.com',
      from: {
        name: "Qatar Expo 2023", // Replace with your desired display name
        email: "info@flexemarket.com", // Replace with your verified sender email
      },
      subject: "Booking Confirmation",
      html: `<p>Thank you for the reservation</p>
            <p>Event Details:</p>
            <p>Name: ${event_name}</p>
            <p>Session: ${event_session}</p>
            <p>Date: ${event_date}</p>
            <p>Time: ${event_time}</p>`,
    };

    await sgMail.send(msg);

    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "An error occurred while sending the email" });
  }
};
