import React from "react";
import { useSelector } from "react-redux";
import MovieItem from "./MovieItem";
const MovieList = () => {
  const moviesData = useSelector((state) => state.booking.movies);
  return (
    <section>
      <div className="container mx-auto">
        <h1 className="text-center text-7xl mt-9 font-semibold">Movie List</h1>
        <div className="grid grid-cols-4 gap-5">
          {moviesData.items?.map((item) => {
            return <MovieItem key={item.maPhim} item={item} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default MovieList;
