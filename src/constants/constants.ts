import { MenuItem, MenuSection, NavLink } from "@/types";

export const navLinks: NavLink[] = [
  {
    id: "menu",
    title: "Menu",
    href: "#menu",
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

export const menu: {
  cocktails: MenuItem[];
  beers: MenuItem[];
} = {
  cocktails: [
    {
      id: "cocktail-1",
      name: "Mojito",
      origin: "Cuba",
      alcohol: true,
      serving: "Glass",
      method: "Frozen",
      price: 10,
    },
    {
      id: "cocktail-2",
      name: "Margarita",
      origin: "Mexico",
      alcohol: true,
      serving: "Glass",
      method: "Blended",
      price: 12,
    },
    {
      id: "cocktail-3",
      name: "Old Fashioned",
      origin: "USA",
      alcohol: true,
      serving: "Glass",
      method: "Blended",
      price: 14,
    },
    {
      id: "cocktail-4",
      name: "Negroni",
      origin: "Italy",
      alcohol: true,
      serving: "Glass",
      method: "On the Rocks",
      price: 13,
    },
  ],
  beers: [
    {
      id: "beer-1",
      name: "Pilsner",
      origin: "Germany",
      alcohol: true,
      serving: "Pint",
      method: "Draft",
      price: 7,
    },
    {
      id: "beer-2",
      name: "Wheat Beer",
      origin: "Belgium",
      alcohol: true,
      serving: "Glass",
      method: "Draft",
      price: 8,
    },
    {
      id: "beer-3",
      name: "IPA",
      origin: "USA",
      alcohol: true,
      serving: "Pint",
      method: "Draft",
      price: 8,
    },
    {
      id: "beer-4",
      name: "Stout",
      origin: "Ireland",
      alcohol: true,
      serving: "Pint",
      method: "Draft",
      price: 9,
    },
  ],
};

export const menuSections: MenuSection[] = [
  { title: `cocktails`, items: menu.cocktails, id: "cocktails" },
  { title: `beers`, items: menu.beers, id: "beers" },
];
