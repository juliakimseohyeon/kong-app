import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./LoginButton.scss";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <main>
      <section className="login">
        <button onClick={() => loginWithRedirect()}>Log In</button>
      </section>
    </main>
  );
};

export default LoginButton;
