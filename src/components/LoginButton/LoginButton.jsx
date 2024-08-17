import React from "react";
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
