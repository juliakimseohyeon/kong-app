import { Link } from "react-router-dom";
import { useRef } from "react";
import homeIcon from "../../assets/icons/icon-home.svg";
import cameraIcon from "../../assets/icons/icon-camera.svg";
import plantsIcon from "../../assets/icons/icon-plants.svg";
import "./FooterNav.scss";

export default function FooterNav() {
  const fileInputRef = useRef(null);

  const handleCameraClick = (event) => {
    event.preventDefault();
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <footer className="nav__bottom">
      <Link to="/collections" className="nav__bottom-item label">
        <img className="icon" src={homeIcon} alt="Home Icon" />
        <p>HOME</p>
      </Link>
      <div className="nav__bottom-item label" onClick={handleCameraClick}>
        <img className="icon" src={cameraIcon} alt="Camera Icon" />
        <p>CAMERA</p>
      </div>

      <Link to="/featuredplants" className="nav__bottom-item label">
        <img className="icon" src={plantsIcon} alt="Plants Icon" />
        <p>PLANTS</p>
      </Link>

      <input
        type="file"
        id="fileInput"
        accept="image/*"
        style={{ display: "none" }}
        onChange={handleCameraClick}
        ref={fileInputRef} // Attach the ref to the input element
      />
    </footer>
  );
}
