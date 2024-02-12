import React from "react";
import BasicLayout from "../../layouts/BasicLayout";
import WriteBoard from "../../components/board/WriteBoard";
import styled from "@emotion/styled";

const WriteWrap = styled.div`
  width: 100%;
  height: 780px;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 600px) {
    height: auto;
  }
`;

const WriteHead = styled.div`
  width: 100%;
  height: 192px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const WriteHeadTxt = styled.div`
  width: 1440px;
  h1 {
    font-size: 2.5rem;
    margin-bottom: 0px;
  }
  h2 {
    font-size: 2rem;
  }
  @media screen and (max-width: 1000px) {
    h1 {
      font-size: 2.3rem;
    }
    h2 {
      font-size: 1.7rem;
    }
  }
`;

const BoardWritePage = () => {
  return (
    <BasicLayout>
      <WriteWrap>
        <WriteHead>
          <WriteHeadTxt>
            <h1>당신이 가장 좋아하는 영화는 무엇인가요? </h1>
            <br />
            <h2>그 영화가 당신에게 주는 감정과 메시지를 공유해주세요.</h2>
            <br />
            <h2>당신의 추천이 누군가에게 최애작이 될 수 있습니다!</h2>
          </WriteHeadTxt>
        </WriteHead>
        <WriteBoard />
      </WriteWrap>
    </BasicLayout>
  );
};

export default BoardWritePage;
