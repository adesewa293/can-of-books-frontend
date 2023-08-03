import React from "react";
import { createRoot } from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App";
import { HelmetProvider } from "react-helmet-async";

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Auth0Provider
      clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
      domain={process.env.REACT_APP_AUTH0_DOMAIN}
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </Auth0Provider>
  </React.StrictMode>
);
