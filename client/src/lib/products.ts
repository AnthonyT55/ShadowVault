import product1 from "@assets/stock_images/dark_anime_action_fi_8d42d585.jpg";
import product2 from "@assets/stock_images/dark_anime_action_fi_ee990bee.jpg";
import product3 from "@assets/stock_images/dark_anime_action_fi_b8c1d619.jpg";
import product4 from "@assets/stock_images/dark_anime_action_fi_b7df8cf7.jpg";

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  isNew?: boolean;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Abyssal Phantom - Limited Edition",
    price: 149.99,
    image: product1,
    category: "Premium Scale",
    isNew: true,
  },
  {
    id: 2,
    name: "Cursed Soul: Void",
    price: 89.99,
    image: product2,
    category: "Standard Series",
  },
  {
    id: 3,
    name: "Shadow Reaper V2",
    price: 129.99,
    image: product3,
    category: "Premium Scale",
    isNew: true,
  },
  {
    id: 4,
    name: "Nightmare Harbinger",
    price: 199.99,
    image: product4,
    category: "Masterpiece",
  },
];
