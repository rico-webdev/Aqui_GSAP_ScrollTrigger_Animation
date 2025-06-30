export type ServingMethod = "Draft" | "Bottle" | "On the Rocks" | "Blended" | "Frozen";
export type ServingSize = "Pint" | "Glass";

export interface Menu {
  title: string;
  items: MenuItem[];
  id: string;
}

export interface MenuItem {
  id: string;
  name: string;
  origin: string;
  alcohol: boolean;
  serving: ServingSize;
  method: ServingMethod;
  price: number;
}

export interface NavLink {
  id: string;
  title: string;
  href: `#${string}`;
}
