import "./EditPlant.scss";
import arrowLeft from "../../assets/icons/icon-arrow-left-large.svg";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function EditPlant({
  plantToEdit,
  setIsLoading,
  setIsEditButtonClicked,
  updateSuccess,
}) {
  const navigate = useNavigate();

  const editPlant = async (plantToEdit) => {
    setIsLoading(true); // Set loading state to true at the beginning of the function
    setIsEditButtonClicked(false); // Set EditButtonClicked to false so it would not render anymore

    try {
      await axios.put(
        `${import.meta.env.VITE_API_URL}/collections/${plantToEdit.id}`
      );
      setIsLoading(false); // Set loading state to false after API call is completed
      updateSuccess();
      navigate("/collections");
    } catch (err) {
      setIsLoading(false); // Set loading state to false in case of error
      console.error("Error updating plant:", err);
    }
  };

  return (
    <>
      <header className="header">
        <Link
          to={`/collections/${plantToEdit.id}`}
          onClick={() => setIsPlantSelected(false)}
        >
          <div className="header__back-button">
            <img src={arrowLeft} alt="Back Button" />
          </div>
        </Link>
        <p className="header__title">Edit {plantToEdit.common_name}</p>
      </header>
      <main className="edit-plant">
        <section className="hero">
          <div className="edit-plant__image-container">
            <img
              className="edit-plant__image"
              src={plantToEdit.image}
              alt={plantToEdit.common_name}
            />
          </div>
          <div className="edit-plant__text">
            <h1>{plantToEdit.common_name}</h1>
            <h2>{plantToEdit.scientific_name}</h2>
          </div>
        </section>
        <button
          className="edit-plant__button"
          onClick={() => editPlant(plantToEdit)}
        >
          Generate New Illustration of {plantToEdit.common_name}
        </button>
      </main>
    </>
  );
}
