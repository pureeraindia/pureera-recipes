(function () {
  "use strict";

  const params = new URLSearchParams(window.location.search);
  const recipeId = params.get("recipe") || "";
  const recipe = Array.isArray(RECIPES)
    ? RECIPES.find((item) => item.id === recipeId)
    : null;
  const category = recipe && Array.isArray(CATEGORIES)
    ? CATEGORIES.find((item) => item.slug === recipe.category)
    : null;

  const gallery = document.getElementById("imageGallery");
  const image = document.getElementById("galleryImage");
  const previous = document.getElementById("previousImage");
  const next = document.getElementById("nextImage");

  let activeIndex = 0;
  let touchStartX = null;

  function imagePath(item) {
    const src = typeof item === "string" ? item : item.src;
    if (/^(https?:)?\/\//i.test(src || "") || /^data:/i.test(src || "")) return src;
    return `recipes/${category ? category.folder : ""}/${src || ""}`;
  }

  function imageAlt(item, index) {
    if (item && typeof item === "object" && item.alt) return item.alt;
    return `${recipe ? recipe.name : "Recipe"} image ${index + 1}`;
  }

  function showImage(index) {
    if (!recipe || !Array.isArray(recipe.images) || !recipe.images.length) return;

    const lastIndex = recipe.images.length - 1;
    activeIndex = Math.max(0, Math.min(index, lastIndex));
    const item = recipe.images[activeIndex];

    image.src = imagePath(item);
    image.alt = imageAlt(item, activeIndex);
    previous.disabled = activeIndex === 0;
    next.disabled = activeIndex === lastIndex;
    document.title = `${recipe.name} ${activeIndex + 1} of ${recipe.images.length} - PureEra`;
  }

  if (!recipe || !Array.isArray(recipe.images) || recipe.images.length === 0) {
    gallery.hidden = true;
    document.body.style.background = "#000";
    return;
  }

  previous.addEventListener("click", () => showImage(activeIndex - 1));
  next.addEventListener("click", () => showImage(activeIndex + 1));

  document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") showImage(activeIndex - 1);
    if (event.key === "ArrowRight") showImage(activeIndex + 1);
  });

  gallery.addEventListener("touchstart", (event) => {
    touchStartX = event.changedTouches[0].clientX;
  }, { passive: true });

  gallery.addEventListener("touchend", (event) => {
    if (touchStartX === null) return;
    const distance = event.changedTouches[0].clientX - touchStartX;
    if (distance > 50) showImage(activeIndex - 1);
    if (distance < -50) showImage(activeIndex + 1);
    touchStartX = null;
  }, { passive: true });

  recipe.images.forEach((item) => {
    const preload = new Image();
    preload.src = imagePath(item);
  });

  showImage(0);
})();
