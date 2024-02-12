import { Pagination } from "antd";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getNowMovie } from "../../api/movieApi";
import MovieBox from "../../components/movie/MovieBox";
import MovieButton from "../../components/movie/MovieButton";
import BasicLayout from "../../layouts/BasicLayout";
import {
  MoiveWrap,
  MovieHead,
  MovieHeadDate,
  MovieHeadTxt,
  MovieMain,
  MoviePagination,
  MovieTap,
} from "../../styles/moviepage/moviePageStyle";
import MovieAnimation from "../../components/animation/MovieAnimation";

export interface Movie {
  id: number;
  title: string;
  release_date: string;
  poster_path: string;
  overview?: string;
  vote_average: number;
  maximun?: string;
  minimum?: string;
}

export interface MovieData {
  results: Movie[];
}

interface MovieWithDates extends MovieData {
  dates: {
    maximum?: string;
    minimum?: string;
  };
}
export interface Category {
  id: number;
  label: string;
  url: string;
}

const category_List = [
  { id: 0, label: "현재 상영작", url: "/now_playing" },
  { id: 1, label: "인기있는 영화", url: "/popular" },
];

const MoviePage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState<Movie[]>([]);
  const [dates, setDates] = useState<{ maximum?: string; minimum?: string }>({
    maximum: "",
    minimum: "",
  });
  const [categoryIndex, setCategoryIndex] = useState(0);
  const [page, setPage] = useState(1);
  const setCategory = (index: number) => {
    setCategoryIndex(index);
  };
  const navigate = useNavigate();

  const fetchData = async (categoryIndex: number) => {
    try {
      const successFn = (data: MovieWithDates) => {
        const { results, dates } = data;
        setMovies(results);
        setDates(dates);
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

  const MoviesPerPage = 6 * 2;
  const indexOfLastMovie = page * MoviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - MoviesPerPage;
  const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);

  const paginate = (pageNumber: number) => setPage(pageNumber);

  const onClickMoveToDetail = (movie: Movie) => {
    navigate(`/movie/detail/${movie.id}`, { state: movie });
  };

  return (
    <BasicLayout>
      <MoiveWrap>
        <MovieHeadTxt>
          {!isLoading && <MovieAnimation />}
          <div>{dates && <h1>검색기간</h1>}</div>
        </MovieHeadTxt>

        {dates && (
          <MovieHeadDate>
            <h1>
              {dates.minimum}
              {""}
            </h1>
            <h1>
              {""}~{""}
            </h1>
            <h1>
              {""}
              {dates.maximum}
            </h1>
          </MovieHeadDate>
        )}

        <MovieHead>
          {!isLoading &&
            category_List.map(category => (
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
          {!isLoading && (
            <Pagination
              current={page}
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

export default MoviePage;
