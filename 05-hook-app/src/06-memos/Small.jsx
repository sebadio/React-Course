import React, { memo } from "react";

export const Small = memo(({ value }) => {
  console.log("Rendered");
  return <small>{value}</small>;
});
