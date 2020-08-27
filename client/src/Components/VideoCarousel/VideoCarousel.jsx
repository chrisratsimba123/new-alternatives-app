import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';

import 'pure-react-carousel/dist/react-carousel.es.css';
import "./VideoCarousel.css"
import LeftArrow from "../../Assets/left-arrow.png";
import RightArrow from "../../Assets/right-arrow.png";
import Videos from "../../Assets/Videos/Videos"

const VideoCarousel = () => {
    
    return(    
        <div className="video-wrapper">                                             
            <CarouselProvider
                className="carousel-complete"
                naturalSlideWidth={400}
                naturalSlideHeight={200}
                totalSlides={5}
                visibleSlides={3}
                infinite={true}
            >
                <h3 className="video-header">#WhatAboutUs</h3>
                <ButtonBack className="video-back-btn btn">
                    <img className="back-arrow" src={LeftArrow} />
                </ButtonBack>          
                <Slider className="video-container">

                    <Slide>
                        <div className="c-video">
                            <video className="video" width="100%" height="100%" controls>
                                <source src={Videos} type="video/mp4"/>
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </Slide>
        
                    <Slide>
                        <div className="c-video">
                            <video className="video" width="100%" height="100%" controls>
                                <source src={Videos} type="video/mp4"/>
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </Slide>

                    <Slide>
                        <div className="c-video">
                        <video className="video" width="100%" height="100%" controls>
                            <source src={Videos} type="video/mp4"/>
                            Your browser does not support the video tag.
                        </video>
                        </div>
                    </Slide>

                    <Slide>
                        <div className="c-video">
                        <video className="video" width="100%" height="100%" controls>
                            <source src={Videos} type="video/mp4"/>
                            Your browser does not support the video tag.
                        </video>
                        </div>
                    </Slide>

                    <Slide>
                        <div className="c-video">
                        <video className="video" width="100%" height="100%" controls>
                            <source src={Videos} type="video/mp4"/>
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
    )
}

export default VideoCarousel

/* CITED 
//https://github.com/express-labs/pure-react-carousel 
*/
