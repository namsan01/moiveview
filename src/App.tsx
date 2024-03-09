import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import RecommendPage from "./pages/RecommendPage";
import BoardPage from "./pages/board/BoardPage";
import BoardWritePage from "./pages/board/BoardWritePage";
import MovieDetail from "./pages/movie/MovieDetail";
import MoviePage from "./pages/movie/MoviePage";
import BoardDetail from "./components/board/BoardDetail";
import ErrorPage from "./pages/error/ErrorPage";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/movie" element={<MoviePage />}></Route>
        <Route path="/movie/detail/:id" element={<MovieDetail />}></Route>
        <Route path="/recommend" element={<RecommendPage />}></Route>
        <Route path="/board" element={<BoardPage />}></Route>
        <Route path="/board/:id" element={<BoardDetail />}></Route>
        <Route path="/board/write" element={<BoardWritePage />} />
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
    </div>
  );
};

export default App;
