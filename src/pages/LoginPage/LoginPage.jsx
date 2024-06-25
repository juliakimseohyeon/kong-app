import "./LoginPage.scss";
import { useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";

export default function LoginPage({ token, setToken }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  //   const loginUser = async (credentials) => {
  //     try {
  //       const response = await axios.post(
  //         `${import.meta.env.VITE_API_URL}/login`,
  //         credentials
  //       );
  //       console.log("login response: ", response);
  //     } catch (err) {
  //       console.error("Error logging in: ", err);
  //     }
  //   };

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

          <button type="submit" className="login__button">
            Submit
          </button>
        </form>
      </section>
    </main>
  );
}

LoginPage.propTypes = {
  setToken: PropTypes.func.isRequired,
};
