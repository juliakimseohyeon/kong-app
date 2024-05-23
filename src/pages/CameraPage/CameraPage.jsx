import "./CameraPage.scss";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CameraPage({ setReceivedData }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageUploaded, setImageUploaded] = useState(false);
  const navigate = useNavigate(); // Initialize the navigate function

  useEffect(() => {
    if (imageUploaded) {
      navigate("/collections"); // Navigate to "/collections" route when imageUploaded state changes
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

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/camera`, {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      console.log("Response from OpenAI:", data);
      setReceivedData(true); // Update the state to show the response on CollectionsPage
      setImageUploaded(true);
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };
  return (
    <main>
      <section className="camera">
        <h1>Camera</h1>

        <input
          type="file"
          id="fileInput"
          accept="image/*"
          capture="camera"
          name="image"
          onChange={handleFileChange}
        />
      </section>
    </main>
  );
}
