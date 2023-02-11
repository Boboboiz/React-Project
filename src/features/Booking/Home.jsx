import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import HomeCarousel from "./components/HomeCarousel";
import MovieList from "./components/MovieList";
import { fetchBanners, fetchMovies } from "./thunk";
const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBanners);
    dispatch(fetchMovies)
  }, [dispatch]);

  return (
    <div>
      <HomeCarousel />
      <MovieList />
    </div>
  );
};


// render => useEffect chạy (tương đồng với componentDidMount)
// re-render => check dependency =>useEffect chạy lại
export default Home;
