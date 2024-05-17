import "./CollectionPage.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import CollectionGallery from "../../components/CollectionGallery/CollectionGallery";
import CollectionDetail from "../../components/CollectionDetail/CollectionDetail";

export default function CollectionPage({
  isPlantSelected,
  setIsPlantSelected,
}) {
  const [plantCollection, setPlantCollection] = useState([]);
  const [selectedPlant, setSelectedPlant] = useState({});
  const [selectedPlantId, setSelectedPlantId] = useState("");

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
        console.log(err);
      }
    }
    getPlantsData();
  }, []);

  /* -------------------------------------------------------------------------- */
  /*            Function to load specific plant data from collection            */
  /* -------------------------------------------------------------------------- */
  useEffect(() => {
    async function getOnePlantData() {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/collections/${selectedPlantId}`
        );
        setSelectedPlant(response.data);
      } catch (err) {
        console.log(err);
      }
    }
    getOnePlantData();
  }, [selectedPlantId]);

  console.log(selectedPlant);
  return (
    <>
      {!isPlantSelected ? (
        <CollectionGallery
          plantCollection={plantCollection}
          isPlantSelected={isPlantSelected}
          setIsPlantSelected={setIsPlantSelected}
          setSelectedPlantId={setSelectedPlantId}
        />
      ) : (
        <CollectionDetail selectedPlant={selectedPlant} />
      )}
    </>
  );
}
