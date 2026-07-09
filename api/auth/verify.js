// Verifies a Google ID token server-side and, only if it's genuinely signed
// by Google AND belongs to a @veridooh.com account, issues our own signed
// session cookie. Never trust an ID token that only passed a client-side check.

import { OAuth2Client } from 'google-auth-library';
import { createSessionToken, SESSION_COOKIE_NAME } from '../../lib/session.js';

const ALLOWED_DOMAIN = 'veridooh.com';
const SESSION_TTL_MS = 7 * 24 * 60 * 60 * 1000; // 7 days

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const clientId = process.env.GOOGLE_CLIENT_ID;
  if (!clientId) {
    res.status(500).json({ error: 'Sign-in is not configured (missing GOOGLE_CLIENT_ID).' });
    return;
  }

  const { credential } = req.body || {};
  if (!credential) {
    res.status(400).json({ error: 'Missing credential' });
    return;
  }

  const client = new OAuth2Client(clientId);
  let payload;
  try {
    const ticket = await client.verifyIdToken({ idToken: credential, audience: clientId });
    payload = ticket.getPayload();
  } catch (err) {
    res.status(401).json({ error: 'Invalid or expired sign-in token.' });
    return;
  }

  const email = (payload.email || '').toLowerCase();
  const domainOk = payload.hd === ALLOWED_DOMAIN || email.endsWith(`@${ALLOWED_DOMAIN}`);
  if (!payload.email_verified || !domainOk) {
    res.status(403).json({ error: `Access is restricted to @${ALLOWED_DOMAIN} Google accounts.` });
    return;
  }

  const sessionToken = await createSessionToken(
    { email, name: payload.name || email, exp: Date.now() + SESSION_TTL_MS },
    process.env.SESSION_SECRET
  );

  res.setHeader(
    'Set-Cookie',
    `${SESSION_COOKIE_NAME}=${sessionToken}; HttpOnly; Secure; SameSite=Lax; Path=/; Max-Age=${SESSION_TTL_MS / 1000}`
  );
  res.status(200).json({ email, name: payload.name || email });
}
