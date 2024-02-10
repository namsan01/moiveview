import { Pagination } from "antd";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getNowMovie } from "../api/movieApi";
import MovieBox from "../components/movie/MovieBox";
import MovieButton from "../components/movie/MovieButton";
import BasicLayout from "../layouts/BasicLayout";
import {
  MoiveWrap,
  MovieHead,
  MovieHeadTxt,
  MovieMain,
  MoviePagination,
} from "../styles/moviepage/moviePageStyle";

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

export type Category = {
  id: number;
  label: string;
  url: string;
};

const category_List = [
  { id: 0, label: "현재 상영작", url: "/now_playing" },
  { id: 1, label: "인기있는 영화", url: "/popular" },
];

const MoviePage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState<Movie[]>([]);
  const [categoryIndex, setCategoryIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const setCategory = (index: number) => {
    setCategoryIndex(index);
  };
  const navigate = useNavigate();

  const fetchData = async (categoryIndex: number) => {
    try {
      const successFn = (data: MovieData) => {
        setMovies(data.results);
        setIsLoading(false);
      };

      const failFn = (error: Error) => {
        console.error("에러 메시지:", error.message);
      };

      const errorFn = (error: Error) => {
        console.error("에러:", error.message);
      };

      await getNowMovie(successFn, failFn, errorFn, categoryIndex);
    } catch (error) {
      console.error("에러:", Error);
    }
  };

  useEffect(() => {
    fetchData(categoryIndex);
  }, [categoryIndex]);

  const MoviesPerPage = 4 * 2;
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
        <div>
          <MovieHeadTxt>
            <h1>요즘 영화</h1>
          </MovieHeadTxt>
        </div>
        <MovieHead>
          {category_List.map(category => (
            <div key={category.id}>
              <MovieButton
                category={category}
                onClick={setCategory}
                isSelected={category.id === categoryIndex}
              />
            </div>
          ))}
        </MovieHead>

        <MovieMain>
          {!isLoading &&
            currentMovies.map((movie: Movie) => (
              <div key={movie.id}>
                <MovieBox
                  movie={movie}
                  onClick={() => onClickMoveToDetail(movie)}
                />
              </div>
            ))}
        </MovieMain>
        <MoviePagination>
          <Pagination
            current={currentPage}
            total={movies.length}
            pageSize={MoviesPerPage}
            onChange={paginate}
          />
        </MoviePagination>
      </MoiveWrap>
    </BasicLayout>
  );
};

export default MoviePage;
