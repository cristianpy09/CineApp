import { Params } from "next/dist/server/request/params";
import React from "react";
const URL =
  "https://api.themoviedb.org/3/movie/now_playing?language=es-ES&page=1";

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
  
  return <div>pagina de detalles con id:{id}</div>;
}
