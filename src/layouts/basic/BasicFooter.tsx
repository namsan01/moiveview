import styled from "@emotion/styled";
import React from "react";

const FooterWrap = styled.div`
  width: 100%;
  height: 60px;
  background: #0f0123;
  display: flex;
  margin: 0;
`;

const FooterHead = styled.div`
  width: 100%;
  height: 60px;
  background: transparent;
  border: 1px solid #d9d9d9;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  @media screen and (max-width: 849) {
    display: flex;
    justify-content: center;
  }
`;

const FooterHeadLeft = styled.div`
  display: flex;
  font-size: 1rem;
  color: white;
  h1 {
    margin-right: 30px;
  }
  @media screen and (max-width: 1248px) {
    font-size: 0.8rem;
  }
  @media screen and (max-width: 849px) {
    font-size: 0.7rem;
  }
`;

const BasicFooter = () => {
  return (
    <FooterWrap>
      <FooterHead>
        <FooterHeadLeft>
          <h1>김민수의 포트폴리오</h1>
          <h1> © 2024 MovieView ㅡ @namsan01 </h1>
        </FooterHeadLeft>
        <div>뭐 쓰지</div>
      </FooterHead>
    </FooterWrap>
  );
};

export default BasicFooter;
