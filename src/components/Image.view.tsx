import React from "react";

import "./image.scss";

export const Image: React.FC<{
  photo: URL;
  onClick: (elem: HTMLElement) => void;
}> = ({ photo, onClick }) => {
  return (
    <div
      className="image-container zoom-container"
      style={{
        backgroundImage: `url(${photo?.toString()})`,
      }}
      onClick={() =>
        onClick(document.querySelector(".image-container") as HTMLElement)
      }
    ></div>
  );
};
