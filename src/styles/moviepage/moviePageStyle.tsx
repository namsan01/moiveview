import styled from "@emotion/styled";

export const MoiveWrap = styled.div`
  width: 100%;
  min-height: 780px;
  background: #fff;
`;

export const MovieHeadTxt = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 260px;
  h1 {
    font-size: 25px;
  }
`;

export const MovieHeadDate = styled.div`
  display: flex;
  justify-content: center;
  h1 {
    margin: 0;
    font-size: 25px;
  }
`;

export const MovieHead = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 200px;
  gap: 50px;
  font-size: 20px;
`;
export const MovieMain = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media screen and (max-width: 1500px) {
    justify-content: center;
    gap: 50px;
  }
  @media screen and (max-width: 1450px) {
    justify-content: center;
  }
`;

export const MovieTap = styled.div`
  width: 1440px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const MovieCateWrap = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
  background: transparent;
  text-align: center;
  font-size: 2rem;
  color: #4f4f51;
  font-weight: 700;
  img {
    width: 100px;
    height: 100px;
    border-radius: 20px;
    background: transparent;
    margin-bottom: 5px;
  }

  .selected img {
    opacity: 0.5;
    color: black;
  }
`;

export const MovieBoxWrap = styled.div`
  width: 200px;
  height: 360px;
  border-radius: 10px;
  margin-bottom: 50px;
  margin-right: 20px;
  padding: 10px;
  background: #868686;
  cursor: pointer;
  img {
    width: 100%;
    height: 250px;
  }
  @media screen and (max-width: 1600px) {
    width: 300px;
  }
  @media screen and (max-width: 1250px) {
    width: 400px;
  }
  @media screen and (max-width: 1350px) {
    width: 400px;
    margin-right: 10px;
    margin-bottom: 30px;
  }
  @media screen and (max-width: 1050px) {
    width: 300px;
  }
`;

export const MovieBoxInfo = styled.div`
  height: 90px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h1 {
    margin: 0.2em 0;
    font-size: 2rem;
  }
  h2 {
    text-overflow: ellipsis;
    overflow: hidden;
    word-break: break-word;
    display: -webkit-box;
  }
  @media screen and (max-width: 1600px) {
    h1 {
      font-size: 2.5rem;
    }
    h2 {
      font-size: 1.8rem;
    }
  }
`;

export const MoviePagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;
