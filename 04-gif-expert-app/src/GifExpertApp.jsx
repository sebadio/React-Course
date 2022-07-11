import React from "react";
import { useState } from "react";
import { AddCategory } from "./Components/AddCategory";
import { GifGrid } from "./Components/GifGrid";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Tensura"]);

  const onAddCategory = (newCategory) => {
    // Validamos si la nueva categoria ya existe
    if (categories.includes(newCategory)) {
      console.warn("No papi");
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
