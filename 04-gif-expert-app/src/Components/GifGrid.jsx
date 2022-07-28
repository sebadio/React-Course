import React from "react";

import PropTypes from "prop-types";

import { GifCategory } from "./GifCategory";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {
  console.log(category);
  const { images, isLoading } = useFetchGifs(category);

  return (
    <div className="gifCategory">
      <h3>{category}</h3>
      {isLoading && <div aria-label="div" className="loading"></div>}
      <div className="card-grid">
        {images.map((image) => (
          <GifCategory key={image.id} {...image} />
        ))}
      </div>
    </div>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};
