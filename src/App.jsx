import "./App.scss";
import { useState } from "react";
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { AuthProvider } from "./utils/Auth/AuthContext";
import PrivateRoute from "./utils/Auth/PrivateRoute";
import CollectionPage from "./pages/CollectionPage/CollectionPage";
import FeaturedPlantsPage from "./pages/FeaturedPlantsPage/FeaturedPlantsPage";
import CameraPage from "./pages/CameraPage/CameraPage";
import HeaderNav from "./components/HeaderNav/HeaderNav";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import LoginButton from "./components/LoginButton/LoginButton";

function App() {
  const [token, setToken] = useState();
  const [isPlantSelected, setIsPlantSelected] = useState(false);
  const [isHomeIconClicked, setIsHomeIconClicked] = useState(false);

  const registerSuccess = (email) => {
    toast.success(`Your account with the email ${email} has been created!`, {
      duration: 4000,
      position: "bottom-left",
      icon: "🪪",
    });
  };

  const registerMissingFieldError = () => {
    toast.error(`All fields are required.`, {
      duration: 4000,
      position: "bottom-left",
      icon: "🫥",
    });
  };

  const registerError = (userName) => {
    toast.error(`Sorry, ${userName} is already taken.`, {
      duration: 4000,
      position: "bottom-left",
      icon: "👯",
    });
  };

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
    <AuthProvider>
      <Toaster
        containerStyle={{
          top: "84%", // Center it vertically
          transform: "translate(0, -75%)", // Adjust for the exact center
        }}
      />
      <BrowserRouter>
        {!isPlantSelected && <HeaderNav />}

        <Routes>
          <Route
            path="/register"
            element={
              <RegisterPage
                registerMissingFieldError={registerMissingFieldError}
                registerError={registerError}
                registerSuccess={registerSuccess}
              />
            }
          />
          <Route path="/login" element={<LoginPage />} />
          <Route element={<PrivateRoute />}>
            <Route path="/" element={<Navigate to="/collections" />} />
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
            {/* <Route path="/featuredplants" element={<FeaturedPlantsPage />} /> */}
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
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
