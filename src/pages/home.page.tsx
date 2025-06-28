import React from "react";
import { ImageContainer } from "../containers/PhotoGallery.container";

export const Homepage: React.FC = () => {
  return (
    <div>
      <main style={{ height: "92vh" }}>
        <ImageContainer />
      </main>
    </div>
  );
};
