// Regenerates public/og-image.png (1200x630) from the same brand tokens used
// on the site (colors from tailwind.config.js, mark paths from components/Logo.jsx).
// Run with: node scripts/generate-og-image.mjs
import sharp from 'sharp';
import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_PATH = path.join(__dirname, '..', 'public', 'og-image.png');

const W = 1200;
const H = 630;

// Fenbrix "F" mark, native viewBox 0 0 512 512 (components/Logo.jsx).
const F_TOP = 'M152 388 V124 H392 L348 190 H218 V388 Z';
const F_MID = 'M152 288 V222 H322 L278 288 Z';
const MARK_SIZE = 60;
const MARK_SCALE = MARK_SIZE / 512;
const MARK_X = 80;
const MARK_Y = 66;

const svg = `
<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="85%" y2="100%" gradientTransform="rotate(155 0.5 0.5)">
      <stop offset="0%" stop-color="#0B2436"/>
      <stop offset="55%" stop-color="#103A4E"/>
      <stop offset="100%" stop-color="#12586A"/>
    </linearGradient>
    <linearGradient id="teal" x1="0" y1="1" x2="1" y2="0">
      <stop offset="0%" stop-color="#1B8F8A"/>
      <stop offset="100%" stop-color="#35D6C0"/>
    </linearGradient>
    <radialGradient id="glow1" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#35D6C0" stop-opacity="0.30"/>
      <stop offset="100%" stop-color="#35D6C0" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="glow2" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#1B8F8A" stop-opacity="0.28"/>
      <stop offset="100%" stop-color="#1B8F8A" stop-opacity="0"/>
    </radialGradient>
    <filter id="blur1" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="70"/>
    </filter>
    <pattern id="grid" width="56" height="56" patternUnits="userSpaceOnUse">
      <path d="M56 0H0V56" fill="none" stroke="#FFFFFF" stroke-opacity="0.045" stroke-width="1"/>
    </pattern>
  </defs>

  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <rect width="${W}" height="${H}" fill="url(#grid)"/>
  <circle cx="120" cy="20" r="260" fill="url(#glow1)" filter="url(#blur1)"/>
  <circle cx="1130" cy="560" r="300" fill="url(#glow2)" filter="url(#blur1)"/>

  <!-- Logo lockup -->
  <g transform="translate(${MARK_X},${MARK_Y}) scale(${MARK_SCALE})">
    <path d="${F_TOP}" fill="#ffffff"/>
    <path d="${F_MID}" fill="url(#teal)"/>
  </g>
  <text x="${MARK_X + MARK_SIZE + 18}" y="${MARK_Y + 27}" font-family="Arial, Helvetica, sans-serif" font-weight="800" font-size="30" letter-spacing="2.5" fill="#ffffff">FENBRIX</text>
  <text x="${MARK_X + MARK_SIZE + 18}" y="${MARK_Y + 48}" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="12" letter-spacing="2.6" fill="#35D6C0">DIGITAL GROWTH &amp; TECHNOLOGY</text>

  <!-- Headline -->
  <text x="80" y="308" font-family="Arial, Helvetica, sans-serif" font-weight="800" font-size="66" letter-spacing="-1" fill="#ffffff">
    <tspan x="80" dy="0">One Partner.</tspan>
    <tspan x="80" dy="76">Your Entire Digital Business.</tspan>
  </text>

  <text x="80" y="462" font-family="Arial, Helvetica, sans-serif" font-weight="600" font-size="27" fill="#B7CBD1">
    Social Media &#183; Websites &#183; Software &#183; Automation
  </text>
  <text x="80" y="500" font-family="Arial, Helvetica, sans-serif" font-weight="600" font-size="27" fill="#35D6C0">
    One accountable team, not four vendors.
  </text>

  <!-- Footer divider -->
  <rect x="80" y="546" width="1040" height="1" fill="#ffffff" fill-opacity="0.14"/>
  <text x="80" y="586" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="20" letter-spacing="0.5" fill="#ffffff" fill-opacity="0.85">fenbrix.in</text>
  <text x="1120" y="586" font-family="Arial, Helvetica, sans-serif" font-weight="500" font-size="18" fill="#ffffff" fill-opacity="0.5" text-anchor="end">Noida &#183; Delhi NCR &#183; Gurugram</text>
</svg>
`;

const buffer = Buffer.from(svg);

sharp(buffer)
  .resize(W, H)
  .png({ quality: 92 })
  .toBuffer()
  .then((out) => {
    writeFileSync(OUT_PATH, out);
    console.log(`OG image written to ${OUT_PATH} (${out.length} bytes)`);
  })
  .catch((err) => {
    console.error('Failed to generate OG image:', err);
    process.exit(1);
  });
