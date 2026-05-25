export const config = { matcher: ['/:path*'] };

export default function middleware(request) {
  const { pathname } = new URL(request.url);

  if (pathname === '/') {
    return Response.redirect(new URL('/en/', request.url), 302);
  }
}
