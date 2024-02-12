import React from "react";

import Lottie from "react-lottie-player";

import lottieJson from "../../animation/RecommendAnimation.json";

export default function RecommendAnimation() {
  return (
    <Lottie
      loop
      animationData={lottieJson}
      play
      style={{ width: 200, height: 200 }}
    />
  );
}
