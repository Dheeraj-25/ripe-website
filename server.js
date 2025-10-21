import express from 'express';
import cors from 'cors';
import sgMail from '@sendgrid/mail';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

app.post('/api/contact-form', async (req, res) => {
  const { name, email, mobile, subject, message } = req.body;
  if (!name || !email || !mobile || !subject || !message) {
    return res.status(400).json({ message: 'Missing required fields' });
  }
  const msg = {
    to: ['ripe.mohan@gmail.com', 'ripesociety1989@gmail.com','ripe.dheeraj@gmail.com'],
    from: 'secretary@ripengo.org', // Must be verified in SendGrid
    subject: `Details from Contact Form `,
    text: `Name: ${name}\nEmail: ${email}\nMobile: ${mobile}\nSubject: ${subject}\nMessage: ${message}`,
    replyTo: email,
  };
  try {
    await sgMail.sendMultiple(msg);
    res.status(200).json({ message: 'Message sent successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to send email', error: error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
