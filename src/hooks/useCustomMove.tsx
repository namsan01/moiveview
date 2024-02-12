import { useNavigate } from "react-router-dom";
import { Iboard } from "../pages/board/BoardPage";
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
  const moveToRecommend = () => {
    navigate("/recommend");
  };
  // 게시판으로 이동
  const moveToBoard = () => {
    navigate("/board");
  };

  const moveToWrite = () => {
    navigate("/board/write");
  };
  const moveToDetail = (id: string) => {
    navigate({
      pathname: `../movie/detail/${id}`,
    });
  };

  const moveToBoardDetail = (record: Iboard) => {
    navigate({
      pathname: `../board/detail/${record.id}`,
    });
  };

  return {
    moveToMain,
    moveToMovie,
    moveToRecommend,
    moveToDetail,
    moveToPrev,
    moveToBoard,
    moveToWrite,
    moveToBoardDetail,
  };
};
export default useCustomMove;
