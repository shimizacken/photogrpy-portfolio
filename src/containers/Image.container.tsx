import React from "react";
import { Photos } from "../data/photos";
import { Image } from "../components/Image.view";
import { useFullscreen } from "../hooks/useFullscreen";

export const ImageContainer: React.FC = () => {
  const { goFullscreen, exitFullscreen } = useFullscreen();

  return <Image photo={Photos[0]} onClick={goFullscreen} />;
};
