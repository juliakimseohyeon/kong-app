import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import "./App.scss";
import CollectionPage from "./pages/CollectionPage/CollectionPage";
import FeaturedPlantsPage from "./pages/FeaturedPlantsPage/FeaturedPlantsPage";
import CameraPage from "./pages/CameraPage/CameraPage";
import HeaderNav from "./components/HeaderNav/HeaderNav";
import RedirectPage from "./pages/RedirectPage/RedirectPage";

function App() {
  const [isPlantSelected, setIsPlantSelected] = useState(false);
  const [isHomeIconClicked, setIsHomeIconClicked] = useState(false);

  const uploadSuccess = () =>
    toast.success("Your plant has been created!", {
      duration: 4000,
      position: "bottom-left",
      icon: "🌱",
    });

  const updateSuccess = () =>
    toast.success("Your plant has been updated!", {
      duration: 4000,
      position: "bottom-left",
      icon: "👏",
    });

  const deleteSuccess = () => {
    toast.success("Your plant has been deleted!", {
      duration: 4000,
      position: "bottom-left",
      icon: "🗑️",
    });
  };

  const uploadFailure = () => {
    toast.error("Sorry, there was an error identifying your plant.", {
      duration: 4000,
      position: "bottom-left",
      icon: "😭",
    });
  };

  const plantAlreadyExists = (plantName) => {
    toast.error(`${plantName} already exists in your database.`, {
      duration: 4000,
      position: "bottom-left",
      icon: "📋",
    });
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/redirect" />} />
        <Route path="/redirect" element={<RedirectPage />} />
      </Routes>
    </BrowserRouter>
  )

  return (
    <BrowserRouter>
      <Toaster
        containerStyle={{
          top: "84%", // Center it vertically
          transform: "translate(0, -75%)", // Adjust for the exact center
        }}
      />
      {!isPlantSelected && <HeaderNav />}
      <Routes>
        <Route path="/" element={<Navigate to="/redirect" />} />
        <Route
          path="/collections"
          element={
            <CollectionPage
              isPlantSelected={isPlantSelected}
              setIsPlantSelected={setIsPlantSelected}
              updateSuccess={updateSuccess}
              deleteSuccess={deleteSuccess}
              isHomeIconClicked={isHomeIconClicked}
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
              deleteSuccess={deleteSuccess}
              setIsHomeIconClicked={setIsHomeIconClicked}
            />
          }
        />
        <Route path="/featuredplants" element={<FeaturedPlantsPage />} />
        <Route
          path="/camera"
          element={
            <CameraPage
              uploadSuccess={uploadSuccess}
              uploadFailure={uploadFailure}
              plantAlreadyExists={plantAlreadyExists}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
