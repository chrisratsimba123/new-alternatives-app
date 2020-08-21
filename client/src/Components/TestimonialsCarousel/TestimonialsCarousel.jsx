import React from "react";

import { useState } from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import "./index.css";
// import Content from "./testimonials.js";
import LeftQuote from "./assets/left-quote.png";
import RightQuote from "./assets/right-quote.png";
import LeftArrow from "./assets/left-arrow.png";
import RightArrow from "./assets/right-arrow.png";
// import Testimonial from "./Testimonial";

function Carousel(props) {
  const testimonials = Content;
  const [index, updateIndex] = useState();

  const handleClick = (e) => {
    e.preventDefault();
    updateIndex(Number(e.target.value));
  };
  console.log(testimonials[index]);

  return (
    <div className="complete">
      <CarouselProvider
        naturalSlideWidth={400}
        naturalSlideHeight={200}
        totalSlides={testimonials.length}
      >
        <ButtonBack className="btn back-btn">
          <img className="back-icon" src={LeftArrow} />
        </ButtonBack>
        <Slider className="slicer-container">
          {testimonials.map((testimonial, ndx) => {
            return (
              <Slide key={ndx}>
                <img
                  src={LeftQuote}
                  alt="quote mark"
                  className="quote left-quote"
                />
                <div className="testimonial-box">
                  <div className="testimonial">{testimonial.content}</div>
                  <div className="testimonial-author-box">
                    <h5 className="testimonial-author">
                      {`-- ${testimonial.author}`}
                    </h5>
                  </div>
                  <button
                    className="add-testimonial"
                    onClick={handleClick}
                    value={ndx}
                  >
                    add testimonial
                  </button>
                  <button
                    className="edit-testimonial"
                    onClick={handleClick}
                    value={ndx}
                  >
                    edit testimonial
                  </button>
                </div>
                <img
                  src={RightQuote}
                  alt="quote mark"
                  className="quote right-quote"
                />
              </Slide>
            );
          })}
        </Slider>
        <ButtonNext className="btn forward-btn">
          <img className="forward-icon" src={RightArrow} />
        </ButtonNext>
      </CarouselProvider>
    </div>
  );
}

export default Carousel;
