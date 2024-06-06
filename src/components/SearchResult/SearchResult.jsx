import "./SearchResult.scss";
import { Link } from "react-router-dom";

export default function SearchResult({ plants, selectPlant, searchInput }) {
  return (
    <section className="search-result">
      <h2>Search Results</h2>
      {plants.length > 0 ? (
        plants.map((plant) => (
          <Link
            to={`/collections/${plant.id}`}
            key={plant.id}
            onClick={() => selectPlant(plant.id)}
          >
            <div className="search-result__card">
              <img className="search-result__image" src={plant.image} />
              <div className="search-result__names">
                <h3 className="search-result__title">{plant.common_name}</h3>
                <p className="search-result__subtitle">
                  {plant.scientific_name}
                </p>
              </div>
            </div>
          </Link>
        ))
      ) : (
        <p>
          We couldn't find <b>{searchInput}</b>
        </p>
      )}
    </section>
  );
}
