import React, { useEffect, useState } from "react";
import getGifs from "../helpers/getGifs";
import { GifCategory } from "./GifCategory";

export const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);

  const getImages = async () => {
    const newImages = await getGifs(category);
    setImages(newImages);
  };

  useEffect(() => {
    getImages(category);
  }, []);

  return (
    <div className="gifCategory">
      <h3>{category}</h3>
      <div className="card-grid">
        {images.map((image) => (
          <GifCategory key={image.id} {...image} />
        ))}
      </div>
    </div>
  );
};
