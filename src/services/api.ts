import { API_KEY } from "../config";

export const searchByTerm = (term: string) => {
  return fetch(
    `https://www.omdbapi.com/?s=${term}&page=1&apikey=${API_KEY}&`
  ).then((res) => res.json()) as Promise<SearchResults>;
};

export const searchMovieById = (id: string) => {
  return fetch(`https://www.omdbapi.com/?i=${id}&apikey=${API_KEY}&`).then(
    (res) => res.json()
  ) as Promise<MovieType>;
};

// example
const movieFull = {
  Title: "Everything Everywhere All at Once",
  Year: "2022",
  Rated: "R",
  Released: "08 Apr 2022",
  Runtime: "139 min",
  Genre: "Action, Adventure, Comedy",
  Director: "Daniel Kwan, Daniel Scheinert",
  Writer: "Daniel Kwan, Daniel Scheinert",
  Actors: "Michelle Yeoh, Stephanie Hsu, Jamie Lee Curtis",
  Plot: "A middle-aged Chinese immigrant is swept up into an insane adventure in which she alone can save existence by exploring other universes and connecting with the lives she could have led.",
  Language: "English, Mandarin, Cantonese",
  Country: "United States",
  Awards: "Won 7 Oscars. 370 wins & 349 nominations total",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BYTdiOTIyZTQtNmQ1OS00NjZlLWIyMTgtYzk5Y2M3ZDVmMDk1XkEyXkFqcGdeQXVyMTAzMDg4NzU0._V1_SX300.jpg",
  Ratings: [
    {
      Source: "Internet Movie Database",
      Value: "7.8/10",
    },
    {
      Source: "Rotten Tomatoes",
      Value: "94%",
    },
    {
      Source: "Metacritic",
      Value: "81/100",
    },
  ],
  Metascore: "81",
  imdbRating: "7.8",
  imdbVotes: "464,076",
  imdbID: "tt6710474",
  Type: "movie",
  DVD: "07 Jun 2022",
  BoxOffice: "$77,191,785",
  Production: "N/A",
  Website: "N/A",
  Response: "True",
};

const singleMovie = {
  Title: "Batman: The Killing Joke",
  Year: "2016",
  imdbID: "tt4853102",
  Type: "movie",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BMTdjZTliODYtNWExMi00NjQ1LWIzN2MtN2Q5NTg5NTk3NzliL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
};

export type MovieType = typeof movieFull;

export type SingleMovie = typeof singleMovie;

export type SearchResults = {
  Search: SingleMovie[];
  Response: "True" | "False";
  totalResults: string;
};
