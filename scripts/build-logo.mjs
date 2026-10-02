/* Builds the production logo files in /public from the supplied artwork.

   Run with: node scripts/build-logo.mjs

   Sources (in /brand, transparent PNG masters):
     brand/logo-source.png   horizontal logo: pin, "Webco", "PROFESSIONAL"
     brand/icon-source.png   pin icon on its own

   Outputs (in /public):
     logo.png            horizontal logo for light backgrounds (header)
     logo-reversed.png   horizontal logo for dark green backgrounds (footer)
     logo-mark.png       pin icon on its own (very narrow screens)
     favicon.png         32px browser icon
     favicon.ico         legacy browser icon (PNG-in-ICO)
     icon-192.png        192px icon
     apple-touch-icon.png  180px icon on an ivory tile

   The reversed logo is recoloured, not redrawn. Each pixel is split into its
   share of the three flat brand colours (green, cream, terracotta) and
   rebuilt with green and cream swapped, so anti-aliased edges stay smooth. */

import { writeFileSync } from "node:fs";
import sharp from "sharp";

const root = new URL("../", import.meta.url);
const read = (name) => new URL(name, root).pathname.replace(/^\/([A-Za-z]:)/, "$1");
const pub = (name) => read(`public/${name}`);

const IVORY = [0xf7, 0xf3, 0xea];
const FOREST = [0x0a, 0x21, 0x1d];

async function load(file) {
  const { data, info } = await sharp(read(file)).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  return { data, width: info.width, height: info.height };
}

function bounds({ data, width, height }) {
  let x0 = width, y0 = height, x1 = 0, y1 = 0;
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      if (data[(y * width + x) * 4 + 3] > 8) {
        if (x < x0) x0 = x;
        if (x > x1) x1 = x;
        if (y < y0) y0 = y;
        if (y > y1) y1 = y;
      }
    }
  }
  return { left: x0, top: y0, width: x1 - x0 + 1, height: y1 - y0 + 1 };
}

/** Mean colour of the solid pixels that satisfy a test. */
function mean({ data }, test) {
  let r = 0, g = 0, b = 0, n = 0;
  for (let i = 0; i < data.length; i += 4) {
    if (data[i + 3] < 250) continue;
    if (test(data[i], data[i + 1], data[i + 2])) {
      r += data[i]; g += data[i + 1]; b += data[i + 2]; n++;
    }
  }
  return [r / n, g / n, b / n];
}

function reverse(image) {
  const G = mean(image, (r, g, b) => Math.max(r, g, b) < 80);
  const C = mean(image, (r, g, b) => r > 235 && g > 225 && b > 205);
  const T = mean(image, (r, g, b) => r > 170 && g < 120 && b < 80);
  // c - T = a (G - T) + b (C - T), solved by least squares.
  const u = G.map((v, k) => v - T[k]);
  const v = C.map((x, k) => x - T[k]);
  const uu = u[0] * u[0] + u[1] * u[1] + u[2] * u[2];
  const vv = v[0] * v[0] + v[1] * v[1] + v[2] * v[2];
  const uv = u[0] * v[0] + u[1] * v[1] + u[2] * v[2];
  const det = uu * vv - uv * uv;
  const out = Buffer.from(image.data);
  for (let i = 0; i < out.length; i += 4) {
    if (out[i + 3] === 0) continue;
    const w = [out[i] - T[0], out[i + 1] - T[1], out[i + 2] - T[2]];
    const wu = w[0] * u[0] + w[1] * u[1] + w[2] * u[2];
    const wv = w[0] * v[0] + w[1] * v[1] + w[2] * v[2];
    let a = (wu * vv - wv * uv) / det;
    let b = (wv * uu - wu * uv) / det;
    a = Math.max(0, a);
    b = Math.max(0, b);
    const sum = a + b;
    if (sum > 1) { a /= sum; b /= sum; }
    const t = 1 - a - b;
    // green becomes ivory, cream becomes the footer green, terracotta stays.
    for (let k = 0; k < 3; k++) {
      out[i + k] = Math.round(Math.min(255, Math.max(0, a * IVORY[k] + b * FOREST[k] + t * T[k])));
    }
  }
  return { ...image, data: out };
}

const toSharp = (image) => sharp(image.data, { raw: { width: image.width, height: image.height, channels: 4 } });

const logo = await load("brand/logo-source.png");
const icon = await load("brand/icon-source.png");
const logoBox = bounds(logo);
const iconBox = bounds(icon);

const trimmed = (image, box) => toSharp(image).extract(box);

// Logo: 3x the largest displayed height (52px) is plenty.
const logoHeight = 160;
const dims = {};

for (const [name, image] of [["logo.png", logo], ["logo-reversed.png", reverse(logo)]]) {
  const info = await trimmed(image, logoBox)
    .resize({ height: logoHeight, kernel: "lanczos3" })
    .png({ compressionLevel: 9, palette: true, colours: 128, quality: 100, effort: 10, dither: 0.5 })
    .toFile(pub(name));
  dims[name] = [info.width, info.height];
}

const mark = await trimmed(icon, iconBox)
  .resize({ height: 160, kernel: "lanczos3" })
  .png({ compressionLevel: 9, palette: true, colours: 128, quality: 100, effort: 10, dither: 0.5 })
  .toFile(pub("logo-mark.png"));
dims["logo-mark.png"] = [mark.width, mark.height];

// Square icons: the pin centred with a little air.
async function square(size, background) {
  const inner = Math.round(size * 0.86);
  const pin = await trimmed(icon, iconBox).resize({ height: inner, kernel: "lanczos3" }).png().toBuffer();
  return sharp({
    create: { width: size, height: size, channels: 4, background: background ?? { r: 0, g: 0, b: 0, alpha: 0 } },
  })
    .composite([{ input: pin, gravity: "centre" }])
    .png({ compressionLevel: 9 });
}

await (await square(32)).toFile(pub("favicon.png"));
await (await square(192)).toFile(pub("icon-192.png"));
await (await square(180, { r: IVORY[0], g: IVORY[1], b: IVORY[2], alpha: 1 })).toFile(pub("apple-touch-icon.png"));

// favicon.ico: a 32px PNG inside an ICO container.
const png32 = await (await square(32)).toBuffer();
const head = Buffer.alloc(22);
head.writeUInt16LE(0, 0); head.writeUInt16LE(1, 2); head.writeUInt16LE(1, 4);
head[6] = 32; head[7] = 32; head[8] = 0; head[9] = 0;
head.writeUInt16LE(1, 10); head.writeUInt16LE(32, 12);
head.writeUInt32LE(png32.length, 14); head.writeUInt32LE(22, 18);
writeFileSync(pub("favicon.ico"), Buffer.concat([head, png32]));

console.log("Logo assets written to public/", JSON.stringify(dims));
