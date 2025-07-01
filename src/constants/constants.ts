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

export const menu: Menu[] = [
  { title: `cocktails`, items: menuItems.cocktails, id: "cocktail" },
  { title: `beers`, items: menuItems.beers, id: "beer" },
];
