# PureEra — Maintenance Guide (for non-programmers)

You do not need to know how to code to keep this site running. Almost every
day-to-day change happens in **one file**: `data.js`. This guide walks
through the handful of tasks you'll actually need, in plain language.

---

## The one file that matters most: `data.js`

Open `data.js` in any plain text editor (Notepad, TextEdit, VS Code, or even
GitHub's own in-browser editor — click the pencil icon on the file in your
repository). It's organized into two lists:

- **`CATEGORIES`** — the 8 collections (Italian, Mexican, etc.)
- **`RECIPES`** — every individual recipe

Everything else on the site (search, filters, homepage, footer links) is
generated automatically from these two lists. You will almost never need to
touch `index.html`, `style.css`, or `script.js`.

---

## Task: Add a new recipe

1. Open `data.js`.
2. Find the `RECIPES` list and scroll to the category it belongs in (they're
   grouped with a `// ---- Category ----` comment for readability).
3. Copy an existing line in that section and change the details:
   ```js
   { id: "it-15", category: "italian", name: "Focaccia", description: "Olive-oil-rich flatbread with rosemary and sea salt.", pdf: "Focaccia.pdf" },
   ```
   - `id` — must be unique. Easiest approach: keep the same prefix and bump
     the number (`it-14` → `it-15`).
   - `category` — must exactly match one of the `slug` values in
     `CATEGORIES` (e.g. `"italian"`, `"street-food"`).
   - `name` — the title shown on the card.
   - `description` — one short sentence.
   - `pdf` — the filename you'll upload, e.g. `"Focaccia.pdf"`.
4. Make sure your new line ends with a comma, just like the ones around it.
5. Save the file, then upload the matching PDF (see next task).
6. Commit and push (or upload through the GitHub website) — the recipe
   appears automatically, on the homepage count, in its category, and in
   search.

**Most common mistake:** forgetting a comma between entries, or leaving one
on the very last entry in the list (the last one should *not* have a
trailing comma). This causes the whole page to break. If that happens, open
your browser's console (press F12, click "Console") — it will point to the
exact line with the error.

---

## Task: Add or replace a recipe PDF

1. Every category has its own folder inside `recipes/` — e.g.
   `recipes/Italian/`, `recipes/Mexican/`.
2. Each folder contains a `PDF-CHECKLIST.txt` listing exactly which
   filenames are expected there.
3. Save your recipe as a PDF with **exactly** that filename (capital letters
   matter — `Pizza.pdf`, not `pizza.pdf`).
4. Drag it into the matching folder and upload/commit it.
5. Done — the "Download PDF" button already points to that path.

---

## Task: Add a brand-new category

1. Open `data.js` and find `CATEGORIES` near the top.
2. Copy an existing entry and adjust it:
   ```js
   { slug: "desserts", name: "Desserts", folder: "Desserts", tag: "Something sweet", blurb: "One or two lines describing the collection.", icon: "leaf" }
   ```
   - `slug` — lowercase, no spaces (use hyphens), used in the web address.
   - `folder` — must exactly match a folder name you create under `recipes/`.
   - `icon` — reuse one of the existing icon names (`pizza`, `taco`,
     `noodles`, `cart`, `curry`, `croissant`, `leaf`, `jar`) unless you're
     comfortable asking a developer to add a new one.
3. Create the matching folder, e.g. `recipes/Desserts/`.
4. Add recipes to `RECIPES` with `category: "desserts"`.

The new category will appear on the homepage, in the navigation, in the
filter bar, and in the footer automatically.

---

## Task: Update text on the homepage (tagline, hero copy, About section)

Open `index.html` and search (Ctrl/Cmd+F) for the text you want to change —
it's plain English inside the file and safe to edit directly, as long as you
only change the words between the `>` and `<` symbols and don't remove any
tags.

---

## Things NOT to touch unless you're comfortable with code

- `style.css` — controls colors, spacing, and layout. Small text edits are
  fine; anything else can visually break the site.
- `script.js` — the site's logic (search, filters, routing, SVG art). Only
  the small, clearly-commented tables (`CATEGORY_PALETTE`, `ICONS`) are
  meant to be edited by non-developers, and only when adding a new category.

---

## Getting help

If something breaks and you're not sure why:
1. Open the site in a browser, press **F12**, and click the **Console**
   tab. Any error will be shown in red with a file name and line number.
2. Compare your latest edit in `data.js` against the pattern of the entries
   around it — missing commas or quotation marks are the cause of almost
   every issue.
3. If you're using Git, you can always undo a bad change by reverting the
   last commit before pushing again.
