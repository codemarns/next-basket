export type CardProps = {
  id: string;
  images: string[];
  thumbnail: string;
  brand: string;
  title: string;
  category: string;
  description?: string;
  discountPercentage: number;
  price: number;
  rating: number;
  stock: number;
};
