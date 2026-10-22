import { chromium } from "playwright";
import { readFileSync } from "node:fs";

const svg = readFileSync("/workspace/public/favicon.svg", "utf8");
const browser = await chromium.launch();

async function shot(size, out) {
  const page = await browser.newPage({
    viewport: { width: size, height: size },
    deviceScaleFactor: 1,
  });
  const html = `<!doctype html><html><head><style>
    html,body{margin:0;width:${size}px;height:${size}px;background:#ccc}
    svg{display:block;width:${size}px;height:${size}px}
  </style></head><body>${svg}</body></html>`;
  await page.setContent(html);
  await page.screenshot({ path: out, type: "png" });
  await page.close();
  console.log("wrote", out);
}

await shot(16, "/workspace/.grok/favicon-16.png");
await shot(32, "/workspace/.grok/favicon-32.png");
await browser.close();
