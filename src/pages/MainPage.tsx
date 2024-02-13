import Animation from "../components/animation/MainAnimation";
import useCustomMove from "../hooks/useCustomMove";
import BasicLayout from "../layouts/BasicLayout";
import {
  MainBoxBtWrap,
  MainBoxInfoTxt,
  MainBoxInfoWrap,
  MainLeft,
  MainRight,
  MainWrap,
} from "../styles/mainpage/mainPageStyle";

const MainPage = () => {
  const { moveToMovie, moveToRecommend } = useCustomMove();
  return (
    <BasicLayout>
      <MainWrap>
        <MainLeft>
          <Animation />
        </MainLeft>
        <MainRight>
          <MainBoxInfoTxt>
            <h1>영화의 세계로 여러분을 초대합니다.</h1>
          </MainBoxInfoTxt>
          <MainBoxInfoWrap>
            <p>
              여기는 영화를 사랑하는 이들을 위한 작은 공간입니다.
              <br />
              영화는 우리의 삶을 더 풍부하게 만들어주는 특별한 예술이자
              경험입니다.
              <br />
              이곳에서는 영화의 다양한 매력을 탐험하고
              <br /> 새로운 발견을 할 수 있는 여정에 함께할 것입니다.
              <br />
              우리는 서로의 취향과 추천을 공유하고, 함께 대화하며
              <br /> 영화에 대한 열정을 나눌 수 있습니다.
              <br />
              우리의 이야기와 경험을 공유하며, 영화의 매력을 더욱 깊이 느껴봐요.
            </p>
          </MainBoxInfoWrap>
          <MainBoxBtWrap>
            <button onClick={() => moveToMovie()}>상영작 보러가기</button>
            <button onClick={() => moveToRecommend()}>추천작 보러가기</button>
          </MainBoxBtWrap>
        </MainRight>
      </MainWrap>
    </BasicLayout>
  );
};

export default MainPage;
