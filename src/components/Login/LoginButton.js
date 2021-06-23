import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "../../globalStyles";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <button
      className="btn btn-primary btn-block"
      onClick={() => loginWithRedirect()}
    >
      Log In
    </button>
  );
};

export default LoginButton;