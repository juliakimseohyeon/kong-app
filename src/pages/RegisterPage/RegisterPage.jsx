import "./RegisterPage.scss";
import kongLogo from "../../assets/logos/logo-kong-full-mark-horizontal.svg";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import PropTypes from "prop-types";

export default function RegisterPage({
  setToken,
  registerSuccess,
  registerError,
}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmitLoginForm = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/register`,
        { username, password }
      );
      console.log("Full Response: ", response);
      if (response) {
        setToken(response.data.token);
        registerSuccess(username);
      }
    } catch (err) {
      console.error("Error logging in: ", err);
      if (err.response.data.existingUsernameError) {
        registerError(username);
      }
    }
  };

  return (
    <main>
      <section className="register">
        <img className="register__logo" src={kongLogo} alt="Kong logo" />
        <h1>Sign Up</h1>
        <form className="register__form" onSubmit={handleSubmitLoginForm}>
          <label className="register__label">
            <p>Username</p>
            <input
              type="text"
              className="register__input"
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <label className="register__label">
            <p>Password</p>
            <input
              type="password"
              className="register__input"
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>

          <button type="submit" className="register__button">
            Sign Up
          </button>
          <Link to={"/login"} className="login__button-container">
            <button className="button--signup">Back to Log In</button>
          </Link>
        </form>
      </section>
    </main>
  );
}
