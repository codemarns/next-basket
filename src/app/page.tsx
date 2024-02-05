import Link from "next/link";
import { Card } from "@/app/components/Card/Card";
import { CardProps } from "@/app/components/Card/types";

async function getProducts() {
  // fetch request from API
  const res = await fetch("https://dummyjson.com/products");
  // returns a promise which resolves with the result of parsing the body text as JSON
  const data = res.json();

  return data;
}

export default async function Home() {
  const data = await getProducts();

  return (
    <div className="grid grid-cols-[repeat(auto-fit,_minmax(285px,_1fr))] gap-4 sm:gap-8">
      {data?.products.map((product: CardProps, index: number) => {
        return (
          <Link href={`/${product.id}`} key={index}>
            <Card {...product} />
          </Link>
        );
      })}
    </div>
  );
}
