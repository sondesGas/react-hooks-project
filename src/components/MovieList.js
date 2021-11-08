import React from "react";
import MovieCard from "./MovieCard";
import { Filmlist } from "../Filmlist";

const MovieList = ({ movieList }) => {
  return (
    <div className="row gx-4 gy-2">
      {movieList.map((film, i) => (
        <MovieCard film={film} key={i} />
      ))}
    </div>
  );
};

export default MovieList;
