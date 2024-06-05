import { useParams, Link } from "react-router-dom";
import deleteIcon from "../../assets/icons/icon-delete.svg";
import editIcon from "../../assets/icons/icon-edit.svg";

export default function SearchResult({ plants }) {
  return (
    <section className="search-result">
      <h2>Search Results</h2>
      {plants.map((plant) => (
        <h3>{plant.common_name}</h3>
      ))}
    </section>
  );
}
