import React from "react";
import { useState } from "react";
import { useRef } from "react";
import { useLayoutEffect } from "react";

export const Quote = ({ quote, author }) => {
  const [boxSize, setBoxSize] = useState({ width: 0, height: 0 });

  const pRef = useRef();

  useLayoutEffect(() => {
    const { height, width } = pRef.current.getBoundingClientRect();

    setBoxSize({ width, height });
  }, [quote]);

  return (
    <>
      <blockquote style={{ display: "flex" }} className="blockquote text-end">
        <p ref={pRef} className="mb-1">
          {quote}
        </p>
        <footer className="blockquote-footer mt-1">{author}</footer>
      </blockquote>

      <code>{JSON.stringify(boxSize)}</code>
    </>
  );
};
