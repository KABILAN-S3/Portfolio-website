const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const dotenv = require('dotenv');
const twilio = require('twilio');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// Root route for health check
app.get('/', (req, res) => {
  res.send('Backend Messaging Service is running!');
});

// Email Transporter Configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS, // Gmail App Password
  },
});

// Twilio Configuration (WhatsApp) - Safe Initialization
let twilioClient = null;
try {
  if (process.env.TWILIO_ACCOUNT_SID && process.env.TWILIO_ACCOUNT_SID.startsWith('AC')) {
    twilioClient = twilio(
      process.env.TWILIO_ACCOUNT_SID,
      process.env.TWILIO_AUTH_TOKEN
    );
  }
} catch (e) {
  console.error('Twilio Initialization Error: Check your SID/Token');
}

app.post('/api/contact', async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  // Use separate blocks so one failure doesn't block the other
  let emailSent = false;
  let whatsappSent = false;

  try {
    // 1. Send Email
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.RECEIVER_EMAIL || process.env.EMAIL_USER,
      subject: `New Portfolio Message: ${subject || 'No Subject'}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    };
    await transporter.sendMail(mailOptions);
    emailSent = true;
  } catch (err) {
    console.error('Email Error:', err.message);
  }

  try {
    // 2. Send WhatsApp
    if (twilioClient && process.env.TWILIO_PHONE_NUMBER) {
      await twilioClient.messages.create({
        from: `whatsapp:${process.env.TWILIO_PHONE_NUMBER}`,
        to: `whatsapp:${process.env.MY_PHONE_NUMBER}`,
        body: `New Portfolio Contact!\n\nFrom: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage: ${message.substring(0, 100)}...`,
      });
      whatsappSent = true;
    }
  } catch (err) {
    console.error('WhatsApp Error:', err.message);
  }

  if (emailSent || whatsappSent) {
    console.log(`Message handled. Email: ${emailSent}, WhatsApp: ${whatsappSent}`);
    res.status(200).json({ 
      success: 'Message processed!', 
      details: { email: emailSent, whatsapp: whatsappSent } 
    });
  } else {
    res.status(500).json({ error: 'All messaging services failed. Please check backend logs.' });
  }
});

app.listen(PORT, () => {
  console.log(`Backend Messaging Service running on port ${PORT}`);
});
