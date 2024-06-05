// import Carousel from "react-multi-carousel";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import sampleImg from "../../../../kong-app-api/public/images/bunny-ear-cactus.png";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    partialVisibilityGutter: 40, // this is needed to tell the amount of px that should be visible.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    partialVisibilityGutter: 30, // this is needed to tell the amount of px that should be visible.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    partialVisibilityGutter: 30, // this is needed to tell the amount of px that should be visible.
  },
};

export default function PhotoCarousel() {
  <div className="my-own-custom-container">
    <Carousel
      arrows={false}
      showDots={true}
      partialVisible={true}
      responsive={responsive}
      renderDotsOutside
      ssr={true} // means to render carousel on server-side. infinite={true}
      transitionDuration={500}
      containerClass="carousel-container"
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
      <img
        src={sampleImg}
        style={{
          display: "block",
          height: "100%",
          margin: "auto",
          width: "100%",
        }}
      />{" "}
      <img
        src={sampleImg}
        style={{
          display: "block",
          height: "100%",
          margin: "auto",
          width: "100%",
        }}
      />{" "}
      <img
        src={sampleImg}
        style={{
          display: "block",
          height: "100%",
          margin: "auto",
          width: "100%",
        }}
      />{" "}
      <img
        src={sampleImg}
        style={{
          display: "block",
          height: "100%",
          margin: "auto",
          width: "100%",
        }}
      />{" "}
      <img
        src={sampleImg}
        style={{
          display: "block",
          height: "100%",
          margin: "auto",
          width: "100%",
        }}
      />
    </Carousel>
  </div>;
}
