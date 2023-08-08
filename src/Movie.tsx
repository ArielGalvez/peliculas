import React, { useEffect, useState } from "react";
import { MovieCard } from "./components/MovieCard";
import { useParams } from "react-router-dom";
import { MovieType, searchMovieById } from "./services/api";

interface Props {
  // propName: propType
}

export function Movie(props: Props): React.ReactElement {
  const { id } = useParams();
  const [movie, setMovie] = useState<MovieType>();
  // const { propName } = props;
  console.log(id);
  useEffect(() => {
    if (id) {
      searchMovieById(id).then((res) => {
        console.log(res);
        setMovie(res);
      });
    }
  }, []);
  if (!movie) return <div>Not Found</div>;

  return (
    <main className="w-full flex justify-center items-center">
      <MovieCard movie={movie} />
    </main>
  );
}
