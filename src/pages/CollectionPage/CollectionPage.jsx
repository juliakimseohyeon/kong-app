import "./CollectionPage.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import CollectionGallery from "../../components/CollectionGallery/CollectionGallery";
import CollectionDetail from "../../components/CollectionDetail/CollectionDetail";
import DeleteModal from "../../components/DeleteModal/DeleteModal";

export default function CollectionPage({
  isPlantSelected,
  setIsPlantSelected,
}) {
  const [plantCollection, setPlantCollection] = useState([]);
  const [selectedPlant, setSelectedPlant] = useState({});
  const [selectedPlantId, setSelectedPlantId] = useState("");
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);

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
  }, [deleteModalVisible]);

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

  return (
    <>
      {!isPlantSelected ? (
        <CollectionGallery
          plantCollection={plantCollection}
          isPlantSelected={isPlantSelected}
          setIsPlantSelected={setIsPlantSelected}
          selectedPlantId={selectedPlantId}
          setSelectedPlantId={setSelectedPlantId}
          deleteModalVisible={deleteModalVisible}
          setDeleteModalVisible={setDeleteModalVisible}
        />
      ) : (
        <CollectionDetail
          selectedPlant={selectedPlant}
          setIsPlantSelected={setIsPlantSelected}
        />
      )}
    </>
  );
}
