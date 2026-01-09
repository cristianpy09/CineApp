import CardDetail from "@/app/components/CardDetail";
import { Movie } from "@/app/interfaces/movies";
import { Params } from "next/dist/server/request/params";
import React from "react";
const URL =
  "https://api.themoviedb.org/3/movie"

interface PageProps {
  params: {
    id: number;
  };
}
export default async function page({ params }: PageProps) {
  const { id } = await params;
  const response = await fetch(
    `${URL}/${id}`,
    {
      headers: {
        Accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OGQ5ODlmNjBkMDg3N2U3MDg2M2EzMTRiNTEyNjE3NSIsIm5iZiI6MTc2MzcyNzI2OS4yMzIsInN1YiI6IjY5MjA1N2E1ODJlMTc2Yjc3YjVkNjAwNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.C_qZjj1HsJBiISsS8gHKGV1PaunAIGYN33T-TQ4_2Z0",
      },
    }
    
  )
  const data = await response.json()
  console.log(data)
  
  return (
  <div className="p-15  flex"  >
    <CardDetail key={data.id} name={data.original_title} date={data.release_date} description={data.overview} img={data.poster_path} />
    <h3 className="p-10 w-100" >{data.overview}</h3>
  </div>)
}
