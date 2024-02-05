"use client";

import cn from "classnames";
import Image from "next/image";
import React, { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { RxMixerVertical } from "react-icons/rx";
import { Dialog } from "@/app/components/Dialog";
import { Button } from "@/app/components/Button/Button";
import { StarRatingReview } from "@/app/components/StarRatingReview";
import { CardProps } from "./types";

export const Card: React.FC<CardProps> = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [hoverProduct, setHoverProduct] = useState(false);

  return (
    <div
      className="CARD w-full bg-white rounded-2xl shadow-[0_35px_60px_-45px_rgba(0,0,0,0.15)] overflow-hidden"
      onMouseEnter={() => setHoverProduct(true)}
      onMouseLeave={() => setHoverProduct(false)}
    >
      <div className="relative">
        <Image
          priority
          width={300}
          height={300}
          alt="Product Item"
          src={hoverProduct ? props.images[0] : props.thumbnail}
          className="h-[280px] w-full object-cover invert-[.025]"
        />

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
          <span className="block text-sm text-slate-500 line-clamp-1">
            {props.brand}
          </span>
          <span className="block text-lg font-bold line-clamp-1">
            {props.title}
          </span>
        </div>

        <span className="block text-lg font-bold">€ {props.price}</span>

        <StarRatingReview />

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
