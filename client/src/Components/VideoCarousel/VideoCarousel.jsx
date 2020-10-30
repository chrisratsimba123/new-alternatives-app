import React, { useState, useEffect } from "react";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import "./VideoCarousel.css"
import LeftArrow from "../../Assets/left-arrow.png";
import RightArrow from "../../Assets/right-arrow.png";
import Purple from "../../Assets/Videos/Purple.mp4";
import Blue from "../../Assets/Videos/Blue.mp4";
import Green from "../../Assets/Videos/Green.mp4";
import Red from "../../Assets/Videos/Red.mp4";
import Yellow from "../../Assets/Videos/Yellow.mp4";

const VideoCarousel = () => {
  const [numOfSlides, updateNumOfSlides] = useState(3);

  useEffect(() => {
    function handleResize() {
      updateNumOfSlides(Math.floor(window.innerWidth / 415));

      window.addEventListener("resize", handleResize);
    }
    handleResize();
  });

    return(    
        <div className="video-wrapper">                                             
            <CarouselProvider
                className="carousel-complete"
                naturalSlideWidth={400}
                naturalSlideHeight={200}
                totalSlides={5}
                visibleSlides={numOfSlides}
                infinite={true}
            >
                <h3 className="video-header">#WhatAboutUs</h3>
                <ButtonBack className="video-back-btn btn">
                    <img className="back-arrow" src={LeftArrow} alt="back arrow"/>
                </ButtonBack>          
                <Slider className="video-container">

          <Slide>
            <div className="c-video">
              <video className="video" width="100%" height="100%" controls>
                <source src={Blue} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </Slide>

          <Slide>
            <div className="c-video">
              <video className="video" width="100%" height="100%" controls>
                <source src={Green} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </Slide>

          <Slide>
            <div className="c-video">
              <video className="video" width="100%" height="100%" controls>
                <source src={Red} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </Slide>

          <Slide>
            <div className="c-video">
              <video className="video" width="100%" height="100%" controls>
                <source src={Yellow} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </Slide>

          <Slide>
            <div className="c-video">
              <video className="video" width="100%" height="100%" controls>
                <source src={Purple} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </Slide>
        </Slider>
        <ButtonNext className="video-forward-btn btn">
          <img className="forward-arrow" src={RightArrow} alt="right arrow" />
        </ButtonNext>
      </CarouselProvider>
    </div>
  );
};

export default VideoCarousel;

/* CITED 
//https://github.com/express-labs/pure-react-carousel 
*/