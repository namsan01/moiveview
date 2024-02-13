import styled from "@emotion/styled";
import { useLocation } from "react-router-dom";
import useCustomMove from "../../hooks/useCustomMove";
import BasicLayout from "../../layouts/BasicLayout";
import { Iboard } from "../../pages/board/BoardPage";

const BoardDetailWrap = styled.div`
  width: 100%;
  height: 780px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const BoardDeatailWrap = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
`;
const BoardDetailInfo = styled.div`
  width: 1440px;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  @media screen and (max-width: 1560px) {
    width: 1240px;
  }
  @media screen and (max-width: 1360px) {
    width: 1040px;
  }
  @media screen and (max-width: 1200px) {
    width: 840px;
  }
  @media screen and (max-width: 1000px) {
    width: 640px;
  }
`;

const BoardTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 70px;
  border-top: 2px solid #000;
  border-bottom: 1px dashed #ddd;
  padding: 20px;
  h1 {
    font-size: 2.5rem;
    margin: 0;
  }
`;

const BoardUser = styled.div`
  display: flex;
  width: 100%;
  height: 60px;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid #999;
  gap: 30px;
  p {
    font-size: 1.8rem;
  }
`;

const BoardMain = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  height: 350px;
  border-bottom: 1px solid #000;
  padding: 20px;
  margin-bottom: 20px;
  h1 {
    margin: 0;
  }
`;

const BoardBtWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  height: 90px;
  button {
    width: 102px;
    height: 40px;
    border: none;
    font-size: 15px;
    color: #fff;
    background: #868686;
    border-radius: 5px;
  }
  button:hover {
    background: #444;
  }
`;

function BoardDetail() {
  const state = useLocation().state as Iboard;
  const { moveToBoard } = useCustomMove();

  return (
    <BasicLayout>
      <BoardDetailWrap>
        <BoardDeatailWrap>
          <BoardDetailInfo>
            <BoardTitle>
              <h1>{state.title}</h1>
            </BoardTitle>
            <BoardUser>
              <p>작성자: {state.name}</p>
              <p>작성시간 : {state.time}</p>
            </BoardUser>
            <BoardMain>
              <h1>{state.text}</h1>
            </BoardMain>
            <BoardBtWrap>
              <button onClick={() => moveToBoard()}>목록</button>
            </BoardBtWrap>
          </BoardDetailInfo>
        </BoardDeatailWrap>
      </BoardDetailWrap>
    </BasicLayout>
  );
}

export default BoardDetail;
