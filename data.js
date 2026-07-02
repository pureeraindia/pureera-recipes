/* ==========================================================================
   PureEra — data.js
   All category and recipe data lives here. To add a recipe, add an object
   to the RECIPES array. To add a category, add an object to CATEGORIES
   and create a matching folder inside /recipes/.
   ========================================================================== */

/* Each category maps to a folder inside /recipes/ where its PDFs live. */
const CATEGORIES = [
  {
    slug: "italian",
    name: "Italian",
    folder: "Italian",
    tag: "Trattoria classics",
    blurb: "Slow sauces, good olive oil, and a lot of patience.",
    icon: "pizza"
  },
  {
    slug: "mexican",
    name: "Mexican",
    folder: "Mexican",
    tag: "Bright & bold",
    blurb: "Charred chillies, lime, and food made for sharing.",
    icon: "taco"
  },
  {
    slug: "indo-chinese",
    name: "Indo-Chinese",
    folder: "IndoChinese",
    tag: "Wok-fired favourites",
    blurb: "The beloved street-corner fusion of India and China.",
    icon: "noodles"
  },
  {
    slug: "street-food",
    name: "Indian Street Food",
    folder: "StreetFood",
    tag: "From the cart to your kitchen",
    blurb: "Tangy, spiced, and impossible to eat slowly.",
    icon: "cart"
  },
  {
    slug: "indian-cuisine",
    name: "Indian Cuisine",
    folder: "IndianCuisine",
    tag: "Home & heirloom",
    blurb: "Layered spice work from every corner of India.",
    icon: "curry"
  },
  {
    slug: "bakery",
    name: "Bakery & Café",
    folder: "Bakery",
    tag: "Butter, sugar, time",
    blurb: "Fresh bakes and slow coffee for quiet mornings.",
    icon: "croissant"
  },
  {
    slug: "healthy",
    name: "Healthy Meals",
    folder: "HealthyMeals",
    tag: "Clean & nourishing",
    blurb: "Whole ingredients, built for how you actually feel.",
    icon: "leaf"
  },
  {
    slug: "seasonings",
    name: "Signature Seasonings",
    folder: "Seasonings",
    tag: "The PureEra edge",
    blurb: "Our own spice blends, ground in small batches.",
    icon: "jar"
  }
];

/* pdf paths follow: recipes/<folder>/<file>.pdf (files are placeholders) */
const RECIPES = [
  // ---------------- Italian ----------------
  { id: "it-01", category: "italian", name: "Margherita Pizza", description: "Thin Neapolitan crust, San Marzano tomato, fior di latte.", pdf: "Pizza.pdf" },
  { id: "it-02", category: "italian", name: "Truffle Mushroom Risotto", description: "Slow-stirred arborio rice finished with black truffle oil.", pdf: "TruffleRisotto.pdf" },
  { id: "it-03", category: "italian", name: "Classic Spaghetti Carbonara", description: "Guanciale, egg yolk, and pecorino — no cream, ever.", pdf: "Carbonara.pdf" },
  { id: "it-04", category: "italian", name: "Lasagna al Forno", description: "Layered ragù, béchamel, and slow-baked pasta sheets.", pdf: "Lasagna.pdf" },
  { id: "it-05", category: "italian", name: "Pesto Genovese Pasta", description: "Basil, pine nut, and parmesan pesto tossed with trofie.", pdf: "PestoPasta.pdf" },
  { id: "it-06", category: "italian", name: "Burrata Caprese", description: "Creamy burrata over heirloom tomato and basil oil.", pdf: "BurrataCaprese.pdf" },
  { id: "it-07", category: "italian", name: "Osso Buco", description: "Braised veal shank with gremolata and saffron risotto.", pdf: "OssoBuco.pdf" },
  { id: "it-08", category: "italian", name: "Tiramisu", description: "Espresso-soaked ladyfingers with mascarpone cream.", pdf: "Tiramisu.pdf" },
  { id: "it-09", category: "italian", name: "Focaccia al Rosmarino", description: "Olive-oil rich flatbread with rosemary and sea salt.", pdf: "Focaccia.pdf" },
  { id: "it-10", category: "italian", name: "Aglio e Olio", description: "Garlic, chilli flake, and good olive oil — pure and simple.", pdf: "AglioOlio.pdf" },
  { id: "it-11", category: "italian", name: "Chicken Parmigiana", description: "Breaded chicken, marinara, and molten mozzarella.", pdf: "ChickenParm.pdf" },
  { id: "it-12", category: "italian", name: "Panna Cotta", description: "Silky vanilla cream set soft, with a berry compote.", pdf: "PannaCotta.pdf" },
  { id: "it-13", category: "italian", name: "Minestrone Soup", description: "Garden vegetables, beans, and small pasta in tomato broth.", pdf: "Minestrone.pdf" },
  { id: "it-14", category: "italian", name: "Bruschetta al Pomodoro", description: "Charred bread, garlic, and marinated tomato.", pdf: "Bruschetta.pdf" },

  // ---------------- Mexican ----------------
  { id: "mx-01", category: "mexican", name: "Loaded Nachos", description: "Crisp tortilla chips, queso, pico, and pickled jalapeño.", pdf: "Nachos.pdf" },
  { id: "mx-02", category: "mexican", name: "Chicken Tinga Tacos", description: "Chipotle-braised chicken on warm corn tortillas.", pdf: "ChickenTinga.pdf" },
  { id: "mx-03", category: "mexican", name: "Street Corn Elote", description: "Grilled corn, crema, cotija, and chilli powder.", pdf: "Elote.pdf" },
  { id: "mx-04", category: "mexican", name: "Guacamole Fresco", description: "Hand-mashed avocado, lime, and fresh coriander.", pdf: "Guacamole.pdf" },
  { id: "mx-05", category: "mexican", name: "Beef Barbacoa Burrito", description: "Slow-cooked beef wrapped with rice, beans, and salsa.", pdf: "BarbacoaBurrito.pdf" },
  { id: "mx-06", category: "mexican", name: "Cheese Enchiladas", description: "Corn tortillas rolled and bathed in red chilli sauce.", pdf: "Enchiladas.pdf" },
  { id: "mx-07", category: "mexican", name: "Pico de Gallo Salsa", description: "Diced tomato, onion, chilli, and lime — no cooking needed.", pdf: "PicoDeGallo.pdf" },
  { id: "mx-08", category: "mexican", name: "Churros con Chocolate", description: "Cinnamon-sugar dusted churros with dark chocolate dip.", pdf: "Churros.pdf" },
  { id: "mx-09", category: "mexican", name: "Chiles Rellenos", description: "Roasted poblano stuffed with cheese, lightly battered.", pdf: "ChilesRellenos.pdf" },
  { id: "mx-10", category: "mexican", name: "Shrimp Ceviche", description: "Lime-cured shrimp with tomato, onion, and coriander.", pdf: "ShrimpCeviche.pdf" },
  { id: "mx-11", category: "mexican", name: "Quesadillas Supreme", description: "Griddled tortilla folded over melted cheese and peppers.", pdf: "Quesadillas.pdf" },
  { id: "mx-12", category: "mexican", name: "Pozole Rojo", description: "Hominy stew simmered with dried red chillies and pork.", pdf: "PozoleRojo.pdf" },
  { id: "mx-13", category: "mexican", name: "Tres Leches Cake", description: "Sponge cake soaked in three kinds of milk.", pdf: "TresLeches.pdf" },

  // ---------------- Indo-Chinese ----------------
  { id: "ic-01", category: "indo-chinese", name: "Veg Manchurian", description: "Crisp vegetable dumplings tossed in a tangy dark sauce.", pdf: "VegManchurian.pdf" },
  { id: "ic-02", category: "indo-chinese", name: "Chilli Paneer", description: "Wok-tossed paneer with capsicum and soy-chilli glaze.", pdf: "ChilliPaneer.pdf" },
  { id: "ic-03", category: "indo-chinese", name: "Hakka Noodles", description: "Stir-fried noodles with julienned vegetables and soy.", pdf: "HakkaNoodles.pdf" },
  { id: "ic-04", category: "indo-chinese", name: "Schezwan Fried Rice", description: "Fiery Schezwan sauce tossed through wok-hot rice.", pdf: "SchezwanRice.pdf" },
  { id: "ic-05", category: "indo-chinese", name: "Chicken Lollipop", description: "Frenched chicken wings, double-fried and sauce-tossed.", pdf: "ChickenLollipop.pdf" },
  { id: "ic-06", category: "indo-chinese", name: "Gobi 65", description: "Crisp fried cauliflower in a spiced curry-leaf coating.", pdf: "Gobi65.pdf" },
  { id: "ic-07", category: "indo-chinese", name: "Honey Chilli Potato", description: "Crunchy potato fingers glazed in honey and chilli.", pdf: "HoneyChilliPotato.pdf" },
  { id: "ic-08", category: "indo-chinese", name: "Sweet Corn Soup", description: "Silky corn broth with a gentle white pepper finish.", pdf: "SweetCornSoup.pdf" },
  { id: "ic-09", category: "indo-chinese", name: "American Chopsuey", description: "Crisp noodles under a sweet-tangy vegetable gravy.", pdf: "AmericanChopsuey.pdf" },
  { id: "ic-10", category: "indo-chinese", name: "Dragon Chicken", description: "Shredded fried chicken with cashew and dry red chilli.", pdf: "DragonChicken.pdf" },
  { id: "ic-11", category: "indo-chinese", name: "Crispy Chilli Mushroom", description: "Batter-fried mushroom in a glossy chilli-garlic sauce.", pdf: "ChilliMushroom.pdf" },
  { id: "ic-12", category: "indo-chinese", name: "Spring Rolls", description: "Vegetable-stuffed rolls, fried until shatteringly crisp.", pdf: "SpringRolls.pdf" },
  { id: "ic-13", category: "indo-chinese", name: "Manchow Soup", description: "Peppery vegetable soup topped with crunchy fried noodles.", pdf: "ManchowSoup.pdf" },

  // ---------------- Indian Street Food ----------------
  { id: "sf-01", category: "street-food", name: "Pani Puri", description: "Crisp puris filled with spiced tamarind water.", pdf: "PaniPuri.pdf" },
  { id: "sf-02", category: "street-food", name: "Pav Bhaji", description: "Buttered pav with a mashed, spiced vegetable curry.", pdf: "PavBhaji.pdf" },
  { id: "sf-03", category: "street-food", name: "Vada Pav", description: "Spiced potato fritter in a soft bun with chutneys.", pdf: "VadaPav.pdf" },
  { id: "sf-04", category: "street-food", name: "Dahi Bhalla", description: "Lentil dumplings in whisked yogurt with tangy chutneys.", pdf: "DahiBhalla.pdf" },
  { id: "sf-05", category: "street-food", name: "Aloo Tikki Chaat", description: "Crisp potato patties layered with yogurt and chutney.", pdf: "AlooTikkiChaat.pdf" },
  { id: "sf-06", category: "street-food", name: "Bhel Puri", description: "Puffed rice tossed with tamarind, chutneys, and sev.", pdf: "BhelPuri.pdf" },
  { id: "sf-07", category: "street-food", name: "Samosa Chaat", description: "Crushed samosa loaded with chole, yogurt, and chutney.", pdf: "SamosaChaat.pdf" },
  { id: "sf-08", category: "street-food", name: "Sev Puri", description: "Crisp puris topped with potato, chutney, and crunchy sev.", pdf: "SevPuri.pdf" },
  { id: "sf-09", category: "street-food", name: "Kathi Roll", description: "Spiced filling rolled in a flaky paratha.", pdf: "KathiRoll.pdf" },
  { id: "sf-10", category: "street-food", name: "Ragda Pattice", description: "Potato patties over a warm white-pea curry.", pdf: "RagdaPattice.pdf" },
  { id: "sf-11", category: "street-food", name: "Dabeli", description: "Sweet-spiced potato mix in a bun with pomegranate and sev.", pdf: "Dabeli.pdf" },
  { id: "sf-12", category: "street-food", name: "Corn Chaat", description: "Buttered corn tossed with lime, chilli, and spice.", pdf: "CornChaat.pdf" },
  { id: "sf-13", category: "street-food", name: "Masala Puri", description: "Crushed puris in a spiced peas gravy with toppings.", pdf: "MasalaPuri.pdf" },

  // ---------------- Indian Cuisine ----------------
  { id: "in-01", category: "indian-cuisine", name: "Butter Chicken", description: "Tandoori chicken simmered in a velvety tomato-butter gravy.", pdf: "ButterChicken.pdf" },
  { id: "in-02", category: "indian-cuisine", name: "Paneer Tikka Masala", description: "Chargrilled paneer in a rich onion-tomato masala.", pdf: "PaneerTikkaMasala.pdf" },
  { id: "in-03", category: "indian-cuisine", name: "Dal Makhani", description: "Black lentils, slow-simmered with butter and cream.", pdf: "DalMakhani.pdf" },
  { id: "in-04", category: "indian-cuisine", name: "Hyderabadi Biryani", description: "Layered basmati and marinated meat, dum-cooked.", pdf: "HyderabadiBiryani.pdf" },
  { id: "in-05", category: "indian-cuisine", name: "Chole Bhature", description: "Spiced chickpea curry with pillowy fried bread.", pdf: "CholeBhature.pdf" },
  { id: "in-06", category: "indian-cuisine", name: "Palak Paneer", description: "Fresh paneer cubes in a silky spiced spinach gravy.", pdf: "PalakPaneer.pdf" },
  { id: "in-07", category: "indian-cuisine", name: "Rogan Josh", description: "Kashmiri-style lamb curry, deep red and aromatic.", pdf: "RoganJosh.pdf" },
  { id: "in-08", category: "indian-cuisine", name: "Malai Kofta", description: "Fried paneer-potato dumplings in a creamy cashew gravy.", pdf: "MalaiKofta.pdf" },
  { id: "in-09", category: "indian-cuisine", name: "Baingan Bharta", description: "Fire-roasted mashed eggplant with onion and tomato.", pdf: "BainganBharta.pdf" },
  { id: "in-10", category: "indian-cuisine", name: "Tandoori Roti", description: "Whole-wheat flatbread, charred in a traditional tandoor.", pdf: "TandooriRoti.pdf" },
  { id: "in-11", category: "indian-cuisine", name: "Kadai Vegetable", description: "Mixed vegetables tossed in a coarsely ground spice masala.", pdf: "KadaiVegetable.pdf" },
  { id: "in-12", category: "indian-cuisine", name: "Rajma Chawal", description: "Kidney bean curry served over steamed rice.", pdf: "RajmaChawal.pdf" },
  { id: "in-13", category: "indian-cuisine", name: "Fish Curry", description: "Coastal-style curry with tamarind, coconut, and spice.", pdf: "FishCurry.pdf" },
  { id: "in-14", category: "indian-cuisine", name: "Gulab Jamun", description: "Milk-solid dumplings soaked in rose-cardamom syrup.", pdf: "GulabJamun.pdf" },

  // ---------------- Bakery & Café ----------------
  { id: "bk-01", category: "bakery", name: "Buttery Croissants", description: "Laminated dough, baked to a shattering golden crust.", pdf: "Croissants.pdf" },
  { id: "bk-02", category: "bakery", name: "Belgian Chocolate Brownies", description: "Dense, fudgy brownies made with dark Belgian chocolate.", pdf: "ChocolateBrownies.pdf" },
  { id: "bk-03", category: "bakery", name: "Classic Banana Bread", description: "Moist banana loaf with a caramelised crust.", pdf: "BananaBread.pdf" },
  { id: "bk-04", category: "bakery", name: "Cinnamon Rolls", description: "Soft swirled rolls with a warm cinnamon-sugar filling.", pdf: "CinnamonRolls.pdf" },
  { id: "bk-05", category: "bakery", name: "Artisan Sourdough", description: "Naturally leavened loaf with an open, airy crumb.", pdf: "Sourdough.pdf" },
  { id: "bk-06", category: "bakery", name: "Red Velvet Cupcakes", description: "Cocoa-tinted cupcakes with cream cheese frosting.", pdf: "RedVelvetCupcakes.pdf" },
  { id: "bk-07", category: "bakery", name: "Blueberry Muffins", description: "Tender muffins studded with fresh blueberries.", pdf: "BlueberryMuffins.pdf" },
  { id: "bk-08", category: "bakery", name: "Cold Brew Coffee", description: "Slow-steeped, smooth, and gently sweetened.", pdf: "ColdBrew.pdf" },
  { id: "bk-09", category: "bakery", name: "Matcha Latte", description: "Whisked ceremonial matcha over steamed milk.", pdf: "MatchaLatte.pdf" },
  { id: "bk-10", category: "bakery", name: "French Macarons", description: "Delicate almond shells with a silky ganache filling.", pdf: "Macarons.pdf" },
  { id: "bk-11", category: "bakery", name: "Cheese Danish", description: "Flaky pastry filled with sweetened cream cheese.", pdf: "CheeseDanish.pdf" },
  { id: "bk-12", category: "bakery", name: "Caramel Cappuccino", description: "Espresso, steamed milk, and a ribbon of caramel.", pdf: "CaramelCappuccino.pdf" },
  { id: "bk-13", category: "bakery", name: "Almond Biscotti", description: "Twice-baked Italian biscuits, crisp and nutty.", pdf: "Biscotti.pdf" },

  // ---------------- Healthy Meals ----------------
  { id: "he-01", category: "healthy", name: "Quinoa Buddha Bowl", description: "Quinoa, roasted vegetables, and a citrus tahini dressing.", pdf: "QuinoaBuddhaBowl.pdf" },
  { id: "he-02", category: "healthy", name: "Grilled Salmon Salad", description: "Seared salmon over greens with a lemon vinaigrette.", pdf: "GrilledSalmonSalad.pdf" },
  { id: "he-03", category: "healthy", name: "Avocado Toast", description: "Sourdough, smashed avocado, chilli flake, and lime.", pdf: "AvocadoToast.pdf" },
  { id: "he-04", category: "healthy", name: "Zucchini Noodles Primavera", description: "Spiralised zucchini tossed with garden vegetables.", pdf: "ZucchiniNoodles.pdf" },
  { id: "he-05", category: "healthy", name: "Greek Yogurt Parfait", description: "Layered yogurt, honey, granola, and fresh berries.", pdf: "GreekYogurtParfait.pdf" },
  { id: "he-06", category: "healthy", name: "Baked Sweet Potato", description: "Roasted sweet potato with a herbed yogurt topping.", pdf: "BakedSweetPotato.pdf" },
  { id: "he-07", category: "healthy", name: "Chickpea Power Salad", description: "Chickpeas, cucumber, feta, and a herby lemon dressing.", pdf: "ChickpeaSalad.pdf" },
  { id: "he-08", category: "healthy", name: "Overnight Oats", description: "Oats soaked in milk with fruit and a touch of honey.", pdf: "OvernightOats.pdf" },
  { id: "he-09", category: "healthy", name: "Lentil Soup", description: "Warming lentils simmered with carrot, cumin, and greens.", pdf: "LentilSoup.pdf" },
  { id: "he-10", category: "healthy", name: "Grilled Chicken Bowl", description: "Lean grilled chicken over greens and roasted grains.", pdf: "GrilledChickenBowl.pdf" },
  { id: "he-11", category: "healthy", name: "Roasted Veggie Wrap", description: "Whole-wheat wrap filled with roasted seasonal vegetables.", pdf: "VeggieWrap.pdf" },
  { id: "he-12", category: "healthy", name: "Green Detox Smoothie", description: "Spinach, apple, cucumber, and ginger blended smooth.", pdf: "GreenSmoothie.pdf" },
  { id: "he-13", category: "healthy", name: "Millet Khichdi", description: "Comforting millet and lentil one-pot, lightly spiced.", pdf: "MilletKhichdi.pdf" },

  // ---------------- Signature Seasonings ----------------
  { id: "se-01", category: "seasonings", name: "PureEra Himalayan Herb Blend", description: "Pink salt, thyme, and rosemary — our everyday staple.", pdf: "HimalayanHerbBlend.pdf" },
  { id: "se-02", category: "seasonings", name: "Golden Turmeric Spice Mix", description: "Turmeric, black pepper, and warming spice for daily cooking.", pdf: "TurmericSpiceMix.pdf" },
  { id: "se-03", category: "seasonings", name: "Smoky Barbecue Rub", description: "Paprika, brown sugar, and slow-smoked chilli.", pdf: "BarbecueRub.pdf" },
  { id: "se-04", category: "seasonings", name: "Zesty Lemon Pepper", description: "Cracked pepper and dried lemon zest, coarsely ground.", pdf: "LemonPepper.pdf" },
  { id: "se-05", category: "seasonings", name: "Italian Herb Medley", description: "Basil, oregano, and rosemary blended for pasta and bakes.", pdf: "ItalianHerbMedley.pdf" },
  { id: "se-06", category: "seasonings", name: "Garam Masala Reserve", description: "Slow-roasted whole spices, small-batch ground.", pdf: "GaramMasalaReserve.pdf" },
  { id: "se-07", category: "seasonings", name: "Chilli Garlic Fusion", description: "Roasted garlic and red chilli, built for stir-fries.", pdf: "ChilliGarlicFusion.pdf" },
  { id: "se-08", category: "seasonings", name: "Coastal Curry Powder", description: "Curry leaf, coconut, and mustard seed blend.", pdf: "CoastalCurryPowder.pdf" },
  { id: "se-09", category: "seasonings", name: "Rosemary Sea Salt", description: "Flaked sea salt infused with dried rosemary.", pdf: "RosemarySeaSalt.pdf" },
  { id: "se-10", category: "seasonings", name: "Peri Peri Blend", description: "Fiery African bird's-eye chilli seasoning.", pdf: "PeriPeriBlend.pdf" },
  { id: "se-11", category: "seasonings", name: "Everyday Umami Dust", description: "Mushroom, nori, and roasted garlic for instant depth.", pdf: "UmamiDust.pdf" },
  { id: "se-12", category: "seasonings", name: "Tandoori Masala Gold", description: "Classic tandoori spice, built for grilling and roasting.", pdf: "TandooriMasalaGold.pdf" },
  { id: "se-13", category: "seasonings", name: "Herb & Citrus Marinade", description: "Dried citrus peel and herb blend for quick marinades.", pdf: "HerbCitrusMarinade.pdf" }
];
