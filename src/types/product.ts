export interface Product {
  product_id: string;
  product_title: string;
  product_image: string;
  category: string;
  price: number;
  description: string;
  specification: string[];
  availability: boolean;
  rating: number;
}