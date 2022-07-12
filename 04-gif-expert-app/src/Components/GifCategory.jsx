import React from "react";
import PropTypes from "prop-types";

export const GifCategory = ({ url, id, title }) => {
  return (
    <div className="card">
      <p>{title}</p>
      <img src={url} alt={title} />
    </div>
  );
};

GifCategory.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
