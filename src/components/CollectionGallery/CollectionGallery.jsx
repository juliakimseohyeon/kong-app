export default function CollectionGallery({ plantCollection }) {
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
