const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

exports.handler = async function(event) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }
  const { name, email, mobile, subject, message } = JSON.parse(event.body);
  if (!name || !email || !mobile || !subject || !message) {
    return { statusCode: 400, body: 'Missing required fields' };
  }
  const msg = {
    to: ['ripe.mohan@gmail.com', 'ripesociety1989@gmail.com','ripe.dheeraj@gmail.com'],
    from: 'secretary@ripengo.org',
    subject: `Contact Form  Details`,
    text: `Name: ${name}\nEmail: ${email}\nMobile: ${mobile}\nSubject: ${subject}\nMessage: ${message}`,
    replyTo: email,
  };
  try {
    await sgMail.sendMultiple(msg);
    return { statusCode: 200, body: JSON.stringify({ message: 'Message sent successfully' }) };
  } catch (error) {
    return { statusCode: 500, body: JSON.stringify({ message: 'Failed to send email', error: error.message }) };
  }
};
