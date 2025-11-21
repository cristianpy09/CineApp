import Link from "next/link";
import React from "react";
type Props = {
  name: string;
  date: string;
  img: string | null;
  description: string;
};

export default function Card({ name, img, date, description }: Props) {
  return (
    <article className="relative w-40 h-50 bg-red-500 rounded-xl  ">
      <h1>{name}</h1>
      <img src={`https://image.tmdb.org/t/p/w500${img}`}></img>
      <div className="mt-18">{description}</div>

      <button className="absolute bottom-2 right-2 bg-amber-300 rounded-xl p-1 text-black cursor-pointer hover:bg-amber-200    ">
        ver mas
      </button>
    </article>
  );
}
