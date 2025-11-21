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
    <article className="relative w-53 h-90 bg-red-500 rounded-xl overflow-hidden ">
      <h1 className="text-center">{name}</h1>
      <img className="h-55 w-full p-1 "  src={`https://image.tmdb.org/t/p/w400${img}`}></img>
      <div className="mt-0 p-1 ">{description}</div>

      <button className="absolute bottom-2 right-2 bg-amber-300 rounded-xl p-1 text-black cursor-pointer hover:bg-amber-200  ">
        ver mas
      </button>
    </article>
  );
}
