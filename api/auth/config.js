// Public config endpoint — the Google OAuth Client ID is not a secret (it's
// designed to be embedded in client-side code), so it's safe to serve here.
// Keeping it out of the repo just means it can be rotated via Vercel env vars
// without a code change.

export default async function handler(req, res) {
  res.status(200).json({ clientId: process.env.GOOGLE_CLIENT_ID || '' });
}
