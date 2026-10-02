/* Builds the homepage hero image files in /public/images from the supplied master.

   Run with: node scripts/build-hero.mjs

   Source: brand/hero-source.jpg (1024 x 375, the left third is a flat brand
   green that the hero background matches). The master is not enlarged:
   upscaling only adds blur, so the files keep its native size. */

import sharp from "sharp";
import { mkdirSync } from "node:fs";

const path = (p) => new URL(p, import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, "$1");
mkdirSync(path("../public/images"), { recursive: true });

const input = path("../brand/hero-source.jpg");
const out = (name) => path(`../public/images/${name}`);

const jpg = await sharp(input).jpeg({ quality: 84, mozjpeg: true }).toFile(out("hero.jpg"));
const webp = await sharp(input).webp({ quality: 82, effort: 6 }).toFile(out("hero.webp"));
const avif = await sharp(input).avif({ quality: 60, effort: 6 }).toFile(out("hero.avif"));

console.log("Hero images written to public/images/", jpg.width, "x", jpg.height, jpg.size, webp.size, avif.size);
