import React from "react";
import { useState } from "react";
import { AddCategory } from "./Components/AddCategory";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Tensura", "Kimetsu no Yaiba"]);

  const onAddCategory = (e) => {
    setCategories([e, ...categories]);
  };

  return (
    <>
      {/* Titulo */}
      <h1>Gif-expert-app</h1>

      {/* Input */}

      <AddCategory setCategory={onAddCategory} />

      {/* Gifs */}

      <ol>
        {categories.map((categoria) => {
          return <li key={categoria}>{categoria}</li>;
        })}
      </ol>

      {/* Gif item */}
    </>
  );
};
