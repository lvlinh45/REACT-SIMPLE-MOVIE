import React, { useEffect, useState } from "react";
import { fetcher } from "../config";
import useSWR from "swr";
import MovieCard from "../component/movie/MovieCard";
import useDebounce from "../hooks/useDebounce";

// https://api.themoviedb.org/3/search/movie

const MoviePage = () => {
  const [filter, setFilter] = useState("");
  const [url, setUrl] = useState(
    "https://api.themoviedb.org/3/movie/popular?api_key=49f5e2c77c7ca2dce553af90f77b63dd"
  );
  const filterDebounce = useDebounce(filter, 500);

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const { data } = useSWR(url, fetcher);

  useEffect(() => {
    if (filterDebounce) {
      setUrl(
        `https://api.themoviedb.org/3/search/movie?api_key=49f5e2c77c7ca2dce553af90f77b63dd&query=${filterDebounce}`
      );
    } else {
      setUrl(
        "https://api.themoviedb.org/3/movie/popular?api_key=49f5e2c77c7ca2dce553af90f77b63dd"
      );
    }
  }, [filterDebounce]);
  const movies = data?.results || [];
  return (
    <div className="py-10 page-container">
      <div className="flex mb-10">
        <div className="flex-1">
          <input
            type="text"
            className="w-full p-4 text-white outline-none bg-slate-800"
            placeholder="Type here to search..."
            onChange={handleFilterChange}
          />
        </div>
        <button className="p-4 text-white bg-primary ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </button>
      </div>
      <div className="grid grid-cols-4 gap-10">
        {movies.length > 0 &&
          movies.map((item) => <MovieCard key={item.id} item={item} />)}
      </div>
    </div>
  );
};

export default MoviePage;
