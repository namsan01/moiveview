import styled from "@emotion/styled";

export const MoiveWrap = styled.div`
  width: 100%;
  min-height: 780px;
  background: #d9d9d9;
`;

export const MovieHeadTxt = styled.div`
  display: flex;
  justify-content: center;
  height: 30px;
  h1 {
    font-size: 25px;
  }
`;

export const MovieHead = styled.div`
  display: flex;
  justify-content: center;
  width: 1440px;
  height: 200px;
  gap: 50px;
  margin: 0 auto;
`;
export const MovieMain = styled.div`
  width: 1440px;
  height: auto;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const MovieCateWrap = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
  background: transparent;
  text-align: center;
  font-size: 20px;
  img {
    width: 100px;
    height: 100px;
    border-radius: 20px;
    background: transparent;
  }

  .selected img {
    opacity: 0.5;
    color: black;
  }
`;

export const MovieBoxWrap = styled.div`
  width: 288px;
  height: 360px;
  border-radius: 10px;
  margin-bottom: 50px;
  margin-right: 20px;
  padding: 10px;
  background: #4f4f51;
  cursor: pointer;
  img {
    width: 100%;
    height: 250px;
  }
`;

export const MovieBoxInfo = styled.div`
  h1 {
    margin: 0.3em 0;
  }
  h2 {
    text-overflow: ellipsis;
    overflow: hidden;
    word-break: break-word;
    display: -webkit-box;
    margin-bottom: 5px;
  }
`;

export const MoviePagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;
