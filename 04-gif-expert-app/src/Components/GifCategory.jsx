import React from "react";

export const GifCategory = ({ url, id, title }) => {
  return (
    <div className="card">
      <p>{title}</p>
      <img src={url} />
    </div>
  );
};
