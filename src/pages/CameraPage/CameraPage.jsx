import "./CameraPage.scss";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Webcam from "react-webcam";
import LoadingScreenPage from "../LoadingScreenPage/LoadingScreenPage";
import axios from "axios";
import captureSmallIcon from "../../assets/icons/icon-capture-sml.svg";
import photoAlbumIcon from "../../assets/icons/icon-photo-album.svg";
import closeIcon from "../../assets/icons/icon-close.svg";

export default function CameraPage({
  uploadSuccess,
  uploadFailure,
  plantAlreadyExists,
}) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageUploaded, setImageUploaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const webcamRef = useRef(null);

  // Set camera setting so it is facing-out (environment)
  const videoConstraints = {
    facingMode: { exact: "environment" },
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      uploadImage(file);
    }
  };

  const captureImage = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    fetch(imageSrc) // Request the resource represented by the data URL
      .then((res) => res.blob()) // Convert the response from "fetch" into a "Blob" object
      .then((blob) => {
        // Create a file object using the Blob.
        const file = new File([blob], "captured_image.jpg", {
          type: "image/jpeg",
        });
        setSelectedFile(file);
        uploadImage(file);
      });
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

      setImageUploaded(true);
      uploadSuccess();
    } catch (error) {
      console.error("Error uploading image:", error);
      // Check if the error response contains a message
      if (error.response && error.response.data) {
        if (error.response.data.existingPlantError) {
          plantAlreadyExists(error.response.data.existingPlantName);
        } else {
          uploadFailure();
        }
      } else {
        console.err("An unknown error occured");
      }
    }
    setIsLoading(false); // Hide loading screen after processing

    navigate("/collections");
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
            <div className="camera__webcam">
              <Webcam
                videoConstraints={videoConstraints}
                audio={false}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
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
              <div onClick={handleExit} className="camera__icon ">
                <img
                  className="icon icon-exit"
                  src={closeIcon}
                  alt="Exit Icon"
                />
              </div>
            </div>
            <div className="camera__icon-group">
              <div
                className="camera__icon label"
                onClick={() => fileInputRef.current.click()}
              >
                <img className="icon" src={photoAlbumIcon} alt="Capture Icon" />
                <p>ALBUM</p>
              </div>
              <div className="camera__icon label" onClick={captureImage}>
                <img
                  className="icon  icon-capture"
                  src={captureSmallIcon}
                  alt="Capture Icon"
                />
                <p>CAPTURE</p>
              </div>
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
