/* eslint-disable react-refresh/only-export-components */
import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../button/Button";
import { tmdbAPI } from "../../config";
import PropTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";
import LoadingSkelenton from "../loading/LoadingSkelenton";
const MovieCard = ({ item }) => {
  const { title, vote_average, release_date, poster_path, id } = item;
  const navigate = useNavigate();
  return (
    <div className="flex flex-col h-full p-3 text-white rounded-lg select-none movie-card bg-slate-800">
      <img
        src={tmdbAPI.imamge500(poster_path)}
        alt=""
        className="w-full h-[250px] object-cover rounded-lg mb-5"
      />
      <div className="flex flex-col flex-1">
        <h3 className="mb-3 text-xl font-bold text-white">{title}</h3>
        <div className="flex items-center justify-between mb-10 text-sm opacity-50">
          <span>{new Date(release_date).getFullYear()}</span>
          <span>{vote_average}</span>
        </div>
        <Button onClick={() => navigate(`/movies/${id}`)} bgColor={"secondary"}>
          Watch now
        </Button>
      </div>
    </div>
  );
};

MovieCard.propTypes = {
  item: PropTypes.shape,
  title: PropTypes.string,
  vote_average: PropTypes.number,
  release_date: PropTypes.string,
  poster_path: PropTypes.string,
  id: PropTypes.number,
};

function FallbackComponent() {
  return (
    <p className="text-red-400 bg-red-50">
      Something went wrong with this component
    </p>
  );
}

export default withErrorBoundary(MovieCard, { FallbackComponent });

export const MovieCardSkeleton = () => {
  return (
    <div className="flex flex-col h-full p-3 text-white rounded-lg select-none movie-card bg-slate-800">
      <LoadingSkelenton
        width="100%"
        height="250px"
        radius="8px"
        className="mb-5"
      ></LoadingSkelenton>
      <div className="flex flex-col flex-1">
        <h3 className="mb-3 text-xl font-bold text-white">
          <LoadingSkelenton width="100%" height="20px"></LoadingSkelenton>
        </h3>
        <div className="flex items-center justify-between mb-10 text-sm opacity-50">
          <span>
            <LoadingSkelenton width="50px" height="10px"></LoadingSkelenton>
          </span>
          <span>
            <LoadingSkelenton width="30px" height="10px"></LoadingSkelenton>
          </span>
        </div>
        <LoadingSkelenton
          width="100%"
          radius="6px"
          height="45px"
        ></LoadingSkelenton>
      </div>
    </div>
  );
};
