import React from "react";
import { useContext } from "react";
import { UserContext } from "./context/UserContext";

export const HomePage = () => {
  const { user } = useContext(UserContext);

  return (
    <>
      <h1>Home Page</h1>
      <hr />
      <div className="row">
        <code>{JSON.stringify(user)}</code>
      </div>
    </>
  );
};
