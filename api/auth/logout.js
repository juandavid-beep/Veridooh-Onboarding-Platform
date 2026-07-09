import { SESSION_COOKIE_NAME } from '../../lib/session.js';

export default async function handler(req, res) {
  res.setHeader('Set-Cookie', `${SESSION_COOKIE_NAME}=; HttpOnly; Secure; SameSite=Lax; Path=/; Max-Age=0`);
  res.status(200).json({ ok: true });
}
