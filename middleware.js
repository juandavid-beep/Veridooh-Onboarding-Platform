// Vercel Routing Middleware — runs at the edge, before any static file is
// served. This is the actual access gate: a client-side-only check can be
// bypassed by anyone opening dev tools, so enforcement has to happen here.

import { next } from '@vercel/functions';
import { verifySessionToken, SESSION_COOKIE_NAME } from './lib/session.js';

export const config = {
  // Everything except the login page, its assets, and the auth API itself —
  // those must stay reachable by a signed-out visitor.
  matcher: ['/((?!api/|login.html|logo.js|styles.css|favicon).*)'],
};

function getCookie(request, name) {
  const cookieHeader = request.headers.get('cookie') || '';
  const match = cookieHeader.match(new RegExp('(?:^|; )' + name + '=([^;]*)'));
  return match ? decodeURIComponent(match[1]) : null;
}

export default async function middleware(request) {
  const token = getCookie(request, SESSION_COOKIE_NAME);
  const session = token ? await verifySessionToken(token, process.env.SESSION_SECRET) : null;

  if (!session) {
    return Response.redirect(new URL('/login.html', request.url), 302);
  }

  return next();
}
