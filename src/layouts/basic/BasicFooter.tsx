import styled from "@emotion/styled";
import React from "react";

const FooterWrap = styled.div`
  width: 100%;
  height: 60px;
  background: #0d253f;
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

const FooterLeft = styled.div`
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

const FooterRight = styled.div`
  img {
    width: 40px;
    margin-left: 20px;
  }
  @media screen and (max-width: 1248px) {
    img {
      width: 35px;
      margin-left: 20px;
    }
  }
  @media screen and (max-width: 849px) {
    img {
      width: 30px;
      margin-left: 20px;
    }
  }
`;

const BasicFooter = () => {
  return (
    <FooterWrap>
      <FooterHead>
        <FooterLeft>
          <h1>김민수의 포트폴리오</h1>
          <h1> © 2024 MovieView ㅡ @namsan01 </h1>
        </FooterLeft>
        <FooterRight>
          <a
            href="https://github.com/namsan01"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={process.env.PUBLIC_URL + "/assets/images/github.png"} />
          </a>
          <a
            href="https://gregarious-taxi-457.notion.site/6af78c7cb33448e58a98bd33cc6463dc"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={process.env.PUBLIC_URL + "/assets/images/notion.png"} />
          </a>
          <a
            href="mailto:v567v202@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={process.env.PUBLIC_URL + "/assets/images/mail.png"} />
          </a>
        </FooterRight>
      </FooterHead>
    </FooterWrap>
  );
};

export default BasicFooter;
