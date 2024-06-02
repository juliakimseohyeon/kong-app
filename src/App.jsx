import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import "./App.scss";
import CollectionPage from "./pages/CollectionPage/CollectionPage";
import FeaturedPlantsPage from "./pages/FeaturedPlantsPage/FeaturedPlantsPage";
import CameraPage from "./pages/CameraPage/CameraPage";
import HeaderNav from "./components/HeaderNav/HeaderNav";
import FooterNav from "./components/FooterNav/FooterNav";

function App() {
  const [isPlantSelected, setIsPlantSelected] = useState(false);
  const [isCameraOn, setIsCameraOn] = useState(false);

  const updateSuccess = () =>
    toast.success("Your plant has been updated!", {
      duration: 4000,
      position: "bottom-left",
      icon: "👏",
    });

  const uploadSuccess = () =>
    toast.success("Your plant has been created!", {
      duration: 4000,
      position: "bottom-left",
      icon: "🌱",
    });

  return (
    <BrowserRouter>
      <Toaster
        containerStyle={{
          // position: "fixed", // Ensure the position is fixed
          top: "84%", // Center it vertically
          transform: "translate(0, -75%)", // Adjust for the exact center
        }}
      />
      {!isPlantSelected && <HeaderNav />}
      <Routes>
        <Route path="/" element={<Navigate to="/collections" />} />
        <Route
          path="/collections"
          element={
            <CollectionPage
              isPlantSelected={isPlantSelected}
              setIsPlantSelected={setIsPlantSelected}
              updateSuccess={updateSuccess}
            />
          }
        />
        <Route
          path="/collections/:plantId"
          element={
            <CollectionPage
              isPlantSelected={isPlantSelected}
              setIsPlantSelected={setIsPlantSelected}
              updateSuccess={updateSuccess}
            />
          }
        />
        <Route path="/featuredplants" element={<FeaturedPlantsPage />} />
        <Route
          path="/camera"
          element={
            <CameraPage
              uploadSuccess={uploadSuccess}
              setIsCameraOn={setIsCameraOn}
            />
          }
        />
      </Routes>
      {!isCameraOn && <FooterNav />}
    </BrowserRouter>
  );
}

export default App;
