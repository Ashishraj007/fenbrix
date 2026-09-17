# Fenbrix Website

The official website for **Fenbrix — Digital Growth & Technology**, Noida.

Built with **Next.js 15**, **Tailwind CSS 3** and **Framer Motion**, and exported as
plain static HTML so it can be hosted absolutely anywhere.

---

## What's in this zip

```
fenbrix-website/
├── out/                  ← THE READY-TO-UPLOAD WEBSITE (start here)
├── app/                  ← page source code
├── components/           ← reusable UI components
├── lib/content.js        ← ALL your text, prices and contact details
├── public/logo/          ← your logo files (SVG + PNG)
├── package.json
├── tailwind.config.js
└── next.config.mjs
```

---

## ⚡ Fastest way to go live (no coding)

The `out/` folder **is** your finished website. Every page is already built.

### Hostinger / GoDaddy / cPanel / any shared hosting

1. Open the `out/` folder.
2. Select **everything inside it** (not the folder itself — the files inside).
3. Zip that selection, or upload the files directly.
4. In your hosting File Manager, go to `public_html/`.
5. Upload and extract there.
6. Visit your domain — the site is live.

> ⚠️ Common mistake: uploading the `out` folder itself. Your site would then live at
> `yourdomain.com/out/`. Upload the **contents** of `out/`, not the folder.

### Netlify (free, drag-and-drop)

1. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
2. Drag the `out/` folder onto the page.
3. Live in about 20 seconds. Add your domain in **Site settings → Domain management**.

### Vercel (best option — free, auto-rebuilds)

1. Push this project folder to a GitHub repository.
2. Import the repo at [vercel.com/new](https://vercel.com/new).
3. Vercel detects Next.js automatically. Click **Deploy**.
4. Every future edit you push goes live by itself.

---

## ✅ Do this before going live

Open **`lib/content.js`** and replace the placeholder contact details at the top:

```js
export const SITE = {
  phone: '+91 00000 00000',      // ← your real phone number
  email: 'hello@fenbrix.com',    // ← your real email
  whatsapp: '910000000000',      // ← country code + number, digits only, no +
};
```

The WhatsApp number **must** have no `+`, no spaces, no dashes.
For `+91 98765 43210`, write `919876543210`.

Then rebuild (see below) and re-upload `out/`.

Also update the domain in `app/layout.jsx` (`metadataBase` and `openGraph.url`)
from `https://fenbrix.com` to your real domain so social previews work.

---

## Editing the site

**Almost everything you'd want to change lives in one file: `lib/content.js`.**

| What you want to change | Where |
| --- | --- |
| Phone, email, WhatsApp, address | `lib/content.js` → `SITE` |
| Services and their bullet points | `lib/content.js` → `SERVICES` |
| Package names, prices, features | `lib/content.js` → `PACKAGES` |
| Project pricing tables | `lib/content.js` → `PROJECT_PRICING` |
| Industries | `lib/content.js` → `INDUSTRIES` |
| The 9-step process | `lib/content.js` → `PROCESS` |
| FAQ questions and answers | `lib/content.js` → `FAQS` |
| Comparison table | `lib/content.js` → `DIFFERENTIATORS` |
| Menu items | `lib/content.js` → `NAV` |
| Brand colours | `tailwind.config.js` → `colors` |

After any edit, rebuild and re-upload.

---

## Rebuilding after an edit

You need [Node.js 18+](https://nodejs.org) installed.

```bash
npm install     # only needed the first time
npm run dev     # preview at http://localhost:3000
npm run build   # regenerates the out/ folder
```

Then upload the fresh `out/` folder again.

---

## Pages

| Page | Path |
| --- | --- |
| Home | `/` |
| Services | `/services/` |
| Industries | `/industries/` |
| Process | `/process/` |
| Pricing | `/pricing/` |
| Case Studies | `/case-studies/` |
| About | `/about/` |
| Contact | `/contact/` |

---

## About the contact form

This is a static site, so there is no server to receive form submissions.
The form instead **composes the enquiry and opens WhatsApp or the visitor's email app**
with everything pre-filled. This works immediately on any host with zero setup.

If you later want submissions landing in an inbox or spreadsheet, the easiest upgrade
is [Formspree](https://formspree.io) or [Web3Forms](https://web3forms.com) — both are
free tiers and take about five minutes to wire into `components/ContactForm.jsx`.

---

## Technical notes

- **Fonts are self-hosted.** Manrope ships inside the project (`app/fonts/`) rather than
  loading from Google Fonts. Faster, more private, works offline. Licensed under the
  SIL Open Font License — `app/fonts/OFL.txt` is included and must stay with the project.
- **The logo is inline SVG**, not an image file. It stays sharp at every size and costs
  no extra network request. Source files are in `public/logo/` if you need them elsewhere.
- **`output: 'export'`** in `next.config.mjs` is what produces the static `out/` folder.
  Don't remove it unless you intend to host on a Node server.
- **`trailingSlash: true`** makes URLs work correctly on shared/cPanel hosting.
- **Animations respect `prefers-reduced-motion`**, and content stays visible if a visitor
  has JavaScript disabled.
- **Zero npm vulnerabilities** at the time of build.

---

## A note on the content

The copy is written to be honest rather than inflated. The Case Studies page openly says
the agency is newly launched instead of showing invented results, and all pricing is
labelled as indicative and scope-dependent. Replace it with real numbers and testimonials
as soon as you have them — that page is built to make adding them easy.
