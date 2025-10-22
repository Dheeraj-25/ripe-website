
import sgMail from '@sendgrid/mail';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, mobile, subject, message } = req.body;

  if (!name || !email || !mobile || !subject || !message) {
    return res.status(400).json({ message: 'Missing required fields' });
  }


  // Set your SendGrid API key (store securely in environment variable)
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const msg = {
    to: ['YOUR_HOSTINGER_EMAIL', 'YOUR_GMAIL_ADDRESS'], // Change to your emails
    from: 'YOUR_VERIFIED_SENDGRID_SENDER', // Must be a verified sender in SendGrid
    subject: `Contact Form from ${name} <${email}> [${mobile}]: ${subject}`,
    text: `Name: ${name}\nEmail: ${email}\nMobile: ${mobile}\nSubject: ${subject}\nMessage: ${message}`,
    replyTo: email,
  };

  try {
    // Send email via SendGrid
    await sgMail.sendMultiple(msg);

    // Optionally, send form data to external webhook (Hostinger)
    // const webhookUrl = 'https://your-hostinger-domain.com/your-webhook-endpoint';
    // try {
    //   await fetch(webhookUrl, {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ name, email, subject, message }),
    //   });
    // } catch (webhookError) {
    //   console.error('Webhook error:', webhookError);
    // }

    return res.status(200).json({ message: 'Message sent successfully' });
  } catch (error) {
    return res.status(500).json({ message: 'Failed to send email', error: error.message });
  }
}
