import "./LoginPage.scss";
import kongLogo from "../../assets/logos/logo-kong-full-mark-horizontal.svg";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../utils/Auth/AuthContext";
import axios from "axios";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/login`,
        { email, password }
      );
      console.log("login response: ", response);
      if (response.status === 200) {
        console.log("Good login: ", response);
        login(response.data.user, response.data.token); // Pass the user data and token to login function
        navigate("/collections");
      } else {
        console.log("Bad login: ", response);
        const data = response.data;
        console.error(data.message || "Login failed.");
      }
      // // Set username and password to blank
      // setEmail("");
      // setPassword("");
    } catch (err) {
      console.error("Login error: ", err);
    }
  };

  return (
    <main>
      <section className="login">
        <img className="login__logo" src={kongLogo} alt="Kong logo" />
        <h1>Please Log In</h1>
        <form className="login__form" onSubmit={handleSubmit}>
          <label className="login__label">
            <p>Email</p>
            <input
              type="email"
              className="login__input"
              onChange={(e) => setEmail(e.target.value)}
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
          <button type="submit">Log In</button>
          <button className="button--signup">Sign Up</button>
        </form>
      </section>
    </main>
  );
}
