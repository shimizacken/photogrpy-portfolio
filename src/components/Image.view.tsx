import React from "react";

import "./image.scss";

export const Image: React.FC<{
  photo: URL;
  className?: string;
  // onClick: (elem: HTMLElement) => void;
}> = ({ className, photo }) => (
  <div
    className={`image-container zoom-container ${className}`}
    style={{
      backgroundImage: `url(${photo?.toString()})`,
    }}
    // onClick={() =>
    //   onClick(document.querySelector(".image-container") as HTMLElement)
    // }
  ></div>
);
