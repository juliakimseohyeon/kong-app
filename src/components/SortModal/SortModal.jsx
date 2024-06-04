import "./SortModal.scss";

export default function SortModal({ setIsSortClicked }) {
  const handleClickChoice = () => {
    setIsSortClicked(false);
  };
  return (
    <div className="container">
      <div className="edit-modal">
        <h1>Sort by</h1>
        <div className="edit-modal__choice">
          <p className="edit-modal__choice-text">Most recently added</p>
          <div className="edit-modal__choice-circle"></div>
        </div>
        <div className="edit-modal__choice">
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
