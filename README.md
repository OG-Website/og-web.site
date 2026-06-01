# OG Web.site

Next.js project for www.og-web.site

## Install
```bash
npm install
```

## Run locally
```bash
npm run dev
```

## Structure
- `public/assets/branding` stores the live OG brand assets used by the app.
- `public/assets/projects` stores the live project/client artwork used in the portfolio cards.
- `documents/reference` stores mockups, screenshots, and legacy source files that are not served by the site.
- `scripts` stores local helper scripts.
- `.tmp` stores throwaway review output, browser profiles, and logs.

## Environment variables
Create `.env.local` from `.env.example`.

## Deploy
```bash
vercel link
vercel --prod
```
