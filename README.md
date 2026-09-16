# Greenroots Training & Placements — Website

A 8-page marketing website for **Greenroots Technology Training Institute** (Kukatpally, Hyderabad), built with **Next.js 16 + React 19 + Tailwind CSS 4**.

All page content (programs, stats, reviews, CRT, study-abroad, trainer application, contact) lives in a single source-of-truth file — `src/lib/content.ts`. Enquiry and application forms compose pre-filled WhatsApp deep links (same behavior as the original site), so **no backend or database is required to run the site**.

## Pages

| Route               | Contents                                                        |
| ------------------- | --------------------------------------------------------------- |
| `/`                 | Hero, why-section, hiring partners, reviews, field index, CTA   |
| `/programs`         | All 8 training programs with fees & duration                    |
| `/placements`       | Placement record, stats, mentor, all 6 graduate reviews         |
| `/crt`              | CRT program for colleges (curriculum explorer, formats)         |
| `/study-abroad`     | SIG Global Edu partnership, destinations, enquiry form          |
| `/become-a-trainer` | Trainer application, income model, FAQ                          |
| `/contact`          | Enquiry form, address, phone, office hours                      |
| `/privacy`          | Privacy policy (DPDP Act 2023)                                  |

## Requirements

- **Node.js 20.9+** or **Bun 1.2+** (the lockfile is `bun.lock`)
- No database needed. A Prisma/SQLite scaffold is included but unused by the site.

## Run locally

```bash
# with bun (recommended — lockfile is bun.lock)
bun install
bun run dev          # http://localhost:3000

# or with npm
npm install
npm run dev
```

## Production build

```bash
npm run build        # creates .next/standalone (static assets are copied in automatically)
npm run start        # serves on port 3000 (uses node .next/standalone/server.js)
```

Change the port with `PORT=8080 npm run start`.

## Deploy anywhere

### Vercel (easiest)

1. Push this folder to a Git repository (GitHub / GitLab / Bitbucket).
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Vercel auto-detects Next.js — just click **Deploy**. No env vars required.

> Note: Google Fonts are fetched via `next/font` at build time, so the build machine needs internet access (Vercel and most CI have it by default).

### Docker

```bash
docker build -t greenroots-website .
docker run -p 3000:3000 greenroots-website
# → http://localhost:3000
```

### Any VPS / shared Node host (Render, Railway, Fly.io, EC2, …)

```bash
npm install
npm run build
PORT=3000 npm run start          # or run behind nginx/caddy reverse proxy
```

Example with pm2:

```bash
pm2 start "node .next/standalone/server.js" --name greenroots --time
```

### Static-ish hosts (GitHub Pages etc.)

This site uses server features (route metadata, standalone server), so it is **not** a static export. Use any Node-capable host from the list above — most have a free tier.

## Editing content

- **All text, programs, stats, reviews, FAQs, contact info** → `src/lib/content.ts`
- **Page components** → `src/components/site/` (one component per section/page)
- **Routes** → `src/app/*/page.tsx`
- **Colors & design tokens** → `src/app/globals.css` (paper `#F6F2E7`, forest ink `#0B3D2E`, marigold accents)
- **Logo / robots** → `public/`

The WhatsApp number for all form CTAs is set in `src/lib/content.ts` (`CONTACT.whatsapp`, `whatsappPrograms`, etc.) — update it there in one place.

## Project structure

```
├── src/
│   ├── app/                  # routes: /, /programs, /placements, /crt,
│   │                         # /study-abroad, /become-a-trainer, /contact, /privacy
│   ├── components/site/      # section components (Masthead, Hero, Footer, …)
│   ├── components/ui/        # shadcn/ui primitives
│   └── lib/content.ts        # ⭐ single source of truth for all site content
├── prisma/                   # optional scaffold (unused by the site)
├── db/                       # sqlite file for the optional scaffold
├── Dockerfile                # multi-stage build (bun)
├── next.config.ts            # output: "standalone"
└── tailwind.config.ts
```

## Notes

- `DATABASE_URL` in `.env` points to a local SQLite file used only by the unused Prisma scaffold — safe to ignore or remove.
- The favicon/logo colors follow the brand: forest green `#0B3D2E` + leaf `#76D672`.
