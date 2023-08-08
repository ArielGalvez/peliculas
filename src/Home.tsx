import React, { useState } from "react";
import { SingleMovie, searchByTerm } from "./services/api";
import { MovieSingleCard } from "./components/MovieSingleCard";
import Navbar from "./components/Navbar";

export function Home(): React.ReactElement {
  const [search, setSearch] = useState(
    localStorage.getItem("search")
       ||
      ""
  );
  const [movies, setMovies] = useState<SingleMovie[]>(localStorage.getItem("movies")
  ? JSON.parse(localStorage.getItem("movies") as string)
  : []);
  const [notFound, setNotFound] = useState("");

  const searchMovie = () => {
    searchByTerm(search).then((res) => {
      if (res.Response === "True") {
        setNotFound("");
        setMovies(res.Search);
        localStorage.setItem("movies", JSON.stringify(res.Search));
      } else {
        setNotFound("Not found results");
      }
    });
  };

  return (
    <main className="flex flex-col-reverse">
      <section className={`h-full p-2`}>
        <div className="flex flex-col justify-center items-center p-2">
          <h1 className="font-bold">Wellcome to Master Movie Searcher</h1>
          <img src="/icon.svg" alt="logo" width={64} height={64} />
        </div>
        <section className="w-60 mx-auto">
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search Movie"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                localStorage.setItem("search", e.target.value);
              }}
            />
            <button
              onClick={searchMovie}
              className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Search
            </button>
          </div>
        </section>
        <ul
          className="gap-6 pt-4 grid"
          style={{
            gridTemplateColumns: `repeat(auto-fill, minmax(185px, 1fr))`,
          }}
        >
          {notFound && <p>{notFound}</p>}
          {movies.map((movie) => (
            <MovieSingleCard key={movie.imdbID} movie={movie} />
          ))}
        </ul>
      </section>
      <Navbar />
    </main>
  );
}
