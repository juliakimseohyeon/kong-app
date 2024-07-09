import React from "react";
import ReactDOM from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain={`${import.meta.env.VITE_AUTH_DOMAIN}`}
    clientId={`${import.meta.env.VITE_AUTH_CLIENT_ID}`}
    authorizationParams={{
      redirect_uri: `${import.meta.env.VITE_APP_BASE_URL}`,
    }}
  >
    <App />
  </Auth0Provider>
);
