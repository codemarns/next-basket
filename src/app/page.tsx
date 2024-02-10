"use client";

import { useEffect, useState } from "react";
import { getProducts } from "@/app/api/api";
import { Card } from "@/app/components/Card/Card";
import { ProductProps } from "@/app/components/Card/types";
import { Dialog } from "@/app/components/Dialog/Dialog";

const Home = () => {
  const [showDialog, setShowDialog] = useState(false);
  const [products, setProducts] = useState<ProductProps[]>([]);
  const [addedToCartProduct, setAddedToCartProduct] = useState<ProductProps | null>(null);

  useEffect(() => {
    getProducts()
      .then((res) => res.json())
      .then((data) => setProducts(data?.products))
      .catch((error) => console.error(error));
  }, []);

  // disable the body scroll if dialog is open
  useEffect(() => {
    const body = document.querySelector("body");
    body!.style.overflow = showDialog ? "hidden" : "auto";
  }, [showDialog]);

  const handleShowDialog = (props: ProductProps) => {
    setAddedToCartProduct(props);
    setShowDialog(true);
  };

  const handleHideDialog = () => {
    setAddedToCartProduct(null);
    setShowDialog(false);
  };

  console.log("showDialog: ", showDialog);
  console.log("addedToCartProduct: ", addedToCartProduct);

  return (
    <div className="grid grid-cols-[repeat(auto-fit,_minmax(285px,_1fr))] gap-4 sm:gap-8">
      {products.map((product: ProductProps, index: number) => (
        <Card
          key={index}
          {...product}
          onAddToCart={(props: ProductProps) => {
            handleShowDialog(props);
          }}
        />
      ))}

      <Dialog
        isOpen={showDialog}
        header="Awesome!"
        message="Added to cart successfully."
        onClose={handleHideDialog}
      />
    </div>
  );
};

export default Home;
