import React from "react";
import Lottie from "react-lottie";
import animation from "./githubfinder-notfound.json";

const NotFound = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div>
      <Lottie style={{ height: "85vh" }} options={defaultOptions} />
    </div>
  );
};

export default NotFound;
