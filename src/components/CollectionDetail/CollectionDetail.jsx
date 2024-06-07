import "../../App.scss";
import "./CollectionDetail.scss";
import arrowLeft from "../../assets/icons/icon-arrow-left-large.svg";
import deleteIcon from "../../assets/icons/icon-delete.svg";
import editIcon from "../../assets/icons/icon-edit.svg";
import { Link } from "react-router-dom";
import DeleteModal from "../DeleteModal/DeleteModal";
import LoadingScreenPage from "../../pages/LoadingScreenPage/LoadingScreenPage";
import PhotoCarousel from "../PhotoCarousel/PhotoCarousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function CollectionDetail({
  selectedPlant,
  setIsPlantSelected,
  handleClickDelete,
  handleClickEdit,
  deleteModalVisible,
  setDeleteModalVisible,
  plantToDelete,
  setPlantToDelete,
  isLoading,
  deleteSuccess,
}) {
  if (selectedPlant) {
    // Apply conditional styling depending on plant's endangerment status
    const statusStyle = {
      backgroundColor:
        selectedPlant.openAiResponse.status === "Not Endangered"
          ? "#e0f1e5"
          : "#ffecea",
      color:
        selectedPlant.openAiResponse.status === "Not Endangered"
          ? "#6ac15e"
          : "#f96866",
    };

    return (
      <>
        <header className="header">
          <Link to={"/collections"} onClick={() => setIsPlantSelected(false)}>
            <div className="header__back-button">
              <img src={arrowLeft} alt="Back Button" />
            </div>
          </Link>
          <p className="header__title">
            {selectedPlant.openAiResponse.common_name}
          </p>
        </header>
        <main>
          {deleteModalVisible && (
            <DeleteModal
              setDeleteModalVisible={setDeleteModalVisible}
              plantToDelete={plantToDelete}
              setPlantToDelete={setPlantToDelete}
              deleteSuccess={deleteSuccess}
              setIsPlantSelected={setIsPlantSelected}
            />
          )}
          {isLoading && <LoadingScreenPage />}
          <section className="hero">
            <PhotoCarousel
              className="hero__image"
              myPlantnetResponse={selectedPlant.myPlantnetResponse}
              heroImg={selectedPlant.openAiResponse.image}
              alt={selectedPlant.openAiResponse.common_name}
            />
            <div className="hero__main-info-group">
              <div className="hero__text">
                <h1>{selectedPlant.openAiResponse.common_name}</h1>
                <h3>{selectedPlant.openAiResponse.scientific_name}</h3>
              </div>
              <div className="hero__button-group">
                <img
                  className="hero__button"
                  src={deleteIcon}
                  alt="Delete"
                  onClick={() =>
                    handleClickDelete(selectedPlant.openAiResponse)
                  }
                />
                <img
                  className="hero__button"
                  src={editIcon}
                  alt="Edit"
                  onClick={() => handleClickEdit(selectedPlant.openAiResponse)}
                />
              </div>
            </div>
            <div className="hero__status">
              <p className="hero__status-detail" style={statusStyle}>
                {selectedPlant.openAiResponse.status}
              </p>
            </div>
          </section>
          <section className="collection-detail">
            <div className="collection-detail__block">
              <h2>When does it grow?</h2>
              <p className="collection-detail__description">
                {selectedPlant.openAiResponse.season}
              </p>
            </div>
            <div className="collection-detail__block">
              <h2>Where is it found?</h2>
              <p className="collection-detail__description">
                {selectedPlant.openAiResponse.habitat}
              </p>
            </div>
            <div className="collection-detail__block">
              <h2>Characteristics</h2>
              <p className="collection-detail__description">
                {selectedPlant.openAiResponse.characteristics}
              </p>
            </div>
          </section>
        </main>
      </>
    );
  } else if (!selectedPlant) {
    return <h1>Loading</h1>;
  }
}
