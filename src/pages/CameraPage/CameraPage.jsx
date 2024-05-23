import "./CameraPage.scss";
import { useState } from "react";

export default function CameraPage() {
  const [selectedFile, setSelectedFile] = useState(null);

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
      const response = await fetch("http://localhost:3000/camera", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      console.log("Response from OpenAI:", data);
      // Redirect or update the state to show the response on CollectionsPage
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };
  return (
    <main>
      <section className="camera">
        <h1>Camera</h1>
        <button id="accessButton">
          <img src="camera-icon.png" alt="Access Camera and Photo Album" />
        </button>
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
