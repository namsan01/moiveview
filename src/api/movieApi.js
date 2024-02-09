import axios from "axios";
const API_Key = `18a644271c9033d356b4eac6bda58d4a`;
const host = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_Key}&language=ko-KR`;

// 현재상영영화 가져오기
export const getNowMovie = async (successFn, failFn, errorFn) => {
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
    // return error; // 필요하지 않은 부분이므로 주석 처리
  }
};
