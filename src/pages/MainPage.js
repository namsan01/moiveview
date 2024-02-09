import React from "react";
import BasicLayout from "../layouts/BasicLayout";
import styled from "@emotion/styled";
import Animation from "../components/Animation";
import useCustomMove from "../hooks/useCustomMove";

const MainWrap = styled.div`
  width: 100%;
  height: 780px;
  background: #4f4f51;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const MainLeft = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 1248px) {
    width: 350px;
    height: 350px;
  }
`;

const MainRight = styled.div`
  width: 700px;
  height: 400px;
  background: #d9d9d9;
  padding: 20px;
  @media screen and (max-width: 1248px) {
    width: 500px;
    height: 350px;
    padding: 15px;
  }
`;

const MainBoxInfo = styled.div`
  h1 {
    font-size: 3rem;
    font-weight: 700;
    margin: 0 0 10px 0;
  }
  h2 {
    font-size: 2rem;
    margin-bottom: 10px;
  }
  @media screen and (max-width: 1248px) {
    h1 {
      font-size: 2.5rem;
    }
    h2 {
      font-size: 1.5rem;
    }
  }
`;

const MainBoxBtWrap = styled.div`
  display: flex;
  height: 100px;
  align-items: center;
  gap: 30px;
  button {
    width: 150px;
    height: 60px;
    background-color: #4f95ff;
    border: none;
    border-radius: 10px;
    font-size: 15px;
    color: white;
    cursor: pointer;
  }
  @media screen and (max-width: 1248px) {
    gap: 20px;
    height: 80px;
  }
`;

const MainPage = () => {
  const { moveToMovie } = useCustomMove();
  return (
    <BasicLayout>
      <MainWrap>
        <MainLeft>
          <Animation />
        </MainLeft>
        <MainRight>
          <MainBoxInfo>
            <h1>환영합니다! 영화의 세계로 여러분을 초대합니다.</h1>
            <h2>여기는 영화를 사랑하는 이들을 위한 작은 공간입니다.</h2>
            <h2>
              영화는 우리의 삶을 더 풍부하게 만들어주는 특별한 예술이자
              경험입니다.
            </h2>
            <h2>
              이곳에서는 영화의 다양한 매력을 탐험하고, 새로운 발견을 할 수 있는
              여정에 함께할 것입니다.
            </h2>

            <h2>
              우리는 서로의 취향과 추천을 공유하고, 함께 대화하며 영화에 대한
              열정을 나눌 수 있습니다.
            </h2>
            <h2>
              우리의 이야기와 경험을 공유하며, 영화의 매력을 더욱 깊이 느껴봐요.
            </h2>
          </MainBoxInfo>
          <MainBoxBtWrap>
            <button onClick={() => moveToMovie()}>상영작 보러가기</button>
            <button>추천작 보러가기</button>
          </MainBoxBtWrap>
        </MainRight>
      </MainWrap>
    </BasicLayout>
  );
};

export default MainPage;
