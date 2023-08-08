import React from "react";
import { MovieType } from "../services/api";
import { Favorite } from "./Favorite";

interface Props {
  movie: MovieType;
}

export function MovieCard(props: Props): React.ReactElement {
  const { movie } = props;
  return (
    <article className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
      <img
        className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
        src={movie.Poster}
        alt={movie.Title}
      />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {movie?.Title}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {movie.Year}
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {movie.Plot}
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {movie.Genre}
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {movie.Actors}
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {movie.Awards}
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {movie.Country}
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {movie.Director}
        </p>
        <Favorite />
      </div>
    </article>
  );
}
