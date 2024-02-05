"use client";

import React from "react";
import { FaStar } from "react-icons/fa";
import { CardProps } from "./Card/types";

type RatingProps = Pick<CardProps, "rating">;

export const StarRatingReview: React.FC<RatingProps> = ({ rating }) => {
  // return null if it has no ratings
  if (!rating) return null;

  return (
    <div className="flex items-center gap-1">
      <div className="flex items-center gap-1">
        {[...Array(4)].map((_, index) => {
          return (
            <FaStar
              key={index + 1}
              size={16}
              color={"orange"}
              className="cursor-pointer"
            />
          );
        })}
        <FaStar size={16} color={"lightgrey"} className="cursor-pointer" />
      </div>
      <span className="text-slate-500">{rating}</span>
    </div>
  );
};
