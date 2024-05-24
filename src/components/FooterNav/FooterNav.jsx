import { Link } from "react-router-dom";
import { useRef } from "react";
import homeIcon from "../../assets/icons/icon-home.svg";
import cameraIcon from "../../assets/icons/icon-camera.svg";
import plantsIcon from "../../assets/icons/icon-plants.svg";
import "./FooterNav.scss";

export default function FooterNav() {
  const fileInputRef = useRef(null);

  const handleCameraClick = () => {
    fileInputRef.current.click();
  };

  // const handleFileChange = async (event) => {
  //   const file = event.target.files[0];
  //   if (file) {
  //     const formData = new FormData();
  //     formData.append("image", file);

  //     try {
  //       const response = await fetch(`${import.meta.env.VITE_API_URL}/camera`, {
  //         method: "POST",
  //         body: formData,
  //       });

  //       if (response.ok) {
  //         console.log("File uploaded successfully");
  //       } else {
  //         console.error("File upload failed");
  //       }
  //     } catch (error) {
  //       console.error("Error uploading file:", error);
  //     }
  //   }
  // };

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

      <Link to="/featuredplants" className="nav__bottom-item label">
        <img className="icon" src={plantsIcon} alt="Plants Icon" />
        <p>PLANTS</p>
      </Link>
    </footer>
  );
}
