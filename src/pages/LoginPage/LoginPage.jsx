import "./LoginPage.scss";
import kongLogo from "../../assets/logos/logo-kong-full-mark-horizontal.svg";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import PropTypes from "prop-types";

export default function LoginPage({ token, setToken }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmitLoginForm = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/login`,
        { username, password }
      );
      console.log("login response: ", response);
      console.log("token: ", response.data.token);
      if (response) {
        setToken(response.data.token);
      }
    } catch (err) {
      console.error("Error logging in: ", err);
    }
  };

  return (
    <main>
      <section className="login">
        <img className="login__logo" src={kongLogo} alt="Kong logo" />
        <h1>Please Log In</h1>
        <form className="login__form" onSubmit={handleSubmitLoginForm}>
          <label className="login__label">
            <p>Username</p>
            <input
              type="text"
              className="login__input"
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <label className="login__label">
            <p>Password</p>
            <input
              type="password"
              className="login__input"
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <Link to={"/collections"} className="login__button-container">
            <button type="submit">Log In</button>
          </Link>
          <Link to={"/register"} className="login__button-container">
            <button className="button--signup">Sign Up</button>
          </Link>
        </form>
      </section>
    </main>
  );
}

LoginPage.propTypes = {
  setToken: PropTypes.func.isRequired,
};
