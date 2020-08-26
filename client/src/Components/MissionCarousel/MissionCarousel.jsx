import React from "react";
import { Link } from "react-router-dom";
import { CarouselProvider, Slider, Slide, DotGroup } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import "./MissionCarousel.css";
import Educate from "../../Assets/exist-educate.png";
import Food from "../../Assets/exist-food.png";
import Testing from "../../Assets/exist-testing.png";

function MissionCarousel(props) {
  const testimonials = props.content;

  return (
    <div className="complete-mission-carousel">
      <CarouselProvider
        className="mission-carousel"
        totalSlides={3}
        isIntrinsicHeight={true}
        interval={5000}
        isPlaying={true}
      >
        <Slider className="slider-container">
          <Slide>
            <img className="mission-image" src={Educate} />
          </Slide>
          <Slide>
            <img className="mission-image" src={Food} />
          </Slide>
          <Slide>
            <img className="mission-image" src={Testing} />
          </Slide>
        </Slider>
        <DotGroup className="dot-group" />
      </CarouselProvider>
    </div>
  );
}

export default MissionCarousel;
