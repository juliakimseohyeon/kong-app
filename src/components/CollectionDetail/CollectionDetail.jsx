import "../../App.scss";
import "./CollectionDetail.scss";
import arrowLeftSmall from "../../assets/icons/icon-arrow-left.svg";
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
          <div className="hero__text">
            <h1>{selectedPlant.common_name}</h1>
            <h2>{selectedPlant.scientific_name}</h2>
          </div>
          <div className="hero__status-group">
            <p className="hero__status">{selectedPlant.status}</p>
            <p className="hero__status">In Your Collection</p>
          </div>
        </section>
        <section className="collection-detail">
          <div className="collection-detail__block">
            <h3>When does it grow?</h3>
            <p className="collection-detail__description">
              {selectedPlant.season}
            </p>
          </div>
          <div className="collection-detail__block">
            <h3>Where is it found?</h3>
            <p className="collection-detail__description">
              {selectedPlant.habitat}
            </p>
          </div>
          <div className="collection-detail__block">
            <h3>Characteristics</h3>
            <p className="collection-detail__description">
              {selectedPlant.characteristics}
            </p>
          </div>
          <div className="collection-detail__block">
            <h3>Photos of the plant</h3>
            <img alt="" />
          </div>
        </section>
      </main>
    </>
  );
}
