import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import deleteIcon from "../../assets/icons/icon-delete.svg";
import editIcon from "../../assets/icons/icon-edit.svg";
import sortIcon from "../../assets/icons/icon-sort.svg";
import searchIcon from "../../assets/icons/icon-search.svg";
import EditPlant from "../EditPlant/EditPlant";
import "./CollectionGallery.scss";
import SortModal from "../SortModal/SortModal";

export default function CollectionGallery({
  plantCollection,
  setPlantCollection,
  isPlantSelected,
  setIsPlantSelected,
  selectedPlantId,
  setSelectedPlantId,
  deleteModalVisible,
  setDeleteModalVisible,
  setIsEditButtonClicked,
  setPlantToEdit,
  selectPlant,
  handleClickDelete,
  handleClickEdit,
}) {
  const params = useParams();
  const [isSortClicked, setIsSortClicked] = useState(false);
  const [activeChoice, setActiveChoice] = useState(0); // useState to keep track of whether or not a choice is active
  const [searchInput, setSearchInput] = useState("");

  const handleClickSort = () => {
    setIsSortClicked(true);
    console.log("Sort Button Clicked");
  };

  // useEffect(() => {
  //   setSelectedPlantId(params.plantId); // set the new SelectedPlantId to the parameter, which will trigger a useEffect function in the parent component (CollectionPage)
  // }, [params]);

  /* -------------------------------------------------------------------------- */
  /*                      Function to search plants by name                     */
  /* -------------------------------------------------------------------------- */
  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchInput(event.target.search.value);
    console.log("Searched for: ", event.target.search.value);
  };

  const searchPlant = async (userInput) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/collections?name=${userInput}`
      );
      console.log(response);
    } catch (err) {
      console.error(err);
    }
  };

  console.log("plant collection: ", plantCollection);
  return (
    <>
      {/* {isEditButtonClicked && (
        <EditPlant
          setIsEditButtonClicked={setIsEditButtonClicked}
          plantToEdit={plantToEdit}
        />
      )} */}
      {isSortClicked && (
        <SortModal
          setIsSortClicked={setIsSortClicked}
          plantCollection={plantCollection}
          setPlantCollection={setPlantCollection}
          activeChoice={activeChoice}
          setActiveChoice={setActiveChoice}
        />
      )}
      <main>
        <section className="stats">
          <div className="stats__text">
            <h1>Total plants collected 🌱</h1>
            <p className="stats__number">{plantCollection.length}</p>
          </div>
        </section>

        <section className="search-sort-group">
          <form className="search-sort-group__form" onSubmit={handleSubmit}>
            <input
              className="search-sort-group__search-bar"
              placeholder="search"
              name="search"
              type="search"
            />
            <img
              src={searchIcon}
              alt="Search Button"
              className="search-sort-group__search-icon"
            />
          </form>
          <img
            src={sortIcon}
            className="search-sort-group__sort-icon"
            alt="Sort Button"
            onClick={handleClickSort}
          />
        </section>
        <section className="gallery">
          {plantCollection.map((plant) => (
            <div className="plant-card" key={plant.id}>
              <div className="plant-card__main">
                <div className="plant-card__icons">
                  <img
                    src={deleteIcon}
                    alt="Delete"
                    onClick={() => handleClickDelete(plant)}
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
