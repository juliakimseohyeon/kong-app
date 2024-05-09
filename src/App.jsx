import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.scss";
import CollectionPage from "./pages/CollectionPage/CollectionPage";
import FeaturedPlantsPage from "./pages/FeaturedPlantsPage/FeaturedPlantsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CollectionPage />} />
        <Route path="/featuredplants" element={<FeaturedPlantsPage />} />
        <Route path="" element="" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
