import { Link } from "react-router-dom";
import kongLogo from "../../assets/logos/logo-kong-full-mark-horizontal.svg";
import "./HeaderNav.scss";

export default function HeaderNav() {
  return (
    <header>
      <nav class="nav__top">
        <Link to="/">
          <img className="logo" src={kongLogo} alt="Kong logo" />
        </Link>
      </nav>
    </header>
  );
}
