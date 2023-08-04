import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import BestBook from "./BestBook";
import Welcome from "./Welcome";

export default function Main() {
  const { isAuthenticated } = useAuth0();

  return isAuthenticated ? <BestBook /> : <Welcome />;
}
