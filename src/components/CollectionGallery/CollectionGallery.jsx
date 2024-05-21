import { useParams, Link } from "react-router-dom";
export default function CollectionGallery({
  plantCollection,
  isPlantSelected,
  setIsPlantSelected,
  setSelectedPlantId,
}) {
  const params = useParams();
  const selectPlant = (plantId) => {
    setIsPlantSelected(true);
    setSelectedPlantId(plantId);
    console.log(plantId);
  };

  // useEffect(() => {
  //   setSelectedPlantId(params.plantId); // set the new SelectedPlantId to the parameter, which will trigger a useEffect function in the parent component (CollectionPage)
  // }, [params]);

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
          <Link to={`/collections/${plant.id}`} key={plant.id}>
            <div className="plant-card" onClick={() => selectPlant(plant.id)}>
              <img
                src={plant.image}
                className="plant-card__image"
                alt={plant.commonName}
              />
              <div>
                <h2 className="plant-card__title">{plant.commonName}</h2>
                <p className="plant-card__subtitle label">
                  {plant.scientificName}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}
