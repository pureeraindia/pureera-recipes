/* ==========================================================================
   PureEra — data.js
   All category and recipe data lives here. To add a recipe, add an object
   to the RECIPES array. To add a category, add an object to CATEGORIES
   and create a matching folder inside /recipes/.
   ========================================================================== */

/* Each category maps to a folder inside /recipes/ where its PDFs live. */
const CATEGORIES = [
  {
    slug: "healthy",
    name: "Healthy Meals",
    folder: "HealthyMeals",
    tag: "Clean & nourishing",
    blurb: "Whole ingredients, built for how you actually feel.",
    icon: "healthy-meals"
  },
  {
    slug: "italian",
    name: "Italian",
    folder: "Italian",
    tag: "Trattoria classics",
    blurb: "Slow sauces, good olive oil, and a lot of patience.",
    icon: "italian"
  },
  {
    slug: "street-food",
    name: "Indian Street Food",
    folder: "StreetFood",
    tag: "From the cart to your kitchen",
    blurb: "Tangy, spiced, and impossible to eat slowly.",
    icon: "indian-street-food"
  },
  {
    slug: "indo-chinese",
    name: "Indo-Chinese",
    folder: "IndoChinese",
    tag: "Wok-fired favourites",
    blurb: "The beloved street-corner fusion of India and China.",
    icon: "indo-chinese"
  },
  {
    slug: "mexican",
    name: "Mexican",
    folder: "Mexican",
    tag: "Bright & bold",
    blurb: "Charred chillies, lime, and food made for sharing.",
    icon: "mexican"
  },
  {
    slug: "indian-cuisine",
    name: "Indian Cuisine",
    folder: "IndianCuisine",
    tag: "Home & heirloom",
    blurb: "Layered spice work from every corner of India.",
    icon: "indian-cuisine"
  },
  {
    slug: "bakery",
    name: "Cafe",
    folder: "Bakery",
    tag: "Butter, sugar, time",
    blurb: "Fresh bakes and slow coffee for quiet mornings.",
    icon: "cafe"
  },
  {
    slug: "seasonings",
    name: "Seasoning",
    folder: "Seasonings",
    tag: "The PureEra edge",
    blurb: "Our own spice blends, ground in small batches.",
    icon: "seasoning"
  }
];

/*
   Recipe files:
   - `pdf` points to a local file at recipes/<folder>/<file>.pdf for recipes
     that still use a downloadable PDF.
   - Optional: add `driveUrl` with a Google Drive sharing link.
   - Optional: add an `images` array to open a full-screen image gallery in
     a new browser tab.
   - Optional: add `downloadZip` for the card-level "Download Recipe" link.
     The ZIP should contain every image belonging to that recipe.

   Example image gallery:
   { id: "it-01", category: "italian", name: "Margherita Pizza",
     description: "...", images: [
       { src: "MargheritaPizza/1.png", alt: "Margherita Pizza cover" }
     ] }
*/
const RECIPES = [
  // ---------------- Italian ----------------
  {
    id: "it-01",
    category: "italian",
    name: "Bruschetta With Herb Topping",
    description: "Toasted bread topped with fresh tomato, herbs, and PureEra seasoning.",
    downloadZip: "BruschettaHerbTopping/Bruschetta-Herb-Topping-Recipe.zip",
    images: [
      { src: "BruschettaHerbTopping/1.png", alt: "Bruschetta With Herb Topping cover" },
      { src: "BruschettaHerbTopping/2.png", alt: "Bruschetta With Herb Topping recipe image 2" },
      { src: "BruschettaHerbTopping/3.png", alt: "Bruschetta With Herb Topping recipe image 3" }
    ]
  },
  {
    id: "it-02",
    category: "italian",
    name: "Caprese Salad With Herb Dressing",
    description: "Tomato, mozzarella, basil, and a fresh herb dressing.",
    downloadZip: "CapreseSaladHerbDressing/Caprese-Salad-Herb-Dressing-Recipe.zip",
    images: [
      { src: "CapreseSaladHerbDressing/1.png", alt: "Caprese Salad With Herb Dressing cover" },
      { src: "CapreseSaladHerbDressing/2.png", alt: "Caprese Salad With Herb Dressing recipe image 2" },
      { src: "CapreseSaladHerbDressing/3.png", alt: "Caprese Salad With Herb Dressing recipe image 3" }
    ]
  },
  {
    id: "it-03",
    category: "italian",
    name: "Creamy Mushroom Pasta",
    description: "Creamy mushroom pasta finished with herbs and seasoning.",
    downloadZip: "CreamyMushroomPasta/Creamy-Mushroom-Pasta-Recipe.zip",
    images: [
      { src: "CreamyMushroomPasta/1.png", alt: "Creamy Mushroom Pasta cover" },
      { src: "CreamyMushroomPasta/2.png", alt: "Creamy Mushroom Pasta recipe image 2" },
      { src: "CreamyMushroomPasta/3.png", alt: "Creamy Mushroom Pasta recipe image 3" }
    ]
  },
  {
    id: "it-04",
    category: "italian",
    name: "Herb Cheese Focaccia",
    description: "Soft golden focaccia baked with cheese and fragrant herbs.",
    downloadZip: "HerbCheeseFocaccia/Herb-Cheese-Focaccia-Recipe.zip",
    images: [
      { src: "HerbCheeseFocaccia/1.png", alt: "Herb Cheese Focaccia cover" },
      { src: "HerbCheeseFocaccia/2.png", alt: "Herb Cheese Focaccia recipe image 2" },
      { src: "HerbCheeseFocaccia/3.png", alt: "Herb Cheese Focaccia recipe image 3" }
    ]
  },
  {
    id: "it-05",
    category: "italian",
    name: "Italian Veg Rice Skillet",
    description: "A colorful one-pan Italian-style rice skillet with vegetables and herbs.",
    downloadZip: "ItalianVegRiceSkillet/Italian-Veg-Rice-Skillet-Recipe.zip",
    images: [
      { src: "ItalianVegRiceSkillet/1.png", alt: "Italian Veg Rice Skillet cover" },
      { src: "ItalianVegRiceSkillet/2.png", alt: "Italian Veg Rice Skillet recipe image 2" },
      { src: "ItalianVegRiceSkillet/3.png", alt: "Italian Veg Rice Skillet recipe image 3" }
    ]
  },
  {
    id: "it-06",
    category: "italian",
    name: "Margherita Pizza",
    description: "Classic tomato, mozzarella, and basil pizza with an Italian herb finish.",
    downloadZip: "MargheritaPizza/Margherita-Pizza-Recipe.zip",
    images: [
      { src: "MargheritaPizza/1.png", alt: "Margherita Pizza cover" },
      { src: "MargheritaPizza/2.png", alt: "Margherita Pizza recipe image 2" },
      { src: "MargheritaPizza/3.png", alt: "Margherita Pizza recipe image 3" }
    ]
  },
  {
    id: "it-07",
    category: "italian",
    name: "Pasta Arrabbiata",
    description: "Pasta tossed in a bold tomato, garlic, and chilli arrabbiata sauce.",
    downloadZip: "PastaArrabbiata/Pasta-Arrabbiata-Recipe.zip",
    images: [
      { src: "PastaArrabbiata/1.png", alt: "Pasta Arrabbiata cover" },
      { src: "PastaArrabbiata/2.png", alt: "Pasta Arrabbiata recipe image 2" },
      { src: "PastaArrabbiata/3.png", alt: "Pasta Arrabbiata recipe image 3" }
    ]
  },
  {
    id: "it-08",
    category: "italian",
    name: "Rustic Tomato Bruschetta",
    description: "Rustic toasted bread layered with juicy tomato, basil, and herbs.",
    downloadZip: "RusticTomatoBruschetta/Rustic-Tomato-Bruschetta-Recipe.zip",
    images: [
      { src: "RusticTomatoBruschetta/1.png", alt: "Rustic Tomato Bruschetta cover" },
      { src: "RusticTomatoBruschetta/2.png", alt: "Rustic Tomato Bruschetta recipe image 2" },
      { src: "RusticTomatoBruschetta/3.png", alt: "Rustic Tomato Bruschetta recipe image 3" }
    ]
  },
  {
    id: "it-09",
    category: "italian",
    name: "Spinach Cheese Ravioli",
    description: "Tender ravioli filled with spinach and cheese and finished with herbs.",
    downloadZip: "SpinachCheeseRavioli/Spinach-Cheese-Ravioli-Recipe.zip",
    images: [
      { src: "SpinachCheeseRavioli/1.png", alt: "Spinach Cheese Ravioli cover" },
      { src: "SpinachCheeseRavioli/2.png", alt: "Spinach Cheese Ravioli recipe image 2" },
      { src: "SpinachCheeseRavioli/3.png", alt: "Spinach Cheese Ravioli recipe image 3" }
    ]
  },
  {
    id: "it-10",
    category: "italian",
    name: "Tomato Basil Risotto",
    description: "Creamy risotto with tomato, basil, and an aromatic Italian seasoning finish.",
    downloadZip: "TomatoBasilRisotto/Tomato-Basil-Risotto-Recipe.zip",
    images: [
      { src: "TomatoBasilRisotto/1.png", alt: "Tomato Basil Risotto cover" },
      { src: "TomatoBasilRisotto/2.png", alt: "Tomato Basil Risotto recipe image 2" },
      { src: "TomatoBasilRisotto/3.png", alt: "Tomato Basil Risotto recipe image 3" }
    ]
  },
  {
    id: "it-11",
    category: "italian",
    name: "Veg Lasagna Rolls",
    description: "Rolled pasta filled with vegetables and cheese, baked until bubbling and golden.",
    downloadZip: "VegLasagnaRolls/Veg-Lasagna-Rolls-Recipe.zip",
    images: [
      { src: "VegLasagnaRolls/1.png", alt: "Veg Lasagna Rolls cover" },
      { src: "VegLasagnaRolls/2.png", alt: "Veg Lasagna Rolls recipe image 2" },
      { src: "VegLasagnaRolls/3.png", alt: "Veg Lasagna Rolls recipe image 3" }
    ]
  },
  {
    id: "it-12",
    category: "italian",
    name: "Zucchini Parmesan Bake",
    description: "Layered zucchini baked with parmesan, herbs, and a golden savory topping.",
    downloadZip: "ZucchiniParmesanBake/Zucchini-Parmesan-Bake-Recipe.zip",
    images: [
      { src: "ZucchiniParmesanBake/1.png", alt: "Zucchini Parmesan Bake cover" },
      { src: "ZucchiniParmesanBake/2.png", alt: "Zucchini Parmesan Bake recipe image 2" },
      { src: "ZucchiniParmesanBake/3.png", alt: "Zucchini Parmesan Bake recipe image 3" }
    ]
  },

  // ---------------- Mexican ----------------
  {
    id: "mx-01",
    category: "mexican",
    name: "Chipotle Veg Rolls",
    description: "Chipotle vegetable rolls with a bold, smoky Mexican-inspired filling.",
    downloadZip: "ChipotleVegRolls/Chipotle-Veg-Rolls-Recipe.zip",
    images: [
      { src: "ChipotleVegRolls/1.png", alt: "Chipotle Veg Rolls cover" },
      { src: "ChipotleVegRolls/2.png", alt: "Chipotle Veg Rolls recipe image 2" },
      { src: "ChipotleVegRolls/3.png", alt: "Chipotle Veg Rolls recipe image 3" }
    ]
  },
  {
    id: "mx-02",
    category: "mexican",
    name: "Crispy Bean Quesadilla",
    description: "A crisp quesadilla filled with seasoned beans, vegetables, and melted cheese.",
    downloadZip: "CrispyBeanQuesadilla/Crispy-Bean-Quesadilla-Recipe.zip",
    images: [
      { src: "CrispyBeanQuesadilla/1.png", alt: "Crispy Bean Quesadilla cover" },
      { src: "CrispyBeanQuesadilla/2.png", alt: "Crispy Bean Quesadilla recipe image 2" },
      { src: "CrispyBeanQuesadilla/3.png", alt: "Crispy Bean Quesadilla recipe image 3" }
    ]
  },
  {
    id: "mx-03",
    category: "mexican",
    name: "Loaded Mexican Fries",
    description: "Crispy fries piled with colorful Mexican-style toppings and seasoning.",
    downloadZip: "LoadedMexicanFries/Loaded-Mexican-Fries-Recipe.zip",
    images: [
      { src: "LoadedMexicanFries/1.png", alt: "Loaded Mexican Fries cover" },
      { src: "LoadedMexicanFries/2.png", alt: "Loaded Mexican Fries recipe image 2" },
      { src: "LoadedMexicanFries/3.png", alt: "Loaded Mexican Fries recipe image 3" }
    ]
  },
  {
    id: "mx-04",
    category: "mexican",
    name: "Loaded Nachos",
    description: "Crunchy nachos layered with savory toppings, cheese, and fresh garnishes.",
    downloadZip: "LoadedNachos/Loaded-Nachos-Recipe.zip",
    images: [
      { src: "LoadedNachos/1.png", alt: "Loaded Nachos cover" },
      { src: "LoadedNachos/2.png", alt: "Loaded Nachos recipe image 2" },
      { src: "LoadedNachos/3.png", alt: "Loaded Nachos recipe image 3" }
    ]
  },
  {
    id: "mx-05",
    category: "mexican",
    name: "Mexican Rice",
    description: "Flavorful Mexican-style rice tossed with vegetables, herbs, and spices.",
    downloadZip: "MexicanRice/Mexican-Rice-Recipe.zip",
    images: [
      { src: "MexicanRice/1.png", alt: "Mexican Rice cover" },
      { src: "MexicanRice/2.png", alt: "Mexican Rice recipe image 2" },
      { src: "MexicanRice/3.png", alt: "Mexican Rice recipe image 3" }
    ]
  },
  {
    id: "mx-06",
    category: "mexican",
    name: "Peri Peri Grilled Corn",
    description: "Grilled corn coated with a bright, spicy peri peri seasoning.",
    downloadZip: "PeriPeriGrilledCorn/Peri-Peri-Grilled-Corn-Recipe.zip",
    images: [
      { src: "PeriPeriGrilledCorn/1.png", alt: "Peri Peri Grilled Corn cover" },
      { src: "PeriPeriGrilledCorn/2.png", alt: "Peri Peri Grilled Corn recipe image 2" },
      { src: "PeriPeriGrilledCorn/3.png", alt: "Peri Peri Grilled Corn recipe image 3" }
    ]
  },
  {
    id: "mx-07",
    category: "mexican",
    name: "Quesadilla With Peri Peri Filling",
    description: "Golden quesadillas packed with a spicy peri peri vegetable filling.",
    downloadZip: "QuesadillaPeriPeriFilling/Quesadilla-With-Peri-Peri-Filling-Recipe.zip",
    images: [
      { src: "QuesadillaPeriPeriFilling/1.png", alt: "Quesadilla With Peri Peri Filling cover" },
      { src: "QuesadillaPeriPeriFilling/2.png", alt: "Quesadilla With Peri Peri Filling recipe image 2" },
      { src: "QuesadillaPeriPeriFilling/3.png", alt: "Quesadilla With Peri Peri Filling recipe image 3" }
    ]
  },
  {
    id: "mx-08",
    category: "mexican",
    name: "Southwest Veg Skillet",
    description: "A colorful one-pan southwest vegetable skillet with bold seasoning.",
    downloadZip: "SouthwestVegSkillet/Southwest-Veg-Skillet-Recipe.zip",
    images: [
      { src: "SouthwestVegSkillet/1.png", alt: "Southwest Veg Skillet cover" },
      { src: "SouthwestVegSkillet/2.png", alt: "Southwest Veg Skillet recipe image 2" },
      { src: "SouthwestVegSkillet/3.png", alt: "Southwest Veg Skillet recipe image 3" }
    ]
  },
  {
    id: "mx-09",
    category: "mexican",
    name: "Spicy Veg Enchiladas",
    description: "Vegetable enchiladas baked with a rich, spicy Mexican-style sauce.",
    downloadZip: "SpicyVegEnchiladas/Spicy-Veg-Enchiladas-Recipe.zip",
    images: [
      { src: "SpicyVegEnchiladas/1.png", alt: "Spicy Veg Enchiladas cover" },
      { src: "SpicyVegEnchiladas/2.png", alt: "Spicy Veg Enchiladas recipe image 2" },
      { src: "SpicyVegEnchiladas/3.png", alt: "Spicy Veg Enchiladas recipe image 3" }
    ]
  },
  {
    id: "mx-10",
    category: "mexican",
    name: "Mexican Stuffed Capsicum",
    description: "Capsicum filled with a savory Mexican-style vegetable and rice mixture.",
    downloadZip: "MexicanStuffedCapsicum/Mexican-Stuffed-Capsicum-Recipe.zip",
    images: [
      { src: "MexicanStuffedCapsicum/1.png", alt: "Mexican Stuffed Capsicum cover" },
      { src: "MexicanStuffedCapsicum/2.png", alt: "Mexican Stuffed Capsicum recipe image 2" },
      { src: "MexicanStuffedCapsicum/3.png", alt: "Mexican Stuffed Capsicum recipe image 3" }
    ]
  },
  {
    id: "mx-11",
    category: "mexican",
    name: "Veg Burrito Bowl",
    description: "A hearty burrito bowl with vegetables, grains, beans, and fresh toppings.",
    downloadZip: "VegBurritoBowl/Veg-Burrito-Bowl-Recipe.zip",
    images: [
      { src: "VegBurritoBowl/1.png", alt: "Veg Burrito Bowl cover" },
      { src: "VegBurritoBowl/2.png", alt: "Veg Burrito Bowl recipe image 2" },
      { src: "VegBurritoBowl/3.png", alt: "Veg Burrito Bowl recipe image 3" }
    ]
  },
  {
    id: "mx-12",
    category: "mexican",
    name: "Veg Tacos With Peri Peri Salsa",
    description: "Vegetable tacos finished with a lively peri peri salsa.",
    downloadZip: "VegTacosPeriPeriSalsa/Veg-Tacos-With-Peri-Peri-Salsa-Recipe.zip",
    images: [
      { src: "VegTacosPeriPeriSalsa/1.png", alt: "Veg Tacos With Peri Peri Salsa cover" },
      { src: "VegTacosPeriPeriSalsa/2.png", alt: "Veg Tacos With Peri Peri Salsa recipe image 2" },
      { src: "VegTacosPeriPeriSalsa/3.png", alt: "Veg Tacos With Peri Peri Salsa recipe image 3" }
    ]
  },

  // ---------------- Indo-Chinese ----------------
  {
    id: "ic-01",
    category: "indo-chinese",
    name: "Crispy Baby Corn",
    description: "Crispy baby corn tossed in a bold Indo-Chinese sauce.",
    downloadZip: "CrispyBabyCorn/Crispy-Baby-Corn-Recipe.zip",
    images: [
      { src: "CrispyBabyCorn/1.png", alt: "Crispy Baby Corn cover" },
      { src: "CrispyBabyCorn/2.png", alt: "Crispy Baby Corn recipe image 2" },
      { src: "CrispyBabyCorn/3.png", alt: "Crispy Baby Corn recipe image 3" }
    ]
  },
  {
    id: "ic-02",
    category: "indo-chinese",
    name: "Burnt Garlic Noodles",
    description: "Wok-tossed noodles finished with aromatic burnt garlic.",
    downloadZip: "BurntGarlicNoodles/Burnt-Garlic-Noodles-Recipe.zip",
    images: [
      { src: "BurntGarlicNoodles/1.png", alt: "Burnt Garlic Noodles cover" },
      { src: "BurntGarlicNoodles/2.png", alt: "Burnt Garlic Noodles recipe image 2" },
      { src: "BurntGarlicNoodles/3.png", alt: "Burnt Garlic Noodles recipe image 3" }
    ]
  },
  {
    id: "ic-03",
    category: "indo-chinese",
    name: "Chilli Paneer (Dry)",
    description: "Paneer and peppers tossed in a spicy chilli-garlic glaze.",
    downloadZip: "ChilliPaneer/Chilli-Paneer-Dry-Recipe.zip",
    images: [
      { src: "ChilliPaneer/1.png", alt: "Chilli Paneer (Dry) cover" },
      { src: "ChilliPaneer/2.png", alt: "Chilli Paneer (Dry) recipe image 2" },
      { src: "ChilliPaneer/3.png", alt: "Chilli Paneer (Dry) recipe image 3" }
    ]
  },
  {
    id: "ic-04",
    category: "indo-chinese",
    name: "Chinese Bhel",
    description: "Crunchy noodles tossed with vegetables and tangy Indo-Chinese seasoning.",
    downloadZip: "ChineseBhel/Chinese-Bhel-Recipe.zip",
    images: [
      { src: "ChineseBhel/1.png", alt: "Chinese Bhel cover" },
      { src: "ChineseBhel/2.png", alt: "Chinese Bhel recipe image 2" },
      { src: "ChineseBhel/3.png", alt: "Chinese Bhel recipe image 3" }
    ]
  },
  {
    id: "ic-05",
    category: "indo-chinese",
    name: "Crispy Chilli Potato",
    description: "Crispy potato fingers coated in a spicy chilli sauce.",
    downloadZip: "CrispyChilliPotato/Crispy-Chilli-Potato-Recipe.zip",
    images: [
      { src: "CrispyChilliPotato/1.png", alt: "Crispy Chilli Potato cover" },
      { src: "CrispyChilliPotato/2.png", alt: "Crispy Chilli Potato recipe image 2" },
      { src: "CrispyChilliPotato/3.png", alt: "Crispy Chilli Potato recipe image 3" }
    ]
  },
  {
    id: "ic-06",
    category: "indo-chinese",
    name: "Manchurian",
    description: "Vegetable Manchurian in a savory, tangy Indo-Chinese sauce.",
    downloadZip: "Manchurian/Manchurian-Recipe.zip",
    images: [
      { src: "Manchurian/1.png", alt: "Manchurian cover" },
      { src: "Manchurian/2.png", alt: "Manchurian recipe image 2" },
      { src: "Manchurian/3.png", alt: "Manchurian recipe image 3" }
    ]
  },
  {
    id: "ic-07",
    category: "indo-chinese",
    name: "Mushroom Pepper Stir Fry",
    description: "Mushrooms and peppers wok-tossed with garlic and seasoning.",
    downloadZip: "MushroomPepperStirFry/Mushroom-Pepper-Stir-Fry-Recipe.zip",
    images: [
      { src: "MushroomPepperStirFry/1.png", alt: "Mushroom Pepper Stir Fry cover" },
      { src: "MushroomPepperStirFry/2.png", alt: "Mushroom Pepper Stir Fry recipe image 2" },
      { src: "MushroomPepperStirFry/3.png", alt: "Mushroom Pepper Stir Fry recipe image 3" }
    ]
  },
  {
    id: "ic-08",
    category: "indo-chinese",
    name: "Schezwan Fried Rice",
    description: "Wok-fried rice tossed with vegetables and fiery Schezwan seasoning.",
    downloadZip: "SchezwanFriedRice/Schezwan-Fried-Rice-Recipe.zip",
    images: [
      { src: "SchezwanFriedRice/1.png", alt: "Schezwan Fried Rice cover" },
      { src: "SchezwanFriedRice/2.png", alt: "Schezwan Fried Rice recipe image 2" },
      { src: "SchezwanFriedRice/3.png", alt: "Schezwan Fried Rice recipe image 3" }
    ]
  },
  {
    id: "ic-09",
    category: "indo-chinese",
    name: "Veg Spring Rolls",
    description: "Crispy spring rolls filled with seasoned vegetables.",
    downloadZip: "VegSpringRolls/Veg-Spring-Rolls-Recipe.zip",
    images: [
      { src: "VegSpringRolls/1.png", alt: "Veg Spring Rolls cover" },
      { src: "VegSpringRolls/2.png", alt: "Veg Spring Rolls recipe image 2" },
      { src: "VegSpringRolls/3.png", alt: "Veg Spring Rolls recipe image 3" }
    ]
  },
  {
    id: "ic-10",
    category: "indo-chinese",
    name: "Veg Hakka Noodles",
    description: "Wok-tossed Hakka noodles with vegetables and savory sauces.",
    downloadZip: "VegHakkaNoodles/Veg-Hakka-Noodles-Recipe.zip",
    images: [
      { src: "VegHakkaNoodles/1.png", alt: "Veg Hakka Noodles cover" },
      { src: "VegHakkaNoodles/2.png", alt: "Veg Hakka Noodles recipe image 2" },
      { src: "VegHakkaNoodles/3.png", alt: "Veg Hakka Noodles recipe image 3" }
    ]
  },

  // ---------------- Indian Street Food ----------------
  {
    id: "sf-01",
    category: "street-food",
    name: "Dahi Papadi Chaat",
    description: "Crisp papadi layered with yogurt, chutneys, spices, and crunchy toppings.",
    downloadZip: "DahiPapadiChaat/Dahi-Papadi-Chaat-Recipe.zip",
    images: [
      { src: "DahiPapadiChaat/1.png", alt: "Dahi Papadi Chaat cover" },
      { src: "DahiPapadiChaat/2.png", alt: "Dahi Papadi Chaat recipe image 2" },
      { src: "DahiPapadiChaat/3.png", alt: "Dahi Papadi Chaat recipe image 3" }
    ]
  },
  {
    id: "sf-02",
    category: "street-food",
    name: "Veg Frankie",
    description: "A street-style vegetable filling wrapped in a soft, flavorful roll.",
    downloadZip: "VegFrankie/Veg-Frankie-Recipe.zip",
    images: [
      { src: "VegFrankie/1.png", alt: "Veg Frankie cover" },
      { src: "VegFrankie/2.png", alt: "Veg Frankie recipe image 2" },
      { src: "VegFrankie/3.png", alt: "Veg Frankie recipe image 3" }
    ]
  },
  {
    id: "sf-03",
    category: "street-food",
    name: "Masala Corn",
    description: "Sweet corn tossed with butter, lime, and lively masala.",
    downloadZip: "MasalaCorn/Masala-Corn-Recipe.zip",
    images: [
      { src: "MasalaCorn/1.png", alt: "Masala Corn cover" },
      { src: "MasalaCorn/2.png", alt: "Masala Corn recipe image 2" },
      { src: "MasalaCorn/3.png", alt: "Masala Corn recipe image 3" }
    ]
  },
  {
    id: "sf-04",
    category: "street-food",
    name: "Masala Maggi",
    description: "Quick noodles cooked with vegetables and bold Indian masala.",
    downloadZip: "MasalaMaggi/Masala-Maggi-Recipe.zip",
    images: [
      { src: "MasalaMaggi/1.png", alt: "Masala Maggi cover" },
      { src: "MasalaMaggi/2.png", alt: "Masala Maggi recipe image 2" },
      { src: "MasalaMaggi/3.png", alt: "Masala Maggi recipe image 3" }
    ]
  },
  {
    id: "sf-05",
    category: "street-food",
    name: "Masala Toast",
    description: "Crisp toast layered with a savory spiced vegetable topping.",
    downloadZip: "MasalaToast/Masala-Toast-Recipe.zip",
    images: [
      { src: "MasalaToast/1.png", alt: "Masala Toast cover" },
      { src: "MasalaToast/2.png", alt: "Masala Toast recipe image 2" },
      { src: "MasalaToast/3.png", alt: "Masala Toast recipe image 3" }
    ]
  },
  {
    id: "sf-06",
    category: "street-food",
    name: "Mumbai Masala Khichu",
    description: "Soft steamed khichu finished with Mumbai-style masala and seasoning.",
    downloadZip: "MumbaiMasalaKhichu/Mumbai-Masala-Khichu-Recipe.zip",
    images: [
      { src: "MumbaiMasalaKhichu/1.png", alt: "Mumbai Masala Khichu cover" },
      { src: "MumbaiMasalaKhichu/2.png", alt: "Mumbai Masala Khichu recipe image 2" },
      { src: "MumbaiMasalaKhichu/3.png", alt: "Mumbai Masala Khichu recipe image 3" }
    ]
  },
  {
    id: "sf-07",
    category: "street-food",
    name: "Pav Bhaji",
    description: "Buttered pav served with a rich, spiced mashed vegetable bhaji.",
    downloadZip: "PavBhaji/Pav-Bhaji-Recipe.zip",
    images: [
      { src: "PavBhaji/1.png", alt: "Pav Bhaji cover" },
      { src: "PavBhaji/2.png", alt: "Pav Bhaji recipe image 2" },
      { src: "PavBhaji/3.png", alt: "Pav Bhaji recipe image 3" }
    ]
  },
  {
    id: "sf-08",
    category: "street-food",
    name: "Peri Peri French Fries",
    description: "Crispy French fries tossed with bold peri peri seasoning.",
    downloadZip: "PeriPeriFrenchFries/Peri-Peri-French-Fries-Recipe.zip",
    images: [
      { src: "PeriPeriFrenchFries/1.png", alt: "Peri Peri French Fries cover" },
      { src: "PeriPeriFrenchFries/2.png", alt: "Peri Peri French Fries recipe image 2" },
      { src: "PeriPeriFrenchFries/3.png", alt: "Peri Peri French Fries recipe image 3" }
    ]
  },
  {
    id: "sf-09",
    category: "street-food",
    name: "Sev Puri",
    description: "Crisp puris topped with potato, chutneys, spices, and crunchy sev.",
    downloadZip: "SevPuri/Sev-Puri-Recipe.zip",
    images: [
      { src: "SevPuri/1.png", alt: "Sev Puri cover" },
      { src: "SevPuri/2.png", alt: "Sev Puri recipe image 2" },
      { src: "SevPuri/3.png", alt: "Sev Puri recipe image 3" }
    ]
  },
  {
    id: "sf-10",
    category: "street-food",
    name: "Vada Pav with Garlic Chutney",
    description: "Mumbai-style vada pav served with a punchy garlic chutney.",
    downloadZip: "VadaPavGarlicChutney/Vada-Pav-Garlic-Chutney-Recipe.zip",
    images: [
      { src: "VadaPavGarlicChutney/1.png", alt: "Vada Pav with Garlic Chutney cover" },
      { src: "VadaPavGarlicChutney/2.png", alt: "Vada Pav with Garlic Chutney recipe image 2" },
      { src: "VadaPavGarlicChutney/3.png", alt: "Vada Pav with Garlic Chutney recipe image 3" }
    ]
  },
  {
    id: "sf-11",
    category: "street-food",
    name: "Veg Cutlet",
    description: "Crisp vegetable cutlets seasoned with warming spices and herbs.",
    downloadZip: "VegCutlet/Veg-Cutlet-Recipe.zip",
    images: [
      { src: "VegCutlet/1.png", alt: "Veg Cutlet cover" },
      { src: "VegCutlet/2.png", alt: "Veg Cutlet recipe image 2" },
      { src: "VegCutlet/3.png", alt: "Veg Cutlet recipe image 3" }
    ]
  },

  // ---------------- Indian Cuisine ----------------
  {
    id: "in-01",
    category: "indian-cuisine",
    name: "Aloo Gobi Sabzi",
    description: "A comforting potato and cauliflower sabzi with classic Indian spices.",
    downloadZip: "AlooGobiSabzi/Aloo-Gobi-Sabzi-Recipe.zip",
    images: [
      { src: "AlooGobiSabzi/1.png", alt: "Aloo Gobi Sabzi cover" },
      { src: "AlooGobiSabzi/2.png", alt: "Aloo Gobi Sabzi recipe image 2" },
      { src: "AlooGobiSabzi/3.png", alt: "Aloo Gobi Sabzi recipe image 3" }
    ]
  },
  {
    id: "in-02",
    category: "indian-cuisine",
    name: "Dal Tadka",
    description: "Homestyle lentils finished with a fragrant spiced tadka.",
    downloadZip: "DalTadka/Dal-Tadka-Recipe.zip",
    images: [
      { src: "DalTadka/1.png", alt: "Dal Tadka cover" },
      { src: "DalTadka/2.png", alt: "Dal Tadka recipe image 2" },
      { src: "DalTadka/3.png", alt: "Dal Tadka recipe image 3" }
    ]
  },
  {
    id: "in-03",
    category: "indian-cuisine",
    name: "Dum Aloo",
    description: "Tender potatoes simmered in a rich, aromatic Indian gravy.",
    downloadZip: "DumAloo/Dum-Aloo-Recipe.zip",
    images: [
      { src: "DumAloo/1.png", alt: "Dum Aloo cover" },
      { src: "DumAloo/2.png", alt: "Dum Aloo recipe image 2" },
      { src: "DumAloo/3.png", alt: "Dum Aloo recipe image 3" }
    ]
  },
  {
    id: "in-04",
    category: "indian-cuisine",
    name: "Mumbai Masala Khichu",
    description: "Soft rice-flour khichu seasoned with a lively Mumbai-style masala.",
    downloadZip: "MumbaiMasalaKhichu/Mumbai-Masala-Khichu-Recipe.zip",
    images: [
      { src: "MumbaiMasalaKhichu/1.png", alt: "Mumbai Masala Khichu cover" },
      { src: "MumbaiMasalaKhichu/2.png", alt: "Mumbai Masala Khichu recipe image 2" },
      { src: "MumbaiMasalaKhichu/3.png", alt: "Mumbai Masala Khichu recipe image 3" }
    ]
  },
  {
    id: "in-05",
    category: "indian-cuisine",
    name: "Kadai Mushroom",
    description: "Mushrooms cooked with peppers and a robust kadai masala.",
    downloadZip: "KadaiMushroom/Kadai-Mushroom-Recipe.zip",
    images: [
      { src: "KadaiMushroom/1.png", alt: "Kadai Mushroom cover" },
      { src: "KadaiMushroom/2.png", alt: "Kadai Mushroom recipe image 2" },
      { src: "KadaiMushroom/3.png", alt: "Kadai Mushroom recipe image 3" }
    ]
  },
  {
    id: "in-06",
    category: "indian-cuisine",
    name: "Masala Chai",
    description: "Warming Indian tea brewed with aromatic spices and milk.",
    downloadZip: "MasalaChai/Masala-Chai-Recipe.zip",
    images: [
      { src: "MasalaChai/1.png", alt: "Masala Chai cover" },
      { src: "MasalaChai/2.png", alt: "Masala Chai recipe image 2" },
      { src: "MasalaChai/3.png", alt: "Masala Chai recipe image 3" }
    ]
  },
  {
    id: "in-07",
    category: "indian-cuisine",
    name: "Mixed Vegetable Curry",
    description: "Mixed vegetables simmered in a flavorful Indian curry base.",
    downloadZip: "MixedVegetableCurry/Mixed-Vegetable-Curry-Recipe.zip",
    images: [
      { src: "MixedVegetableCurry/1.png", alt: "Mixed Vegetable Curry cover" },
      { src: "MixedVegetableCurry/2.png", alt: "Mixed Vegetable Curry recipe image 2" },
      { src: "MixedVegetableCurry/3.png", alt: "Mixed Vegetable Curry recipe image 3" }
    ]
  },
  {
    id: "in-08",
    category: "indian-cuisine",
    name: "Navratna Korma",
    description: "A rich, mildly spiced mixed-vegetable korma with a creamy finish.",
    downloadZip: "NavratnaKorma/Navratna-Korma-Recipe.zip",
    images: [
      { src: "NavratnaKorma/1.png", alt: "Navratna Korma cover" },
      { src: "NavratnaKorma/2.png", alt: "Navratna Korma recipe image 2" },
      { src: "NavratnaKorma/3.png", alt: "Navratna Korma recipe image 3" }
    ]
  },
  {
    id: "in-09",
    category: "indian-cuisine",
    name: "Palak Corn Curry",
    description: "Sweet corn folded into a smooth, gently spiced spinach curry.",
    downloadZip: "PalakCornCurry/Palak-Corn-Curry-Recipe.zip",
    images: [
      { src: "PalakCornCurry/1.png", alt: "Palak Corn Curry cover" },
      { src: "PalakCornCurry/2.png", alt: "Palak Corn Curry recipe image 2" },
      { src: "PalakCornCurry/3.png", alt: "Palak Corn Curry recipe image 3" }
    ]
  },
  {
    id: "in-10",
    category: "indian-cuisine",
    name: "Paneer Butter Masala",
    description: "Paneer simmered in a velvety tomato-butter masala.",
    downloadZip: "PaneerButterMasala/Paneer-Butter-Masala-Recipe.zip",
    images: [
      { src: "PaneerButterMasala/1.png", alt: "Paneer Butter Masala cover" },
      { src: "PaneerButterMasala/2.png", alt: "Paneer Butter Masala recipe image 2" },
      { src: "PaneerButterMasala/3.png", alt: "Paneer Butter Masala recipe image 3" }
    ]
  },
  {
    id: "in-11",
    category: "indian-cuisine",
    name: "Rajma Chawal",
    description: "Comforting kidney bean curry served with steamed rice.",
    downloadZip: "RajmaChawal/Rajma-Chawal-Recipe.zip",
    images: [
      { src: "RajmaChawal/1.png", alt: "Rajma Chawal cover" },
      { src: "RajmaChawal/2.png", alt: "Rajma Chawal recipe image 2" },
      { src: "RajmaChawal/3.png", alt: "Rajma Chawal recipe image 3" }
    ]
  },
  {
    id: "in-12",
    category: "indian-cuisine",
    name: "Veg Jalfrezi",
    description: "Mixed vegetables tossed in a vibrant, tangy jalfrezi-style masala.",
    downloadZip: "VegJalfrezi/Veg-Jalfrezi-Recipe.zip",
    images: [
      { src: "VegJalfrezi/1.png", alt: "Veg Jalfrezi cover" },
      { src: "VegJalfrezi/2.png", alt: "Veg Jalfrezi recipe image 2" },
      { src: "VegJalfrezi/3.png", alt: "Veg Jalfrezi recipe image 3" }
    ]
  },

  // ---------------- Bakery & Café ----------------
  {
    id: "bk-01",
    category: "bakery",
    name: "Baked Veg Pinwheel",
    description: "Flaky baked pinwheels filled with seasoned vegetables and herbs.",
    downloadZip: "BakedVegPinwheel/Baked-Veg-Pinwheel-Recipe.zip",
    images: [
      { src: "BakedVegPinwheel/1.png", alt: "Baked Veg Pinwheel cover" },
      { src: "BakedVegPinwheel/2.png", alt: "Baked Veg Pinwheel recipe image 2" },
      { src: "BakedVegPinwheel/3.png", alt: "Baked Veg Pinwheel recipe image 3" }
    ]
  },
  {
    id: "bk-02",
    category: "bakery",
    name: "Banana Cinnamon Muffins",
    description: "Soft banana muffins warmly spiced with cinnamon.",
    downloadZip: "BananaCinnamonMuffins/Banana-Cinnamon-Muffins-Recipe.zip",
    images: [
      { src: "BananaCinnamonMuffins/1.png", alt: "Banana Cinnamon Muffins cover" },
      { src: "BananaCinnamonMuffins/2.png", alt: "Banana Cinnamon Muffins recipe image 2" },
      { src: "BananaCinnamonMuffins/3.png", alt: "Banana Cinnamon Muffins recipe image 3" }
    ]
  },
  {
    id: "bk-03",
    category: "bakery",
    name: "Cinnamon Rolls (Eggless)",
    description: "Soft eggless cinnamon rolls with a sweet spiced swirl.",
    downloadZip: "CinnamonRollsEggless/Cinnamon-Rolls-Eggless-Recipe.zip",
    images: [
      { src: "CinnamonRollsEggless/1.png", alt: "Cinnamon Rolls (Eggless) cover" },
      { src: "CinnamonRollsEggless/2.png", alt: "Cinnamon Rolls (Eggless) recipe image 2" },
      { src: "CinnamonRollsEggless/3.png", alt: "Cinnamon Rolls (Eggless) recipe image 3" }
    ]
  },
  {
    id: "bk-04",
    category: "bakery",
    name: "Oregano Garlic Focaccia Bread",
    description: "Golden focaccia baked with garlic, oregano, and herbs.",
    downloadZip: "OreganoGarlicFocacciaBread/Oregano-Garlic-Focaccia-Bread-Recipe.zip",
    images: [
      { src: "OreganoGarlicFocacciaBread/1.png", alt: "Oregano Garlic Focaccia Bread cover" },
      { src: "OreganoGarlicFocacciaBread/2.png", alt: "Oregano Garlic Focaccia Bread recipe image 2" },
      { src: "OreganoGarlicFocacciaBread/3.png", alt: "Oregano Garlic Focaccia Bread recipe image 3" }
    ]
  },
  {
    id: "bk-05",
    category: "bakery",
    name: "Herb & Cheese Scones",
    description: "Savory scones baked with cheese and fragrant herbs.",
    downloadZip: "HerbCheeseScones/Herb-Cheese-Scones-Recipe.zip",
    images: [
      { src: "HerbCheeseScones/1.png", alt: "Herb & Cheese Scones cover" },
      { src: "HerbCheeseScones/2.png", alt: "Herb & Cheese Scones recipe image 2" },
      { src: "HerbCheeseScones/3.png", alt: "Herb & Cheese Scones recipe image 3" }
    ]
  },
  {
    id: "bk-06",
    category: "bakery",
    name: "Veg Focaccia Sandwich",
    description: "A hearty vegetable sandwich layered inside herb focaccia.",
    downloadZip: "VegFocacciaSandwich/Veg-Focaccia-Sandwich-Recipe.zip",
    images: [
      { src: "VegFocacciaSandwich/1.png", alt: "Veg Focaccia Sandwich cover" },
      { src: "VegFocacciaSandwich/2.png", alt: "Veg Focaccia Sandwich recipe image 2" },
      { src: "VegFocacciaSandwich/3.png", alt: "Veg Focaccia Sandwich recipe image 3" }
    ]
  },
  {
    id: "bk-07",
    category: "bakery",
    name: "Mushroom Cheese Tarts",
    description: "Savory mushroom and cheese tarts baked until golden.",
    downloadZip: "MushroomCheeseTarts/Mushroom-Cheese-Tarts-Recipe.zip",
    images: [
      { src: "MushroomCheeseTarts/1.png", alt: "Mushroom Cheese Tarts cover" },
      { src: "MushroomCheeseTarts/2.png", alt: "Mushroom Cheese Tarts recipe image 2" },
      { src: "MushroomCheeseTarts/3.png", alt: "Mushroom Cheese Tarts recipe image 3" }
    ]
  },
  {
    id: "bk-08",
    category: "bakery",
    name: "Veg Calzone",
    description: "Folded baked calzone filled with vegetables, cheese, and herbs.",
    downloadZip: "VegCalzone/Veg-Calzone-Recipe.zip",
    images: [
      { src: "VegCalzone/1.png", alt: "Veg Calzone cover" },
      { src: "VegCalzone/2.png", alt: "Veg Calzone recipe image 2" },
      { src: "VegCalzone/3.png", alt: "Veg Calzone recipe image 3" }
    ]
  },

  // ---------------- Healthy Meals ----------------
  {
    id: "he-01",
    category: "healthy",
    name: "Beetroot Wellness Bowl",
    description: "A vibrant beetroot bowl layered with vegetables, grains, and wholesome toppings.",
    downloadZip: "BeetrootWellnessBowl/Beetroot-Wellness-Bowl-Recipe.zip",
    images: [
      { src: "BeetrootWellnessBowl/1.png", alt: "Beetroot Wellness Bowl cover" },
      { src: "BeetrootWellnessBowl/2.png", alt: "Beetroot Wellness Bowl recipe image 2" },
      { src: "BeetrootWellnessBowl/3.png", alt: "Beetroot Wellness Bowl recipe image 3" }
    ]
  },
  {
    id: "he-02",
    category: "healthy",
    name: "Brown Rice Buddha Bowl",
    description: "Brown rice and colorful vegetables combined in a nourishing Buddha bowl.",
    downloadZip: "BrownRiceBuddhaBowl/Brown-Rice-Buddha-Bowl-Recipe.zip",
    images: [
      { src: "BrownRiceBuddhaBowl/1.png", alt: "Brown Rice Buddha Bowl cover" },
      { src: "BrownRiceBuddhaBowl/2.png", alt: "Brown Rice Buddha Bowl recipe image 2" },
      { src: "BrownRiceBuddhaBowl/3.png", alt: "Brown Rice Buddha Bowl recipe image 3" }
    ]
  },
  {
    id: "he-03",
    category: "healthy",
    name: "Chaat-Style Fruit Salad",
    description: "Fresh fruit tossed with lively chaat-style spices for a sweet and tangy salad.",
    downloadZip: "ChaatStyleFruitSalad/Chaat-Style-Fruit-Salad-Recipe.zip",
    images: [
      { src: "ChaatStyleFruitSalad/1.png", alt: "Chaat-Style Fruit Salad cover" },
      { src: "ChaatStyleFruitSalad/2.png", alt: "Chaat-Style Fruit Salad recipe image 2" },
      { src: "ChaatStyleFruitSalad/3.png", alt: "Chaat-Style Fruit Salad recipe image 3" }
    ]
  },
  {
    id: "he-04",
    category: "healthy",
    name: "Cottage Cheese Salad",
    description: "Fresh vegetables and cottage cheese combined in a light, protein-rich salad.",
    downloadZip: "CottageCheeseSalad/Cottage-Cheese-Salad-Recipe.zip",
    images: [
      { src: "CottageCheeseSalad/1.png", alt: "Cottage Cheese Salad cover" },
      { src: "CottageCheeseSalad/2.png", alt: "Cottage Cheese Salad recipe image 2" },
      { src: "CottageCheeseSalad/3.png", alt: "Cottage Cheese Salad recipe image 3" }
    ]
  },
  {
    id: "he-05",
    category: "healthy",
    name: "Couscous Veg Bowl",
    description: "Fluffy couscous paired with colorful vegetables and fresh herbs.",
    downloadZip: "CouscousVegBowl/Couscous-Veg-Bowl-Recipe.zip",
    images: [
      { src: "CouscousVegBowl/1.png", alt: "Couscous Veg Bowl cover" },
      { src: "CouscousVegBowl/2.png", alt: "Couscous Veg Bowl recipe image 2" },
      { src: "CouscousVegBowl/3.png", alt: "Couscous Veg Bowl recipe image 3" }
    ]
  },
  {
    id: "he-06",
    category: "healthy",
    name: "Crunchy Asian Slaw",
    description: "Crisp shredded vegetables tossed in an Asian-inspired dressing.",
    downloadZip: "CrunchyAsianSlaw/Crunchy-Asian-Slaw-Recipe.zip",
    images: [
      { src: "CrunchyAsianSlaw/1.png", alt: "Crunchy Asian Slaw cover" },
      { src: "CrunchyAsianSlaw/2.png", alt: "Crunchy Asian Slaw recipe image 2" },
      { src: "CrunchyAsianSlaw/3.png", alt: "Crunchy Asian Slaw recipe image 3" }
    ]
  },
  {
    id: "he-07",
    category: "healthy",
    name: "Herbed Cucumber Salad",
    description: "Cool cucumber tossed with fresh herbs and a light savory dressing.",
    downloadZip: "HerbedCucumberSalad/Herbed-Cucumber-Salad-Recipe.zip",
    images: [
      { src: "HerbedCucumberSalad/1.png", alt: "Herbed Cucumber Salad cover" },
      { src: "HerbedCucumberSalad/2.png", alt: "Herbed Cucumber Salad recipe image 2" },
      { src: "HerbedCucumberSalad/3.png", alt: "Herbed Cucumber Salad recipe image 3" }
    ]
  },
  {
    id: "he-08",
    category: "healthy",
    name: "Lentil Protein Bowl",
    description: "Hearty lentils with vegetables for a balanced, protein-packed bowl.",
    downloadZip: "LentilProteinBowl/Lentil-Protein-Bowl-Recipe.zip",
    images: [
      { src: "LentilProteinBowl/1.png", alt: "Lentil Protein Bowl cover" },
      { src: "LentilProteinBowl/2.png", alt: "Lentil Protein Bowl recipe image 2" },
      { src: "LentilProteinBowl/3.png", alt: "Lentil Protein Bowl recipe image 3" }
    ]
  },
  {
    id: "he-09",
    category: "healthy",
    name: "Mediterranean Chickpea Bowl",
    description: "Chickpeas and fresh vegetables with Mediterranean herbs and flavors.",
    downloadZip: "MediterraneanChickpeaBowl/Mediterranean-Chickpea-Bowl-Recipe.zip",
    images: [
      { src: "MediterraneanChickpeaBowl/1.png", alt: "Mediterranean Chickpea Bowl cover" },
      { src: "MediterraneanChickpeaBowl/2.png", alt: "Mediterranean Chickpea Bowl recipe image 2" },
      { src: "MediterraneanChickpeaBowl/3.png", alt: "Mediterranean Chickpea Bowl recipe image 3" }
    ]
  },
  {
    id: "he-10",
    category: "healthy",
    name: "Peri Peri Roasted Vegetable Bowl",
    description: "Roasted vegetables tossed with bold peri peri seasoning.",
    downloadZip: "PeriPeriRoastedVegetableBowl/Peri-Peri-Roasted-Vegetable-Bowl-Recipe.zip",
    images: [
      { src: "PeriPeriRoastedVegetableBowl/1.png", alt: "Peri Peri Roasted Vegetable Bowl cover" },
      { src: "PeriPeriRoastedVegetableBowl/2.png", alt: "Peri Peri Roasted Vegetable Bowl recipe image 2" },
      { src: "PeriPeriRoastedVegetableBowl/3.png", alt: "Peri Peri Roasted Vegetable Bowl recipe image 3" }
    ]
  },
  {
    id: "he-11",
    category: "healthy",
    name: "Protein-Packed Quinoa Salad",
    description: "Quinoa, vegetables, and protein-rich ingredients in a fresh salad.",
    downloadZip: "ProteinPackedQuinoaSalad/Protein-Packed-Quinoa-Salad-Recipe.zip",
    images: [
      { src: "ProteinPackedQuinoaSalad/1.png", alt: "Protein-Packed Quinoa Salad cover" },
      { src: "ProteinPackedQuinoaSalad/2.png", alt: "Protein-Packed Quinoa Salad recipe image 2" },
      { src: "ProteinPackedQuinoaSalad/3.png", alt: "Protein-Packed Quinoa Salad recipe image 3" }
    ]
  },
  {
    id: "he-12",
    category: "healthy",
    name: "Rainbow Veg Salad",
    description: "A colorful mix of fresh vegetables assembled into a crisp, vibrant salad.",
    downloadZip: "RainbowVegSalad/Rainbow-Veg-Salad-Recipe.zip",
    images: [
      { src: "RainbowVegSalad/1.png", alt: "Rainbow Veg Salad cover" },
      { src: "RainbowVegSalad/2.png", alt: "Rainbow Veg Salad recipe image 2" },
      { src: "RainbowVegSalad/3.png", alt: "Rainbow Veg Salad recipe image 3" }
    ]
  },
  {
    id: "he-13",
    category: "healthy",
    name: "Sprouts Power Salad",
    description: "Crunchy sprouts and vegetables combined in a fresh, nourishing salad.",
    downloadZip: "SproutsPowerSalad/Sprouts-Power-Salad-Recipe.zip",
    images: [
      { src: "SproutsPowerSalad/1.png", alt: "Sprouts Power Salad cover" },
      { src: "SproutsPowerSalad/2.png", alt: "Sprouts Power Salad recipe image 2" },
      { src: "SproutsPowerSalad/3.png", alt: "Sprouts Power Salad recipe image 3" }
    ]
  },

  // ---------------- Signature Seasonings ----------------
  {
    id: "se-01",
    category: "seasonings",
    name: "Toast Seasoning Mix",
    description: "A savory seasoning mix for crisp, flavorful toast.",
    downloadZip: "ToastSeasoningMix/Toast-Seasoning-Mix-Recipe.zip",
    images: [
      { src: "ToastSeasoningMix/1.png", alt: "Toast Seasoning Mix cover" },
      { src: "ToastSeasoningMix/2.png", alt: "Toast Seasoning Mix recipe image 2" },
      { src: "ToastSeasoningMix/3.png", alt: "Toast Seasoning Mix recipe image 3" }
    ]
  },
  {
    id: "se-02",
    category: "seasonings",
    name: "Garlic Herb Butter for Bread",
    description: "Garlic herb butter made for spreading over warm bread and toast.",
    downloadZip: "GarlicHerbButter/Garlic-Herb-Butter-for-Bread-Recipe.zip",
    images: [
      { src: "GarlicHerbButter/1.png", alt: "Garlic Herb Butter for Bread cover" },
      { src: "GarlicHerbButter/2.png", alt: "Garlic Herb Butter for Bread recipe image 2" },
      { src: "GarlicHerbButter/3.png", alt: "Garlic Herb Butter for Bread recipe image 3" }
    ]
  },
  {
    id: "se-03",
    category: "seasonings",
    name: "Peri Peri Spice Mix Popcorn",
    description: "Popcorn tossed with a bold, spicy peri peri seasoning mix.",
    downloadZip: "PeriPeriSpiceMixPopcorn/Peri-Peri-Spice-Mix-Popcorn-Recipe.zip",
    images: [
      { src: "PeriPeriSpiceMixPopcorn/1.png", alt: "Peri Peri Spice Mix Popcorn cover" },
      { src: "PeriPeriSpiceMixPopcorn/2.png", alt: "Peri Peri Spice Mix Popcorn recipe image 2" },
      { src: "PeriPeriSpiceMixPopcorn/3.png", alt: "Peri Peri Spice Mix Popcorn recipe image 3" }
    ]
  },
  {
    id: "se-04",
    category: "seasonings",
    name: "Roasted Makhana (Fox Nuts)",
    description: "Crisp roasted makhana coated with a savory seasoning blend.",
    downloadZip: "RoastedMakhana/Roasted-Makhana-Fox-Nuts-Recipe.zip",
    images: [
      { src: "RoastedMakhana/1.png", alt: "Roasted Makhana (Fox Nuts) cover" },
      { src: "RoastedMakhana/2.png", alt: "Roasted Makhana (Fox Nuts) recipe image 2" },
      { src: "RoastedMakhana/3.png", alt: "Roasted Makhana (Fox Nuts) recipe image 3" }
    ]
  },
  {
    id: "se-05",
    category: "seasonings",
    name: "Roasted Potato Sprinkle",
    description: "Roasted potatoes finished with a punchy herb-and-spice sprinkle.",
    downloadZip: "RoastedPotatoSprinkle/Roasted-Potato-Sprinkle-Recipe.zip",
    images: [
      { src: "RoastedPotatoSprinkle/1.png", alt: "Roasted Potato Sprinkle cover" },
      { src: "RoastedPotatoSprinkle/2.png", alt: "Roasted Potato Sprinkle recipe image 2" },
      { src: "RoastedPotatoSprinkle/3.png", alt: "Roasted Potato Sprinkle recipe image 3" }
    ]
  },
  {
    id: "se-06",
    category: "seasonings",
    name: "Salad Seasoning Mix",
    description: "A versatile seasoning mix for fresh salads and vegetable bowls.",
    downloadZip: "SaladSeasoningMix/Salad-Seasoning-Mix-Recipe.zip",
    images: [
      { src: "SaladSeasoningMix/1.png", alt: "Salad Seasoning Mix cover" },
      { src: "SaladSeasoningMix/2.png", alt: "Salad Seasoning Mix recipe image 2" },
      { src: "SaladSeasoningMix/3.png", alt: "Salad Seasoning Mix recipe image 3" }
    ]
  },
  {
    id: "se-07",
    category: "seasonings",
    name: "Sandwich Sprinkle",
    description: "A flavorful finishing sprinkle for sandwiches, toasties, and wraps.",
    downloadZip: "SandwichSprinkle/Sandwich-Sprinkle-Recipe.zip",
    images: [
      { src: "SandwichSprinkle/1.png", alt: "Sandwich Sprinkle cover" },
      { src: "SandwichSprinkle/2.png", alt: "Sandwich Sprinkle recipe image 2" },
      { src: "SandwichSprinkle/3.png", alt: "Sandwich Sprinkle recipe image 3" }
    ]
  },
  {
    id: "se-08",
    category: "seasonings",
    name: "Soup Seasoning Blend",
    description: "A warming herb-and-spice blend for soups and comforting broths.",
    downloadZip: "SoupSeasoningBlend/Soup-Seasoning-Blend-Recipe.zip",
    images: [
      { src: "SoupSeasoningBlend/1.png", alt: "Soup Seasoning Blend cover" },
      { src: "SoupSeasoningBlend/2.png", alt: "Soup Seasoning Blend recipe image 2" },
      { src: "SoupSeasoningBlend/3.png", alt: "Soup Seasoning Blend recipe image 3" }
    ]
  },
];
