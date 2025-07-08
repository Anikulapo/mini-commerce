"use client";


import { Star } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Product } from "@/types/Product";
import Link from "next/link";




// This component displays a clothing item card with an image, title, rating, and price information.
interface Props {
  good: Product;
}

const ClothCard: React.FC<Props> = ({ good }) => {
  const hasDiscount =
    good.newPrice !== undefined && good.oldPrice !== undefined;

  return (
      <Link href={`/product/${good.slug}`}>
        <div className="flex flex-col gap-[2px] md:gap-2 text-black items-start w-4/9 md:w-[180px] lg:w-[300px]  ">
          <Image
            className="rounded-[20px] w-full h-[180px] md:h-[250px] lg:w-[300px] lg:h-[300px] object-cover"
            src={good.image[0]}
            alt={good.title}
            width={150}
            height={300}
            priority
          />
          <p className="font-al text-[12px] lg:text-[17px]">{good.title}</p>
          <div className="flex gap-1">
            {Array.from({ length: Math.round(good.rating) }, (_, index) => (
              <Star
                key={index}
                className="w-3 lg:w-5 h-5 fill-yellow-400 text-yellow-400"
              />
            ))}
          </div>
          {hasDiscount ? (
            <div className="flex gap-3 items-center justify-center">
              <p className="font-al font-bold lg:text-xl text-[12px]">
                ${good.newPrice?.toFixed(2)}
              </p>
              <p className="font-al font-bold text-xl text-[rgba(0,0,0,.4)] line-through lg:text-xl text-[12px] pb-[2px]">
                ${good.oldPrice?.toFixed(2)}
              </p>
              <button
                className="text-[#FF3333] bg-[rgba(255,51,51,.1)] rounded-full
                  lg:text-xl md:text-[12px] px-2 py-1 mb-[2px]
                  lg:px-4 lg:py-2 font-al text-sm hover:bg-[#FF3333] hover:text-white transition-colors duration-300"
                title="Discount"
              >
                -
                {(
                  ((good.oldPrice! - good.newPrice!) / good.oldPrice!) *
                  100
                ).toFixed(0)}
                %
              </button>
            </div>
          ) : (
            <p className="font-al font-bold text-xl">
              ${good.price?.toFixed(2)}
            </p>
          )}
        </div>
      </Link>
  );
};

export default ClothCard;
