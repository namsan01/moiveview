import React from "react";
import { MovieCateWrap } from "../../styles/moviepage/moviePageStyle";
import { Category } from "../../pages/MoviePage";

type CategoryButtonProps = {
  category: Category;
  onClick: (index: number) => void;
  isSelected: boolean;
};

const MovieButton: React.FC<CategoryButtonProps> = ({
  category,
  onClick,
  isSelected,
}) => {
  return (
    <>
      <MovieCateWrap>
        <div
          className={isSelected ? "selected" : ""}
          onClick={() => onClick(category.id)}
        >
          <img src={process.env.PUBLIC_URL + "assets/images/seat.jpg"} />
          <div>{category.label}</div>
        </div>
      </MovieCateWrap>
    </>
  );
};

export default MovieButton;
