/* Builds the homepage hero image files in /public/images from the supplied master.

   Run with: node scripts/build-hero.mjs

   Source: brand/hero-source.png (2072 x 759). The left of the image is flat
   brand green (#093129), which the hero background matches so the text sits
   on it. Each format is written at three widths for a srcset; nothing is
   enlarged beyond the master. */

import sharp from "sharp";
import { mkdirSync } from "node:fs";

const path = (p) => new URL(p, import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, "$1");
mkdirSync(path("../public/images"), { recursive: true });

const input = path("../brand/hero-source.png");
const out = (name) => path(`../public/images/${name}`);
const widths = [900, 1400, 2072];
const sizes = {};

for (const w of widths) {
  const base = () => sharp(input).resize({ width: w, withoutEnlargement: true, kernel: "lanczos3" });
  const jpg = await base().jpeg({ quality: 84, mozjpeg: true }).toFile(out(`hero-${w}.jpg`));
  const webp = await base().webp({ quality: 82, effort: 6 }).toFile(out(`hero-${w}.webp`));
  const avif = await base().avif({ quality: 58, effort: 6 }).toFile(out(`hero-${w}.avif`));
  sizes[w] = { jpg: jpg.size, webp: webp.size, avif: avif.size };
}

console.log("Hero images written to public/images/", JSON.stringify(sizes));
