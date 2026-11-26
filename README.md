# martinklug.com

Personal website of Martin Klug. Static site built with Astro, hosted on Vercel.

## How it works
- Essays live in `src/pages/essays/*.md` (frontmatter: title, category, summary, order, draft).
- Drafts are written in Google Docs (Drive folder "martinklug.com"); Claude converts them to Markdown and commits here.
- Every push to `main` deploys automatically on Vercel.
- Settings (email, LinkedIn, MailerLite form URL): `src/site.config.mjs`.
- Old Webflow URLs are redirected in `vercel.json`.

## Local
npm install && npm run dev
