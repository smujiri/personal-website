export default async function handler(req, res) {
  const { code } = req.query;

  if (!code) {
    return res.status(400).send('Missing OAuth code');
  }

  let content;
  try {
    const tokenRes = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        client_id: process.env.GITHUB_CLIENT_ID,
        client_secret: process.env.GITHUB_CLIENT_SECRET,
        code,
      }),
    });

    const data = await tokenRes.json();

    if (data.access_token) {
      content = `authorization:github:success:${JSON.stringify({ token: data.access_token, provider: 'github' })}`;
    } else {
      content = `authorization:github:error:${JSON.stringify({ message: data.error_description || 'OAuth failed' })}`;
    }
  } catch (err) {
    content = `authorization:github:error:${JSON.stringify({ message: 'Server error during OAuth' })}`;
  }

  // Post message to the opener (Decap CMS admin window)
  const escapedContent = JSON.stringify(content);
  const html = `<!DOCTYPE html>
<html><head><title>Authorizing…</title></head>
<body>
<script>
(function () {
  var content = ${escapedContent};
  function receiveMessage(e) {
    window.opener.postMessage(content, e.origin);
  }
  window.addEventListener('message', receiveMessage, false);
  window.opener.postMessage('authorizing:github', '*');
})();
<\/script>
</body></html>`;

  res.setHeader('Content-Type', 'text/html').send(html);
}
