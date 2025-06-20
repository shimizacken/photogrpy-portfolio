import React from "react";
import { Header } from "../components/Header.view";
import { Image } from "../components/Image.view";
import { Photos } from "../data/photos";

export const Homepage: React.FC = () => {
  return (
    <div>
      <Header />
      <main style={{ marginTop: "1.5rem" }}>
        <Image photo={Photos[0]} />
      </main>
    </div>
  );
};
