import React from "react";
import { useFetch } from "../hooks/useFetch";

export const MultipleCustomHooks = () => {
  const { data, isLoading, error } = useFetch(
    "https://www.breakingbadapi.com/api/quotes/1"
  );

  const { author, quote } = !!data && data[0];

  return (
    <>
      <h1>Breaking Bad Quoutes</h1>

      <hr />

      {isLoading ? (
        <div className="alert alert-info text-center">Loading...</div>
      ) : (
        <blockquote className="blockquote text-end">
          <p className="mb-1">{quote}</p>
          <footer className="blockquote-footer mt-1">{author}</footer>
        </blockquote>
      )}
    </>
  );
};
