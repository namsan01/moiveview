import styled from "@emotion/styled";
import React from "react";
import { useLocation } from "react-router";
import BasicLayout from "../layouts/BasicLayout";
import { Movie } from "./MoviePage";
import useCustomMove from "../hooks/useCustomMove";

type MovieDetailProps = {
  movie: Movie;
};

const DetailWrap = styled.div`
  width: 100%;
  min-height: 780px;
  background: #d9d9d9;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`;

const DetailPrev = styled.div`
  position: absolute;
  cursor: pointer;
  top: 90px;
  left: 0;
  img {
    width: 50px;
    height: 50px;
    transform: rotate(270deg);
  }
`;

const DetailLeft = styled.div`
  img {
    width: 350px;
  }
`;

const DetailRight = styled.div`
  width: 700px;
  height: 525px;
  border-radius: 25px;
  background: #fff;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h1 {
    font-size: 4rem;
    margin: 0.5rem 0;
  }
  h2 {
    font-size: 2.5rem;
  }
  @media screen and (max-width: 1248px) {
    width: 500px;
    height: 350px;
    padding: 15px;
  }
`;

const DetailRightMain = styled.div`
  display: flex;
  flex-direction: column;
`;

const DetailRightEtc = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const MovieDetail: React.FC<MovieDetailProps> = () => {
  const state = useLocation().state as Movie;
  const image_Url = "https://image.tmdb.org/t/p/w220_and_h330_face/";
  const { moveToPrev } = useCustomMove();

  return (
    <>
      <BasicLayout>
        <DetailWrap>
          <DetailPrev onClick={() => moveToPrev()}>
            <img
              src={process.env.PUBLIC_URL + "/assets/images/bt_arrow.svg"}
            ></img>
          </DetailPrev>

          <DetailLeft>
            {state && state.poster_path && (
              <img src={`${image_Url}${state.poster_path}`} alt={state.title} />
            )}
          </DetailLeft>
          <DetailRight>
            <DetailRightMain>
              <h1>제목 : {state && state.title}</h1>
              <h2>{state && state.overview}</h2>
            </DetailRightMain>
            <DetailRightEtc>
              <h2>개봉일자 : {state && state.release_date}</h2>
              <h2>평점 : {state && state.vote_average.toFixed(2)}</h2>
            </DetailRightEtc>
          </DetailRight>
        </DetailWrap>
      </BasicLayout>
    </>
  );
};

export default MovieDetail;
