import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import arrowLeftWithBG from "../../assets/icons/icon-arrow-left-with-bg.svg";
import arrowRightWithBG from "../../assets/icons/icon-arrow-right-with-bg.svg";

export default function PhotoCarousel({ myPlantnetResponse, heroImg, alt }) {
  const arrowStyles = {
    position: "absolute",
    zIndex: 1,
    top: "calc(50% - 15px)",
    width: 30,
    height: 30,
    marginTop: "3em",
    cursor: "pointer",
  };

  const indicatorStyles = {
    background: "#fff",
    width: 8,
    height: 8,
    display: "inline-block",
    margin: "0 8px",
    borderRadius: "50%",
  };
  return (
    <Carousel
      showArrows={true}
      showIndicators={true}
      showStatus={false}
      showThumbs={false}
      centerMode={true}
      swipeable={true}
      emulateTouch={true}
      infiniteLoop={false}
      width={"100%"}
      dynamicHeight={false}
      renderArrowPrev={(onClickHandler, hasPrev, label) =>
        hasPrev && (
          <button
            className="button-carousel"
            type="button"
            onClick={onClickHandler}
            title={label}
            style={{
              ...arrowStyles,
              left: 15,
              backgroundImage: `url(${arrowLeftWithBG})`,
              backgroundSize: "cover",
            }}
          ></button>
        )
      }
      renderArrowNext={(onClickHandler, hasNext, label) =>
        hasNext && (
          <button
            className="button-carousel"
            type="button"
            onClick={onClickHandler}
            title={label}
            style={{
              ...arrowStyles,
              right: 15,
              backgroundImage: `url(${arrowRightWithBG})`,
              backgroundSize: "cover",
            }}
          ></button>
        )
      }
      renderIndicator={(onClickHandler, isSelected, index, label) => {
        if (isSelected) {
          return <li style={{ ...indicatorStyles, background: "#6ac15e" }} />;
        }
        return (
          <li
            style={indicatorStyles}
            onClick={onClickHandler}
            onKeyDown={onClickHandler}
            value={index}
            key={index}
            role="button"
            tabIndex={0}
          />
        );
      }}
    >
      {/* Only map over the myPlantnet response if there are any photos. Otherwise, return "no related photos found" to avoid error */}
      {myPlantnetResponse.length === 0 ? (
        <p>No related photos found</p>
      ) : (
        myPlantnetResponse.map((response, index) => (
          <div
            style={{ padding: 10, marginTop: "4rem" }}
            className="collection-detail__gallery"
            key={index}
          >
            <img
              className="collection-detail__photo"
              src={index === 0 ? heroImg : response.photo_url}
              alt={alt}
            />
            {/* If it's the first image, use the heroImg */}
          </div>
        ))
      )}
    </Carousel>
  );
}
