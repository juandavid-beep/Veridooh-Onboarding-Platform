# Deploying the Onboarding App

The code is done and committed locally. What's left needs your accounts —
here's exactly what to do, in order.

## 1. Create the GitHub repo

1. Go to github.com → **New repository**.
2. Name it (e.g. `veridooh-onboarding`), set visibility to **Private**.
3. Don't initialize with a README/gitignore — this repo already has commits.
4. Copy the repo URL it gives you (e.g. `https://github.com/veridooh/veridooh-onboarding.git`).
5. Send me that URL — I'll add it as a remote and push.

## 2. Create the Google OAuth Client ID

This is the piece that actually restricts sign-in to `@veridooh.com` accounts.

1. Go to [console.cloud.google.com](https://console.cloud.google.com) (sign in
   with your Veridooh Google account).
2. Create a new project (or pick an existing one) — e.g. "Veridooh Onboarding".
3. Go to **APIs & Services → OAuth consent screen**.
   - User type: **Internal**. This is the important part — it means only
     accounts inside the Veridooh Google Workspace can ever complete sign-in,
     enforced by Google itself before our code even runs.
   - Fill in the app name ("Veridooh Onboarding") and support email.
4. Go to **APIs & Services → Credentials → Create Credentials → OAuth client ID**.
   - Application type: **Web application**.
   - Authorized JavaScript origins: add your Vercel URL once you have it
     (e.g. `https://onboarding.veridooh.com` or the `*.vercel.app` URL Vercel
     gives you) — you can add this after step 3 below and redeploy.
   - Leave "Authorized redirect URIs" empty — we're using Google Identity
     Services' pop-up flow, not a redirect flow.
5. Copy the **Client ID** (looks like `xxxxx.apps.googleusercontent.com`).
   This is *not* secret — it's fine to share it with me or paste it directly
   into Vercel.

## 3. Create the Vercel project

1. Go to [vercel.com](https://vercel.com) → **Add New → Project** → import
   the GitHub repo from step 1 (you may need to install the Vercel GitHub
   app / grant repo access first).
2. Framework preset: Vercel should auto-detect "Other" — no build command
   needed, this is a static site with a couple of serverless functions.
3. Before deploying, add these **Environment Variables**:
   | Name | Value |
   |---|---|
   | `GOOGLE_CLIENT_ID` | the Client ID from step 2 |
   | `SESSION_SECRET` | a random secret — generate one with `openssl rand -hex 32` in any terminal |
4. Deploy.
5. Once deployed, copy the live URL Vercel gives you and add it to the
   Google Cloud Console's "Authorized JavaScript origins" (step 2.4) — then
   redeploy (or just wait a minute, Google picks it up without a redeploy).

## 4. Test it

1. Visit your Vercel URL. You should land on `login.html`.
2. Sign in with a `@veridooh.com` Google account → should land on the
   dashboard with your real name/email in the top-right.
3. Try signing in with a personal Gmail account (if you have one handy) —
   Google's own consent screen should block it before it even reaches our code.
4. Click through a lesson, mark it complete, sign out, sign back in — your
   progress should still be there (progress is stored per-email in the
   browser's localStorage, same as before).

## Notes

- I could not fully test the OAuth flow myself — it requires your real
  Google Cloud credentials and a live deployment, neither of which I have
  access to. Everything else (page rendering, lesson content, quiz logic)
  is already verified working.
- To add more users later, nothing needs to change — anyone with a
  `@veridooh.com` Google account can already sign in. There's no separate
  "allow-list" to maintain.
- If you ever want to rotate `SESSION_SECRET` (e.g. to force everyone to
  sign in again), just change its value in Vercel's environment variables
  and redeploy.
