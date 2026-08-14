# Francesca Hogi — francescahogi.com

Next.js 14 (App Router) site. Three pages built (Home, About, Book); Work,
For Brands, and Contact are placeholders with copy ready to drop in.

## Run locally
```bash
npm install
npm run dev
```
Open http://localhost:3000

## Deploy to GitHub + Vercel (command line)

### 1. Put it on GitHub
```bash
git init
git add .
git commit -m "Initial site: Home, About, Book"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/francescahogi.git
git push -u origin main
```
(Create the empty `francescahogi` repo on github.com first — don't add a
README/gitignore there, this project already has them.)

### 2. Deploy on Vercel
- Go to vercel.com → Add New → Project
- Import the `francescahogi` repo
- Framework preset: **Next.js** (auto-detected). No settings to change.
- Click **Deploy**. You'll get a live *.vercel.app URL in ~1 minute.

### 3. Point your domain (when ready)
- In Vercel: Project → Settings → Domains → add `francescahogi.com` and `www.francescahogi.com`
- Vercel shows you DNS records to set at GoDaddy (an A record and/or CNAME)
- At GoDaddy: DNS settings → add those records
- Keep Squarespace live until the Vercel domain resolves and looks right, THEN cancel Squarespace.
- DNS changes are reversible; nothing is destructive.

## Structure
```
app/
  layout.js         → shared <html>, fonts, metadata, favicon
  globals.css       → ALL styles + design tokens (cream/red/amber, Newsreader+Jost)
  page.js           → Home
  about/page.js     → About
  book/page.js      → Book
  work/page.js      → placeholder (copy ready)
  for-brands/page.js→ placeholder (copy ready)
  contact/page.js   → placeholder (copy ready)
components/
  Nav.js, Footer.js → shared across pages
public/images/      → all photos (real files, not inlined)
```

## Design tokens (in globals.css)
- Cream `#FFF8EC` · Ink `#1B1611` · Stone `#6E6357` · Plaster `#E8E5DE`
- Red `#D62B1F` · Amber `#E3982B`
- Fonts: Newsreader (display) + Jost (UI)

## Notes / TODO
- Images use plain `<img>`. To optimize, migrate to `next/image` (needs width/height per image).
- Book buy links + About press links are live. Verify they resolve.
- Favicon not included — add `public/favicon.ico`.
- **Newsletter and Serendipity Playbook signup forms need one-time setup before they'll actually save emails.** See `SETUP-EMAIL-CAPTURE.md`.
- See PROJECT-HANDOFF.md (separate file) for original copy, decisions, and the logo taxonomy. Several pages have moved past what's described there — treat the live code as the source of truth.
