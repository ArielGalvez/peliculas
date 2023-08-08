import React from "react";
import { Link } from "react-router-dom";
import { MovieType, SingleMovie } from "../services/api";
import { Favorite } from "./Favorite";

interface Props {
  movie?: SingleMovie;
}

export function MovieSingleCard(props: Props): React.ReactElement {
  const { movie } = props;

  if (!movie) return <article>not found</article>;

  return (
    <article className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <Link to={movie.imdbID}>
        <img
          className="w-full aspect-[150/225] object-cover rounded-t-lg"
          src={movie.Poster}
          alt={movie.Title}
        />
      <div className="p-2">
          <h5 className="font-bold tracking-tight text-gray-900 dark:text-white truncate text-ellipsis">
            {movie.Title}
          </h5>
        <div className="flex w-full justify-between items-center">
          <p className="font-normal text-gray-700 dark:text-gray-400">
            {movie.Year}
          </p>
          <Favorite cheked={false} />
        </div>
      </div>
      </Link>
    </article>
  );
}
