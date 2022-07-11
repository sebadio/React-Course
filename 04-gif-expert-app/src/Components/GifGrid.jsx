import React from "react";

import { GifCategory } from "./GifCategory";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);

  return (
    <div className="gifCategory">
      <h3>{category}</h3>
      {isLoading && <div className="loading"></div>}
      <div className="card-grid">
        {images.map((image) => (
          <GifCategory key={image.id} {...image} />
        ))}
      </div>
    </div>
  );
};
