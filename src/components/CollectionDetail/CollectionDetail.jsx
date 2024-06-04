import "../../App.scss";
import "./CollectionDetail.scss";
import arrowLeftSmall from "../../assets/icons/icon-arrow-left.svg";
import deleteIcon from "../../assets/icons/icon-delete.svg";
import editIcon from "../../assets/icons/icon-edit.svg";
import { Link } from "react-router-dom";
import DeleteModal from "../DeleteModal/DeleteModal";
import LoadingScreenPage from "../../pages/LoadingScreenPage/LoadingScreenPage";

export default function CollectionDetail({
  selectedPlant,
  setIsPlantSelected,
  selectedPlantId,
  selectPlant,
  handleClickDelete,
  handleClickEdit,
  deleteModalVisible,
  setDeleteModalVisible,
  plantToDelete,
  setPlantToDelete,
  isLoading,
  updateSuccess,
}) {
  if (selectedPlant) {
    console.log("Selected Plant: ", selectedPlant);
    console.log(
      "Related photo URL :",
      selectedPlant.myPlantnetResponse[0].photo_url
    );
    return (
      <>
        <header className="header">
          <Link to={"/collections"} onClick={() => setIsPlantSelected(false)}>
            <img src={arrowLeftSmall} alt="Back Button" />
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
            />
          )}
          {isLoading && <LoadingScreenPage />}
          <section className="hero">
            <img
              className="hero__image"
              src={selectedPlant.openAiResponse.image}
              alt={selectedPlant.openAiResponse.common_name}
            />
            <div className="hero__main-info-group">
              <div className="hero__text">
                <h1>{selectedPlant.openAiResponse.common_name}</h1>
                <h3>{selectedPlant.openAiResponse.scientific_name}</h3>
              </div>
              <div className="hero__button-group">
                <img
                  src={deleteIcon}
                  alt="Delete"
                  onClick={() =>
                    handleClickDelete(selectedPlant.openAiResponse)
                  }
                />
                <img
                  src={editIcon}
                  alt="Edit"
                  onClick={() => handleClickEdit(selectedPlant.openAiResponse)}
                />
              </div>
            </div>
            <div className="hero__status">
              <p className="hero__status-detail">
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
            <div className="collection-detail__block">
              <h2>Photos of the plant</h2>
              {selectedPlant.myPlantnetResponse.map((response, index) => (
                <div className="collection-detail__gallery" key={index}>
                  <img
                    className="collection-detail__photo"
                    src={response.photo_url}
                    alt=""
                  />
                </div>
              ))}
            </div>
          </section>
        </main>
      </>
    );
  } else if (!selectedPlant) {
    return <h1>Loading</h1>;
  }
}
