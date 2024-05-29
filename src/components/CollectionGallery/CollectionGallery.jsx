import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import deleteIcon from "../../assets/icons/icon-delete.svg";
import editIcon from "../../assets/icons/icon-edit.svg";
import DeleteModal from "../DeleteModal/DeleteModal";
import EditPlant from "../EditPlant/EditPlant";

export default function CollectionGallery({
  plantCollection,
  isPlantSelected,
  setIsPlantSelected,
  selectedPlantId,
  setSelectedPlantId,
  deleteModalVisible,
  setDeleteModalVisible,
}) {
  const [plantToDelete, setPlantToDelete] = useState(null);
  const [plantToEdit, setPlantToEdit] = useState(null);
  const [isEditButtonClicked, setIsEditButtonClicked] = useState(false);

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

  const handleClickEdit = (plant) => {
    setPlantToEdit(plant);
    setIsEditButtonClicked(true);
  };
  // useEffect(() => {
  //   setSelectedPlantId(params.plantId); // set the new SelectedPlantId to the parameter, which will trigger a useEffect function in the parent component (CollectionPage)
  // }, [params]);

  return (
    <>
      {isEditButtonClicked && (
        <EditPlant
          setIsEditButtonClicked={setIsEditButtonClicked}
          plantToEdit={plantToEdit}
        />
      )}
      <main>
        {deleteModalVisible && (
          <DeleteModal
            setDeleteModalVisible={setDeleteModalVisible}
            plantToDelete={plantToDelete}
            setPlantToDelete={setPlantToDelete}
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
            <div className="plant-card" key={plant.id}>
              <div className="plant-card__main">
                <div className="plant-card__icons">
                  <img
                    src={deleteIcon}
                    alt="Delete"
                    onClick={() => handleClickDelete(plant.id)}
                  />
                  <img
                    src={editIcon}
                    alt="Edit"
                    onClick={() => handleClickEdit(plant)}
                  />
                </div>
                <Link
                  to={`/collections/${plant.id}`}
                  onClick={() => selectPlant(plant.id)}
                >
                  <img
                    src={plant.image}
                    className="plant-card__image"
                    alt={plant.common_name}
                  />
                </Link>
              </div>
              <Link
                to={`/collections/${plant.id}`}
                className="plant-card__names"
                onClick={() => selectPlant(plant.id)}
              >
                <h2 className="plant-card__title">{plant.common_name}</h2>
                <p className="plant-card__subtitle label">
                  {plant.scientific_name}
                </p>
              </Link>
            </div>
          ))}
        </section>
      </main>
    </>
  );
}
