"use client";

import cn from "classnames";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { RxMixerVertical } from "react-icons/rx";
import { Dialog } from "@/app/components/Dialog";
import { Button } from "@/app/components/Button/Button";
import { StarRatingReview } from "@/app/components/StarRatingReview";
import { CardProps } from "./types";

export const Card: React.FC<CardProps> = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [hoverProduct, setHoverProduct] = useState(false);

  // disable the body scroll if modal is open
  useEffect(() => {
    const body = document.querySelector("body");
    body!.style.overflow = showModal ? "hidden" : "auto";
  }, [showModal]);

  // convert the discountPercentage into decimal
  const discount = props.discountPercentage / 100;

  // multiply the discount to the price to get the discount amount
  const discountAmount = discount * props.price;

  // subtract the discount amount to the price to get the discounted price
  const discountedPrice = props.price - discountAmount;

  // round up the new price
  const newPrice = Math.round(discountedPrice * 100) / 100;

  // to have fixed 2 decimals
  const finalPrice = newPrice.toFixed(2);

  return (
    <div
      className="CARD w-full bg-white rounded-2xl shadow-[0_35px_60px_-45px_rgba(0,0,0,0.15)] overflow-hidden"
      onMouseEnter={() => setHoverProduct(true)}
      onMouseLeave={() => setHoverProduct(false)}
    >
      <div className="relative h-[280px] w-full">
        <Image
          priority
          width={300}
          height={300}
          alt="Product Item"
          src={hoverProduct ? props.images[0] : props.thumbnail}
          className="h-full w-full object-cover invert-[.025]"
        />

        {/* out-of-stock overlay */}
        {hoverProduct && props.stock === 0 && (
          <div className="absolute inset-0 bg-white/50 flex items-center justify-center">
            <span className="bg-black/85 text-white px-3 py-1">
              Out of Stock
            </span>
          </div>
        )}

        <span
          className={cn(
            "cursor-auto pointer-events-none select-none absolute bottom-4 left-4 font-bold bg-white px-3 py-0.5 rounded-full text-sm shadow-[0_3px_10px_-5px_rgba(0,0,0,0.15)]",
            hoverProduct ? "text-red-500" : "text-black"
          )}
        >
          {hoverProduct ? `-${props.discountPercentage}%` : props.category}
        </span>

        <Button
          icon={<RxMixerVertical />}
          variant="ghost"
          corner="rounded"
          className="absolute bottom-20 right-4 !hover:bg-white shadow-[0_3px_10px_-5px_rgba(0,0,0,0.15)]"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
        />

        <Button
          icon={<FaRegHeart />}
          variant="ghost"
          corner="rounded"
          className="absolute bottom-4 right-4 !hover:bg-white shadow-[0_3px_10px_-5px_rgba(0,0,0,0.15)]"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
        />
      </div>

      <div className="space-y-3 p-5">
        <div>
          <span className="text-sm text-slate-500 leading-tight line-clamp-1">
            {props.brand}
          </span>
          <span className="text-lg font-bold line-clamp-1">{props.title}</span>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-lg text-slate-500 line-through">
            € {props.price}
          </span>
          <span className="text-lg font-bold">€ {finalPrice}</span>
        </div>

        <div className="flex items-center gap-3">
          <StarRatingReview rating={props.rating} />
          <span
            title="stocks"
            className="text-slate-500"
          >{`(${props.stock})`}</span>
        </div>

        <div className="!mt-5">
          <Button
            layout="block"
            variant="outline"
            label="ADD TO CART"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setShowModal(true);
            }}
          />
        </div>

        {/* Dialog will show as Portal */}
        {showModal && (
          <Dialog
            header="Awesome!"
            message="Added to cart successfully."
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setShowModal(false);
            }}
          />
        )}
      </div>
    </div>
  );
};
