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
          <p className="stats__number">93</p>
        </div>
      </section>
      <section className="gallery">
        {plantCollection.map((plant) => (
          <div key={plant.id}>
            <img src={plant.image} />
            <div>
              <h2>{plant.commonName}</h2>
              <p className="label">{plant.scientificName}</p>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
