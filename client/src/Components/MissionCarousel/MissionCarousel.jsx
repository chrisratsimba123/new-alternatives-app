import React from "react";
import { Link } from "react-router-dom";
import { CarouselProvider, Slider, Slide } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import "./MissionCarousel.css";
import Educate from "../../Assets/exist-educate.png";
import Food from "../../Assets/exist-food.png";
import Testing from "../../Assets/exist-testing.png";

function MissionCarousel(props) {
  const testimonials = props.content;

  return (
    <div className="complete-component">
      <CarouselProvider
        naturalSlideWidth={400}
        naturalSlideHeight={200}
        totalSlides={3}
      >
        <Slider className="slicer-container">
          return (
          <Slide>
            <img src={Educate} />
          </Slide>
          <Slide>
            <img src={Food} />
          </Slide>
          <Slide>
            <img src={Testing} />
          </Slide>
          );
        </Slider>
      </CarouselProvider>
    </div>
  );
}

export default MissionCarousel;
