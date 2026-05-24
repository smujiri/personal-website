export const config = { matcher: ['/:path*'] };

export default function middleware(request) {
  const { pathname } = new URL(request.url);

  // Pass through: API routes, Vercel internals, uploads, files with extensions
  if (
    pathname.startsWith('/api/') ||
    pathname.startsWith('/_vercel/') ||
    pathname.startsWith('/uploads/') ||
    /\.[a-z]{2,5}$/i.test(pathname)
  ) {
    return;
  }

  const cookieHeader = request.headers.get('cookie') || '';
  const isAuthed = cookieHeader.split(';').some((c) => {
    const [k, v] = c.trim().split('=');
    return k === 'sm_auth' && v === 'granted';
  });

  if (isAuthed) {
    if (pathname === '/') {
      return Response.redirect(new URL('/en/', request.url), 302);
    }
    return;
  }

  // Not authenticated: only allow the gate page itself
  if (pathname === '/') {
    return;
  }

  // Everything else → back to gate
  return Response.redirect(new URL('/', request.url), 302);
}
