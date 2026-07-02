/* ==========================================================================
   PureEra — script.js
   Vanilla-JS SPA logic: hash routing, dynamic rendering, search, filters,
   SVG placeholder art, mobile nav, reveal-on-scroll, active nav state.
   No frameworks. No build step. Reads from CATEGORIES / RECIPES in data.js.
   ========================================================================== */

(function () {
  "use strict";

  /* ---------------------------------------------------------------------
     0. ICON LIBRARY
     Small inline SVG strings, all stroke="currentColor" so they inherit
     color from their container — matches the rest of the design system.
     --------------------------------------------------------------------- */
  const ICONS = {
    pizza: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3 3 20h18L12 3z"/><circle cx="12" cy="10.5" r="1"/><circle cx="9" cy="15" r="1"/><circle cx="15" cy="15" r="1"/></svg>`,
    taco: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 0 1 18 0"/><path d="M3 12c0 4.4 4 8 9 9 5-1 9-4.6 9-9"/><path d="M7.5 12.5v3M12 12.5v4M16.5 12.5v3"/></svg>`,
    noodles: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12h16"/><path d="M4 12c0 4.4 3.6 8 8 8s8-3.6 8-8"/><path d="M9 5c-1 1-1 2 0 3M12 4c-1 1-1 2 0 3M15 5c-1 1-1 2 0 3"/></svg>`,
    cart: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="20" r="1.3"/><circle cx="17" cy="20" r="1.3"/><path d="M2 3h2l2.6 12.4a2 2 0 0 0 2 1.6h8.4a2 2 0 0 0 2-1.6L21 7H6"/></svg>`,
    curry: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 10h16l-1.4 8.2a2 2 0 0 1-2 1.8H7.4a2 2 0 0 1-2-1.8L4 10z"/><path d="M2 10h20"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/></svg>`,
    croissant: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 16c1-7 6-12 11-12 2 0 3 1 3 2 0 3-4 4-6 7 3-1 6 0 6 2 0 4-6 7-10 7-2 0-4-3-4-6z"/></svg>`,
    leaf: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M5 19c8 0 14-6 14-14-8 0-14 6-14 14z"/><path d="M5 19c3-5 6-8 11-11"/></svg>`,
    jar: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="7" y="9" width="10" height="12" rx="2"/><path d="M9 9V6a3 3 0 0 1 6 0v3"/><path d="M7 13.5h10"/></svg>`,
    download: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M7 10.5l5 5 5-5"/><path d="M5 20h14"/></svg>`,
    arrow: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M13 6l6 6-6 6"/></svg>`,
    emptySearch: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.2" y2="16.2"/><line x1="8" y1="11" x2="14" y2="11"/></svg>`
  };

  /* Purity seal — the repeating brand mark used in header / hero / about / footer */
  const SEAL_SVG = `<svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
    <circle class="ring-outer" cx="20" cy="20" r="18"/>
    <circle class="ring-inner" cx="20" cy="20" r="13"/>
    <path class="sprig" d="M20 29V13"/>
    <path class="sprig" d="M20 13c0-5 3-8 9-8-2 6-5 9-9 9"/>
    <path class="sprig" d="M20 20c0-5-3-8-9-8 2 6 5 9 9 9"/>
  </svg>`;

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
  const footerCatsA = $("#footerCatsA");
  const footerCatsB = $("#footerCatsB");
  const statRecipes = $("#statRecipes");
  const statCats = $("#statCats");
  const yearEl = $("#year");

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

  function recipeMediaMarkup(recipe, category) {
    const icon = ICONS[category && category.icon] || ICONS.leaf;
    return `
      <div class="recipe-media" style="background:${mediaBackground(recipe.category)}">
        <span class="cat-badge">${escapeHtml(category ? category.name : recipe.category)}</span>
        ${icon}
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
    categoryGrid.innerHTML = CATEGORIES.map((cat) => `
      <a class="cat-card reveal" href="#/library?cat=${encodeURIComponent(cat.slug)}">
        <span class="cat-icon">${ICONS[cat.icon] || ICONS.leaf}</span>
        <h3 class="cat-name">${escapeHtml(cat.name)}</h3>
        <span class="cat-tag">${escapeHtml(cat.tag)}</span>
        <p class="cat-blurb">${escapeHtml(cat.blurb)}</p>
        <span class="cat-count">${countInCategory(cat.slug)} recipes ${ICONS.arrow}</span>
      </a>
    `).join("");
    observeReveals();
  }

  function renderFooterLinks() {
    if (!footerCatsA || !footerCatsB) return;
    const half = Math.ceil(CATEGORIES.length / 2);
    const colA = CATEGORIES.slice(0, half);
    const colB = CATEGORIES.slice(half);
    const li = (cat) => `<li><a href="#/library?cat=${encodeURIComponent(cat.slug)}">${escapeHtml(cat.name)}</a></li>`;
    footerCatsA.innerHTML = colA.map(li).join("");
    footerCatsB.innerHTML = colB.map(li).join("");
  }

  function renderStats() {
    if (statRecipes) statRecipes.textContent = `${RECIPES.length}+`;
    if (statCats) statCats.textContent = String(CATEGORIES.length);
  }

  /* ---------------------------------------------------------------------
     5. RENDER: LIBRARY — filter chips, header copy, recipe grid, search
     --------------------------------------------------------------------- */
  function renderFilterRow() {
    if (!filterRow) return;
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
      libEyebrow.textContent = "The Library";
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

  function recipeCardMarkup(recipe) {
    const cat = getCategory(recipe.category);
    const pdfPath = `recipes/${cat ? cat.folder : ""}/${recipe.pdf}`;
    return `
      <article class="recipe-card">
        ${recipeMediaMarkup(recipe, cat)}
        <div class="recipe-body">
          <h3 class="recipe-name">${escapeHtml(recipe.name)}</h3>
          <p class="recipe-desc">${escapeHtml(recipe.description)}</p>
          <div class="recipe-foot">
            <a class="pdf-btn" href="${pdfPath}" target="_blank" rel="noopener">
              ${ICONS.download} Download PDF
            </a>
          </div>
        </div>
      </article>`;
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
     6. ROUTER
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
      active = params.get("cat") === "seasonings" ? "seasonings" : "library";
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
     11. HEADER SEALS + FOOTER YEAR
     --------------------------------------------------------------------- */
  function injectSeals() {
    $$(".seal").forEach((el) => { el.innerHTML = SEAL_SVG; });
  }

  function setYear() {
    if (yearEl) yearEl.textContent = String(new Date().getFullYear());
  }

  /* ---------------------------------------------------------------------
     12. INIT
     --------------------------------------------------------------------- */
  function init() {
    injectSeals();
    setYear();
    renderStats();
    renderCategoryGrid();
    renderFooterLinks();
    renderFilterRow();
    wireSearch();
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
