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
  image: string;
  category: string;
  isNew?: boolean;
  stripeLink?: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Combination Battle Itachi",
    image: itachi,
    category: "Combination Battle",
    isNew: true,
    stripeLink: "https://buy.stripe.com/00wbJ38U55Ex9SmgHg57W02",
  },
  {
    id: 2,
    name: "Combination Battle Sasuke",
    image: sasuke,
    category: "Combination Battle",
    stripeLink: "https://buy.stripe.com/4gMbJ3b2d3wpaWq8aK57W03",
  },
  {
    id: 3,
    name: "Combination Battle Itachi and Sasuke Bundle",
    image: bundle,
    category: "Bundle Exclusive",
    isNew: true,
    stripeLink: "https://buy.stripe.com/mock_bundle",
  },
  {
    id: 4,
    name: "Combination Battle Sasuke Uchiha (Chunin Exams)",
    image: sasukeChunin,
    category: "Combination Battle",
    stripeLink: "https://buy.stripe.com/28E3cxfit5Ex2pUgHg57W04",
  },
  {
    id: 5,
    name: "Satoru Gojo",
    image: gojo,
    category: "Premium Scale",
    stripeLink: "https://buy.stripe.com/fZu6oJdal3wp5C6gHg57W01",
  },
  {
    id: 6,
    name: "Grandista Trafalgar Law",
    image: law,
    category: "Grandista",
    stripeLink: "https://buy.stripe.com/fZu8wR9Y93wp1lQ3Uu57W06",
  },
  {
    id: 7,
    name: "Battle Record Collection Shanks",
    image: shanks,
    category: "Battle Record",
    stripeLink: "https://buy.stripe.com/fZu5kF4DPaYR0hM3Uu57W05",
  },
];
