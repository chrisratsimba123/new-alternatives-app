import React, { useState } from "react";
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
import ThreePeople from "../../Assets/ourstories-screen-three-people.png";

function PhotoCarousel() {
  const [isVisible1, updateIsVisible1] = useState(false);
  const [isVisible2, updateIsVisible2] = useState(false);
  const [isVisible3, updateIsVisible3] = useState(false);
  const [isVisible4, updateIsVisible4] = useState(false);
  const [isVisible5, updateIsVisible5] = useState(false);
  const [isVisible6, updateIsVisible6] = useState(false);
  const [isVisible7, updateIsVisible7] = useState(false);

  return (
    <div className="complete-photo-carousel-component">
      <div className="complete-photo-carousel">
        <CarouselProvider
          className="photo-carousel"
          totalSlides={7}
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
              <div
                className="rela"
                onMouseEnter={() => updateIsVisible1(true)}
                onMouseLeave={() => updateIsVisible1(false)}
              >
                <img className="photo-image" src={ThreeGuys} />
                {isVisible1 && (
                  <div className="absol">
                    <h3>New Alternatives, NYC</h3>
                    <p className="photo-desc">
                      GIVE LOVE & HOPE : support NEW ALTERNATIVES FOR LGBT
                      HOMELESS YOUTH : make a one time donation, create your own
                      fundraising page, or become a recurring donor by visiting
                      https://www.newalternativesnyc.org/ : GIVE LOVE & HOPE
                    </p>
                  </div>
                )}
              </div>
            </Slide>
            <Slide>
              <div
                className="rela"
                onMouseEnter={() => updateIsVisible2(true)}
                onMouseLeave={() => updateIsVisible2(false)}
              >
                <img className="photo-image" src={YogaPose} />
                {isVisible2 && (
                  <div className="absol">
                    <h3>New Alternatives, NYC</h3>
                    <p className="photo-desc">
                      Yoga with @threeandahalfacresyoga at New Alt last night
                      #yoga #healing #volunteering #lgbtq🌈 #lgbtqhomelessyouth
                    </p>
                  </div>
                )}
              </div>
            </Slide>
            <Slide>
              <div
                className="rela"
                onMouseEnter={() => updateIsVisible3(true)}
                onMouseLeave={() => updateIsVisible3(false)}
              >
                <img className="photo-image" src={GirlClothing} />
                {isVisible3 && (
                  <div className="absol">
                    <h3>New Alternatives, NYC</h3>
                    <p className="photo-desc">
                      Out My Closet brought their pop up shop to New Alt on
                      sunday so that our clients could pick some summer clothes
                      #outmycloset #clothes #homelessyouth #popupshop #donations
                      #lgbtq🌈
                    </p>
                  </div>
                )}
              </div>
            </Slide>
            <Slide>
              <div
                className="rela"
                onMouseEnter={() => updateIsVisible4(true)}
                onMouseLeave={() => updateIsVisible4(false)}
              >
                <img className="photo-image" src={GuyGirl} />
                {isVisible4 && (
                  <div className="absol">
                    <h3>New Alternatives, NYC</h3>
                    <p className="photo-desc">
                      Thanks to Dr Rikki Morris for the donation of meals from
                      @mademealsco #donations #mealstogo #pandemicresponse
                      #feedingthehungry #lgbtq🌈
                    </p>
                  </div>
                )}
              </div>
            </Slide>
            <Slide>
              <div
                className="rela"
                onMouseEnter={() => updateIsVisible5(true)}
                onMouseLeave={() => updateIsVisible5(false)}
              >
                <img className="photo-image" src={GirlsMeals} />
                {isVisible5 && (
                  <div className="absol">
                    <h3>New Alternatives, NYC</h3>
                    <p className="photo-desc">
                      Pasta and meatballs to go at New Alt tonight #sundaydinner
                      #spaghettiandmeatballs #pandemic #feedingthehungry #lgbtq
                    </p>
                  </div>
                )}
              </div>
            </Slide>
            <Slide>
              <div
                className="rela"
                onMouseEnter={() => updateIsVisible6(true)}
                onMouseLeave={() => updateIsVisible6(false)}
              >
                <img className="photo-image" src={TwoPeople} />
                {isVisible6 && (
                  <div className="absol">
                    <h3>New Alternatives, NYC</h3>
                    <p className="photo-desc">
                      New Alt participated in the birthday party for Marsha P
                      Johnson, who would have been 75 yesterday #marshapjohnson
                      #transicon #pier45nyc #christopherstreet #lgbtq🌈
                    </p>
                  </div>
                )}
              </div>
            </Slide>
            <Slide>
              <div
                className="rela"
                onMouseEnter={() => updateIsVisible7(true)}
                onMouseLeave={() => updateIsVisible7(false)}
              >
                <img className="photo-image" src={ThreePeople} />
                {isVisible7 && (
                  <div className="absol">
                    <h3>New Alternatives, NYC</h3>
                    <p className="photo-desc">
                      New Alt staff have been doing outreach to make sure that
                      young people know about our meals and also to hand out
                      masks, water, snacks, COVID info, condoms, etc #outreach
                      #lgbtq🌈 #youthoutreach #homelessyouth #maskdistribution
                    </p>
                  </div>
                )}
              </div>
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
