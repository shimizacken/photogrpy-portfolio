import React from "react";
import { Image } from "../components/Image.view";
import { Photos } from "../data/photos";

export const Homepage: React.FC = () => {
  return (
    <div>
      <main style={{ marginTop: "6rem", height: "70vh" }}>
        <Image photo={Photos[0]} />
      </main>
    </div>
  );
};
