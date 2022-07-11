import React, { useState } from "react";
import { AddCategory, GifGrid } from "./Components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Valorant"]);

  const onAddCategory = (newCategory) => {
    // Validamos si la nueva categoria ya existe
    if (categories.includes(newCategory)) {
      return;
    }

    // Agregamos la categoria
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1>Gif-expert-app</h1>

      <AddCategory onNewCategory={onAddCategory} />

      {categories.map((categoria) => (
        <GifGrid key={categoria} category={categoria} />
      ))}
    </>
  );
};
