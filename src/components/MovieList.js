import React from "react";
import MovieCart from "./MovieCart";

const MovieList = ({ title, movies }) => {
  //console.log(movies, title);

  if(!movies) return;

  return (
    <div className=" px-6">
      <h1 className="text-2xl py-4 text-white">{title}</h1>
      <div className="flex">
        <div className="flex">
          {movies.map((movie) => (
            <MovieCart key={movie?.id} posterPath={movie?.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
