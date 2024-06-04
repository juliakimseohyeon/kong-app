import { useState } from "react";
import "./SortModal.scss";

export default function SortModal({
  setIsSortClicked,
  plantCollection,
  setPlantCollection,
  activeChoice,
  setActiveChoice,
}) {
  // Handle click function to trigger both the className toggle and the specified sort function
  const handleClick = (index, sortFunction) => {
    setActiveChoice(index);
    sortFunction();
  };

  // Function to sort by date created (chronological order from newest to oldest)
  const sortByTime = () => {
    setIsSortClicked(false);
    plantCollection.sort(
      (a, b) => new Date(b.created_at) - new Date(a.created_at)
    );
    setPlantCollection(plantCollection);
    console.log("sorted plant collection: ", plantCollection);
  };

  // Function to sort by name (alphabetical order)
  const sortByName = () => {
    setIsSortClicked(false);
    plantCollection.sort((a, b) => a.common_name.localeCompare(b.common_name));
    setPlantCollection(plantCollection);
    console.log("sorted plant collection: ", plantCollection);
  };
  return (
    <div className="container">
      <div className="edit-modal">
        <h1>Sort by</h1>
        <div
          className="edit-modal__choice"
          onClick={() => handleClick(0, sortByTime)}
        >
          <p
            className={`edit-modal__choice-text ${
              activeChoice === 0 ? "edit-modal__choice-text--active" : ""
            }`}
          >
            Most recently added
          </p>
          <div
            className={`edit-modal__choice-circle ${
              activeChoice === 0 ? "edit-modal__choice-circle--active" : ""
            }`}
          ></div>
        </div>
        <div
          className="edit-modal__choice"
          onClick={() => handleClick(1, sortByName)}
        >
          <p
            className={`edit-modal__choice-text ${
              activeChoice === 1 ? "edit-modal__choice-text--active" : ""
            }`}
          >
            Name
          </p>
          <div
            className={`edit-modal__choice-circle ${
              activeChoice === 1 ? "edit-modal__choice-circle--active" : ""
            }`}
          ></div>
        </div>
        <div className="edit-modal__choice">
          <p className="edit-modal__choice-text">Growing Season</p>
          <div className="edit-modal__choice-circle"></div>
        </div>
        <div className="edit-modal__choice">
          <p className="edit-modal__choice-text">Habitat</p>
          <div className="edit-modal__choice-circle"></div>
        </div>
        <button
          className="button--cancel"
          onClick={() => setIsSortClicked(false)}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
