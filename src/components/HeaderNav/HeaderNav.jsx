import { Link } from "react-router-dom";
import kongLogo from "../../assets/logos/logo-kong-full-mark-horizontal.svg";
import "./HeaderNav.scss";

export default function HeaderNav() {
  return (
    <header>
      <nav className="nav__top">
        <Link to="/collections">
          <img className="logo" src={kongLogo} alt="Kong logo" />
        </Link>
        <p className="nav__text">
          Made with 💚 by{" "}
          <Link
            to="https://github.com/juliakimseohyeon"
            className="nav__text-link"
          >
            Julia (Seo Hyeon) Kim
          </Link>
        </p>
      </nav>
    </header>
  );
}
