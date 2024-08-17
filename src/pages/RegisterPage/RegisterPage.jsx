import "./RegisterPage.scss";
import kongLogo from "../../assets/logos/logo-kong-full-mark-horizontal.svg";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function RegisterPage({
  setToken,
  registerSuccess,
  registerError,
  registerMissingFieldError,
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const validateForm = () => {
    if (!name || !email || !password) {
      registerMissingFieldError();
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return false;
    }
    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validateForm()) return;

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/register`,
        { name, email, password }
      );
      console.log("Full Response: ", response);
      if (response.ok) {
        navigate("/login");
        registerSuccess(email);
      } else {
        const data = await response.json();
        console.error(data.message || "Registration failed.");
      }
      // Set username and password to blank
      setEmail("");
      setPassword("");
    } catch (err) {
      console.error("Registration error: ", err);
      registerError(username);
    }
  };

  return (
    <main>
      <section className="register">
        <img className="register__logo" src={kongLogo} alt="Kong logo" />
        <h1>Sign Up</h1>
        <form className="register__form" onSubmit={handleSubmit}>
          <label className="register__label" htmlFor="username">
            <p>Username</p>
            <input
              type="text"
              className="register__input"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <label className="register__label" htmlFor="password">
            <p>Password</p>
            <input
              type="password"
              className="register__input"
              id="password"
              name="password"
              value={password}
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
