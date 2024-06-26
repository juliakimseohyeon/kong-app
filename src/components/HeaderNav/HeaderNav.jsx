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
      </nav>
    </header>
  );
}
