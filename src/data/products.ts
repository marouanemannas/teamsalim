export interface Product {
  id: string;
  name: string;
  category: string;
  icon: "shirt" | "swords";
}

export const products: Product[] = [
  {
    id: "maglietta-training",
    name: "Maglietta Training",
    category: "Abbigliamento",
    icon: "shirt",
  },
  {
    id: "pantaloncini-muay-thai",
    name: "Pantaloncini Muay Thai",
    category: "Abbigliamento",
    icon: "shirt",
  },
  {
    id: "felpa-team-salim",
    name: "Felpa Team Salim",
    category: "Abbigliamento",
    icon: "shirt",
  },
  {
    id: "guantoni-training",
    name: "Guantoni da Training",
    category: "Attrezzatura",
    icon: "swords",
  },
];
