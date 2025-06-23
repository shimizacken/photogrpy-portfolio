import React from "react";
import { Photo } from "../types/photos.types";

import "./image.scss";

export const Image: React.FC<{
  photo: Photo;
  onClick: (elem: HTMLElement) => void;
}> = ({ photo, onClick }) => {
  return (
    <div className="image-container">
      <img
        src={photo.path}
        width="100%"
        className="image"
        onClick={() =>
          onClick(document.querySelector(".image-container") as HTMLElement)
        }
      />
    </div>
  );
};
