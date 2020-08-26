import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import "./PhotoCarousel.css";
import LeftArrow from "../../Assets/left-arrow.png";
import RightArrow from "../../Assets/right-arrow.png";
import GirlClothing from "../../Assets/ourstories-screen_girl-clothing-store.png";
import ThreeGuys from "../../Assets/ourstories-screen_three-guys_gay-pride-parade.png";
import YogaPose from "../../Assets/ourstories-screen_yoga-pose-in-chair.png";
import GuyGirl from "../../Assets/ourstories-screen-guy-girl-care-packages.png";
import GirlsMeals from "../../Assets/ourstories-screen-girls-meals-kitchen.png";
import TwoPeople from "../../Assets/ourstories-screen-two-people-pier.png";

function PhotoCarousel() {
  return (
    <div className="complete-photo-carousel-component">
      <div className="complete-photo-carousel">
        <CarouselProvider
          className="photo-carousel"
          totalSlides={6}
          visibleSlides={3}
          isIntrinsicHeight={true}
          infinite={true}
        >
          <h1 className="photo-title">Past Events</h1>
          <ButtonBack className="btn back-btn-photo">
            <img className="back-icon" src={LeftArrow} alt="left arrow" />
          </ButtonBack>
          <Slider className="slider-container">
            <Slide>
              <img className="photo-image" src={ThreeGuys} />
            </Slide>
            <Slide>
              <img className="photo-image" src={YogaPose} />
            </Slide>
            <Slide>
              <img className="photo-image" src={GirlClothing} />
            </Slide>
            <Slide>
              <img className="photo-image" src={GuyGirl} />
            </Slide>
            <Slide>
              <img className="photo-image" src={GirlsMeals} />
            </Slide>
            <Slide>
              <img className="photo-image" src={TwoPeople} />
            </Slide>
          </Slider>

          <ButtonNext className="btn forward-btn-photo">
            <img className="forward-icon" src={RightArrow} alt="right arrow" />
          </ButtonNext>
        </CarouselProvider>
      </div>
    </div>
  );
}

export default PhotoCarousel;
