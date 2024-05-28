import { useParams, Link, useNavigate } from "react-router-dom";

export default function DeleteModal({
  selectedPlantId,
  setDeleteModalVisible,
  plantToDelete,
}) {
  const navigate = useNavigate();

  const handleClickDelete = async (plantId) => {
    if (plantId) {
      try {
        // const response = await axios.delete(
        //   `${import.meta.env.VITE_API_URL}/collections/${plantId}`
        // );
        console.log(`Deleted plant with ID: ${plantId}`);
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
    <>
      <h1>Are you sure you want to delete Plant Name?</h1>
      <button onClick={handleModalClose}>Cancel</button>
      <button onClick={() => handleClickDelete(plantToDelete)}>Delete</button>
    </>
  );
}
