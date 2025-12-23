import Link from "next/link";
import React from "react";
type Props = {
  name: string;
  date: string;
  img: string | null;
  description: string;
  id:number
};

export default function Card({ name, img, date, description ,id}: Props) {
  return (
    <div>
      <Link href={`/${id}`}>
      <article className="relative w-50 h-70 bg-red-500 rounded-xl overflow-hidden cursor-pointer  hover:brightness-50 ">
        <img
          className="h-full w-full  "
          src={`https://image.tmdb.org/t/p/w400${img}`}
          ></img>

       
      </article>
          </Link>
      <h1>{name}</h1>
    </div>
  );
}
