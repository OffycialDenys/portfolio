import express from 'express';
import { Resend } from 'resend';
import xss from 'xss';
import { validate } from 'email-validator';
import rateLimit from 'express-rate-limit';

const router = express.Router();

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY);

// Rate limit: max 5 requests per 15 minutes per IP
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: 'Too many contact form submissions. Please try again later.',
  standardHeaders: true,
  legacyHeaders: false
});

// Sanitize input to prevent XSS
const sanitizeInput = (input) => {
  return xss(input.trim(), {
    whiteList: {},
    stripIgnoredTag: true,
  });
};

// POST route for contact form
router.post('/contact', contactLimiter, async (req, res) => {
  const { name, email, message } = req.body;

  // Validate required fields
  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: 'All fields are required'
    });
  }

  // Sanitize inputs
  const sanitizedName = sanitizeInput(name);
  const sanitizedEmail = sanitizeInput(email);
  const sanitizedMessage = sanitizeInput(message);

  // Validate email format
  if (!validate(sanitizedEmail)) {
    return res.status(400).json({
      success: false,
      message: 'Please provide a valid email address'
    });
  }

  // Additional validation for message length
  if (sanitizedMessage.length < 10 || sanitizedMessage.length > 5000) {
    return res.status(400).json({
      success: false,
      message: 'Message must be between 10 and 5000 characters'
    });
  }

  try {
    // Send email via Resend
    const response = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: process.env.EMAIL_USER,
      replyTo: sanitizedEmail,
      subject: `New Portfolio Message from ${sanitizedName}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${sanitizedName}</p>
        <p><strong>Email:</strong> ${sanitizedEmail}</p>
        <p><strong>Message:</strong></p>
        <p>${sanitizedMessage.replace(/\n/g, '<br>')}</p>
        <hr>
        <p><small>Sent via portfolio contact form</small></p>
      `
    });

    if (response.error) {
      throw new Error(response.error.message);
    }

    res.status(200).json({
      success: true,
      message: 'Message sent successfully! I\'ll get back to you soon.'
    });
  } catch (error) {
    console.error('Email error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to send message. Please try again later.'
    });
  }
});

export default router;