import { Link } from "react-router-dom";
import homeIcon from "../../assets/icons/icon-home.svg";
import cameraIcon from "../../assets/icons/icon-camera.svg";
import plantsIcon from "../../assets/icons/icon-plants.svg";

export default function FooterNav() {
  return (
    <footer className="nav__bottom">
      <ul>
        <li>
          <Link to="/" className="nav__bottom-item label">
            <img className="icon" src={homeIcon} alt="Home Icon" />
            <p>HOME</p>
          </Link>
        </li>
        <li>
          <Link to="" className="nav__bottom-item label">
            <img className="icon" src={cameraIcon} alt="Camera Icon" />
            <p>CAMERA</p>
          </Link>
        </li>
        <li>
          <Link to="/featuredplants" className="nav__bottom-item label">
            <img className="icon" src={plantsIcon} alt="Plants Icon" />
            <p>PLANTS</p>
          </Link>
        </li>
      </ul>
    </footer>
  );
}
