import { Pagination } from "antd";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getMyMovie } from "../api/movieApi";
import MovieBox from "../components/movie/MovieBox";
import BasicLayout from "../layouts/BasicLayout";
import {
  MoiveWrap,
  MovieHeadTxt,
  MovieMain,
  MoviePagination,
  MovieTap,
} from "../styles/moviepage/moviePageStyle";
import RecommendAnimation from "../components/animation/RecommendAnimation";

export type Movie = {
  id: number;
  title: string;
  release_date: string;
  poster_path: string;
  overview?: string;
  vote_average: number;
};
export type MovieData = {
  results: Movie[];
};

const RecommendPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState<Movie[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  const fetchData = () => {
    try {
      const successFn = (data: MovieData) => {
        setMovies(data.results);
        setIsLoading(false);
        console.log(data);
      };

      const failFn = (error: Error) => {
        console.error("에러 메시지:", error.message);
      };

      const errorFn = (error: Error) => {
        console.error("에러:", error.message);
      };

      getMyMovie(successFn, failFn, errorFn);
    } catch (error) {
      console.error("에러:", Error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const MoviesPerPage = 6 * 2;
  const indexOfLastMovie = currentPage * MoviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - MoviesPerPage;
  const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const onClickMoveToDetail = (movie: Movie) => {
    navigate(`/movie/detail/${movie.id}`, { state: movie });
  };

  return (
    <BasicLayout>
      <MoiveWrap>
        <MovieHeadTxt>
          {!isLoading && <RecommendAnimation />}
          {!isLoading && (
            <div>
              <h1 style={{ marginTop: "0px", marginBottom: "17px" }}>
                추천영화
              </h1>
            </div>
          )}
        </MovieHeadTxt>
        <MovieMain>
          <MovieTap>
            {!isLoading &&
              currentMovies.map((movie: Movie) => (
                <div key={movie.id}>
                  <MovieBox
                    movie={movie}
                    onClick={() => onClickMoveToDetail(movie)}
                  />
                </div>
              ))}
          </MovieTap>
        </MovieMain>
        <MoviePagination>
          {!isLoading && movies.length > 13 && (
            <Pagination
              current={currentPage}
              total={movies.length}
              pageSize={MoviesPerPage}
              onChange={paginate}
            />
          )}
        </MoviePagination>
      </MoiveWrap>
    </BasicLayout>
  );
};

export default RecommendPage;
