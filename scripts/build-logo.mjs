/* Generates the Webco Professional logo SVGs in /public.

   Run with: node scripts/build-logo.mjs

   The wordmark is converted to outlined paths from the same fonts the site
   uses (Source Serif 4 and Public Sans, 600 weight), so the SVGs render identically
   everywhere and never depend on a font being installed or loaded.

   Outputs:
     public/logo.svg           primary horizontal logo, for light backgrounds
     public/logo-reversed.svg  horizontal logo for dark green backgrounds
     public/logo-mark.svg      icon mark only, for light backgrounds
     public/favicon.svg        icon mark on a green tile */

import { readFileSync, writeFileSync } from "node:fs";
import { create } from "fontkitten";

const out = new URL("../public/", import.meta.url);
const font = (file) => create(readFileSync(new URL(`../node_modules/@fontsource/${file}`, import.meta.url)));

const serif = font("source-serif-4/files/source-serif-4-latin-600-normal.woff");
const sans = font("public-sans/files/public-sans-latin-600-normal.woff");

const round = (n) => Math.round(n * 100) / 100;

/** Outline a string as one SVG path, baseline at y, starting at x. Returns the path and its width. */
function outline(f, text, size, x, y, tracking = 0) {
  const scale = size / f.unitsPerEm;
  let cursor = x;
  let d = "";
  const px = (v) => round(cursor + v * scale);
  const py = (v) => round(y - v * scale);
  const glyphs = f.glyphsForString(text);
  glyphs.forEach((glyph, index) => {
    for (const { command, args } of glyph.path.commands) {
      if (command === "moveTo") d += `M${px(args[0])} ${py(args[1])}`;
      else if (command === "lineTo") d += `L${px(args[0])} ${py(args[1])}`;
      else if (command === "quadraticCurveTo") d += `Q${px(args[0])} ${py(args[1])} ${px(args[2])} ${py(args[3])}`;
      else if (command === "bezierCurveTo")
        d += `C${px(args[0])} ${py(args[1])} ${px(args[2])} ${py(args[3])} ${px(args[4])} ${py(args[5])}`;
      else if (command === "closePath") d += "Z";
    }
    cursor += glyph.advanceWidth * scale + (index < glyphs.length - 1 ? tracking : 0);
  });
  return { d, width: cursor - x };
}

/* Icon mark, drawn on a 48 x 60 grid: map pin, front-facing HGV, road. */
const PIN = "M24 2C35 2 44 11 44 22C44 34 32 46 24 58C16 46 4 34 4 22C4 11 13 2 24 2Z";

function mark({ id, pin, edge, truck, cut, road, accent }) {
  return `<clipPath id="${id}"><path d="${PIN}"/></clipPath>
<path d="${PIN}" fill="${pin}"${edge ? ` stroke="${edge}" stroke-width="1.5" stroke-linejoin="round"` : ""}/>
<g fill="${truck}">
<rect x="14.5" y="8.5" width="19" height="16" rx="2.5"/>
<rect x="11.5" y="11" width="2" height="5.5" rx="1"/>
<rect x="34.5" y="11" width="2" height="5.5" rx="1"/>
<rect x="16" y="23.5" width="4.5" height="5" rx="1.2"/>
<rect x="27.5" y="23.5" width="4.5" height="5" rx="1.2"/>
</g>
<g fill="${cut}">
<rect x="17.5" y="11.5" width="13" height="6" rx="1.2"/>
<rect x="18.5" y="20.2" width="11" height="1.8" rx="0.9"/>
</g>
<g clip-path="url(#${id})">
<path d="M0 32Q24 42 48 32V35.5Q24 45.5 0 35.5Z" fill="${road}"/>
<path d="M0 38.5Q24 48.5 48 38.5V42Q24 52 0 42Z" fill="${accent}"/>
</g>`;
}

const ivory = "#f7f3ea";
const forest = "#0f2f28";
const forestLift = "#164236";
const terracotta = "#b4401c";
const terracottaBright = "#f2905f";

const primaryMark = { id: "p", pin: forest, truck: ivory, cut: forest, road: ivory, accent: terracotta };
const reversedMark = { id: "p", pin: forestLift, edge: ivory, truck: ivory, cut: forestLift, road: ivory, accent: terracottaBright };

/** Horizontal lockup: mark, then "Webco" over spaced "PROFESSIONAL". */
function lockup(markColors, wordColor, subColor, label) {
  const textX = 61;
  const word = outline(serif, "Webco", 35, textX, 34);
  const sub = outline(sans, "PROFESSIONAL", 10.4, textX + 0.6, 51, 2.5);
  const width = Math.ceil(Math.max(textX + word.width, textX + 0.6 + sub.width) + 1);
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="-1 -1 ${width + 1} 62" role="img" aria-label="${label}">
${mark(markColors)}
<path d="${word.d}" fill="${wordColor}"/>
<path d="${sub.d}" fill="${subColor}"/>
</svg>
`;
}

function markOnly(markColors, label) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="-1 -1 50 62" role="img" aria-label="${label}">
${mark(markColors)}
</svg>
`;
}

function favicon() {
  const tile = mark({ id: "p", pin: ivory, truck: forest, cut: ivory, road: forest, accent: terracotta });
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" role="img" aria-label="Webco Professional">
<rect width="64" height="64" rx="12" fill="${forest}"/>
<g transform="translate(12.8 8) scale(0.8)">
${tile}
</g>
</svg>
`;
}

const name = "Webco Professional";
writeFileSync(new URL("logo.svg", out), lockup(primaryMark, forest, terracotta, name));
writeFileSync(new URL("logo-reversed.svg", out), lockup(reversedMark, ivory, terracottaBright, name));
writeFileSync(new URL("logo-mark.svg", out), markOnly(primaryMark, name));
writeFileSync(new URL("favicon.svg", out), favicon());
console.log("Logo assets written to public/");
