import React from "react";
import {
  MovieBoxInfo,
  MovieBoxWrap,
} from "../../styles/moviepage/moviePageStyle";
import { Movie } from "../../pages/movie/MoviePage";

type MovieCardProps = {
  movie: Movie;
  onClick: (movieId: number) => void;
};

const image_Url = "https://image.tmdb.org/t/p/w220_and_h330_face/";

const MovieBox: React.FC<MovieCardProps> = ({ movie, onClick }) => {
  const handleMovieClick = () => {
    onClick(movie.id);
  };
  return (
    <div onClick={() => handleMovieClick()}>
      <MovieBoxWrap>
        <img src={`${image_Url}${movie.poster_path}`} alt={movie.title} />{" "}
        <MovieBoxInfo>
          <div>
            <h1>{movie.title}</h1>
          </div>
          <div>
            <p>{`개봉 : ${movie.release_date}`}</p>
            <p>{`평점 : ${movie.vote_average.toFixed(2)}`}</p>
          </div>
        </MovieBoxInfo>
      </MovieBoxWrap>
    </div>
  );
};

export default MovieBox;
