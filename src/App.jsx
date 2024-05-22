import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.scss";
import CollectionPage from "./pages/CollectionPage/CollectionPage";
import FeaturedPlantsPage from "./pages/FeaturedPlantsPage/FeaturedPlantsPage";
import CameraPage from "./pages/CameraPage/CameraPage";
import HeaderNav from "./components/HeaderNav/HeaderNav";
import FooterNav from "./components/FooterNav/FooterNav";

function App() {
  const [isPlantSelected, setIsPlantSelected] = useState(false);
  return (
    <BrowserRouter>
      {!isPlantSelected && <HeaderNav />}
      <Routes>
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
        <Route path="/camera" element={<CameraPage />} />
      </Routes>
      <FooterNav />
    </BrowserRouter>
  );
}

export default App;
