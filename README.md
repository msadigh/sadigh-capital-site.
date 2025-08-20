# Sadigh Capital — Family Office (Next.js + Tailwind)

A sleek, one-page site ready for Vercel (Hobby / free).

## Quick Start

```bash
npm install
npm run dev
```

## Deploy on Vercel

1. Push this repo to GitHub.
2. In Vercel, click **New Project** → import the repo → Deploy.
3. In Vercel → **Settings > Domains** → add `sadigh.capital`.
4. In GoDaddy DNS:
   - **A record** for `@` → `76.76.21.21` (Vercel apex)
   - **CNAME** for `www` → `cname.vercel-dns.com`
5. Wait for DNS to propagate; you’re live.
