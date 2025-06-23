import React from "react";
import { ImageContainer } from "../containers/Image.container";

export const Homepage: React.FC = () => {
  return (
    <div>
      <main style={{ marginTop: "6rem", height: "70vh" }}>
        <ImageContainer />
      </main>
    </div>
  );
};
