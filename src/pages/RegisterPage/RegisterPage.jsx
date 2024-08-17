import "./RegisterPage.scss";
import kongLogo from "../../assets/logos/logo-kong-full-mark-horizontal.svg";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function RegisterPage({
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
      if (response.status === 200) {
        navigate("/login");
        registerSuccess(email);
      } else {
        const data = response.data;
        console.error(data.message || "Registration failed.");
      }
      // Set username and password to blank
      setEmail("");
      setPassword("");
    } catch (err) {
      console.error("Registration error: ", err);
      registerError(email);
    }
  };

  return (
    <main>
      <section className="register">
        <img className="register__logo" src={kongLogo} alt="Kong logo" />
        <h1>Sign Up</h1>
        <form className="register__form" onSubmit={handleSubmit}>
          <label className="register__label" htmlFor="username">
            Name
            <input
              type="text"
              className="register__input"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label className="register__label" htmlFor="username">
            E-mail
            <input
              type="email"
              className="register__input"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label className="register__label" htmlFor="password">
            Password
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
