import { chromium } from "playwright";
import { readFileSync, readdirSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const dir = "/workspace/.grok/favicon-variants";
const outDir = "/workspace/.grok/favicon-rasters";
mkdirSync(outDir, { recursive: true });

const browser = await chromium.launch();
const files = readdirSync(dir).filter((f) => f.endsWith(".svg"));

async function shot(svg, size, out) {
  const page = await browser.newPage({
    viewport: { width: size, height: size },
    deviceScaleFactor: 1,
  });
  const html = `<!doctype html><html><head><style>
    html,body{margin:0;width:${size}px;height:${size}px;background:#ddd}
    svg{display:block;width:${size}px;height:${size}px}
  </style></head><body>${svg}</body></html>`;
  await page.setContent(html);
  await page.screenshot({ path: out, type: "png" });
  await page.close();
}

for (const f of files) {
  const svg = readFileSync(join(dir, f), "utf8");
  const stem = f.replace(".svg", "");
  await shot(svg, 16, join(outDir, `${stem}-16.png`));
  await shot(svg, 32, join(outDir, `${stem}-32.png`));
  console.log("rasterized", stem);
}
await browser.close();
