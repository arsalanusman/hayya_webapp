import fs from 'fs';
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { firstName, lastName, email, eventDetails } = req.body;

    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
      // Configure your email provider settings here
    });

    // Compose the email
    const mailOptions = {
      from: 'driectdesign@gmail.com',
      to: email,
      subject: 'Booking Confirmation',
      text: `Thank you for the reservation\n\nEvent Details:\n${eventDetails}`,
    };

    try {
      // Send the email
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ error: 'An error occurred while sending the email' });
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
