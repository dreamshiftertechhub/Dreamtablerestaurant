import { chromium } from "playwright";
import { readFileSync, mkdirSync } from "node:fs";
import { basename } from "node:path";

const files = [
  "/workspace/.grok/favicon-variants/d-geom.svg",
  "/workspace/.grok/favicon-variants/d-italic.svg",
  "/workspace/.grok/favicon-variants/d-heavy.svg",
  "/workspace/.grok/favicon-variants/dt.svg",
];
mkdirSync("/workspace/.grok/favicon-rasters", { recursive: true });
const browser = await chromium.launch();

async function shot(svgPath, size) {
  const svg = readFileSync(svgPath, "utf8");
  const name = basename(svgPath, ".svg");
  const out = `/workspace/.grok/favicon-rasters/${name}-${size}.png`;
  const page = await browser.newPage({
    viewport: { width: size, height: size },
    deviceScaleFactor: 1,
  });
  const html = `<!doctype html><html><head><style>
    html,body{margin:0;width:${size}px;height:${size}px;background:#888}
    svg{display:block;width:${size}px;height:${size}px}
  </style></head><body>${svg}</body></html>`;
  await page.setContent(html);
  await page.screenshot({ path: out, type: "png" });
  await page.close();
  console.log("wrote", out);
}

for (const f of files) {
  await shot(f, 16);
  await shot(f, 32);
}
await browser.close();
