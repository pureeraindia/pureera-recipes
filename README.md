# PureEra — Premium Recipe Library

A static, framework-free recipe library website for **PureEra**. Pure HTML, CSS
and JavaScript — no build step, no dependencies, deploys straight to GitHub
Pages.

---

## 1. Project structure

```
pureera-site/
├── index.html              Page shell + both view containers (home & library)
├── style.css                Design system: tokens, layout, components
├── data.js                  ALL content lives here — categories & recipes
├── script.js                SPA router, rendering, search, filters, animations
├── README.md                This file
└── recipes/                 PDF recipe files, one folder per category
    ├── Italian/
    ├── Mexican/
    ├── IndoChinese/
    ├── StreetFood/
    ├── IndianCuisine/
    ├── Bakery/
    ├── HealthyMeals/
    └── Seasonings/
```

There is no build tool. Opening `index.html` in a browser (or serving the
folder statically) is enough to run the whole site.

---

## 2. How it works

- **Routing** — `script.js` uses hash-based client-side routing, so it works
  on GitHub Pages without any server configuration.
  - `#/` → Home
  - `#/library` → All recipes
  - `#/library?cat=italian` → Recipes filtered to a category
  - `#/library?cat=italian&q=pizza` → Filtered + searched (search updates the
    URL live, so results are shareable/bookmarkable)
- **Content** — `data.js` is the single source of truth. `index.html` and
  `script.js` never need to change when you add a recipe or category.
- **PDF links** — every recipe card builds its download link automatically as
  `recipes/<folder>/<pdf>`, using the `folder` value from the recipe's
  category and the `pdf` filename on the recipe itself.
- **Recipe artwork** — there are no external image services or uploaded
  photos. Each card's image is a small SVG generated in JavaScript: a
  category-specific two-tone gradient plus a matching line icon, defined in
  `CATEGORY_PALETTE` and `ICONS` inside `script.js`.

---

## 3. Uploading to GitHub Pages

1. Create a new GitHub repository (e.g. `pureera-recipes`).
2. Push this entire folder to the repository root:
   ```bash
   git init
   git add .
   git commit -m "PureEra recipe library"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo>.git
   git push -u origin main
   ```
3. In the repository, go to **Settings → Pages**.
4. Under **Build and deployment**, set **Source** to `Deploy from a branch`,
   branch `main`, folder `/ (root)`. Save.
5. GitHub will publish the site at:
   `https://<your-username>.github.io/<your-repo>/`
   (this can take a minute or two on the first deploy).

No further configuration is needed — everything is static files.

---

## 4. How to add a recipe

Open `data.js` and add one object to the `RECIPES` array, anywhere inside its
category's block (keeping recipes grouped by category is just for
readability — order doesn't affect the site):

```js
{ id: "it-09", category: "italian", name: "Focaccia", description: "Olive-oil-rich flatbread with rosemary and sea salt.", pdf: "Focaccia.pdf" }
```

Field notes:

| Field         | Notes                                                                 |
|---------------|------------------------------------------------------------------------|
| `id`          | Any unique string. Convention: `<category-prefix>-<number>`.          |
| `category`    | Must match a `slug` from the `CATEGORIES` array exactly.               |
| `name`        | Recipe title shown on the card.                                        |
| `description` | One short sentence shown under the title.                              |
| `pdf`         | Filename only (no path) — must exactly match the file you upload.      |

The recipe will automatically appear in: the library grid, its category's
filtered view, search results, and the homepage category count.

---

## 5. How to add a PDF

1. Export/save your recipe as a PDF.
2. Name the file exactly what you put in the recipe's `pdf` field (case
   sensitive — `Focaccia.pdf`, not `focaccia.pdf`).
3. Drop it into the matching category folder under `recipes/`, e.g.
   `recipes/Italian/Focaccia.pdf`.
4. Commit and push. The "Download PDF" button on that recipe's card will
   link straight to it — no code changes required.

---

## 6. How to add a category

1. In `data.js`, add an object to the `CATEGORIES` array:
   ```js
   {
     slug: "desserts",          // used in URLs (#/library?cat=desserts)
     name: "Desserts",           // shown on cards, nav, filters
     folder: "Desserts",         // must match the folder name under recipes/
     tag: "Something sweet",     // short label shown on the category card
     blurb: "One or two lines describing the collection.",
     icon: "leaf"                 // pick an existing key from ICONS in script.js,
                                   // or add a new one (see below)
   }
   ```
2. Create the matching folder: `recipes/Desserts/`.
3. *(Optional)* Give the new category its own placeholder-art colour by
   adding an entry to `CATEGORY_PALETTE` in `script.js`:
   ```js
   "desserts": ["#8A3B5C", "#C97AA0"],
   ```
4. *(Optional)* Add a new icon to the `ICONS` object in `script.js` if none
   of the existing ones fit — it's a small inline SVG string using
   `stroke="currentColor"` so it inherits the surrounding color.
5. Add recipes to `RECIPES` with `category: "desserts"` as usual.

The homepage category grid, footer links, filter chips, and library header
copy all update automatically — nothing else needs to be touched.

---

## 7. Folder structure reference

```
recipes/
├── Italian/          → recipes with category: "italian"
├── Mexican/           → recipes with category: "mexican"
├── IndoChinese/        → recipes with category: "indo-chinese"
├── StreetFood/          → recipes with category: "street-food"
├── IndianCuisine/        → recipes with category: "indian-cuisine"
├── Bakery/                → recipes with category: "bakery"
├── HealthyMeals/            → recipes with category: "healthy"
└── Seasonings/                → recipes with category: "seasonings"
```

Each folder currently contains a `README.txt` placeholder — safe to delete
once you've added real PDFs (Git doesn't track empty folders, so the
placeholder keeps the folder structure intact until then).

---

## 8. Notes

- Fonts (Fraunces / Work Sans / JetBrains Mono) load from Google Fonts via
  `style.css` — an internet connection is needed for them to render with the
  intended typefaces; the site still works with system-font fallbacks
  offline.
- The whole site is dependency-free: no npm, no bundler, no framework.
  Editing `data.js` is the only thing required for day-to-day content
  updates.
