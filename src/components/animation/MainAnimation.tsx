import React from "react";

import Lottie from "react-lottie-player";

import lottieJson from "../../animation/MainAnimation.json"

export default function MainAnimation() {
  return (
    <Lottie
      loop
      animationData={lottieJson}
      play
      style={{ width: 500, height: 500 }}
    />
  );
}
