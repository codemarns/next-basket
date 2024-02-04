import React from "react";
import { FaStar } from "react-icons/fa";

export const StarRatingReview = () => {
  return (
    <div className="flex items-center gap-3">
      <div className="flex items-center gap-1">
        {[...Array(4)].map((index) => {
          return (
            <FaStar
              key={index + 1}
              size={20}
              color={"orange"}
              className="cursor-pointer"
            />
          );
        })}
        <FaStar size={20} color={"lightgrey"} className="cursor-pointer" />
      </div>
      <span className="text-slate-500">{`5.8 (54)`}</span>
    </div>
  );
};
