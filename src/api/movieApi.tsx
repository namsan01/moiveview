import axios from "axios";
import { MovieWithDates } from "../pages/movie/MoviePage";
import { MovieData } from "../pages/RecommendPage";
import {} from "../";

const API_Key = process.env.React_APP_API_Key;
const Section_Key = process.env.React_APP_Section_key;

const category_List = [
  { id: 0, label: "현재 상영작", url: "/now_playing" },
  { id: 1, label: "인기있는 영화", url: "/popular" },
];
// 현재상영영화 가져오기
export const getNowMovie = async (
  successFn: (data: MovieWithDates) => void,
  failFn: (error: string) => void,
  errorFn: (error: string) => void,
  categoryIndex: number,
) => {
  const host = `https://api.themoviedb.org/3/movie/${category_List[categoryIndex].url}?api_key=${API_Key}&language=ko-Kr&page=1`;
  try {
    const res = await axios.get(host);
    const status = res.status.toString();

    if (status.charAt(0) === "2") {
      successFn(res.data);
    } else {
      failFn("목록 호출에 실패했어요");
    }
  } catch (error) {
    errorFn("목록 호출 서버 에러에요");
  }
};

export const getMyMovie = async (
  successFn: (data: MovieData) => void,
  failFn: (error: string) => void,
  errorFn: (error: string) => void,
) => {
  const host = `https://api.themoviedb.org/3/account/20976968/favorite/movies?api_key=${API_Key}&language=ko-KR&page=1&session_id=${Section_Key}&sort_by=created_at.asc`;
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
