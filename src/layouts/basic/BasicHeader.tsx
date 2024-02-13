import styled from "@emotion/styled";
import React, { useState } from "react";
import useCustomMove from "../../hooks/useCustomMove";

const HeaderWrap = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  height: 78px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 39px;
  font-size: 25px;
  background: #0d253f;
  color: #d9d9d9;
  z-index: 2;
`;

const HeaderLeft = styled.div`
  background: transparent;
  button {
    border: none;
    background: transparent;
    color: #d9d9d9;
    cursor: pointer;
  }
`;
const HeaderRight = styled.div`
  margin-right: 30px;
  display: flex;
  gap: 30px;
  background: transparent;
  button {
    width: 120px;
    height: 40px;
    border: none;
    font-size: 2.2rem;
    color: #d9d9d9;
    background: transparent;
    cursor: pointer;
  }
  button:hover {
    background: #444;
    opacity: 50;
    border-radius: 5px;
  }

  .navBar {
    display: none;
    width: 40px;
    :hover {
      background: none;
    }
    img {
      width: 40px;
    }
  }
  @media screen and (max-width: 1248px) {
    margin-right: 0px;
  }

  @media screen and (max-width: 920px) {
    .navBar {
      display: block;
      text-align: end;
    }
    button {
      display: none;
    }
  }
`;
const ModalBg = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 10;
`;

const Modal = styled.div`
  position: fixed;
  width: 40%;
  height: 100%;
  top: 0;
  right: 0;
  background: rgba(13, 37, 63, 0.9);
  padding: 20px;
  button {
    background: transparent;
    border: none;
    cursor: pointer;
  }
  img {
    width: 25px;
    transform: rotate(90deg);
    border: none;
  }
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  padding: 20px;

  button {
    width: 100%;
    height: 80px;
    padding: 20px;
    text-align: left;
    background: transparent;
    border: none;
    color: #d9d9d9;
  }
  button:hover {
    background: #444;
    opacity: 50;
    border-radius: 5px;
  }
`;

const BasicHeader = () => {
  const { moveToMain, moveToMovie, moveToRecommend, moveToBoard } =
    useCustomMove();

  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };
  return (
    <HeaderWrap>
      <HeaderLeft>
        <button onClick={() => moveToMain()}>MovieView</button>
      </HeaderLeft>
      <HeaderRight>
        <button onClick={() => moveToMain()}>Home</button>
        <button onClick={() => moveToMovie()}>Movie</button>
        <button onClick={() => moveToRecommend()}>Recomend</button>
        <button onClick={() => moveToBoard()}>Board</button>
        <button className="navBar" onClick={() => toggleModal()}>
          <img src={process.env.PUBLIC_URL + "/assets/images/bt_menu.svg"} />
        </button>
      </HeaderRight>
      {isOpen && (
        <ModalBg>
          <Modal>
            <div>
              <button onClick={() => toggleModal()}>
                <img
                  src={process.env.PUBLIC_URL + "/assets/images/bt_arrow.svg"}
                />
              </button>
            </div>
            <ModalContent>
              <button onClick={() => moveToMain()}>Home</button>
              <button onClick={() => moveToMovie()}>Movie</button>
              <button onClick={() => moveToRecommend()}>Recomend</button>
              <button onClick={() => moveToBoard()}>Board</button>
            </ModalContent>
          </Modal>
        </ModalBg>
      )}
    </HeaderWrap>
  );
};

export default BasicHeader;
