import React from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import MoviePage from "./pages/MoviePage";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/movie" element={<MoviePage />}></Route>
      </Routes>
    </div>
  );
};

export default App;
