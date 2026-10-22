#!/usr/bin/env python3
"""Compose the Mimi's 16:9 share-card artwork (food photo + script lockup)."""
from pathlib import Path

from PIL import Image, ImageDraw, ImageFilter, ImageFont

SRC = Path("/workspace/artifacts/imagine_images/229d6f3c-7e94-4de4-92c1-b9bf0bf84a39.jpg")
OUT = Path("/workspace/.grok/card-raw.png")
FONT_SCRIPT = Path("/workspace/.grok/fonts/GreatVibes-Regular.ttf")
FONT_SERIF = Path("/workspace/.grok/fonts/Cinzel-Regular.ttf")

RED = (215, 25, 32, 255)
NAVY = (16, 42, 114, 255)
CREAM = (255, 248, 242, 255)


def cover_text(im: Image.Image, box: tuple[int, int, int, int], radius: int = 7) -> None:
    x0, y0, x1, y1 = box
    pad = 28
    crop_box = (max(0, x0 - pad), max(0, y0 - pad), min(im.width, x1 + pad), min(im.height, y1 + pad))
    crop = im.crop(crop_box)
    dissolved = crop.filter(ImageFilter.MedianFilter(size=9)).filter(
        ImageFilter.GaussianBlur(radius=radius)
    )
    mask = Image.new("L", crop.size, 0)
    d = ImageDraw.Draw(mask)
    d.rounded_rectangle(
        (6, 6, crop.size[0] - 6, crop.size[1] - 6),
        radius=18,
        fill=255,
    )
    mask = mask.filter(ImageFilter.GaussianBlur(radius=8))
    im.paste(dissolved, crop_box[:2], mask)


def draw_tracked(
    draw: ImageDraw.ImageDraw,
    text: str,
    center_x: float,
    y: float,
    font: ImageFont.FreeTypeFont,
    fill,
    tracking: float,
) -> None:
    widths = [font.getlength(ch) for ch in text]
    total = sum(widths) + tracking * (len(text) - 1)
    x = center_x - total / 2
    for ch, w in zip(text, widths):
        draw.text((x, y), ch, font=font, fill=fill)
        x += w + tracking


def main() -> None:
    base = Image.open(SRC).convert("RGBA")
    # Soften leftover plate labels so the lockup is the only type.
    cover_text(base, (1420, 20, 1740, 190), radius=6)
    cover_text(base, (20, 820, 280, 980), radius=5)
    cover_text(base, (1480, 860, 1770, 1000), radius=5)

    overlay = Image.new("RGBA", base.size, (0, 0, 0, 0))
    draw = ImageDraw.Draw(overlay)
    cx, cy = base.width / 2, base.height / 2 - 18

    script = ImageFont.truetype(str(FONT_SCRIPT), 348)
    kicker_font = ImageFont.truetype(str(FONT_SERIF), 22)
    tag_font = ImageFont.truetype(str(FONT_SERIF), 26)

    word = "Mimi's"
    wb = draw.textbbox((0, 0), word, font=script)
    ww, wh = wb[2] - wb[0], wb[3] - wb[1]
    wx = cx - ww / 2 - wb[0]
    wy = cy - wh / 2 - wb[1] + 8

    # Cream halo so the red script stays crisp on linen texture.
    halo = Image.new("RGBA", base.size, (0, 0, 0, 0))
    hd = ImageDraw.Draw(halo)
    hd.text((wx, wy), word, font=script, fill=(255, 248, 242, 230))
    halo = halo.filter(ImageFilter.GaussianBlur(radius=10))
    overlay = Image.alpha_composite(overlay, halo)

    # Soft navy shadow, then the brand-red wordmark.
    shadow = Image.new("RGBA", base.size, (0, 0, 0, 0))
    sd = ImageDraw.Draw(shadow)
    sd.text((wx + 2, wy + 3), word, font=script, fill=(17, 17, 17, 50))
    shadow = shadow.filter(ImageFilter.GaussianBlur(radius=2))
    overlay = Image.alpha_composite(overlay, shadow)

    ink = Image.new("RGBA", base.size, (0, 0, 0, 0))
    idraw = ImageDraw.Draw(ink)
    idraw.text((wx, wy), word, font=script, fill=RED)

    # Rules and tracked captions.
    word_top = wy + wb[1]
    word_bot = wy + wb[3]
    rule_w = 72
    rule_y1 = word_top - 28
    rule_y2 = word_bot + 18
    idraw.rectangle((cx - rule_w / 2, rule_y1, cx + rule_w / 2, rule_y1 + 3), fill=RED)
    idraw.rectangle((cx - rule_w / 2, rule_y2, cx + rule_w / 2, rule_y2 + 3), fill=RED)

    draw_tracked(idraw, "NIGERIAN KITCHEN", cx, rule_y1 - 40, kicker_font, NAVY, 10)
    draw_tracked(idraw, "VICTORIA ISLAND  ·  LAGOS", cx, rule_y2 + 18, tag_font, NAVY, 8)

    overlay = Image.alpha_composite(overlay, ink)
    out = Image.alpha_composite(base, overlay).convert("RGB")
    out.save(OUT, "PNG")
    print(f"wrote {OUT} {out.size}")


if __name__ == "__main__":
    main()
