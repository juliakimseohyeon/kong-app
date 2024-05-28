import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import deleteIcon from "../../assets/icons/icon-delete.svg";
import editIcon from "../../assets/icons/icon-edit.svg";
import DeleteModal from "../DeleteModal/DeleteModal";

export default function CollectionGallery({
  plantCollection,
  isPlantSelected,
  setIsPlantSelected,
  selectedPlantId,
  setSelectedPlantId,
  isDeleteButtonClicked,
  setIsDeleteButtonClicked,
}) {
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [plantToDelete, setPlantToDelete] = useState(null);

  const params = useParams();

  const selectPlant = (plantId) => {
    setIsPlantSelected(true);
    setSelectedPlantId(plantId);
    // console.log(plantId);
  };

  const handleClickDelete = (plantId) => {
    setPlantToDelete(plantId);
    setDeleteModalVisible(true);
  };

  // useEffect(() => {
  //   setSelectedPlantId(params.plantId); // set the new SelectedPlantId to the parameter, which will trigger a useEffect function in the parent component (CollectionPage)
  // }, [params]);

  return (
    <main>
      {deleteModalVisible && (
        <DeleteModal
          plantId={plantToDelete}
          setDeleteModalVisible={setDeleteModalVisible}
          plantToDelete={plantToDelete}
        />
      )}
      <section className="stats">
        <div className="stats__text">
          <h1>Total plants collected 🌱</h1>
          <p className="stats__number">{plantCollection.length}</p>
        </div>
      </section>
      <section className="gallery">
        {plantCollection.map((plant) => (
          // <Link to={`/collections/${plant.id}`} key={plant.id}>

          <div className="plant-card">
            {/* Add "onClick={() => selectPlant(plant.id)}"to plant-card */}

            <div className="plant-card__icons">
              <img
                src={deleteIcon}
                alt="Delete"
                onClick={() => handleClickDelete(plant.id)}
              />
              <img src={editIcon} alt="Edit" />
            </div>
            <img
              src={plant.image}
              className="plant-card__image"
              alt={plant.common_name}
            />
            <div>
              <h2 className="plant-card__title">{plant.common_name}</h2>
              <p className="plant-card__subtitle label">
                {plant.scientific_name}
              </p>
            </div>
          </div>
          // </Link>
        ))}
      </section>
    </main>
  );
}
