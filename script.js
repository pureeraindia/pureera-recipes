/* ==========================================================================
   PureEra — script.js
   Vanilla-JS SPA logic: hash routing, dynamic rendering, search, filters,
   SVG placeholder art, mobile nav, reveal-on-scroll, active nav state.
   No frameworks. No build step. Reads from CATEGORIES / RECIPES in data.js.
   ========================================================================== */

(function () {
  "use strict";

  /* ---------------------------------------------------------------------
     0. ICONS
     Category artwork is stored as PNG files in assets/icons/. Utility
     interface icons remain inline SVG so they inherit the current colour.
     --------------------------------------------------------------------- */
  const ICONS = {
    download: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M7 10.5l5 5 5-5"/><path d="M5 20h14"/></svg>`,
    arrow: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M13 6l6 6-6 6"/></svg>`,
    emptySearch: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.2" y2="16.2"/><line x1="8" y1="11" x2="14" y2="11"/></svg>`
  };

  const CATEGORY_ICON_PATHS = {
    "healthy-meals": "assets/icons/healthy-meals.png",
    "italian": "assets/icons/italian.png",
    "indian-street-food": "assets/icons/indian-street-food.png",
    "indo-chinese": "assets/icons/indo-chinese.png",
    "mexican": "assets/icons/mexican.png",
    "indian-cuisine": "assets/icons/indian-cuisine.png",
    "cafe": "assets/icons/cafe.png",
    "seasoning": "assets/icons/seasoning.png"
  };

  /* ---------------------------------------------------------------------
     1. CATEGORY COLOUR PALETTES (for generated SVG placeholder art)
     Each category gets its own two-tone gradient, distinct but still
     sitting comfortably inside the cream / olive / gold / brown family.
     --------------------------------------------------------------------- */
  const CATEGORY_PALETTE = {
    "italian":        ["#8C4A2F", "#C9803D"],
    "mexican":        ["#A13D2B", "#E0793A"],
    "indo-chinese":   ["#7A2E2E", "#B23A3A"],
    "street-food":    ["#B5722A", "#E0A23B"],
    "indian-cuisine": ["#6B3B23", "#A85D2E"],
    "bakery":         ["#8A5A3B", "#C99B6B"],
    "healthy":        ["#3E6B4A", "#6FA37A"],
    "seasonings":     ["#355E3B", "#C89B3C"]
  };
  const DEFAULT_PALETTE = ["#5C4632", "#8C6B4C"];

  function hexToRgba(hex, alpha) {
    const value = String(hex || "").replace("#", "").trim();
    if (![3, 6].includes(value.length)) return `rgba(92, 70, 50, ${alpha})`;
    const full = value.length === 3
      ? value.split("").map((ch) => ch + ch).join("")
      : value;
    const r = Number.parseInt(full.slice(0, 2), 16);
    const g = Number.parseInt(full.slice(2, 4), 16);
    const b = Number.parseInt(full.slice(4, 6), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }

  /* ---------------------------------------------------------------------
     2. STATE + DOM REFERENCES
     --------------------------------------------------------------------- */
  const state = { cat: "all", q: "" };

  const $ = (sel, ctx) => (ctx || document).querySelector(sel);
  const $$ = (sel, ctx) => Array.from((ctx || document).querySelectorAll(sel));

  const homeView = $("#homeView");
  const libraryView = $("#libraryView");
  const categoryGrid = $("#categoryGrid");
  const recipeGrid = $("#recipeGrid");
  const filterRow = $("#filterRow");
  const searchInput = $("#searchInput");
  const resultMeta = $("#resultMeta");
  const libEyebrow = $("#libEyebrow");
  const libTitle = $("#libTitle");
  const libDesc = $("#libDesc");
  const mainNav = $("#mainNav");
  const navToggle = $("#navToggle");
  const navSearchBtn = $("#navSearchBtn");
  const footerCats = $("#footerCats");
  const totalRecipeCount = $("#totalRecipeCount");
  const aboutRecipeCount = $("#aboutRecipeCount");
  const yearEl = $("#year");
  const recipeModal = $("#recipeModal");
  const recipeModalCategory = $("#recipeModalCategory");
  const recipeModalTitle = $("#recipeModalTitle");
  const recipeModalDescription = $("#recipeModalDescription");
  const recipePreviewFrame = $("#recipePreviewFrame");
  const recipePreviewNote = $("#recipePreviewNote");
  const recipeOpenLink = $("#recipeOpenLink");
  const recipeDownloadLink = $("#recipeDownloadLink");

  const getCategory = (slug) => CATEGORIES.find((c) => c.slug === slug);
  const escapeHtml = (str) =>
    String(str).replace(/[&<>"']/g, (ch) => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
    }[ch]));

  /* ---------------------------------------------------------------------
     3. SVG PLACEHOLDER ART
     Generates a small elegant background + centred icon per recipe card.
     No external image services — everything is inline SVG / CSS gradient.
     --------------------------------------------------------------------- */
  function mediaBackground(categorySlug) {
    const [from, to] = CATEGORY_PALETTE[categorySlug] || DEFAULT_PALETTE;
    return `linear-gradient(155deg, ${from}, ${to})`;
  }

  function categoryIconMarkup(category, className) {
    const path = category && CATEGORY_ICON_PATHS[category.icon];
    if (!path) return "";
    return `<img class="${className}" src="${path}" alt="" aria-hidden="true">`;
  }

  function recipeMediaMarkup(recipe, category) {
    const previewImage = Array.isArray(recipe.images) && recipe.images.length
      ? recipeImagePath(recipe, category, recipe.images[0])
      : "";

    return `
      <div class="recipe-media${previewImage ? " has-photo" : ""}" style="background:${previewImage ? "#C9803D" : mediaBackground(recipe.category)}">
        <span class="cat-badge">${escapeHtml(category ? category.name : recipe.category)}</span>
        ${previewImage
          ? `<img class="recipe-preview-photo" src="${escapeHtml(previewImage)}" alt="${escapeHtml(recipe.name)} preview">`
          : categoryIconMarkup(category, "category-art")}
      </div>`;
  }

  /* ---------------------------------------------------------------------
     4. RENDER: HOME — category grid, stats, footer links
     --------------------------------------------------------------------- */
  function countInCategory(slug) {
    return RECIPES.filter((r) => r.category === slug).length;
  }

  function renderCategoryGrid() {
    if (!categoryGrid) return;
    categoryGrid.innerHTML = CATEGORIES.map((cat) => {
      const count = countInCategory(cat.slug);
      const label = count === 1 ? "recipe" : "recipes";
      const [accent, accentSoft] = CATEGORY_PALETTE[cat.slug] || DEFAULT_PALETTE;
      const styleVars = [
        `--cat-accent:${accent}`,
        `--cat-accent-soft:${accentSoft}`,
        `--cat-accent-mist:${hexToRgba(accentSoft, 0.16)}`,
        `--cat-accent-border:${hexToRgba(accent, 0.22)}`,
        `--cat-accent-icon-bg:${hexToRgba(accentSoft, 0.18)}`,
        `--cat-accent-icon-ring:${hexToRgba(accent, 0.14)}`
      ].join(";");
      return `
        <a class="cat-card reveal" style="${styleVars}" href="#/library?cat=${encodeURIComponent(cat.slug)}">
          <span class="cat-icon">${categoryIconMarkup(cat, "cat-icon-image")}</span>
          <h3 class="cat-name">${escapeHtml(cat.name)}</h3>
          <span class="cat-tag">${escapeHtml(cat.tag)}</span>
          <p class="cat-blurb">${escapeHtml(cat.blurb)}</p>
          <span class="cat-count">${count} ${label} ${ICONS.arrow}</span>
        </a>`;
    }).join("");
    observeReveals();
  }

  function renderFooterLinks() {
    if (!footerCats) return;

    // The footer has one Collections column. Show all eight cookbook
    // categories here while keeping the separate Library column removed.
    const li = (cat) => `<li><a href="#/library?cat=${encodeURIComponent(cat.slug)}">${escapeHtml(cat.name)}</a></li>`;
    footerCats.innerHTML = CATEGORIES.map(li).join("");
  }

  function updateRecipeCounts() {
    const recipeCount = Array.isArray(RECIPES) ? RECIPES.length : 0;
    const displayCount = `${recipeCount}+`;

    if (totalRecipeCount) {
      totalRecipeCount.textContent = displayCount;
    }

    if (aboutRecipeCount) {
      aboutRecipeCount.textContent = displayCount;
    }
  }

  /* ---------------------------------------------------------------------
     5. RENDER: LIBRARY — filter chips, header copy, recipe grid, search
     --------------------------------------------------------------------- */
  function renderFilterRow() {
    if (!filterRow) return;
    // The header navigation has only Home, All Recipes, and About.
    // This filter row still lists every cookbook category, including Seasoning.
    const chips = [{ slug: "all", name: "All Recipes" }, ...CATEGORIES];
    filterRow.innerHTML = chips.map((c) => `
      <button type="button" class="chip${state.cat === c.slug ? " is-active" : ""}" data-cat="${c.slug}" aria-pressed="${state.cat === c.slug}">
        ${escapeHtml(c.name)}
      </button>
    `).join("");
    $$(".chip", filterRow).forEach((btn) => {
      btn.addEventListener("click", () => {
        if (state.cat === btn.dataset.cat) return;
        state.cat = btn.dataset.cat;
        $$(".chip", filterRow).forEach((b) => {
          const active = b === btn;
          b.classList.toggle("is-active", active);
          b.setAttribute("aria-pressed", String(active));
        });
        updateLibraryHeader();
        renderRecipeGrid();
        updateHash();
        updateActiveNav();
      });
    });
  }

  function updateLibraryHeader() {
    if (!libEyebrow || !libTitle || !libDesc) return;
    if (state.cat === "all") {
      libEyebrow.textContent = "THE COOKBOOK";
      libTitle.textContent = "All Recipes";
      libDesc.textContent = "Search by name, or filter the collection by category.";
    } else {
      const cat = getCategory(state.cat);
      if (cat) {
        libEyebrow.textContent = cat.tag;
        libTitle.textContent = cat.name;
        libDesc.textContent = cat.blurb;
      }
    }
  }

  function filteredRecipes() {
    const q = state.q.trim().toLowerCase();
    return RECIPES.filter((r) => {
      const matchesCat = state.cat === "all" || r.category === state.cat;
      if (!matchesCat) return false;
      if (!q) return true;
      const catName = (getCategory(r.category) || {}).name || "";
      return (
        r.name.toLowerCase().includes(q) ||
        r.description.toLowerCase().includes(q) ||
        catName.toLowerCase().includes(q)
      );
    });
  }

  function recipePdfPath(recipe, category) {
    return `recipes/${category ? category.folder : ""}/${recipe.pdf}`;
  }

  function driveFileId(url) {
    if (!url) return "";
    const text = String(url);
    const pathMatch = text.match(/\/d\/([a-zA-Z0-9_-]+)/);
    if (pathMatch) return pathMatch[1];
    try {
      const parsed = new URL(text, window.location.href);
      return parsed.searchParams.get("id") || "";
    } catch (_) {
      return "";
    }
  }

  function recipeDocumentUrls(recipe, category) {
    const localUrl = recipePdfPath(recipe, category);
    const driveUrl = recipe.driveUrl || "";
    const fileId = driveFileId(driveUrl);

    if (fileId) {
      return {
        preview: `https://drive.google.com/file/d/${fileId}/preview`,
        open: `https://drive.google.com/file/d/${fileId}/view`,
        download: `https://drive.google.com/uc?export=download&id=${fileId}`,
        fromDrive: true
      };
    }

    const source = driveUrl || localUrl;
    return { preview: source, open: source, download: source, fromDrive: Boolean(driveUrl) };
  }

  function recipeImagePath(recipe, category, item) {
    const src = typeof item === "string" ? item : item && item.src;
    if (!src) return "";
    if (/^(https?:)?\/\//i.test(src) || /^data:/i.test(src)) return src;
    return `recipes/${category ? category.folder : ""}/${src}`;
  }

  function recipeZipPath(recipe, category) {
    if (!recipe || !recipe.downloadZip) return "";
    return recipeImagePath(recipe, category, recipe.downloadZip);
  }

  function recipeCardMarkup(recipe) {
    const cat = getCategory(recipe.category);
    const urls = recipeDocumentUrls(recipe, cat);
    const downloadLabel = urls.fromDrive ? "Download from Drive" : "Download PDF";
    const hasImageGallery = Array.isArray(recipe.images) && recipe.images.length > 0;
    const viewAction = hasImageGallery
      ? `<a class="view-recipe-btn" href="recipe-documents.html?recipe=${encodeURIComponent(recipe.id)}" target="_blank" rel="noopener">View Recipe</a>`
      : `<button class="view-recipe-btn" type="button" data-recipe-id="${escapeHtml(recipe.id)}">View Recipe</button>`;
    const downloadAction = hasImageGallery
      ? `<button class="pdf-btn recipe-download-btn" type="button" data-recipe-download-id="${escapeHtml(recipe.id)}">${ICONS.download} Download Recipe</button>`
      : `<a class="pdf-btn" href="${escapeHtml(urls.download)}" target="_blank" rel="noopener">${ICONS.download} ${downloadLabel}</a>`;

    return `
      <article class="recipe-card">
        ${recipeMediaMarkup(recipe, cat)}
        <div class="recipe-body">
          <h3 class="recipe-name">${escapeHtml(recipe.name)}</h3>
          <p class="recipe-desc">${escapeHtml(recipe.description)}</p>
          <div class="recipe-foot">
            ${viewAction}
            ${downloadAction}
          </div>
        </div>
      </article>`;
  }

  function safeFileName(value) {
    return String(value || "PureEra-Recipe")
      .replace(/[^a-z0-9]+/gi, "-")
      .replace(/^-+|-+$/g, "") || "PureEra-Recipe";
  }

  async function downloadRecipeImages(recipeId, button) {
    const recipe = RECIPES.find((item) => item.id === recipeId);
    if (!recipe || !Array.isArray(recipe.images) || !recipe.images.length) return;

    if (typeof JSZip === "undefined") {
      window.alert("Recipe download is temporarily unavailable. Please try again.");
      return;
    }

    const category = getCategory(recipe.category);
    const originalLabel = button ? button.innerHTML : "";
    if (button) {
      button.disabled = true;
      button.innerHTML = `${ICONS.download} Preparing ZIP…`;
    }

    try {
      const zip = new JSZip();
      for (let index = 0; index < recipe.images.length; index += 1) {
        const item = recipe.images[index];
        const url = recipeImagePath(recipe, category, item);
        const response = await fetch(url);
        if (!response.ok) throw new Error(`Could not download ${url}`);
        const blob = await response.blob();
        const src = typeof item === "string" ? item : item.src;
        const extensionMatch = String(src || "").match(/\.([a-z0-9]+)(?:[?#].*)?$/i);
        const extension = extensionMatch ? extensionMatch[1].toLowerCase() : "webp";
        zip.file(`${index + 1}.${extension}`, blob);
      }

      const archive = await zip.generateAsync({ type: "blob", compression: "DEFLATE", compressionOptions: { level: 6 } });
      const href = URL.createObjectURL(archive);
      const link = document.createElement("a");
      link.href = href;
      link.download = `${safeFileName(recipe.name)}-Recipe.zip`;
      document.body.appendChild(link);
      link.click();
      link.remove();
      setTimeout(() => URL.revokeObjectURL(href), 1000);
    } catch (error) {
      console.error(error);
      window.alert("We could not prepare this recipe download. Please try again.");
    } finally {
      if (button) {
        button.disabled = false;
        button.innerHTML = originalLabel;
      }
    }
  }

  function emptyStateMarkup() {
    return `
      <div class="empty-state">
        ${ICONS.emptySearch}
        <h3>No recipes found</h3>
        <p>Try a different search term, or clear the filter to see the full library.</p>
      </div>`;
  }

  function renderRecipeGrid() {
    if (!recipeGrid) return;
    const results = filteredRecipes();
    recipeGrid.innerHTML = results.length
      ? results.map(recipeCardMarkup).join("")
      : emptyStateMarkup();
    if (resultMeta) {
      resultMeta.textContent = results.length === 1 ? "1 recipe" : `${results.length} recipes`;
    }
  }

  /* ---------------------------------------------------------------------
     6. RECIPE CARD VIEWER
     Recipes with a `documents` array open the multi-PDF page in a new tab.
     Other recipes continue to use the focused card-style modal.
     --------------------------------------------------------------------- */
  function openRecipeModal(recipeId) {
    if (!recipeModal) return;
    const recipe = RECIPES.find((item) => item.id === recipeId);
    if (!recipe) return;

    const category = getCategory(recipe.category);
    const urls = recipeDocumentUrls(recipe, category);

    if (recipeModalCategory) recipeModalCategory.textContent = category ? category.name : "Recipe";
    if (recipeModalTitle) recipeModalTitle.textContent = recipe.name;
    if (recipeModalDescription) recipeModalDescription.textContent = recipe.description;
    if (recipePreviewFrame) recipePreviewFrame.src = urls.preview;
    if (recipePreviewNote) recipePreviewNote.hidden = true;
    if (recipeOpenLink) recipeOpenLink.href = urls.open;
    if (recipeDownloadLink) {
      recipeDownloadLink.href = urls.download;
      recipeDownloadLink.textContent = urls.fromDrive ? "Download from Drive" : "Download PDF";
    }

    recipeModal.hidden = false;
    document.body.classList.add("modal-open");
    const closeButton = $(".recipe-modal-close", recipeModal);
    if (closeButton) closeButton.focus();
  }

  function closeRecipeModal() {
    if (!recipeModal || recipeModal.hidden) return;
    recipeModal.hidden = true;
    document.body.classList.remove("modal-open");
    if (recipePreviewFrame) recipePreviewFrame.src = "about:blank";
  }

  function wireRecipeViewer() {
    if (recipeGrid) {
      recipeGrid.addEventListener("click", (event) => {
        const downloadButton = event.target.closest(".recipe-download-btn");
        if (downloadButton && downloadButton.dataset.recipeDownloadId) {
          event.preventDefault();
          downloadRecipeImages(downloadButton.dataset.recipeDownloadId, downloadButton);
          return;
        }

        const button = event.target.closest(".view-recipe-btn");
        if (button && button.dataset.recipeId) openRecipeModal(button.dataset.recipeId);
      });
    }

    if (recipeModal) {
      recipeModal.addEventListener("click", (event) => {
        if (event.target.closest("[data-close-recipe]")) closeRecipeModal();
      });
    }

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") closeRecipeModal();
    });
  }

  /* ---------------------------------------------------------------------
     7. ROUTER
     Hash formats supported:
       #/               -> home
       #/library        -> library, all categories
       #/library?cat=x  -> library, filtered by category slug
       #/library?cat=x&q=term -> library, filtered + searched
       #about           -> home, scrolled to the About section
     --------------------------------------------------------------------- */
  function parseHash() {
    const raw = (location.hash || "#/").replace(/^#/, "");
    const [path, queryString] = raw.split("?");
    const params = new URLSearchParams(queryString || "");
    return { path: path || "/", params };
  }

  function showHome() {
    if (libraryView) libraryView.hidden = true;
    if (homeView) homeView.hidden = false;
  }

  function showLibrary() {
    if (homeView) homeView.hidden = true;
    if (libraryView) libraryView.hidden = false;
    $$(".reveal", libraryView).forEach((el) => el.classList.add("is-visible"));
  }

  function updateHash() {
    let hash = "#/library";
    const parts = [];
    if (state.cat !== "all") parts.push("cat=" + encodeURIComponent(state.cat));
    if (state.q) parts.push("q=" + encodeURIComponent(state.q));
    if (parts.length) hash += "?" + parts.join("&");
    history.replaceState(null, "", hash);
  }

  function router() {
    const { path, params } = parseHash();

    if (path.startsWith("/library")) {
      const cat = params.get("cat");
      const q = params.get("q") || "";
      state.cat = cat && (cat === "all" || getCategory(cat)) ? cat : "all";
      state.q = q;
      if (searchInput) searchInput.value = q;
      showLibrary();
      renderFilterRow();
      updateLibraryHeader();
      renderRecipeGrid();
      updateActiveNav();
      return;
    }

    // Everything else (home, #about, #categories, empty hash) shows the home view.
    showHome();
    updateActiveNav();
    if (path === "about") {
      requestAnimationFrame(() => {
        const el = document.getElementById("about");
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
  }

  /* ---------------------------------------------------------------------
     7. ACTIVE NAV STATE
     --------------------------------------------------------------------- */
  let aboutInView = false;

  function updateActiveNav() {
    const { path, params } = parseHash();
    const links = $$(".main-nav a[data-nav]");
    let active = "home";

    if (path.startsWith("/library")) {
      active = "library";
    } else if (path === "about" || (path === "/" && aboutInView)) {
      active = "about";
    }

    links.forEach((a) => a.classList.toggle("is-active", a.dataset.nav === active));
  }

  function observeAboutSection() {
    const about = document.getElementById("about");
    if (!about || !("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          aboutInView = entry.isIntersecting;
          if (!(libraryView && !libraryView.hidden)) updateActiveNav();
        });
      },
      { threshold: 0.4 }
    );
    io.observe(about);
  }

  /* ---------------------------------------------------------------------
     8. SEARCH INPUT WIRING (instant, updates URL without extra history)
     --------------------------------------------------------------------- */
  function wireSearch() {
    if (!searchInput) return;
    searchInput.addEventListener("input", () => {
      state.q = searchInput.value;
      renderRecipeGrid();
      updateHash();
    });
  }

  function wireNavSearchButton() {
    if (!navSearchBtn) return;
    navSearchBtn.addEventListener("click", () => {
      if (location.hash.startsWith("#/library")) {
        if (searchInput) searchInput.focus();
        return;
      }
      location.hash = "#/library";
      requestAnimationFrame(() => searchInput && searchInput.focus());
    });
  }

  /* ---------------------------------------------------------------------
     9. MOBILE NAVIGATION
     --------------------------------------------------------------------- */
  function wireMobileNav() {
    if (!navToggle || !mainNav) return;
    const closeNav = () => {
      mainNav.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    };
    navToggle.addEventListener("click", () => {
      const isOpen = mainNav.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });
    $$("a", mainNav).forEach((a) => a.addEventListener("click", closeNav));
    window.addEventListener("resize", () => {
      if (window.innerWidth > 760) closeNav();
    });
  }

  /* ---------------------------------------------------------------------
     10. REVEAL-ON-SCROLL ANIMATIONS
     --------------------------------------------------------------------- */
  let revealObserver;
  function observeReveals() {
    if (!("IntersectionObserver" in window)) {
      $$(".reveal").forEach((el) => el.classList.add("is-visible"));
      return;
    }
    if (!revealObserver) {
      revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              revealObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
      );
    }
    $$(".reveal:not(.is-visible)").forEach((el) => revealObserver.observe(el));
  }

  /* ---------------------------------------------------------------------
     11. FOOTER YEAR
     --------------------------------------------------------------------- */
  function setYear() {
    if (yearEl) yearEl.textContent = String(new Date().getFullYear());
  }

  /* ---------------------------------------------------------------------
     12. INIT
     --------------------------------------------------------------------- */
  function init() {
    setYear();
    updateRecipeCounts();
    renderCategoryGrid();
    renderFooterLinks();
    renderFilterRow();
    wireSearch();
    wireRecipeViewer();
    wireNavSearchButton();
    wireMobileNav();
    observeReveals();
    observeAboutSection();

    window.addEventListener("hashchange", router);
    router();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
