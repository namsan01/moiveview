import React, { useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";
import BasicLayout from "../../layouts/BasicLayout";
import { Table } from "antd";
import { fetchBoard } from "../../etc/firebase";
import { Link, useNavigate } from "react-router-dom";
import { DocumentData } from "@firebase/firestore";
import useCustomMove from "../../hooks/useCustomMove";

export interface Iboard {
  createdDate: number;
  id: number | string;
  name: string;
  text: string;
  title: string;
  time: string;
}

const BoardWrap = styled.div`
  width: 100%;
  height: 780px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 600px) {
    height: auto;
  }
`;

const BoardListWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const BoardList = styled.div`
  width: 1440px;
  height: 669px;
  .ant-table-thead .ant-table-cell {
    background-color: #0d253f;
    color: #d9d9d9;
    border-bottom: 1px solid #000;
  }
  .ant-table-tbody > tr > td {
    transition:
      background 0.2s,
      border-color 0.2s;
    border-bottom: 1px solid #000;
    border-left: 1px solid #000;
    border-right: 1px solid #000;
  }
  @media screen and (max-width: 600px) {
    height: auto;
  }
`;

const BoardTxt = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1440px;
  height: 71px;
  font-size: 25px;
  font-weight: 700;
`;

const BoardBtWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  align-items: center;
`;

const BoardBt = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 1440px;
  height: 42px;
  font-size: 20px;
  button {
    width: 100px;
    height: 40px;
    border-radius: 5px;
    background: #868686;
    border: none;
  }
  button:hover {
    background-color: #444;
  }
`;
function BoardPage() {
  const [page, setPage] = useState(1); // 페이지 번호
  const limit = useRef<number>(10); // 화면에 보여줄 게시판 글 수
  const [posts, setPosts] = useState<Iboard[]>([]); // DB에 저장한 글
  const { moveToWrite } = useCustomMove();
  const navigate = useNavigate();

  useEffect(() => {
    fetchBoard().then(data => {
      const context = data.docs.map((doc: DocumentData) => ({
        ...doc.data(),
      })) as Iboard[]; // 데이터를 Iboard 타입으로 형변환
      setPosts(context);
    });
    return () => {
      fetchBoard();
    };
  }, []);

  const offset = (page - 1) * limit.current;

  const columns = [
    {
      title: "제목",
      dataIndex: "title",
      key: "title",
      width: "60%",
      render: (text: string, record: Iboard) => (
        <Link to={`/board/detail/${record.id}`}>{text}</Link>
      ),
    },
    {
      title: "작성자",
      dataIndex: "name",
      key: "name",
      width: "20%",
    },
    {
      title: "작성일",
      dataIndex: "createdDate",
      key: "createdDate",
      width: "20%",
      render: (createdDate: Date) => new Date(createdDate).toLocaleString(),
    },
  ];

  const handleRowClick = (record: Iboard) => {
    navigate(`/board/${record.id}`, { state: record });
  };

  return (
    <BasicLayout>
      <BoardWrap>
        <BoardTxt>영화추천 게시판</BoardTxt>
        <BoardListWrap>
          <BoardList>
            <Table
              dataSource={posts.slice(offset, offset + limit.current)}
              columns={columns}
              onRow={(record: Iboard) => ({
                onClick: () => handleRowClick(record),
              })}
              pagination={{
                pageSize: limit.current,
                current: page,
                total: posts.length,
                onChange: setPage,
                style: {
                  display: "flex",
                  justifyContent: "center",
                  border: "#000",
                },
              }}
            />
          </BoardList>
        </BoardListWrap>
        <BoardBtWrap>
          <BoardBt>
            <button onClick={() => moveToWrite()}>추가하기</button>
          </BoardBt>
        </BoardBtWrap>
      </BoardWrap>
    </BasicLayout>
  );
}

export default BoardPage;
