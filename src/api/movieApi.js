import axios from "axios";
const API_Key = `18a644271c9033d356b4eac6bda58d4a`;

const category_List = [
  { id: 0, label: "현재 상영작", url: "/now_playing" },
  { id: 1, label: "인기있는 영화", url: "/popular" },
];
// 현재상영영화 가져오기
export const getNowMovie = async (
  successFn,
  failFn,
  errorFn,
  categoryIndex,
) => {
  const host = `https://api.themoviedb.org/3/movie/${category_List[categoryIndex].url}?api_key=${API_Key}&language=ko-Kr&page=1`;
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

export const getMyMovie = async (successFn, failFn, errorFn) => {
  const host = `https://api.themoviedb.org/3/account/20976968/favorite/movies?api_key=${API_Key}&language=ko-KR&page=1&sort_by=created_at.desc`;
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
