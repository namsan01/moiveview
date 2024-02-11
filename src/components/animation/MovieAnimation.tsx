import React from "react";

import Lottie from "react-lottie-player";

import lottieJson from "../../animation/MovieAnimation.json";

export default function MovieAnimation() {
  return (
    <Lottie
      loop
      animationData={lottieJson}
      play
      style={{ width: 200, height: 200 }}
    />
  );
}
