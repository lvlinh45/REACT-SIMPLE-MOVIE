import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { apiKey, fetcher } from "../config";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`,
    fetcher
  );
  console.log("TCL: MovieDetailsPage -> data", data);
  if (!data) return null;
  const { backdrop_path, poster_path, title, genres, overview } = data;

  return (
    <div className="py-10 ">
      <div className="w-full h-[400px] relative">
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        <div
          className="w-full h-full bg-no-repeat bg-cover"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${backdrop_path})`,
          }}
        ></div>
      </div>
      <div className="w-full h-[400px] max-w-[800px] mx-auto -mt-[200px] relative z-10 pb-10">
        <img
          className="object-cover w-full h-full rounded-xl"
          src={`https://image.tmdb.org/t/p/original/${poster_path}`}
          alt=""
        />
      </div>
      <h1 className="mb-10 text-3xl font-bold text-center text-white">
        {title}
      </h1>

      {genres.length > 0 && (
        <div className="flex items-center justify-center mb-10 gap-x-5">
          {genres.map((item) => (
            <span
              className="px-4 py-2 border rounded border-primary text-primary"
              key={item.id}
            >
              {item.name}
            </span>
          ))}
        </div>
      )}
      <p className="text-sm leading-relaxed text-center max-w-[600px] mx-auto">
        {overview}
      </p>
    </div>
  );
};

export default MovieDetailsPage;
