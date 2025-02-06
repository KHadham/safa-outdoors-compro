import { atomWithStorage } from "jotai/utils";

export interface Product {
  id: number;
  name: string;
  href: string;
  price: string;
  imageSrc: string;
  imageAlt: string;
  quantity?: number; // Optional for local state management
}

export const cartAtom = atomWithStorage<Product[]>("cart", []);