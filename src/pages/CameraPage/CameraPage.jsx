import "./CameraPage.scss";
import { useEffect, useState, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import LoadingScreenPage from "../LoadingScreenPage/LoadingScreenPage";

export default function CameraPage({ setReceivedData }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageUploaded, setImageUploaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate(); // Initialize the navigate function
  const location = useLocation();
  const fileInputRef = useRef(null); // Create a ref for the file input element

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const fileName = params.get("file");

    if (fileName && fileInputRef.current) {
      fileInputRef.current.click();
    }
  }, [location]);

  useEffect(() => {
    if (imageUploaded) {
      navigate("/collections");
    }
  }, [imageUploaded, navigate]);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      uploadImage(file);
    }
  };
  const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append("image", file);

    setIsLoading(true); // Trigger a loading page
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/camera`, {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      console.log("Response from OpenAI:", data);
      setReceivedData(true); // Update the state to show the response on CollectionsPage

      // Only set imageUploaded if data is received
      if (data) {
        setImageUploaded(true);
      }
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };
  return (
    <main>
      <section className="camera">
        <h1>Camera</h1>
        {/* If data is loading, display LoadingScreenPage */}
        {isLoading && <LoadingScreenPage />}

        <input
          type="file"
          id="fileInput"
          accept="image/*"
          capture="camera"
          name="image"
          onChange={handleFileChange}
          ref={fileInputRef} // Attach the ref to the input element
        />
      </section>
    </main>
  );
}
