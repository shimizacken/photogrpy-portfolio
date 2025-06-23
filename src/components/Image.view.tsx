import React from "react";
import { Photo } from "../types/photos.types";

import "./image.scss";

export const Image: React.FC<{ photo: Photo }> = ({ photo }) => {
  return (
    <div className="image-container">
      <img src={photo.path} width="100%" className="image" />
    </div>
  );
};
