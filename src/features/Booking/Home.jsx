import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import HomeCarousel from "./components/HomeCarousel";
import MovieList from "./components/MovieList";
import { fetchBanners, fetchMovies } from "./thunk";
import { useParams, useSearchParams } from "react-router-dom";
const Home = () => {
  const dispatch = useDispatch();
  const param = useParams()
  const [searchParam, setUseSearchParam] = useSearchParams()
  useEffect(() => {
    dispatch(fetchBanners);
    // dispatch(fetchMovies(param.id))
    dispatch(fetchMovies(searchParam.get('page')))
  }, [dispatch]);

  // xử lý giữ trạng thái bằng param url
  useEffect(() => {
    // dispatch(fetchMovies(param.id))
    dispatch(fetchMovies(searchParam.get('page')))

  }, [searchParam.get('page')]);
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
