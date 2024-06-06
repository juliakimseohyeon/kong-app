import { Link } from "react-router-dom";
import homeIcon from "../../assets/icons/icon-home.svg";
import cameraIcon from "../../assets/icons/icon-camera.svg";
import "./FooterNav.scss";

export default function FooterNav() {
  return (
    <footer className="nav__bottom">
      <Link to="/collections" className="nav__bottom-item label">
        <img className="icon" src={homeIcon} alt="Home Icon" />
        <p>HOME</p>
      </Link>
      <Link to="/camera" className="nav__bottom-item label">
        <img className="icon" src={cameraIcon} alt="Camera Icon" />
        <p>CAMERA</p>
      </Link>
    </footer>
  );
}
