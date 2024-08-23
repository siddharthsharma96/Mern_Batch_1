import { useRef } from "react";
import "./../Style/carousel.css";
import Card from "./Card";

const Carousel = ({ resData }) => {
  const slidesContainerRef = useRef(null);
  const handleNextSlide = () => {
    const slideWidth =
      slidesContainerRef.current.querySelector(".slide").clientWidth;
    slidesContainerRef.current.scrollLeft += slideWidth;
  };
  const handlePrevSlide = () => {
    const slideWidth =
      slidesContainerRef.current.querySelector(".slide").clientWidth;
    slidesContainerRef.current.scrollLeft -= slideWidth;
    console.log(slideWidth);
  };
  return (
    <div className="carousel">
      <div className="carouselContainer">
        <h2>Top restaurant chains in Noida</h2>
        <div className="slidesContainer">
          <button className="slideArrow" onClick={handlePrevSlide}>
            <img src="/images/left.png" alt="." />
          </button>
          <button className="slideArrow" onClick={handleNextSlide}>
            <img src="/images/right.png" alt="." />
          </button>
        </div>
      </div>

      <section className="sliderWrapper">
        <ul className="slidesContainer" ref={slidesContainerRef}>
          {resData.length > 0 &&
            resData.map((res) => {
              return (
                <li className="slide" key={res?.info?.id}>
                  <Card resData={res} show={false} />
                </li>
              );
            })}
        </ul>
      </section>
    </div>
  );
};

export default Carousel;
