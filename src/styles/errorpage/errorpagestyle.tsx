import styled from "@emotion/styled";

export const ErrorWrap = styled.div`
  width: 760px;
  height: 50vh;
  margin: 0 auto;
`;

export const ErrorImg = styled.div`
  position: absolute;
  display: inline-block;
  /* z-index: -1; */
  img {
    width: 281px;
    height: 300px;
    z-index: -1;
  }
`;

export const ErrorLogo = styled.div`
  display: flex;
  justify-content: center;
  img {
    width: 415px;
    height: 140px;
  }
`;

export const ErrorMainTxt = styled.h2`
  color: #0d253f;
  text-align: center;
  font-size: 50px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 25px;
`;

export const ErrorSubTxt = styled.h3`
  height: 83px;
  color: #0d253f;
  text-align: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 25px;
`;

export const ErrorBt = styled.button`
  display: flex;
  width: 759px;
  height: 90px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background: #0d253f;
  border-radius: 10px;
  border: none;
  font-size: 40px;
  color: #fff;
  cursor: pointer;
`;

export const LoginHeader = styled.header`
  height: 120px;
  position: relative;
  margin: 0 auto;
  display: flex;
  align-items: end;
  justify-content: center;
`;
