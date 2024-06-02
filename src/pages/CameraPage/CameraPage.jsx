// import "./CameraPage.scss";
// import { useEffect, useState, useRef } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import Webcam from "react-webcam";
// import LoadingScreenPage from "../LoadingScreenPage/LoadingScreenPage";

// export default function CameraPage({ setReceivedData }) {
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [imageUploaded, setImageUploaded] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const navigate = useNavigate(); // Initialize the navigate function
//   const location = useLocation();
//   const fileInputRef = useRef(null); // Create a ref for the file input element
//   const webcamRef = useRef(null);

//   useEffect(() => {
//     if (imageUploaded) {
//       navigate("/collections");
//     }
//   }, [imageUploaded, navigate]);

//   const handleFileChange = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       setSelectedFile(file);
//       uploadImage(file);
//     }
//   };

//   const captureImage = () => {
//     const imageSrc = webcamRef.current.getScreenshot();
//     setSelectedFile(imageSrc);
//     uploadImage(imageSrc);
//   };

//   const uploadImage = async (file) => {
//     const formData = new FormData();
//     if (file instanceof Blob) {
//       formData.append("image", file);
//     } else {
//       const response = await fetch(file);
//       const blob = await response.blob();
//       formData.append("image", blob);
//     }

//     setIsLoading(true); // Trigger a loading page
//     try {
//       const response = await fetch(`${import.meta.env.VITE_API_URL}/camera`, {
//         method: "POST",
//         body: formData,
//       });
//       const data = await response.json();
//       console.log("Response from OpenAI:", data);
//       setReceivedData(true); // Update the state to show the response on CollectionsPage

//       // Only set imageUploaded if data is received
//       if (data) {
//         setImageUploaded(true);
//       }
//     } catch (error) {
//       console.error("Error uploading image:", error);
//     }
//   };
//   return (
//     <main>
//       <section className="camera">
//         <h1>Camera</h1>
//         {/* If data is loading, display LoadingScreenPage */}
//         {isLoading && <LoadingScreenPage />}

//         <>
//           <Webcam
//             audio={false}
//             ref={webcamRef}
//             screenshotFormat="image/jpeg"
//             className="webcam"
//           />
//           <button onClick={captureImage} className="capture-button">
//             Capture
//           </button>
//           <button
//             onClick={() => fileInputRef.current.click()}
//             className="gallery-button"
//           >
//             Open Gallery
//           </button>
//           <button onClick={handleExit} className="exit-button">
//             Exit
//           </button>
//           <input
//             type="file"
//             accept="image/*"
//             name="image"
//             onChange={handleFileChange}
//             ref={fileInputRef}
//             style={{ display: "none" }}
//           />
//         </>
//       </section>
//     </main>
//   );
// }

import "./CameraPage.scss";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Webcam from "react-webcam";
import LoadingScreenPage from "../LoadingScreenPage/LoadingScreenPage";
import axios from "axios";

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
              className="webcam"
            />
            <button onClick={captureImage} className="capture-button">
              Capture
            </button>
            <button
              onClick={() => fileInputRef.current.click()}
              className="gallery-button"
            >
              Open Gallery
            </button>
            <button onClick={handleExit} className="exit-button">
              Exit
            </button>
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
