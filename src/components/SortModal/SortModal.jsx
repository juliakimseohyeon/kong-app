import "./SortModal.scss";

export default function SortModal({
  setIsSortClicked,
  plantCollection,
  setPlantCollection,
}) {
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
        <div className="edit-modal__choice" onClick={sortByTime}>
          <p className="edit-modal__choice-text">Most recently added</p>
          <div className="edit-modal__choice-circle"></div>
        </div>
        <div className="edit-modal__choice" onClick={sortByName}>
          <p className="edit-modal__choice-text">Name</p>
          <div className="edit-modal__choice-circle"></div>
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
