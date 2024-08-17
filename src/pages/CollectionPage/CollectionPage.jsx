import "./CollectionPage.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import CollectionGallery from "../../components/CollectionGallery/CollectionGallery";
import CollectionDetail from "../../components/CollectionDetail/CollectionDetail";
import EditPlant from "../../components/EditPlant/EditPlant";
import LoadingScreenPage from "../LoadingScreenPage/LoadingScreenPage";
import DeleteModal from "../../components/DeleteModal/DeleteModal";
import FooterNav from "../../components/FooterNav/FooterNav";
import LogoutButton from "../../components/LogoutButton/LogoutButton";

export default function CollectionPage({
  isPlantSelected,
  setIsPlantSelected,
  updateSuccess,
  deleteSuccess,
  isHomeIconClicked,
  setIsHomeIconClicked,
}) {
  const [plantCollection, setPlantCollection] = useState([]);
  const [selectedPlant, setSelectedPlant] = useState({});
  const [selectedPlantId, setSelectedPlantId] = useState("");
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [isEditButtonClicked, setIsEditButtonClicked] = useState(false);
  const [plantToEdit, setPlantToEdit] = useState(null);
  const [plantToDelete, setPlantToDelete] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const selectPlant = (plantId) => {
    setIsPlantSelected(true);
    setSelectedPlantId(plantId);
  };

  const handleClickDelete = (plant) => {
    setPlantToDelete(plant);
    setDeleteModalVisible(true);
  };

  const handleClickEdit = (plant) => {
    setPlantToEdit(plant);
    setIsEditButtonClicked(true);
  };

  /* -------------------------------------------------------------------------- */
  /*                  Function to load all plants in collection                 */
  /* -------------------------------------------------------------------------- */
  useEffect(() => {
    async function getPlantsData() {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/collections`
        );
        const plantData = response.data;

        plantData.sort(
          (a, b) => new Date(b.created_at) - new Date(a.created_at)
        );
        setPlantCollection(plantData); // Sort plants in chronological order on default
      } catch (err) {
        console.error(err);
      }
    }
    getPlantsData();
  }, [deleteModalVisible, isLoading, isHomeIconClicked, isPlantSelected]); // Re-render the page every time a plant is deleted or edited

  /* -------------------------------------------------------------------------- */
  /*            Function to load specific plant data from collection            */
  /* -------------------------------------------------------------------------- */
  const axiosOnePlantRequest = async () => {
    try {
      if (selectedPlantId) {
        // Get the data from the API
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/collections/${selectedPlantId}`
        );

        const data = response.data;
        return data;
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    async function getOnePlantData() {
      try {
        const data = await axiosOnePlantRequest();

        if (data === "{}") {
          console.log("Data still loading: ", data);
        } else {
          setSelectedPlant(data);
        }
      } catch (err) {
        console.log(err);
      }
    }
    getOnePlantData();
  }, [selectedPlantId, isLoading, isPlantSelected, isEditButtonClicked]);

  if (isLoading) {
    return <LoadingScreenPage />;
  }

  if (deleteModalVisible) {
    return (
      <>
        <DeleteModal
          setDeleteModalVisible={setDeleteModalVisible}
          plantToDelete={plantToDelete}
          setPlantToDelete={setPlantToDelete}
          deleteSuccess={deleteSuccess}
          setIsPlantSelected={setIsPlantSelected}
        />
        <FooterNav setIsHomeIconClicked={setIsHomeIconClicked} />
      </>
    );
  }

  if (isEditButtonClicked) {
    return (
      <>
        <EditPlant
          plantToEdit={plantToEdit}
          setIsLoading={setIsLoading}
          setIsEditButtonClicked={setIsEditButtonClicked}
          setSelectedPlantId={setSelectedPlantId}
          setIsPlantSelected={setIsPlantSelected}
          updateSuccess={updateSuccess}
        />
        <FooterNav setIsHomeIconClicked={setIsHomeIconClicked} />
      </>
    );
  }

  if (isPlantSelected) {
    return (
      <>
        <CollectionDetail
          selectedPlant={selectedPlant}
          setIsPlantSelected={setIsPlantSelected}
          handleClickDelete={handleClickDelete}
          handleClickEdit={handleClickEdit}
          deleteModalVisible={deleteModalVisible}
          setDeleteModalVisible={setDeleteModalVisible}
          plantToDelete={plantToDelete}
          setPlantToDelete={setPlantToDelete}
          isLoading={isLoading}
          deleteSuccess={deleteSuccess}
        />
        <FooterNav setIsHomeIconClicked={setIsHomeIconClicked} />
      </>
    );
  }

  return (
    <>
      <CollectionGallery
        plantCollection={plantCollection}
        setPlantCollection={setPlantCollection}
        selectPlant={selectPlant}
        handleClickDelete={handleClickDelete}
        handleClickEdit={handleClickEdit}
      />
      <LogoutButton />
      <FooterNav setIsHomeIconClicked={setIsHomeIconClicked} />
    </>
  );
}
