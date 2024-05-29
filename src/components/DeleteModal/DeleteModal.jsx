import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./DeleteModal.scss";

export default function DeleteModal({
  setDeleteModalVisible,
  plantToDelete,
  setPlantToDelete,
}) {
  const navigate = useNavigate();

  const handleClickConfirm = async (plantId) => {
    if (plantId) {
      try {
        const response = await axios.delete(
          `${import.meta.env.VITE_API_URL}/collections/${plantId}`
        );
        console.log(`Deleted plant with ID: ${plantId}`);
        console.log(response);
      } catch (err) {
        console.error(err);
      }
    }
  };

  const handleModalClose = () => {
    setDeleteModalVisible(false);
    setPlantToDelete(null);
  };
  return (
    <div className="container">
      <div className="delete-modal">
        <h1>Are you sure you want to delete Plant Name?</h1>
        <p>
          Please confirm that you'd like to delete the Plant Name from your
          collection. You won't be able to undo this action.
        </p>
        <div className="delete-modal__button-group">
          <button
            className="delete-modal__button button--cancel"
            onClick={handleModalClose}
          >
            Cancel
          </button>
          <button
            className="delete-modal__button button--delete"
            onClick={() => handleClickConfirm(plantToDelete)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
