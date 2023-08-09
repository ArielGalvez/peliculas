import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { MovieType, SingleMovie } from "../services/api";
import { Favorite } from "./Favorite";

interface Props {
  movie?: SingleMovie;
  handleFavorite: (movie: SingleMovie) => void;
}

export function MovieSingleCard(props: Props): React.ReactElement {
  const { movie, handleFavorite } = props;

  const favorites = useMemo<SingleMovie[]>(
    () =>
      localStorage.getItem("favorites")
        ? JSON.parse(localStorage.getItem("favorites") as string)
        : [],
    [localStorage]
  );

  if (!movie) return <article>not found</article>;

  return (
    <article className="relative bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <Link to={movie.imdbID}>
        <img
          className="w-full aspect-[150/225] object-cover rounded-lg"
          src={movie.Poster}
          alt={movie.Title}
        />
      </Link>
      <div className="absolute rounded-b-lg p-2 w-full bottom-0 left-0 bg-white">
        <h5 className="font-bold tracking-tight text-gray-900 dark:text-white truncate text-ellipsis">
          {movie.Title}
        </h5>
        <div className="flex w-full justify-between items-center">
          <p className="font-normal text-gray-700 dark:text-gray-400">
            {movie.Year}
          </p>
          <Favorite
            cheked={favorites.some((f) => f.imdbID === movie.imdbID)}
            onClick={() => handleFavorite(movie)}
          />
        </div>
      </div>
    </article>
  );
}
