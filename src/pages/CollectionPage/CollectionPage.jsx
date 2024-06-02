import "./CollectionPage.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import CollectionGallery from "../../components/CollectionGallery/CollectionGallery";
import CollectionDetail from "../../components/CollectionDetail/CollectionDetail";
import EditPlant from "../../components/EditPlant/EditPlant";
import LoadingScreenPage from "../LoadingScreenPage/LoadingScreenPage";
import DeleteModal from "../../components/DeleteModal/DeleteModal";

export default function CollectionPage({
  isPlantSelected,
  setIsPlantSelected,
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
    // console.log(plantId);
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
        setPlantCollection(response.data);
      } catch (err) {
        console.error(err);
      }
    }
    getPlantsData();
  }, [deleteModalVisible, isLoading]); // Re-render the page every time a plant is deleted or edited

  /* -------------------------------------------------------------------------- */
  /*            Function to load specific plant data from collection            */
  /* -------------------------------------------------------------------------- */
  useEffect(() => {
    async function getOnePlantData() {
      try {
        if (selectedPlantId) {
          const response = await axios.get(
            `${import.meta.env.VITE_API_URL}/collections/${selectedPlantId}`
          );
          setSelectedPlant(response.data);
        }
      } catch (err) {
        console.error(err);
      }
    }
    getOnePlantData();
  }, [selectedPlantId]);

  if (isEditButtonClicked) {
    return (
      <EditPlant
        plantToEdit={plantToEdit}
        setIsLoading={setIsLoading}
        setIsEditButtonClicked={setIsEditButtonClicked}
      />
    );
  } else if (isPlantSelected) {
    return (
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
      />
    );
  } else if (isLoading) {
    return <LoadingScreenPage />;
  } else if (deleteModalVisible) {
    return (
      <DeleteModal
        setDeleteModalVisible={setDeleteModalVisible}
        plantToDelete={plantToDelete}
        setPlantToDelete={setPlantToDelete}
      />
    );
  } else {
    return (
      <CollectionGallery
        plantCollection={plantCollection}
        isPlantSelected={isPlantSelected}
        setIsPlantSelected={setIsPlantSelected}
        selectedPlantId={selectedPlantId}
        setSelectedPlantId={setSelectedPlantId}
        deleteModalVisible={deleteModalVisible}
        setDeleteModalVisible={setDeleteModalVisible}
        setIsEditButtonClicked={setIsEditButtonClicked}
        setPlantToEdit={setPlantToEdit}
        selectPlant={selectPlant}
        handleClickDelete={handleClickDelete}
        handleClickEdit={handleClickEdit}
      />
    );
  }

  return;
}
