import "./CollectionPage.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import CollectionGallery from "../../components/CollectionGallery/CollectionGallery";
import CollectionDetail from "../../components/CollectionDetail/CollectionDetail";

export default function CollectionPage() {
  const [plantCollection, setPlantCollection] = useState([]);

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

  return (
    <>
      <CollectionGallery plantCollection={plantCollection} />
      <CollectionDetail />
    </>
  );
}
