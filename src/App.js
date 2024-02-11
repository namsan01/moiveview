import React from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import MoviePage from "./pages/MoviePage";
import MovieDetail from "./pages/MovieDetail";
import RecommendPage from "./pages/RecommendPage";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/movie" element={<MoviePage />}></Route>
        <Route path="/movie/detail/:id" element={<MovieDetail />}></Route>
        <Route path="/recommend" element={<RecommendPage />}></Route>
      </Routes>
    </div>
  );
};

export default App;
