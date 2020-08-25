import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import ReactPlayer from 'react-player'

import 'pure-react-carousel/dist/react-carousel.es.css';
import "./VideoCarousel.css"
import LeftArrow from "../../Assets/left-arrow.png";
import RightArrow from "../../Assets/right-arrow.png";
import Video from "../Videos/Purple.mp4"

const VideoCarousel = () => {

    return(    
        <div className="video-wrapper">                                             
            <CarouselProvider
                naturalSlideWidth={400}
                naturalSlideHeight={200}
                totalSlides={3}
            >
                <ButtonBack className="video-back-btn">
                    <img className="back-arrow" src={LeftArrow} />
                </ButtonBack>          
                <Slider className="video-container">
                    <Slide index={0}>
                        I am the first Slide.
                        <ReactPlayer
                            className='video'
                            url= 'https://www.instagram.com/p/By2Wq89BeuT/'
                            width='100%'
                            height='100%'
                            controls = {true}
                        /> 
                    </Slide>
                    <Slide index={1}>I am the second Slide.</Slide>
                    <Slide index={2}>I am the third Slide.</Slide>
                </Slider>
                <ButtonNext className="video-forward-btn">
                    <img className="forward-arrow" src={RightArrow} alt="right arrow" />
                </ButtonNext>
            </CarouselProvider>
        </div>
    )
}

export default VideoCarousel

/* CITED 
//https://github.com/express-labs/pure-react-carousel 




                        <video width="750" height="500" controls >
                            <source src={Video} type="video/mp4"/>
                        </video>*/