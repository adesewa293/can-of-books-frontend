import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  const handleLogin = () => {
    loginWithRedirect();
  };

  return (
    !isAuthenticated && (
      <button className="btn" onClick={handleLogin}>
        Log in
      </button>
    )
  );
};

export default LoginButton;
