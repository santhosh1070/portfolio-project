const nodemailer = require('nodemailer');

const defaultRateLimit = 10;
let requestCount = 0;

function getPositiveInt(value, fallback, minimum) {
  const parsed = Number.parseInt(value || '', 10);
  return Number.isFinite(parsed) ? Math.max(minimum, parsed) : fallback;
}

const rateLimit = getPositiveInt(process.env.CONTACT_RATE_LIMIT, defaultRateLimit, 1);

function isRateLimited() {
  if (requestCount >= rateLimit) {
    return true;
  }

  requestCount += 1;
  return false;
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed.' });
  }

  if (isRateLimited()) {
    return res.status(429).json({
      message: 'The contact form has reached its submission limit. Please try again later.'
    });
  }

  const { name, email, message } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Name, email, and message are required.' });
  }

  const trimmedName = String(name).trim();
  const trimmedEmail = String(email).trim();
  const trimmedMessage = String(message).trim();

  if (trimmedName.length < 2 || trimmedName.length > 100 || trimmedMessage.length < 10 || trimmedMessage.length > 5000) {
    return res.status(400).json({ message: 'Please provide valid contact details.' });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
    return res.status(400).json({ message: 'Please provide a valid email address.' });
  }

  const requiredConfig = ['SMTP_HOST', 'SMTP_USER', 'SMTP_PASS', 'RECIPIENT_EMAIL'];
  if (requiredConfig.some((key) => !process.env[key])) {
    console.error('Missing SMTP environment variables.');
    return res.status(500).json({ message: 'Email service is not configured.' });
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 587),
    secure: false,
    requireTLS: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });

  try {
    await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: process.env.RECIPIENT_EMAIL,
      replyTo: trimmedEmail,
      subject: `Portfolio contact from ${trimmedName}`,
      text: `Name: ${trimmedName}\nEmail: ${trimmedEmail}\n\nMessage:\n${trimmedMessage}`,
      html: `
        <p><strong>Name:</strong> ${escapeHtml(trimmedName)}</p>
        <p><strong>Email:</strong> ${escapeHtml(trimmedEmail)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(trimmedMessage).replace(/\n/g, '<br />')}</p>
      `
    });

    return res.status(200).json({ success: true, message: 'Message sent successfully.' });
  } catch (error) {
    console.error('Email send failed:', error);
    return res.status(500).json({ message: 'Unable to send message right now.' });
  }
};
