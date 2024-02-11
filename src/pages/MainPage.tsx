import React from "react";
import Animation from "../components/animation/MainAnimation";
import MainBoxInfo from "../components/main/MovieBoxInfo";
import useCustomMove from "../hooks/useCustomMove";
import BasicLayout from "../layouts/BasicLayout";
import {
  MainBoxBtWrap,
  MainLeft,
  MainRight,
  MainWrap,
} from "../styles/mainpage/mainPageStyle";

const MainPage = () => {
  const { moveToMovie, moveToRecommend } = useCustomMove();
  return (
    <BasicLayout>
      <MainWrap>
        <MainLeft>
          <Animation />
        </MainLeft>
        <MainRight>
          {/* 박스 글 영역 */}
          <MainBoxInfo />
          {/* 버튼 영역 */}
          <MainBoxBtWrap>
            <button onClick={() => moveToMovie()}>상영작 보러가기</button>
            <button onClick={() => moveToRecommend()}>추천작 보러가기</button>
          </MainBoxBtWrap>
        </MainRight>
      </MainWrap>
    </BasicLayout>
  );
};

export default MainPage;
