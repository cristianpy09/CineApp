import React from "react";
type Props = {
  name?: string;
  date?: string;
  img?: string | null;
  description?: string;
  id?: number;
};

export default function CardDetail({
  name,
  img,
  date,
  description,
  id,
}: Props) {
  return (
    <div>
      <article className="relative w-100 h-130 bg-red-500 rounded-xl overflow-hidden cursor-pointer  hover:brightness-50 ">
        <img
          className="h-full w-full  "
          src={`https://image.tmdb.org/t/p/w400${img}`}
        ></img>
      </article>

      <h1>{name}</h1>
    </div>
  );
}
