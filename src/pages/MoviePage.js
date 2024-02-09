import React, { useEffect, useState } from "react";
import BasicLayout from "../layouts/BasicLayout";
import styled from "@emotion/styled";
import { getNowMovie } from "../api/movieApi";

const MoiveWrap = styled.div`
  width: 100%;
  height: 780px;
`;

const MovieMain = styled.div`
  width: 1440px;
  height: 780px;
  background: black;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const MovieBox = styled.div`
  width: 400px;
  margin-bottom: 50px;
  padding: 10px;
  height: 360px;
  background: beige;
`;

const MoviePage = () => {
  const [serverData, setServerData] = useState([]);

  const fetchData = () => {
    const successFn = data => {
      setServerData(data);
      console.log("영화 정보:", data);
    };

    const failFn = errorMessage => {
      console.error("에러 메시지:", errorMessage);
    };

    const errorFn = error => {
      console.error("에러:", error);
    };

    getNowMovie(successFn, failFn, errorFn);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <BasicLayout>
        <MoiveWrap>
          <MovieMain>
            <MovieBox></MovieBox>
          </MovieMain>
        </MoiveWrap>
      </BasicLayout>
    </>
  );
};

export default MoviePage;
