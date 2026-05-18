export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { password } = req.body || {};
  const sitePassword = process.env.SITE_PASSWORD;

  if (!sitePassword || !password || password !== sitePassword) {
    return res.status(401).json({ error: 'Incorrect password' });
  }

  res.setHeader(
    'Set-Cookie',
    'sm_auth=granted; Path=/; Max-Age=604800; SameSite=Lax; Secure; HttpOnly'
  );
  return res.status(200).json({ ok: true });
}
