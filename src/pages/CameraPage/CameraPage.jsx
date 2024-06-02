import "./CameraPage.scss";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Webcam from "react-webcam";
import LoadingScreenPage from "../LoadingScreenPage/LoadingScreenPage";
import axios from "axios";
import captureIcon from "../../assets/icons/icon-capture.svg";
import photoAlbumIcon from "../../assets/icons/icon-photo-album.svg";

export default function CameraPage({ uploadSuccess }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageUploaded, setImageUploaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const webcamRef = useRef(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      uploadImage(file);
    }
  };

  const captureImage = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setSelectedFile(imageSrc);
    uploadImage(imageSrc);
  };

  const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append("image", file);

    setIsLoading(true);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/camera`,
        formData
      );
      console.log("upload response:", response);
      // const data = await response.json();
      // console.log("Response from OpenAI:", data);

      setIsLoading(false); // Hide loading screen after processing
      setImageUploaded(true);
      navigate("/collections");
      uploadSuccess();
    } catch (error) {
      console.error("Error uploading image:", error);
      setIsLoading(false); // Ensure loading state is reset on error
    }
  };

  const handleExit = () => {
    navigate("/");
  };

  return (
    <main>
      {isLoading && <LoadingScreenPage />}
      <section className="camera">
        {!isLoading && (
          <>
            <Webcam
              audio={false}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              className="camera__webcam"
              // forceScreenshotSourceSize="true"
              style={{
                position: "absolute",
                textAlign: "center",
                zindex: 8,
                right: 0,
                height: "100%",
                width: "100%",
                objectFit: "cover",
              }}
            />
            <div className="camera__icon-group">
              <div
                className="camera__icon label"
                onClick={() => fileInputRef.current.click()}
              >
                <img className="icon" src={photoAlbumIcon} alt="Capture Icon" />
                <p>PHOTO ALBUM</p>
              </div>
              <div className="camera__icon label" onClick={captureImage}>
                <img className="icon" src={captureIcon} alt="Capture Icon" />
                <p>CAPTURE</p>
              </div>

              <button onClick={handleExit} className="exit-button">
                Exit
              </button>
            </div>
            <input
              type="file"
              accept="image/*"
              name="image"
              onChange={handleFileChange}
              ref={fileInputRef}
              style={{ display: "none" }}
            />
          </>
        )}
      </section>
    </main>
  );
}
