import "./EditPlant.scss";
import arrowLeftSmall from "../../assets/icons/icon-arrow-left.svg";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

export default function EditPlant({
  plantToEdit,
  setIsLoading,
  setIsEditButtonClicked,
}) {
  const editPlant = async (plantId) => {
    setIsLoading(true); // Set loading state to true at the beginning of the function
    setIsEditButtonClicked(false); // Set EditButtonClicked to false so it would not render anymore
    try {
      console.log("Generating new illustration for plant");

      await axios.put(`${import.meta.env.VITE_API_URL}/collections/${plantId}`);
      setIsLoading(false); // Set loading state to false after API call is completed
    } catch (err) {
      setIsLoading(false); // Set loading state to false in case of error
      console.error("Error updating plant:", err);
    }
  };

  return (
    <>
      <header className="header">
        <Link to={"/collections"} onClick={() => setIsPlantSelected(false)}>
          <img src={arrowLeftSmall} alt="Back Button" />
        </Link>
        <p className="header__title">Edit {plantToEdit.common_name}</p>
      </header>
      <main className="edit-plant">
        <section className="hero">
          <img
            className="edit-plant__image"
            src={plantToEdit.image}
            alt={plantToEdit.common_name}
          />
          <div className="edit-plant__text">
            <h1>{plantToEdit.common_name}</h1>
            <h2>{plantToEdit.scientific_name}</h2>
          </div>
        </section>
        <button
          className="edit-plant__button"
          onClick={() => editPlant(plantToEdit.id)}
        >
          Generate New Illustration of {plantToEdit.common_name}
        </button>
      </main>
    </>
  );
}
