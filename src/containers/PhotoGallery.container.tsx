import React, { useEffect } from "react";
import { Photos } from "../data/photos";
import { Image } from "../components/Image.view";
import { useFullscreen } from "../hooks/useFullscreen";

export const ImageContainer: React.FC = () => {
  const { goFullscreen, exitFullscreen } = useFullscreen();

  useEffect(() => {
    const slides = document.querySelectorAll(".slide");
    console.log("🚀 ~ useEffect ~ slides:", slides);
    let current = 0;

    setInterval(() => {
      slides[current].classList.remove("active");
      current = (current + 1) % slides.length;
      slides[current].classList.add("active");
    }, 5000);

    slides[current].classList.add("active");
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
