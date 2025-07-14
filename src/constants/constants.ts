import { MenuItem, Menu, NavLink } from "@/types";

export const navLinks: NavLink[] = [
  {
    id: "signatures",
    title: "Signatures",
    href: "#signatures",
  },
  {
    id: "about",
    title: "About Us",
    href: "#about",
  },
  {
    id: "work",
    title: "The Art",
    href: "#work",
  },
  {
    id: "contact",
    title: "Contact",
    href: "#contact",
  },
];

export const menuItems: {
  drinks: {
    cocktails: MenuItem[];
    beers: MenuItem[];
  };
  food: {
    appetizers: MenuItem[];
    mains: MenuItem[];
    desserts: MenuItem[];
  };
} = {
  drinks: {
    beers: [
      {
        id: "beer-0",
        name: "Home Brew Pils",
        origin: "Germany",
        alcohol: true,
        abv: 4.8,
        servingMethod: "Draft",
        price: 5,
        garnish: undefined,
        ingredients: ["Water", "Pilsner malt", "Hallertau hops", "Yeast"],
        tasteProfile: ["crisp", "light-bodied", "bitter-finish"],
        tags: ["homebrew", "pilsner", "german-style"],
        src: "home-brew_jmsi79",
        descriptionHeading: "Clean & Crisp",
        description:
          "A refreshing home-brewed Pilsner with a clean malt base and a classic hop bitterness. " +
          "Brewed with German Hallertau hops for a floral aroma and a snappy finish. Perfect for hot days or session drinking.",
      },
      {
        id: "beer-1",
        name: "Sternla",
        origin: "Germany",
        alcohol: true,
        abv: 5,
        servingMethod: "Draft",
        price: 6,
        garnish: undefined,
        ingredients: ["Water", "Barley malt", "Hops", "Yeast"],
        tasteProfile: ["crisp", "smooth", "mild bitterness"],
        tags: ["lager", "classic", "franconian"],
        src: "sternla_ilyjma",
        descriptionHeading: "Franconian Classic",
        description:
          "A crisp and smooth lager brewed in Bamberg, with subtle bitterness and a malty body. " +
          "Perfect for casual drinking and pairing with hearty German food.",
      },
      {
        id: "beer-2",
        name: "Guinness",
        origin: "Ireland",
        alcohol: true,
        abv: 4.2,
        servingMethod: "Draft",
        price: 9,
        garnish: undefined,
        ingredients: ["Water", "Barley malt", "Roasted barley", "Hops", "Yeast"],
        tasteProfile: ["smooth", "creamy", "roasted"],
        tags: ["stout", "irish", "classic"],
        src: "guinness_aknjhp",
        descriptionHeading: "Classic Irish Stout",
        description:
          "Iconic Irish stout with a creamy head, smooth mouthfeel, and rich roasted flavors. " +
          "Known for its balanced bitterness and distinctive dark color.",
      },

      {
        id: "beer-3",
        name: "Heineken",
        origin: "Netherlands",
        alcohol: true,
        abv: 5,
        servingMethod: "Draft",
        price: 7,
        garnish: undefined,
        ingredients: ["Water", "Barley malt", "Hops", "Yeast"],
        tasteProfile: ["balanced", "smooth", "mild bitterness"],
        tags: ["lager", "european", "standard"],
        src: "heineken_fawblj",
        descriptionHeading: "European Standard",
        description:
          "Balanced and smooth lager with mild bitterness and a soft malt aroma. " +
          "Ideal for those who enjoy a well-rounded, classic beer experience.",
      },
      {
        id: "beer-4",
        name: "Corona",
        origin: "Mexico",
        alcohol: true,
        abv: 4.6,
        servingMethod: "Bottle",
        price: 7,
        garnish: undefined,
        ingredients: ["Water", "Barley malt", "Corn", "Hops", "Yeast"],
        tasteProfile: ["light", "crisp", "refreshing"],
        tags: ["lager", "light", "popular"],
        src: "corona_xzjqlf",
        descriptionHeading: "Light & Refreshing",
        description:
          "A light-bodied lager with a crisp and clean finish, known for its easy drinkability. " +
          "Often served with a wedge of lime to enhance its refreshing character.",
      },
      {
        id: "beer-5",
        name: "Budweiser",
        origin: "USA",
        alcohol: true,
        abv: 5,
        servingMethod: "Draft",
        price: 7,
        garnish: undefined,
        ingredients: ["Water", "Barley malt", "Rice", "Hops", "Yeast"],
        tasteProfile: ["light", "clean", "refreshing"],
        tags: ["lager", "american", "iconic"],
        src: "budweiser_u34llg",
        descriptionHeading: "American Icon",
        description:
          "Light-bodied lager brewed with rice and barley, offering a clean, refreshing finish. " +
          "A popular choice for easy drinking and social occasions.",
      },
      {
        id: "beer-6",
        name: "Augustiner",
        origin: "Germany",
        alcohol: true,
        abv: 5.2,
        servingMethod: "Draft",
        price: 7,
        garnish: undefined,
        ingredients: ["Water", "Barley malt", "Hops", "Yeast"],
        tasteProfile: ["malty", "smooth", "light bitterness"],
        tags: ["helles", "bavarian", "lager"],
        src: "augustiner_hdzvcf",
        descriptionHeading: "Bavarian Original",
        description:
          "Traditional Munich-style Helles brewed since 1328 – smooth malt body with gentle hops and a clean finish. " +
          "A timeless beer, served best fresh from the tap in true Bavarian style.",
      },
    ],
    cocktails: [
      {
        id: "cocktail-1",
        name: "Mojito",
        origin: "Cuba",
        alcohol: true,
        abv: 12,
        servingMethod: "Frozen",
        price: 10,
        garnish: "Fresh mint & lime wedge",
        ingredients: ["White rum", "Fresh mint", "Lime juice", "Sugar", "Soda water"],
        tasteProfile: ["fresh", "minty", "citrusy", "light"],
        tags: ["classic", "rum-based", "summer"],
        src: "mojito_lm32qj",
        descriptionHeading: "Fresh and Minty",
        description:
          "A refreshing blend of white rum, lime, and fresh mint, lightly sweetened with sugar and topped with soda water. " +
          "This classic Cuban cocktail offers a crisp, minty flavor perfect for warm evenings and casual gatherings.",
      },
      {
        id: "cocktail-2",
        name: "Margarita",
        origin: "Mexico",
        alcohol: true,
        abv: 13,
        servingMethod: "Blended",
        price: 12,
        garnish: "Salted rim & lime wedge",
        ingredients: ["Tequila", "Triple sec", "Lime juice", "Salt"],
        tasteProfile: ["tangy", "citrusy", "refreshing"],
        tags: ["classic", "tequila-based", "party"],
        src: "margarita_lxaqgw",
        descriptionHeading: "Tangy & Tequila-Kissed",
        description:
          "Classic tequila cocktail blended with lime juice and triple sec, served with a salted rim. " +
          "Bright, tangy, and perfect for lively social occasions or summer parties.",
      },
      {
        id: "cocktail-3",
        name: "Old Fashioned",
        origin: "USA",
        alcohol: true,
        abv: 32,
        servingMethod: "On the Rocks",
        price: 14,
        garnish: "Orange twist & cherry",
        ingredients: ["Bourbon or rye whiskey", "Sugar", "Bitters", "Orange peel"],
        tasteProfile: ["bold", "sweet", "citrusy"],
        tags: ["classic", "whiskey-based", "evening"],
        src: "old-fashioned_q0004n",
        descriptionHeading: "Zesty & Bold",
        description:
          "A strong and smooth blend of bourbon, sugar, and bitters, garnished with an orange twist. " +
          "Rich and balanced, this cocktail is a timeless favorite for sophisticated evenings.",
      },
      {
        id: "cocktail-4",
        name: "Negroni",
        origin: "Italy",
        alcohol: true,
        abv: 24,
        servingMethod: "On the Rocks",
        price: 13,
        garnish: "Orange slice",
        ingredients: ["Gin", "Campari", "Sweet vermouth", "Orange peel"],
        tasteProfile: ["bitter", "complex", "herbal"],
        tags: ["classic", "gin-based", "aperitif"],
        src: "negroni_ogvfpc",
        descriptionHeading: "Bitter Sophistication",
        description:
          "A balanced mix of gin, Campari, and sweet vermouth, finished with an orange slice. " +
          "This bitter, herbal cocktail is a refined choice for aperitif lovers.",
      },
      {
        id: "cocktail-5",
        name: "Rosemary Gold",
        origin: "Modern Signature",
        alcohol: true,
        abv: 15,
        servingMethod: "Shaken",
        price: 13,
        garnish: "Fresh rosemary & citrus zest",
        ingredients: ["Gin", "Lemon juice", "Honey syrup", "Orange liqueur", "Rosemary"],
        tasteProfile: ["herbal", "citrusy", "balanced", "elegant"],
        tags: ["signature", "golden", "aromatic"],
        src: "rosemary-gold_yyhhmo",
        descriptionHeading: "Golden & Herbal Elegance",
        description:
          "A golden blend of dry gin, citrus, and honey syrup, topped with a hint of sparkle and garnished with rosemary. " +
          "Balanced and aromatic, this modern classic shines with elegance and depth.",
      },
      {
        id: "cocktail-6",
        name: "Gin & Tonic",
        origin: "England",
        alcohol: true,
        abv: 12,
        servingMethod: "Built",
        price: 11,
        garnish: "Lime wedge & juniper berries",
        ingredients: ["Dry gin", "Tonic water", "Lime", "Juniper"],
        tasteProfile: ["dry", "refreshing", "botanical", "bitter"],
        tags: ["classic", "gin-based", "aperitif"],
        src: "gin-tonic_dgeiqh",
        descriptionHeading: "Botanical Classic",
        description:
          "A timeless mix of dry gin and crisp tonic water, served over ice and garnished with lime and juniper. " +
          "Refreshing, bitter, and unmistakably aromatic – a go-to for any occasion.",
      },
    ],
  },
  food: {
    appetizers: [
      {
        id: "food-starter-1",
        name: "Caprese Salad",
        origin: "Italy",
        alcohol: false,
        abv: 0,
        price: 8,
        garnish: "Fresh basil leaves",
        ingredients: [
          "Buffalo mozzarella",
          "Cherry tomatoes",
          "Yellow tomatoes",
          "Basil dressing",
          "Olive oil",
        ],
        tasteProfile: ["fresh", "light", "herbal"],
        tags: ["salad", "vegetarian", "starter"],
        src: "caprese-salat_uav1fm",
        descriptionHeading: "Fresh and Colorful",
        description:
          "Two types of ripe tomatoes paired with creamy mozzarella and a house-made basil dressing. A refreshing start to your meal.",
      },
      {
        id: "food-appetizer-2",
        name: "Regional Cheese & Cured Meat",
        origin: "Germany",
        alcohol: false,
        abv: 0,
        price: 19,
        garnish: "Red grapes & rosemary",
        ingredients: ["Regional cheeses", "Cured meats", "Seeded bread", "Grapes", "Butter"],
        tasteProfile: ["savory", "nutty", "balanced"],
        tags: ["cheese", "charcuterie", "regional", "starter"],
        src: "cheese-charcuterie_sgxjtx",
        descriptionHeading: "A Taste of the Region",
        description:
          "A selection of local cheeses and cured meats, served with grapes and artisan bread. A flavorful mix of textures and tastes.",
      },
      {
        id: "food-appetizer-3",
        name: "Loaded Nachos",
        origin: "Tex-Mex",
        alcohol: false,
        abv: 0,
        price: 12,
        garnish: "Jalapeños & sour cream",
        ingredients: ["Tortilla chips", "Cheddar", "Salsa", "Guacamole", "Sour cream", "Jalapeños"],
        tasteProfile: ["cheesy", "spicy", "crispy", "creamy"],
        tags: ["sharing", "vegetarian", "snack"],
        src: "loaded-nachos_fphsr7",
        descriptionHeading: "Spicy & Cheesy",
        description:
          "A tower of crispy tortilla chips smothered in melted cheddar, topped with fresh salsa, guacamole, jalapeños, and sour cream. Perfect for sharing with a drink in hand.",
      },
    ],
    mains: [
      {
        id: "food-main-1",
        name: "Rumpsteak in Herb Butter",
        origin: "Germany",
        alcohol: false,
        abv: 0,
        price: 29,
        garnish: "Fresh rosemary sprig",
        ingredients: [
          "Beef rumpsteak",
          "Rosemary herb butter",
          "Zucchini",
          "Cherry tomatoes",
          "Garlic",
        ],
        tasteProfile: ["hearty", "herbal", "juicy"],
        tags: ["meat", "grill", "seasonal"],
        src: "steak_q6x27r",

        descriptionHeading: "Grilled Perfection",
        description:
          "Tender rumpsteak seared in aromatic rosemary herb butter, served with grilled summer vegetables like zucchini and cherry tomatoes.",
      },
      {
        id: "food-main-2",
        name: "Pizza Margherita",
        origin: "Italy",
        alcohol: false,
        abv: 0,
        price: 13,
        garnish: "Fresh basil",
        ingredients: ["Pizza dough", "Tomato sauce", "Mozzarella", "Olive oil", "Basil"],
        tasteProfile: ["savory", "herbal", "classic"],
        tags: ["vegetarian", "italian", "pizza"],
        src: "pizza_ankftn",
        descriptionHeading: "The Italian Classic",
        description:
          "Stone-baked pizza with rich tomato sauce, creamy mozzarella, and fresh basil. A timeless favorite with pure, simple flavors.",
      },
      {
        id: "food-main-3",
        name: "Cheese-Burger",
        origin: "USA",
        alcohol: false,
        abv: 0,
        price: 12,
        garnish: "Pickle & fries",
        ingredients: ["Beef patty", "Cheddar", "Lettuce", "Tomato", "Onion", "Bun"],
        tasteProfile: ["hearty", "juicy", "savory"],
        tags: ["classic", "pub-grub", "beef"],
        src: "cheeseburger_tsspzo",
        descriptionHeading: "Juicy & Hearty",
        description:
          "Grilled beef patty topped with melted cheddar, fresh lettuce, tomato, and onion, served in a toasted bun with crispy fries and a pickle spear.",
      },
    ],
    desserts: [
      {
        id: "food-dessert-1",
        name: "Apple Crumble",
        origin: "UK",
        alcohol: false,
        abv: 0,
        price: 8,
        garnish: "Custard or vanilla ice cream",
        ingredients: ["Apples", "Cinnamon", "Sugar", "Butter", "Flour", "Oats"],
        tasteProfile: ["fruity", "crunchy", "comforting"],
        tags: ["british", "fruit", "warm"],
        src: "apple-crumble_cp9te9",
        descriptionHeading: "Comfort in a Bowl",
        description:
          "Warm spiced apples under a golden oat topping, served with custard or ice cream. Cozy, nostalgic, and deeply satisfying.",
      },
      {
        id: "food-dessert-2",
        name: "Chocolate Berry Trifle",
        origin: "UK",
        alcohol: false,
        abv: 0,
        price: 9,
        garnish: "Fresh berries & mint leaves",
        ingredients: [
          "Chocolate cake",
          "Whipped cream",
          "Custard",
          "Caramel sauce",
          "Blueberries",
          "Raspberries",
          "Blackberries",
          "Mint",
        ],
        tasteProfile: ["rich", "creamy", "fruity", "sweet"],
        tags: ["layered", "chocolate", "berry", "cold", "british"],
        src: "chocolate-berry-trifle1_hav7e4",
        descriptionHeading: "Layered Indulgence",
        description:
          "A decadent trifle layered with rich chocolate cake, creamy custard, and fresh berries. Finished with whipped cream, caramel drizzle, and mint. Perfectly balanced between indulgence and freshness.",
      },

      {
        id: "food-dessert-3",
        name: "Chocolate Lava Cake",
        origin: "France",
        alcohol: false,
        abv: 0,
        price: 7,
        garnish: "Powdered sugar & berries",
        ingredients: ["Dark chocolate", "Butter", "Eggs", "Sugar", "Flour"],
        tasteProfile: ["rich", "gooey", "intense"],
        tags: ["dessert", "chocolate", "indulgent"],
        src: "lava-cake_xez1r2",
        descriptionHeading: "Molten Indulgence",
        description:
          "Warm chocolate cake with a gooey molten center, served with fresh berries and a dusting of powdered sugar. For the serious sweet tooth.",
      },
    ],
  },
};

export const menu: Menu[] = [
  {
    name: `beers`,
    items: menuItems.drinks.beers,
    id: "beer",
    bgImage: "/images/deco/hops-bg.png",
  },
  {
    name: `cocktails`,
    items: menuItems.drinks.cocktails,
    id: "cocktail",
    bgImage: "/images/deco/palm.png",
  },
  {
    name: `appetizers`,
    items: menuItems.food.appetizers,
    id: "appetizer",
    bgImage: undefined,
  },
  {
    name: `mains`,
    items: menuItems.food.mains,
    id: "main",
    bgImage: undefined,
  },
  {
    name: `desserts`,
    items: menuItems.food.desserts,
    id: "dessert",
    bgImage: undefined,
  },
];
