# Deployment Checklist

## Before Deploying

- Run `npm run verify`.
- Run `npm run verify:production`.
- Run `npm run check:gaps`.
- Add `NEXT_PUBLIC_SITE_URL` in Vercel with the final production URL.
- Add `public/resume/Resume.pdf` before enabling resume downloads.
- Replace VakSetu `Coming Soon` sections when real challenges, roadmap, and screenshots are available.

## Vercel Settings

- Framework preset: Next.js
- Build command: `npm run build`
- Install command: `npm install`
- Output directory: Next.js default

## Post-Deployment Checks

- Home page loads.
- `/projects` loads.
- `/projects/vaksetu` loads.
- `/robots.txt` loads.
- `/sitemap.xml` loads and uses the production domain.
- GitHub, LinkedIn, and LeetCode links open correctly.
- Resume button state is correct.
- No console errors are visible.

## Local Production Verification

```bash
npm run verify:production
```

This command builds the app, starts the production server locally, and verifies the public routes.

## Content Gap Check

```bash
npm run check:gaps
```

This command prints remaining content and deployment inputs required before final launch.
