import "./CollectionPage.scss";
import axios from "axios";
import { useState, useEffect } from "react";

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
    <main>
      <section className="stats">
        <div className="stats__text">
          <h1>Total plants collected 🌱</h1>
          <p className="stats__number">{plantCollection.length}</p>
        </div>
      </section>
      <section className="gallery">
        {plantCollection.map((plant) => (
          <div key={plant.id} className="plant-card">
            <img src={plant.image} className="plant-card__image" />
            <div>
              <h2 className="plant-card__title">{plant.commonName}</h2>
              <p className="plant-card__subtitle label">
                {plant.scientificName}
              </p>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
