export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, subject, message } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email address' });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('RESEND_API_KEY is not set');
    return res.status(500).json({ error: 'Email service not configured' });
  }

  const emailSubject = subject
    ? `Enquiry from ${name}: ${subject}`
    : `Enquiry from ${name}`;

  const html = `
    <p><strong>From:</strong> ${name} &lt;${email}&gt;</p>
    ${subject ? `<p><strong>Subject:</strong> ${subject}</p>` : ''}
    <hr style="border:none;border-top:1px solid #eee;margin:16px 0" />
    <p style="white-space:pre-wrap">${message}</p>
    <hr style="border:none;border-top:1px solid #eee;margin:16px 0" />
    <p style="color:#999;font-size:12px">Sent via mujiri.ge contact form</p>
  `;

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'SM Consulting Website <contact@mujiri.ge>',
        to: ['info@mujiri.ge'],
        reply_to: email,
        subject: emailSubject,
        html,
      }),
    });

    if (!response.ok) {
      const err = await response.text();
      console.error('Resend error:', err);
      return res.status(500).json({ error: 'Failed to send email' });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Contact form error:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
