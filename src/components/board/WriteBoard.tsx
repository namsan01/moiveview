import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import { saveData } from "../../etc/firebase";
import { Form, Input, Button } from "antd";

type FormValues = {
  boardId: number;
  title: string;
  text: string;
  name: string;
  time: string;
  createdDate: number;
};
const BoardWrap = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
`;

const FormContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
`;

export default function WriteBoard() {
  const navigate = useNavigate();

  const onFinish = (formData: FormValues) => {
    const boardData = {
      ...formData,
      boardId: Date.now(),
      time: new Date().toLocaleString(),
      createdDate: Date.now(),
    };
    saveData(boardData);
    navigate("/board");
  };

  return (
    <BoardWrap>
      <FormContainer>
        <Form
          name="write-board"
          onFinish={onFinish}
          requiredMark={false}
          style={{ borderTop: "2px solid #000", width: "1440px" }}
          labelCol={{ style: { width: "50px" } }}
        >
          <Form.Item
            label="제목"
            name="title"
            rules={[{ required: true, message: "제목 입력은 필수입니다." }]}
            style={{ padding: "15px", margin: "0px", fontSize: "20px" }}
          >
            <Input placeholder="제목 입력" />
          </Form.Item>
          <Form.Item
            label="작성자"
            name="name"
            rules={[
              { required: true, message: "작성자 이름 입력은 필수입니다." },
            ]}
            style={{
              borderTop: "1px dashed #d9d9d9",
              borderBottom: "1px solid #000",
              padding: "15px",
              margin: "0px",
            }}
          >
            <Input placeholder="작성자 입력" />
          </Form.Item>
          <Form.Item
            label="내용"
            name="text"
            rules={[{ required: true, message: "내용을 입력은 필수입니다." }]}
            style={{
              padding: "15px",
              borderBottom: "1px solid #000",
              marginBottom: "15px",
            }}
          >
            <Input.TextArea
              style={{ height: "300px" }}
              placeholder="내용 입력"
            />
          </Form.Item>
          <Form.Item style={{ display: "flex", justifyContent: "flex-end" }}>
            <Button
              onClick={() => navigate("/board")}
              style={{
                width: "100px",
                height: "50px",
                background: "#F24747",
                color: "#fff",
                marginRight: "20px",
                border: "black",
              }}
            >
              취소
            </Button>
            <Button
              type="primary"
              htmlType="submit"
              style={{
                width: "100px",
                height: "50px",
                background: "#444",
              }}
            >
              등록
            </Button>
          </Form.Item>
        </Form>
      </FormContainer>
    </BoardWrap>
  );
}
