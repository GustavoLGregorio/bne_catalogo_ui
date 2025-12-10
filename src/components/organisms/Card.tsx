import React from "react";
import Image from "next/image";
import type { StaticImport } from "next/dist/shared/lib/get-img-props";
import StarRating from "../atoms/StarRating";

export type CardProps = {
  src?: string | StaticImport;
  alt?: "";
};

export default function Card(props: CardProps) {
  return (
    <a className="flex w-[132px] flex-col gap-1" href="#">
      <div className="relative aspect-2/3 w-[132px] object-cover object-center">
        <Image
          className="rounded-lg"
          src={require("@/assets/img/the_fractalist.webp")}
          alt={props.alt ?? ""}
        />
        <div className="absolute top-0 right-0 m-1">
          <StarRating />
        </div>
      </div>
      <h3 className="font-inter truncate px-1 text-[16px] font-semibold">
        The Ghost Sequences
      </h3>
    </a>
  );
}
