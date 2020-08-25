import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  DotGroup,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

function PhotoCarousel() {
  return (
    <div className="complete-photo-carousel-component">
      <h1>Photo Carousel</h1>

      <div className="complete-mission-carousel">
        <CarouselProvider
          className="mission-carousel"
          totalSlides={4}
          isIntrinsicHeight={true}
        >
          <Slider className="slider-container">
            {/* <Slide>
              <video width="100%" height="100%" controls>
                <source src={VideoOne} type="video/mp4"></source>
              </video>
            </Slide>
            <Slide>
              <video width="100%" height="100%" controls>
                <source src={VideoTwo} type="video/mp4"></source>
              </video>
            </Slide>
            <Slide>
              <video width="100%" height="100%" controls>
                <source src={VideoThree} type="video/mp4"></source>
              </video>
            </Slide>
            <Slide>
              <video width="100%" height="100%" controls>
                <source src={VideoFour} type="video/mp4"></source>
              </video>
            </Slide> */}
          </Slider>
          <DotGroup className="dot-group" />
        </CarouselProvider>
      </div>
    </div>
  );
}

export default PhotoCarousel;
