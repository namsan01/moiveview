import axios from "axios";
const API_Key = `8d637bf683f8e20ece20a6279546799a`;
const host = `https://api.themoviedb.org/3/movie/now_playing?language=ko-KR&page=1&region=KR`;

export const getMovie = async (successFn, failFn, errorFn) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZDYzN2JmNjgzZjhlMjBlY2UyMGE2Mjc5NTQ2Nzk5YSIsInN1YiI6IjY1YzViY2FlOGUyMGM1MDE3ZDMzNWQ1MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.G4eSKdnnGRPeO1m70Vyi-uCoj3JwUcaWCgRbpySvWxI",
    },
  };

  try {
    const response = await fetch(host, options);
    if (!response.ok) {
      failFn("목록 호출 오류입니다.");
      return;
    }

    const data = await response.json();
    successFn(data);
  } catch (error) {
    errorFn("목록 호출 서버 에러에요");
  }
};

export const getAddress = async ({ successFn, failFn, errorFn }) => {
  try {
    const res = await axios.get(host);
    const status = res.status.toString();
    if (status.charAt(0) === "2") {
      successFn(res.data);
    } else {
      failFn("목록 호출 오류입니다.");
    }
  } catch (error) {
    errorFn("목록 호출 서버 에러에요");
  }
};
