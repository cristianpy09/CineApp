import { Movie } from "../interfaces/movies";
import Card from "./Card";

export default async function ListCards() {
  const response = await fetch(
    "https://api.themoviedb.org/3/movie/now_playing?language=es-ES&page=1",
    {
      headers: {
        Accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OGQ5ODlmNjBkMDg3N2U3MDg2M2EzMTRiNTEyNjE3NSIsIm5iZiI6MTc2MzcyNzI2OS4yMzIsInN1YiI6IjY5MjA1N2E1ODJlMTc2Yjc3YjVkNjAwNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.C_qZjj1HsJBiISsS8gHKGV1PaunAIGYN33T-TQ4_2Z0",
      },
    }
  );
  if (!response.ok) {
    throw new Error("Failed to fetch now playing movies");
  }
  const data = await response.json();
  console.log(data); 
  return(

    <div className="grid grid-cols-5 p-15 gap-4 " >
        {data.results.map((movie:Movie)=>(
            <Card key={movie.id} name={movie.original_title} date={movie.release_date} description={movie.overview} img={movie.poster_path} />
        ))}
        
    </div>
  ) 
}
