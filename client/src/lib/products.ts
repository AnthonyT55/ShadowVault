import itachi from "@/assets/images/itachi.jpg";
import sasuke from "@/assets/images/sasuke.jpg";
import bundle from "@/assets/images/bundle.jpg";
import sasukeChunin from "@/assets/images/sasuke-chunin.jpg";
import gojo from "@/assets/images/gojo.jpg";
import law from "@/assets/images/law.jpg";
import shanks from "@/assets/images/shanks.jpg";

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  isNew?: boolean;
  stripeLink?: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Combination Battle Itachi",
    price: 159.99,
    image: itachi,
    category: "Combination Battle",
    isNew: true,
    stripeLink: "https://buy.stripe.com/mock_itachi",
  },
  {
    id: 2,
    name: "Combination Battle Sasuke",
    price: 159.99,
    image: sasuke,
    category: "Combination Battle",
    stripeLink: "https://buy.stripe.com/mock_sasuke",
  },
  {
    id: 3,
    name: "Combination Battle Itachi and Sasuke Bundle",
    price: 299.99,
    image: bundle,
    category: "Bundle Exclusive",
    isNew: true,
    stripeLink: "https://buy.stripe.com/mock_bundle",
  },
  {
    id: 4,
    name: "Combination Battle Sasuke Uchiha (Chunin Exams)",
    price: 149.99,
    image: sasukeChunin,
    category: "Combination Battle",
    stripeLink: "https://buy.stripe.com/mock_sasuke_chunin",
  },
  {
    id: 5,
    name: "Satoru Gojo",
    price: 179.99,
    image: gojo,
    category: "Premium Scale",
    stripeLink: "https://buy.stripe.com/mock_gojo",
  },
  {
    id: 6,
    name: "Grandista Trafalgar Law",
    price: 129.99,
    image: law,
    category: "Grandista",
    stripeLink: "https://buy.stripe.com/mock_law",
  },
  {
    id: 7,
    name: "Battle Record Collection Shanks",
    price: 139.99,
    image: shanks,
    category: "Battle Record",
    stripeLink: "https://buy.stripe.com/mock_shanks",
  },
];
