import { DotLottiePlayer, Controls } from "@dotlottie/react-player";

const LoadingIcon = () => {
  return (
    <div>
      <DotLottiePlayer
        src="/loading.lottie"
        autoplay
        loop
        className="w-10 h-8"
      ></DotLottiePlayer>
    </div>
  );
};

export default LoadingIcon;
