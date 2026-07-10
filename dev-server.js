// Local-only dev server. NOT deployed to Vercel (lives outside api/, which is
// the only directory Vercel turns into serverless functions).
//
// Plain `python -m http.server` can't serve /api/auth/* or run middleware.js,
// so this fakes just enough of the auth API to let the app boot locally
// without real Google OAuth. Never use this in production.

import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const PORT = process.env.PORT || 4173;

const FAKE_USER = { email: 'dev@veridooh.com', name: 'Local Dev' };

const CONTENT_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2'
};

function sendJson(res, status, body) {
  const data = JSON.stringify(body);
  res.writeHead(status, { 'Content-Type': 'application/json; charset=utf-8', 'Content-Length': Buffer.byteLength(data) });
  res.end(data);
}

function serveStatic(req, res) {
  const urlPath = decodeURIComponent(req.url.split('?')[0]);
  const relative = urlPath === '/' ? 'index.html' : urlPath.replace(/^\/+/, '');
  const resolved = path.resolve(ROOT, relative);

  if (!resolved.startsWith(ROOT)) {
    res.writeHead(403);
    res.end('Forbidden');
    return;
  }

  fs.readFile(resolved, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.end('Not found');
      return;
    }
    const ext = path.extname(resolved).toLowerCase();
    res.writeHead(200, { 'Content-Type': CONTENT_TYPES[ext] || 'application/octet-stream' });
    res.end(data);
  });
}

const server = http.createServer((req, res) => {
  if (req.url.startsWith('/api/auth/me')) return sendJson(res, 200, FAKE_USER);
  if (req.url.startsWith('/api/auth/config')) return sendJson(res, 200, { clientId: '' });
  if (req.url.startsWith('/api/auth/logout')) return sendJson(res, 200, { ok: true });
  if (req.url.startsWith('/api/auth/verify')) return sendJson(res, 200, FAKE_USER);
  serveStatic(req, res);
});

server.listen(PORT, () => {
  console.log(`Dev server (fake auth) running at http://localhost:${PORT}`);
});
