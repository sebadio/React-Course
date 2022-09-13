import React from "react";
import { useContext } from "react";
import { UserContext } from "./context/UserContext";

export const LoginPage = () => {
  const { user, setUser } = useContext(UserContext);

  return (
    <>
      <h1>Login Page</h1>
      <hr />

      <div className="row">
        <code>{JSON.stringify(user)}</code>
      </div>

      <div className="row">
        <div className="col-6">
          <button
            onClick={() =>
              setUser({
                id: 3,
                name: "Rimuru",
                surname: "Tempest",
                species: "True Dragon",
              })
            }
            className="btn btn-primary"
          >
            Set user
          </button>
        </div>
      </div>
    </>
  );
};
