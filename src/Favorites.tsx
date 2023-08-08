import React, { useState } from "react";
import { SingleMovie } from "./services/api";
import { MovieSingleCard } from "./components/MovieSingleCard";

interface Props {}

export function Favorites(props: Props): React.ReactElement {
  const [movies, setMovies] = useState<SingleMovie[]>(
    localStorage.getItem("favorites")
      ? JSON.parse(localStorage.getItem("favorites") as string)
      : []
  );

  const handleFavorite = (movie: SingleMovie) => {
    console.log(movie);
  };

  return (
    <main className="w-full min-h-[100vh]">
      <h1 className="font-bold text-center">Favorites</h1>
      <ul
        className="gap-6 pt-4 grid"
        style={{
          gridTemplateColumns: `repeat(auto-fill, minmax(185px, 1fr))`,
        }}
      >
        {movies.map((movie) => (
          <MovieSingleCard
            key={movie.imdbID}
            movie={movie}
            handleFavorite={handleFavorite}
          />
        ))}
      </ul>
    </main>
  );
}
