import "../../App.scss";
import "./CollectionDetail.scss";
import arrowLeftSmall from "../../assets/icons/icon-arrow-left.svg";
import deleteIcon from "../../assets/icons/icon-delete.svg";
import editIcon from "../../assets/icons/icon-edit.svg";
import { Link } from "react-router-dom";

export default function CollectionDetail({
  selectedPlant,
  setIsPlantSelected,
  selectedPlantId,
}) {
  return (
    <>
      <header className="header">
        <Link to={"/collections"} onClick={() => setIsPlantSelected(false)}>
          <img src={arrowLeftSmall} alt="Back Button" />
        </Link>
        <p className="header__title">{selectedPlant.common_name}</p>
      </header>
      <main>
        <section className="hero">
          <img
            className="hero__image"
            src={selectedPlant.image}
            alt={selectedPlant.common_name}
          />
          <div className="hero__main-info-group">
            <div className="hero__text">
              <h1>{selectedPlant.common_name}</h1>
              <h3>{selectedPlant.scientific_name}</h3>
            </div>
            <div className="hero__button-group">
              <img
                src={deleteIcon}
                alt="Delete"
                onClick={() => handleClickDelete(plant)}
              />
              <img
                src={editIcon}
                alt="Edit"
                onClick={() => handleClickEdit(plant)}
              />
            </div>
          </div>
          <div className="hero__status">
            <p className="hero__status-detail">{selectedPlant.status}</p>
          </div>
        </section>
        <section className="collection-detail">
          <div className="collection-detail__block">
            <h2>When does it grow?</h2>
            <p className="collection-detail__description">
              {selectedPlant.season}
            </p>
          </div>
          <div className="collection-detail__block">
            <h2>Where is it found?</h2>
            <p className="collection-detail__description">
              {selectedPlant.habitat}
            </p>
          </div>
          <div className="collection-detail__block">
            <h2>Characteristics</h2>
            <p className="collection-detail__description">
              {selectedPlant.characteristics}
            </p>
          </div>
          <div className="collection-detail__block">
            <h2>Photos of the plant</h2>
            <img alt="" />
          </div>
        </section>
      </main>
    </>
  );
}
