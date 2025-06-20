import React from "react";
import { Photo } from "../types/photos.types";

export const Image: React.FC<{ photo: Photo }> = ({ photo }) => {
  return (
    <div style={{ display: "flex", justifyContent: "center", width: "55%" }}>
      <img
        src={photo.path}
        width="100%"
        style={{ border: "5vw solid #fff", boxSizing: "border-box" }}
      />
    </div>
  );
};
