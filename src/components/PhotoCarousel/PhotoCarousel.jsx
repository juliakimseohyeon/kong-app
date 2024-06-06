import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import arrowLeftWithBG from "../../assets/icons/icon-arrow-left-with-bg.svg";
import arrowRightWithBG from "../../assets/icons/icon-arrow-right-with-bg.svg";

export default function PhotoCarousel() {
  const arrowStyles = {
    position: "absolute",
    zIndex: 2,
    top: "calc(50% - 15px)",
    width: 30,
    height: 30,
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
      infiniteLoop={true}
      width={"100%"}
      dynamicHeight={false}
      renderArrowPrev={(onClickHandler, hasPrev, label) =>
        hasPrev && (
          // <button
          //   className="button-carousel"
          //   type="button"
          //   onClick={onClickHandler}
          //   title={label}
          //   style={{ ...arrowStyles, left: 15 }}
          // >
          <img
            src={arrowLeftWithBG}
            className="button-carousel"
            type="button"
            onClick={onClickHandler}
            title={label}
            style={{ ...arrowStyles, left: 15 }}
          />
          // </button>
        )
      }
      renderArrowNext={(onClickHandler, hasNext, label) =>
        hasNext && (
          // <button
          //   className="button-carousel"
          //   type="button"
          //   onClick={onClickHandler}
          //   title={label}
          //   style={{ ...arrowStyles, right: 15 }}
          // >
          <img
            src={arrowRightWithBG}
            className="button-carousel"
            type="button"
            onClick={onClickHandler}
            title={label}
            style={{ ...arrowStyles, right: 15 }}
          />
          // </button>
        )
      }
      renderIndicator={(onClickHandler, isSelected, index, label) => {
        if (isSelected) {
          return (
            <li
              style={{ ...indicatorStyles, background: "#6ac15e" }}
              aria-label={`Selected: ${label} ${index + 1}`}
              title={`Selected: ${label} ${index + 1}`}
            />
          );
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
            title={`${label} ${index + 1}`}
            aria-label={`${label} ${index + 1}`}
          />
        );
      }}
    >
      <div style={{ padding: 10 }}>
        <img
          alt=""
          src="https://res.cloudinary.com/kong-app/image/upload/fl_preserve_transparency/v1717623652/douglas-maple-tree_cs0suz.jpg?_s=public-apps"
        />
      </div>
      <div style={{ padding: 10 }}>
        <img
          alt=""
          src="https://res.cloudinary.com/kong-app/image/upload/fl_preserve_transparency/v1717623652/douglas-maple-tree_cs0suz.jpg?_s=public-apps"
        />
      </div>
      <div style={{ padding: 10 }}>
        <img
          alt=""
          src="https://res.cloudinary.com/kong-app/image/upload/fl_preserve_transparency/v1717623652/douglas-maple-tree_cs0suz.jpg?_s=public-apps"
        />
      </div>
      <div style={{ padding: 10 }}>
        <img
          alt=""
          src="https://res.cloudinary.com/kong-app/image/upload/fl_preserve_transparency/v1717623652/douglas-maple-tree_cs0suz.jpg?_s=public-apps"
        />
      </div>
      <div style={{ padding: 10 }}>
        <img
          alt=""
          src="https://res.cloudinary.com/kong-app/image/upload/fl_preserve_transparency/v1717623652/douglas-maple-tree_cs0suz.jpg?_s=public-apps"
        />
      </div>
    </Carousel>
  );
}
