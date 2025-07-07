export interface Product {
  id: string;
  title: string;
  name: string;
  slug: string;
  category: string;
  subcategory: string;
  gender: string;
  rating: number;
  price?: number;
  newPrice?: number;
  oldPrice?: number;
  image: string[];
  description: string;
}
