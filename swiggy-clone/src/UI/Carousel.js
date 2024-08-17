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
      <div className="carousel__container">
        <h2>Top restaurant chains in Noida</h2>
        <div className="slide__Container">
          <button className="slide__Arrow" onClick={handlePrevSlide}>
            <img src="/images/left.png" alt="." />
          </button>
          <button className="slide__Arrow" onClick={handleNextSlide}>
            <img src="/images/right.png" alt="." />
          </button>
        </div>
      </div>

      <section className="slider__Wrapper">
        <ul className="slide_Container" ref={slidesContainerRef}>
          {resData.length > 0 &&
            resData.map((res) => {
              return (
                <li className="slide" key={res?.info?.id}>
                  <Card resData={res} />
                </li>
              );
            })}
        </ul>
      </section>
    </div>
  );
};

export default Carousel;
