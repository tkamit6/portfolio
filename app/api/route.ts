import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email, message } = req.body;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'YOUR_EMAIL@gmail.com', // Replace with your email
        pass: 'YOUR_PASSWORD', // Replace with your password or use an app-specific password
      },
    });

    const mailOptions = {
      from: 'YOUR_EMAIL@gmail.com', // Replace with your email
      to: 'RECIPIENT_EMAIL@example.com', // Replace with recipient email
      subject: 'New Contact Form Submission',
      text: `Email: ${email}\n\nMessage: ${message}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
        res.status(500).send('Error sending email');
      } else {
        console.log('Email sent: ' + info.response);
        res.status(200).json({ message: 'Email sent successfully' });
      }
    });
  } else {
    res.status(405).end();
  }
}
