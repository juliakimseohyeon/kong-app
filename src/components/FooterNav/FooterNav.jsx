import { Link } from "react-router-dom";

export default function FooterNav() {
  return (
    <footer className="nav__bottom">
      <ul>
        <li>
          <Link to="/" className="nav__bottom-item label">
            <img
              className="icon"
              src="../assets/icons/icon-home.svg"
              alt="Home Icon"
            />
            <p>HOME</p>
          </Link>
        </li>
        <li>
          <Link to="" className="nav__bottom-item label">
            <img
              className="icon"
              src="../assets/icons/icon-camera.svg"
              alt="Camera Icon"
            />
            <p>CAMERA</p>
          </Link>
        </li>
        <li>
          <Link to="/featuredplants" className="nav__bottom-item label">
            <img
              className="icon"
              src="../assets/icons/icon-plants.svg"
              alt="Plants Icon"
            />
            <p>PLANTS</p>
          </Link>
        </li>
      </ul>
    </footer>
  );
}
