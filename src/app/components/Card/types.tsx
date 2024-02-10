export type ProductProps = {
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

export type CardProps = ProductProps & {
  onAddToCart?: (props: ProductProps) => void;
};
