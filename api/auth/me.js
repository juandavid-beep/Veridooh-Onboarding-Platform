import { verifySessionToken, SESSION_COOKIE_NAME } from '../../lib/session.js';

function getCookie(req, name) {
  const header = req.headers.cookie || '';
  const match = header.match(new RegExp('(?:^|; )' + name + '=([^;]*)'));
  return match ? decodeURIComponent(match[1]) : null;
}

export default async function handler(req, res) {
  const token = getCookie(req, SESSION_COOKIE_NAME);
  const session = token ? await verifySessionToken(token, process.env.SESSION_SECRET) : null;
  if (!session) {
    res.status(401).json({ error: 'Not signed in' });
    return;
  }
  res.status(200).json({ email: session.email, name: session.name });
}
