#!/usr/bin/env python3
import json
import re
import sys
from pathlib import Path
from PIL import Image

SOURCE_ROOT = Path(sys.argv[1]).resolve()
REPO_ROOT = Path(sys.argv[2]).resolve()
MAP_PATH = REPO_ROOT / "scripts" / "recipe-image-map.json"

MAX_WIDTH = 2000
QUALITY = 88

def norm_piece(value):
    return re.sub(r"[^a-z0-9]+", "", value.lower())

def norm_parts(path):
    return [norm_piece(p) for p in Path(path).parts]

all_dirs = [p for p in SOURCE_ROOT.rglob("*") if p.is_dir()]
all_files = [p for p in SOURCE_ROOT.rglob("*") if p.is_file()]

def suffix_match(parts, wanted):
    return len(parts) >= len(wanted) and parts[-len(wanted):] == wanted

def find_dir(relative_dir):
    wanted = norm_parts(relative_dir)
    matches = [p for p in all_dirs if suffix_match(norm_parts(p.relative_to(SOURCE_ROOT)), wanted)]
    if len(matches) != 1:
        raise RuntimeError(f"Expected exactly one source directory for {relative_dir!r}, found {len(matches)}: {matches}")
    return matches[0]

def find_file(relative_file):
    wanted = norm_parts(relative_file)
    matches = [p for p in all_files if suffix_match(norm_parts(p.relative_to(SOURCE_ROOT)), wanted)]
    if len(matches) != 1:
        raise RuntimeError(f"Expected exactly one source file for {relative_file!r}, found {len(matches)}: {matches}")
    return matches[0]

def save_webp(source, target):
    target.parent.mkdir(parents=True, exist_ok=True)
    with Image.open(source) as image:
        image.load()
        if image.width > MAX_WIDTH:
            height = round(image.height * MAX_WIDTH / image.width)
            image = image.resize((MAX_WIDTH, height), Image.Resampling.LANCZOS)
        if image.mode not in ("RGB", "RGBA"):
            image = image.convert("RGBA" if "A" in image.getbands() else "RGB")
        image.save(target, "WEBP", quality=QUALITY, method=6)

mapping = json.loads(MAP_PATH.read_text(encoding="utf-8"))

# Remove only deploy-time recipe binaries. Text manifests/checklists remain.
recipes_root = REPO_ROOT / "recipes"
if recipes_root.exists():
    for item in recipes_root.rglob("*"):
        if item.is_file() and item.suffix.lower() in {".png", ".webp", ".zip", ".pdf"}:
            item.unlink()

created = []
for source_dir_rel, target_dir_rel in mapping["dirs"]:
    source_dir = find_dir(source_dir_rel)
    pngs = list(source_dir.glob("*.png"))
    if source_dir_rel == "CAFE/Veg Calzon":
        by_name = {p.name: p for p in pngs}
        ordered = [by_name["1.png"], by_name["7.png"], by_name["Veg Calzone.png"]]
    else:
        by_name = {p.name: p for p in pngs}
        missing = [name for name in ("1.png", "2.png", "3.png") if name not in by_name]
        if missing:
            raise RuntimeError(f"{source_dir_rel} is missing expected files: {missing}; found {sorted(by_name)}")
        ordered = [by_name["1.png"], by_name["2.png"], by_name["3.png"]]

    target_dir = REPO_ROOT / target_dir_rel
    for index, source in enumerate(ordered, start=1):
        target = target_dir / f"{index}.webp"
        save_webp(source, target)
        created.append(target)

# Replace the five corrected Indo-Chinese page-2 images.
for source_rel, target_rel in mapping["overrides"]:
    source = find_file(source_rel)
    target = REPO_ROOT / target_rel
    save_webp(source, target)

final_images = sorted(recipes_root.rglob("*.webp"))
if len(final_images) != 258:
    raise RuntimeError(f"Expected 258 optimized recipe images, found {len(final_images)}")

too_large = [p for p in final_images if p.stat().st_size > 2_000_000]
if too_large:
    raise RuntimeError("Optimized files unexpectedly over 2 MB: " + ", ".join(str(p) for p in too_large))

total = sum(p.stat().st_size for p in final_images)
print(f"Created {len(final_images)} WebP images; total size {total / 1024 / 1024:.1f} MB")
