import React, { useEffect, useState } from "react";
import { Photos } from "../data/photos";
import { Image } from "../components/Image.view";
import { useFullscreen } from "../hooks/useFullscreen";

export const ImageContainer: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const { goFullscreen, exitFullscreen } = useFullscreen();

  useEffect(() => {
    setInterval(() => {
      setCurrentImage((n) => n + 1);
    }, 5000);
  }, []);

  useEffect(() => {
    const maxLength = Photos.length;

    if (currentImage === maxLength) {
      setCurrentImage(0);
    }
  }, [currentImage]);

  return <Image photo={Photos[currentImage]?.url} onClick={goFullscreen} />;
};
