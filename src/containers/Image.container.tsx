import React from "react";
import { Photos } from "../data/photos";
import { Image } from "../components/Image.view";
import { useFullscreen } from "../hooks/useFullscreen";

const logo = new URL(
  "../assets/images/DSC_0247_LR4_LP-4.jpeg",
  import.meta.url
);
console.log("🚀 ~ logo:", logo);

export const ImageContainer: React.FC = () => {
  const { goFullscreen, exitFullscreen } = useFullscreen();

  return <Image photo={logo} onClick={goFullscreen} />;
};
