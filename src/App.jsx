import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import "./App.scss";
import CollectionPage from "./pages/CollectionPage/CollectionPage";
import FeaturedPlantsPage from "./pages/FeaturedPlantsPage/FeaturedPlantsPage";
import CameraPage from "./pages/CameraPage/CameraPage";
import HeaderNav from "./components/HeaderNav/HeaderNav";
import FooterNav from "./components/FooterNav/FooterNav";

function App() {
  const [isPlantSelected, setIsPlantSelected] = useState(false);
  const [receivedData, setReceivedData] = useState(false);

  return (
    <BrowserRouter>
      {!isPlantSelected && <HeaderNav />}
      <Routes>
        <Route path="/" element={<Navigate to="/collections" />} />
        <Route
          path="/collections"
          element={
            <CollectionPage
              isPlantSelected={isPlantSelected}
              setIsPlantSelected={setIsPlantSelected}
            />
          }
        />
        <Route
          path="/collections/:plantId"
          element={
            <CollectionPage
              isPlantSelected={isPlantSelected}
              setIsPlantSelected={setIsPlantSelected}
            />
          }
        />
        <Route path="/featuredplants" element={<FeaturedPlantsPage />} />
        <Route
          path="/camera"
          element={<CameraPage setReceivedData={setReceivedData} />}
        />
      </Routes>
      <FooterNav />
    </BrowserRouter>
  );
}

export default App;
