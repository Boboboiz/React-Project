import React from "react";
import { useDispatch, useSelector } from "react-redux";
import MovieItem from "./MovieItem";
import { Pagination } from "antd";
import { fetchMovies } from "../thunk";
import { useNavigate } from "react-router-dom";
import { useParams, useSearchParams } from "react-router-dom";
const MovieList = () => {
  const moviesData = useSelector((state) => state.booking.movies);
  const dispatch = useDispatch();
  const params = useParams();
  const [searchParam, setUseSearchParam] = useSearchParams();
  let navigate = useNavigate();
  return (
    <section>
      <div className="container mx-auto">
        <h1 className="text-center text-7xl mt-9 font-semibold">Movie List</h1>
        <div className="grid grid-cols-4 gap-5">
          {moviesData.items?.map((item) => {
            return <MovieItem key={item.maPhim} item={item} />;
          })}
        </div>

        {/* Phân trang */}
        <Pagination
          current={Number(searchParam.get('page'))}
          pageSize={8}
          total={moviesData.totalCount}
          onChange={(page, pageSize) => {
            // dispatch(fetchMovies(page))
            // navigate("/" + page)
            // localhost:3000?page=1234
            setUseSearchParam({ page });
          }}
        />
      </div>
    </section>
  );
};

export default MovieList;
