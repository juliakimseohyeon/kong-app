import "../../App.scss";
import "./CollectionDetail.scss";
import arrowLeftSmall from "../../assets/icons/icon-arrow-left.svg";
import { useParams, Link } from "react-router-dom";

export default function CollectionDetail({ selectedPlant, selectedPlantId }) {
  console.log(selectedPlantId);
  return (
    <>
      <header className="header">
        <Link to={"/"}>
          <img src={arrowLeftSmall} />
        </Link>
        <p className="header__title">{selectedPlant.commonName}</p>
      </header>
      <main>
        <section className="hero">
          <img className="hero__image" src={selectedPlant.image} />
          <div className="hero__text">
            <h1>{selectedPlant.commonName}</h1>
            <h2>{selectedPlant.scientificName}</h2>
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
            <img />
          </div>
        </section>
      </main>
    </>
  );
}
