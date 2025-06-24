import React, { useEffect } from "react";
import { Photos } from "../data/photos";
import { Image } from "../components/Image.view";
// import { useFullscreen } from "../hooks/useFullscreen";

const slideIntervalMS = 5000;

export const ImageContainer: React.FC = () => {
  // const { goFullscreen, exitFullscreen } = useFullscreen();

  useEffect(() => {
    const slides = document.querySelectorAll(".slide");
    const Slide = { current: 0 };

    const intervalId = setInterval(() => {
      slides[Slide.current].classList.remove("active");
      Slide.current = (Slide.current + 1) % slides.length;
      slides[Slide.current].classList.add("active");
    }, slideIntervalMS);

    slides[Slide.current].classList.add("active");

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="slideshow" id="slideshow">
      {Photos.map((photo) => (
        <Image
          className="slide"
          photo={photo.url}
          key={photo.id}
          // onClick={goFullscreen}
        />
      ))}
    </div>
  );
};
