import styled from "@emotion/styled";
import { useLocation } from "react-router-dom";
import { Iboard } from "../../pages/board/BoardPage";
import BasicLayout from "../../layouts/BasicLayout";
import useCustomMove from "../../hooks/useCustomMove";

const BoardDetailWrap = styled.div`
  width: 100%;
  height: 780px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const BoardTxtInfo = styled.div`
  width: 100%;
  height: 190px;
`;
const BoardDetailInfo = styled.div`
  width: 1440px;
  height: auto;
  display: flex;
  flex-direction: column;
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
  height: 60px;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid #999;
  gap: 30px;
`;

const BoardMain = styled.div`
  display: flex;
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
        <BoardTxtInfo></BoardTxtInfo>
        <BoardDetailInfo>
          <BoardTitle>
            <h1>{state.title}</h1>
          </BoardTitle>
          <BoardUser>
            <h2>작성자: {state.name}</h2>
            <h2>작성시간 : {state.time}</h2>
          </BoardUser>
          <BoardMain>
            <h1>{state.text}</h1>
          </BoardMain>
          <BoardBtWrap>
            <button onClick={() => moveToBoard()}>목록</button>
          </BoardBtWrap>
        </BoardDetailInfo>
      </BoardDetailWrap>
    </BasicLayout>
  );
}

export default BoardDetail;
