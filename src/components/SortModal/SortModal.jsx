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
  const sortByCreateTime = () => {
    setIsSortClicked(false);
    plantCollection.sort(
      (a, b) => new Date(b.created_at) - new Date(a.created_at)
    );
    setPlantCollection(plantCollection);
  };

  // Function to sort by date updated (chronological order from newest to oldest)
  const sortByUpdateTime = () => {
    setIsSortClicked(false);
    plantCollection.sort(
      (a, b) => new Date(b.updated_at) - new Date(a.updated_at)
    );
    setPlantCollection(plantCollection);
  };

  // Function to sort by name (alphabetical order)
  const sortByName = () => {
    setIsSortClicked(false);
    plantCollection.sort((a, b) => a.common_name.localeCompare(b.common_name));
    setPlantCollection(plantCollection);
  };
  return (
    <div className="container">
      <div className="edit-modal">
        <h1>Sort by</h1>
        <div
          className="edit-modal__choice"
          onClick={() => handleClick(0, sortByCreateTime)}
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
          onClick={() => handleClick(1, sortByUpdateTime)}
        >
          <p
            className={`edit-modal__choice-text ${
              activeChoice === 1 ? "edit-modal__choice-text--active" : ""
            }`}
          >
            Most recently updated
          </p>
          <div
            className={`edit-modal__choice-circle ${
              activeChoice === 1 ? "edit-modal__choice-circle--active" : ""
            }`}
          ></div>
        </div>
        <div
          className="edit-modal__choice"
          onClick={() => handleClick(2, sortByName)}
        >
          <p
            className={`edit-modal__choice-text ${
              activeChoice === 2 ? "edit-modal__choice-text--active" : ""
            }`}
          >
            Name
          </p>
          <div
            className={`edit-modal__choice-circle ${
              activeChoice === 2 ? "edit-modal__choice-circle--active" : ""
            }`}
          ></div>
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
