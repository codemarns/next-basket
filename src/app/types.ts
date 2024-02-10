import { ProductProps } from "@/app/components/Card/types";

// based on data from API
export type ResponseProps = {
  limit: number;
  products: ProductProps[];
  skip: number;
  total: number;
};
