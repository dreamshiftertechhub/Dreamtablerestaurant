import { chromium } from "playwright";
import { pathToFileURL } from "node:url";

const html = "/workspace/.grok/og-card.html";
const out = "/workspace/.grok/card-raw.png";

const browser = await chromium.launch({
  args: ["--disable-lcd-text", "--font-render-hinting=medium"],
});
const page = await browser.newPage({
  viewport: { width: 1200, height: 630 },
  deviceScaleFactor: 1,
});
await page.goto(pathToFileURL(html).href, { waitUntil: "load" });
await page.evaluate(() => document.fonts.ready);
await page.waitForTimeout(250);
await page.screenshot({ path: out, type: "png", omitBackground: false });
await browser.close();
console.log("wrote", out);
