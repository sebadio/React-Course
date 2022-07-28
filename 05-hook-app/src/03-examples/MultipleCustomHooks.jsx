import React from "react";
import { useCounter, useFetch } from "../hooks";
import { LoadingQuote, Quote } from "./components/";

export const MultipleCustomHooks = () => {
  const { counter, incrementarCounter, decrementarCounter, resetearCounter } =
    useCounter(1);

  const { data, isLoading, error } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );

  const { author, quote } = !!data && data[0];

  return (
    <>
      <h1>Breaking Bad Quoutes</h1>

      <hr />

      {isLoading ? <LoadingQuote /> : <Quote author={author} quote={quote} />}

      <button
        onClick={() => {
          decrementarCounter();
        }}
        className="btn btn-primary"
        disabled={isLoading}
      >
        Previous quote
      </button>

      <button
        onClick={() => {
          incrementarCounter();
        }}
        className="btn btn-primary"
        disabled={isLoading}
      >
        Next quote
      </button>
    </>
  );
};
