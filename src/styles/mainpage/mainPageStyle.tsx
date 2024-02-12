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
  background: #d9d9d9;
  padding: 20px;
  @media screen and (max-width: 1248px) {
    width: 500px;
    height: 350px;
    padding: 15px;
  }
`;

export const MainBoxInfoWrap = styled.div`
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

export const MainBoxBtWrap = styled.div`
  display: flex;
  height: 100px;
  align-items: center;
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
