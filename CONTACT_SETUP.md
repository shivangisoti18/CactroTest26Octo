# Contact Form Setup Guide

## Current Implementation: mailto

Your contact form now uses `mailto:` links, which opens the user's default email client with pre-filled information. This works immediately without any setup!

### How it works:
- User fills out the form
- Clicking "Send Message" opens their email client (Gmail, Outlook, etc.)
- The email is pre-filled with the subject and message
- User clicks send in their email client

---

## Optional: EmailJS Integration (Recommended for Production)

For a more professional experience where emails are sent directly without opening an email client, you can use EmailJS (free tier: 200 emails/month).

### Setup Steps:

#### 1. Install EmailJS
```bash
npm install @emailjs/browser
```

#### 2. Create EmailJS Account
1. Go to https://www.emailjs.com/
2. Sign up for a free account
3. Create an email service (Gmail, Outlook, etc.)
4. Create an email template with these variables:
   - `{{from_name}}` - Sender's name
   - `{{from_email}}` - Sender's email
   - `{{subject}}` - Email subject
   - `{{message}}` - Email message

#### 3. Get Your Credentials
- Service ID (from your email service)
- Template ID (from your email template)
- Public Key (from Account > API Keys)

#### 4. Update Contact.jsx

Replace the `handleSubmit` function with this:

```javascript
import emailjs from '@emailjs/browser';

// At the top of your component
const EMAILJS_SERVICE_ID = 'your_service_id';
const EMAILJS_TEMPLATE_ID = 'your_template_id';
const EMAILJS_PUBLIC_KEY = 'your_public_key';

const handleSubmit = async (e) => {
  e.preventDefault();
  setStatus('sending');
  
  try {
    const result = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: personalInfo.email
      },
      EMAILJS_PUBLIC_KEY
    );
    
    console.log('Email sent successfully:', result);
    setStatus('success');
    setFormData({ name: '', email: '', subject: '', message: '' });
    
    setTimeout(() => setStatus(''), 3000);
  } catch (error) {
    console.error('Email sending failed:', error);
    setStatus('error');
    setTimeout(() => setStatus(''), 3000);
  }
};
```

#### 5. Update the submit button to handle errors

```javascript
<motion.button
  type="submit"
  className="submit-button"
  whileHover={{ scale: 1.02 }}
  whileTap={{ scale: 0.98 }}
  disabled={status === 'sending'}
>
  {status === 'sending' ? '🚀 Sending...' : 
   status === 'success' ? '✅ Sent!' : 
   status === 'error' ? '❌ Failed - Try Again' :
   '📤 Send Message'}
</motion.button>
```

---

## Alternative: Backend API

If you want full control, you can create a backend API:

### Express.js Example:

```javascript
// backend/server.js
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  }
});

app.post('/api/contact', async (req, res) => {
  const { name, email, subject, message } = req.body;
  
  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.CONTACT_EMAIL,
      replyTo: email,
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    });
    
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

app.listen(3001, () => console.log('Server running on port 3001'));
```

---

## Testing

### Current mailto implementation:
1. Fill out the contact form
2. Click "Send Message"
3. Your email client should open with pre-filled content
4. Send the email from your client

### EmailJS implementation:
1. Fill out the contact form
2. Click "Send Message"
3. Wait for the success message
4. Check your email inbox for the message

---

## Troubleshooting

### mailto not working?
- Make sure you have a default email client configured
- Try accessing it on a device/browser with email client setup

### EmailJS not sending?
- Check your EmailJS dashboard for quota limits
- Verify your credentials are correct
- Check browser console for error messages
- Ensure your email service is properly connected in EmailJS

### Want to test locally?
- For mailto: Works immediately
- For EmailJS: Create test templates and use test credentials
- For backend: Use services like Mailtrap for email testing

