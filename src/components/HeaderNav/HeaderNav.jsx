import { Link } from "react-router-dom";

export default function HeaderNav() {
  return (
    <header>
      <nav class="nav__top">
        <Link to="/">
          <img
            className="logo"
            src="assets/logos/logo-kong-full-mark-horizontal.svg"
            alt="Kong logo"
          />
        </Link>
      </nav>
    </header>
  );
}