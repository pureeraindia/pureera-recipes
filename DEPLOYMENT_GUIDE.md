# PureEra — Deployment Guide

This guide covers getting the site live on GitHub Pages, and replacing the
placeholder content (PDFs and logo) with your real files. It assumes no
prior GitHub experience.

---

## 1. Upload the project to GitHub

1. Create a free GitHub account at github.com if you don't have one.
2. Click **New repository** (the `+` icon, top right).
   - Name it something like `pureera-recipes`.
   - Leave it **Public** (required for free GitHub Pages).
   - Don't initialize with a README — you already have one.
3. On your computer, open a terminal in the project folder (the one
   containing `index.html`, `style.css`, `data.js`, `script.js`, `README.md`,
   `recipes/`, and `assets/`) and run:
   ```bash
   git init
   git add .
   git commit -m "PureEra recipe library"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo>.git
   git push -u origin main
   ```
   Replace `<your-username>` and `<your-repo>` with your actual GitHub
   username and repository name.

No GitHub account? You can also drag-and-drop the entire folder into a new
repository through the GitHub website's "Add file → Upload files" screen —
no command line required.

---

## 2. Connect GitHub Pages

1. In your repository, go to **Settings → Pages** (left sidebar).
2. Under **Build and deployment**, set:
   - **Source:** `Deploy from a branch`
   - **Branch:** `main`, folder `/ (root)`
3. Click **Save**.
4. GitHub will publish the site to:
   `https://<your-username>.github.io/<your-repo>/`
   This usually takes 1–3 minutes on the first deploy. Refresh the Pages
   settings screen to see the live link once it's ready.

Every time you push new commits to `main`, GitHub Pages redeploys
automatically within a minute or two — no extra steps needed.

---

## 3. Replacing the placeholder PDFs

Right now, every folder inside `recipes/` contains:
- `README.txt` — explains what belongs in that folder
- `PDF-CHECKLIST.txt` — the exact filenames expected in that folder

There is also a single master list at `recipes/PDF-MANIFEST.txt` covering
every category at once, useful if you want to work through the whole
library in one sitting.

To add a real recipe PDF:
1. Export or save your recipe as a PDF.
2. Name it **exactly** as shown in that folder's checklist (case-sensitive —
   `Pizza.pdf`, not `pizza.pdf`).
3. Drop it into the matching folder, e.g. `recipes/Italian/Pizza.pdf`.
4. Commit and push:
   ```bash
   git add recipes/Italian/Pizza.pdf
   git commit -m "Add Pizza PDF"
   git push
   ```
5. That's it — the "Download PDF" button on that recipe's card already
   points to this exact path, so no code changes are required.

You do not need to add every PDF at once. Recipes without a matching PDF
will still display normally on the site; only the download link will 404
until the file is added.

You may delete a folder's `README.txt` and `PDF-CHECKLIST.txt` once every
PDF listed inside is in place — they're placeholders only and are never
linked to from the site itself.

---

## 4. Replacing the logo

`assets/logo-placeholder.svg` is a placeholder version of the site's seal
mark and wordmark, matching the brand colors already used across the site.
The live site currently builds its seal mark directly in code (see
`SEAL_SVG` in `script.js`) and does **not** reference this file for the
on-page logo — it's provided as a standalone asset for things like:
- the browser tab icon (currently linked as the favicon in `index.html`)
- a printable header for your PDFs
- social sharing / press use

To swap in your own logo:
1. Replace `assets/logo-placeholder.svg` with your own SVG (or PNG/ICO),
   keeping the filename the same, **or**
2. Give your file a new name and update the `<link rel="icon" ...>` tag near
   the top of `index.html` to point to it.
3. If you'd also like to change the seal mark that appears in the header,
   hero, about section, and footer, edit the `SEAL_SVG` constant near the
   top of `script.js` — it's injected into every element with class `.seal`.

---

## 5. Adding future recipes

See the **README.md** file at the project root — section "How to add a
recipe" — for the full walkthrough. In short: add one object to the
`RECIPES` array in `data.js`, then drop the matching PDF into the right
folder under `recipes/`. No other file needs to change.

---

## 6. Adding future categories

Also covered in **README.md**, section "How to add a category". In short:
add an entry to `CATEGORIES` in `data.js`, create the matching folder under
`recipes/`, and optionally give it its own accent color in
`CATEGORY_PALETTE` inside `script.js`. Everything else — nav, footer,
filters, homepage grid — updates automatically.

---

## 7. Using a custom domain (optional)

If you own a domain (e.g. `pureera.com`) and want the site to live there
instead of the default `github.io` address:
1. In **Settings → Pages**, enter your domain under **Custom domain** and
   save. GitHub will create a `CNAME` file in your repo automatically.
2. At your domain registrar, add a `CNAME` record pointing to
   `<your-username>.github.io`, or the four GitHub Pages `A` records listed
   in GitHub's own custom domain documentation.
3. DNS changes can take anywhere from a few minutes to 24 hours to
   propagate.

---

## 8. Troubleshooting

| Symptom | Likely cause |
|---|---|
| Site shows a 404 at the Pages URL | Pages hasn't finished its first deploy yet, or the branch/folder setting in step 2 is wrong |
| A "Download PDF" button leads to a 404 | The PDF filename doesn't exactly match what's in `data.js`, or the file hasn't been uploaded yet |
| New recipe doesn't show up | Check for a JavaScript syntax error in `data.js` (a missing comma is the most common cause) — open the browser console (F12) to see the exact error |
| Site looks unstyled / plain | `style.css` failed to load — check the file wasn't renamed or moved |
| Google Fonts don't load | No internet connection at load time; the site falls back to system fonts automatically, so this is cosmetic only |
