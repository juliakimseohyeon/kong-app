import "./SearchResult.scss";

export default function SearchResult({ plants }) {
  return (
    <section className="search-result">
      <h2>Search Results</h2>
      {plants.map((plant) => (
        <div className="search-result__card">
          <img className="search-result__image" src={plant.image} />
          <div className="search-result__names">
            <h3 className="search-result__title">{plant.common_name}</h3>
            <p className="search-result__subtitle">{plant.scientific_name}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
