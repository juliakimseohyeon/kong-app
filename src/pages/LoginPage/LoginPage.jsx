import "./LoginPage.scss";

export default function LoginPage() {
  return (
    <main>
      <section className="login">
        <h1>Please Log In</h1>
        <form className="login__form">
          <label className="login__label">
            <p>Username</p>
            <input type="text" className="login__input" />
          </label>
          <label className="login__label">
            <p>Password</p>
            <input type="password" className="login__input" />
          </label>

          <button type="submit" className="login__button">
            Submit
          </button>
        </form>
      </section>
    </main>
  );
}
