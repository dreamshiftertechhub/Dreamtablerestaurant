#!/usr/bin/env python3
"""Compose the DreamTable 16:9 share-card (food photo + Allura lockup)."""
from pathlib import Path

from PIL import Image, ImageDraw, ImageFilter, ImageFont

SRC = Path("/workspace/artifacts/imagine_images/6b3c6c86-abe9-479e-b9f6-956878640d3c.jpg")
OUT = Path("/workspace/.grok/card-raw.png")
FONT_SCRIPT = Path("/workspace/.grok/fonts/Allura-Regular.ttf")
FONT_SERIF = Path("/workspace/.grok/fonts/Cinzel-Regular.ttf")

RED = (215, 25, 32, 255)
NAVY = (16, 42, 114, 255)


def draw_tracked(draw: ImageDraw.ImageDraw, text: str, center_x: float, y: float, font, fill, tracking: float) -> None:
    widths = [font.getlength(ch) for ch in text]
    total = sum(widths) + tracking * max(len(text) - 1, 0)
    x = center_x - total / 2
    for ch, w in zip(text, widths):
        draw.text((x, y), ch, font=font, fill=fill)
        x += w + tracking


def main() -> None:
    base = Image.open(SRC).convert("RGBA")
    w, h = base.size
    cx, cy = w / 2, h / 2 - 8

    script = ImageFont.truetype(str(FONT_SCRIPT), 328)
    kicker_font = ImageFont.truetype(str(FONT_SERIF), 22)
    tag_font = ImageFont.truetype(str(FONT_SERIF), 24)

    probe = ImageDraw.Draw(Image.new("RGBA", (1, 1)))
    b1 = probe.textbbox((0, 0), "Dream", font=script)
    b2 = probe.textbbox((0, 0), "Table", font=script)
    line_gap = int(328 * -0.20)
    total_h = (b1[3] - b1[1]) + (b2[3] - b2[1]) + line_gap
    y1 = cy - total_h / 2 - b1[1]
    x1 = cx - (b1[2] - b1[0]) / 2 - b1[0]
    y2 = y1 + (b1[3] - b1[1]) + line_gap
    x2 = cx - (b2[2] - b2[0]) / 2 - b2[0]
    words = [("Dream", x1, y1), ("Table", x2, y2)]
    lock_top = y1 + b1[1]
    lock_bot = y2 + b2[3]
    max_w = max(b1[2] - b1[0], b2[2] - b2[0])

    # Soft cream lift so the red script stays crisp on linen.
    wash = Image.new("RGBA", base.size, (0, 0, 0, 0))
    wd = ImageDraw.Draw(wash)
    pad_x, pad_y = 220, 70
    wd.ellipse(
        (cx - max_w / 2 - pad_x, lock_top - pad_y, cx + max_w / 2 + pad_x, lock_bot + pad_y + 36),
        fill=(255, 248, 242, 150),
    )
    wash = wash.filter(ImageFilter.GaussianBlur(radius=48))

    halo = Image.new("RGBA", base.size, (0, 0, 0, 0))
    hd = ImageDraw.Draw(halo)
    for t, x, y in words:
        hd.text((x, y), t, font=script, fill=(255, 248, 242, 240))
    halo = halo.filter(ImageFilter.GaussianBlur(radius=12))

    shadow = Image.new("RGBA", base.size, (0, 0, 0, 0))
    sd = ImageDraw.Draw(shadow)
    for t, x, y in words:
        sd.text((x + 2, y + 3), t, font=script, fill=(17, 17, 17, 50))
    shadow = shadow.filter(ImageFilter.GaussianBlur(radius=2))

    ink = Image.new("RGBA", base.size, (0, 0, 0, 0))
    idraw = ImageDraw.Draw(ink)
    for t, x, y in words:
        idraw.text((x, y), t, font=script, fill=RED)

    rule_w = 72
    rule_y1 = lock_top - 28
    rule_y2 = lock_bot + 14
    idraw.rectangle((cx - rule_w / 2, rule_y1, cx + rule_w / 2, rule_y1 + 3), fill=RED)
    idraw.rectangle((cx - rule_w / 2, rule_y2, cx + rule_w / 2, rule_y2 + 3), fill=RED)
    draw_tracked(idraw, "NIGERIAN KITCHEN", cx, rule_y1 - 40, kicker_font, NAVY, 11)
    draw_tracked(idraw, "VICTORIA ISLAND  ·  LAGOS", cx, rule_y2 + 16, tag_font, NAVY, 8)

    overlay = Image.new("RGBA", base.size, (0, 0, 0, 0))
    overlay = Image.alpha_composite(overlay, wash)
    overlay = Image.alpha_composite(overlay, halo)
    overlay = Image.alpha_composite(overlay, shadow)
    overlay = Image.alpha_composite(overlay, ink)
    out = Image.alpha_composite(base, overlay).convert("RGB")
    out.save(OUT, "PNG")
    print(f"wrote {OUT} {out.size} lockup_w={max_w:.0f} frac={max_w/w:.2f} y={lock_top:.0f}-{lock_bot:.0f}")


if __name__ == "__main__":
    main()
