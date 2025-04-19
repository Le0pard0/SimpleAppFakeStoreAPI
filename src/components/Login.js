import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="">
      <div className="btn-login">
        <button className="btn-login" onClick={() => loginWithRedirect()}>
          {" "}
          Log in{" "}
        </button>
      </div>
    </div>
  );
};

export default LoginButton;
