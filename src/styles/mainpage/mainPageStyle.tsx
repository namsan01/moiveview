import styled from "@emotion/styled";

export const MainWrap = styled.div`
  width: 100%;
  height: 780px;

  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`;

export const MainLeft = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 1248px) {
    width: 350px;
    height: 350px;
  }
`;

export const MainRight = styled.div`
  width: 700px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #d9d9d9;
  padding: 30px;
  border-radius: 20px;
  @media screen and (max-width: 1248px) {
    width: 500px;
    height: 350px;
    padding: 15px;
  }
`;

export const MainBoxInfoWrap = styled.div`
  display: flex;

  p {
    font-size: 2rem;
  }
  @media screen and (max-width: 1248px) {
    p {
      font-size: 1.7rem;
    }
  }
`;

export const MainBoxInfoTxt = styled.div`
  h1 {
    font-size: 3rem;
    font-weight: 700;
    margin: 0;
  }
  @media screen and (max-width: 1248px) {
    h1 {
      font-size: 2.3rem;
    }
  }
`;

export const MainBoxBtWrap = styled.div`
  display: flex;
  height: 60px;
  align-items: end;
  gap: 30px;
  button {
    width: 150px;
    height: 60px;
    background-color: #868686;
    border: none;
    border-radius: 10px;
    font-size: 15px;
    color: white;
    cursor: pointer;
  }
  button:hover {
    background-color: #444;
  }
  @media screen and (max-width: 1248px) {
    gap: 20px;
    height: 80px;
  }
`;
