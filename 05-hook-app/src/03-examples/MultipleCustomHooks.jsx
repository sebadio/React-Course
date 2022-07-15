import React from "react";
import { useFetch } from "../hooks/useFetch";

export const MultipleCustomHooks = () => {
  const { data, isLoading, error } = useFetch(
    "https://www.breakingbadapi.com/api/quotes/1"
  );

  console.log(data, isLoading, error);

  return (
    <>
      <h1>Breaking Bad Quoutes</h1>

      <hr />
    </>
  );
};
