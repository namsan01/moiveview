import {
  createSearchParams,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { getNum } from "../util/util.js";
export const useCustomMove = () => {
  // navigate (패스이동 hook)
  const navigate = useNavigate();
  // 뒤로가기
  const moveToPrev = () => {
    navigate(-1);
  };
  // 메인으로 이동
  const moveToMain = () => {
    navigate("/");
  };
  // 영화페이지로 이동
  const moveToMovie = () => {
    navigate("/movie");
  };
  // 리뷰페이지로 이동
  const moveToReview = () => {
    navigate("/review");
  };
  //쿼리알아내기
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [urlSearchParams, setUrlSearchParams] = useSearchParams();
  // 현재 목록의 페이지 번호
  const page = urlSearchParams.get("page")
    ? parseInt(urlSearchParams.get("page"))
    : 1;
  // 페이지당 보여줄 개수
  const size = urlSearchParams.get("size")
    ? parseInt(urlSearchParams.get("size"))
    : 4;
  // 쿼리스트링 만들기
  const queryStrDeafult = createSearchParams({
    page,
    size,
  }).toString();
  const queryItempage = createSearchParams({ page }).toString();
  //목록으로가기 기능 만들기
  //pageParam이 있으면 pageParam으로 이동
  //pageParam이 없으면 1페이지로 이동
  const moveToMovieList = pageParam => {
    let queryStr = "";
    if (pageParam) {
      const pageNum = getNum(pageParam.page, page);
      const sizeNum = getNum(pageParam.size, size);
      //쿼리 만들기
      queryStr = createSearchParams({
        page: pageNum,
        size: sizeNum,
      }).toString();
    } else {
      queryStr = queryStrDeafult;
    }
    navigate({ pathname: "../movie", search: queryStr });
  };

  // 상세 내용 보기
  const moveToDetail = id => {
    navigate({
      pathname: `../movie/detail/${id}`,
      search: queryStrDeafult,
    });
  };
  // 상품 상세 보기
  const moveToItem = tno => {
    navigate({
      pathname: `../item/${tno}`,
      search: queryItempage,
    });
  };
  return {
    page,
    size,
    moveToMain,
    moveToMovie,
    moveToReview,
    moveToMovieList,
    moveToDetail,
    moveToPrev,
    moveToItem,
  };
};
export default useCustomMove;
