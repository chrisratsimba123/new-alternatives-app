import React from "react";
import { Link } from "react-router-dom";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import "./TestimonialsCarousel.css";
import LeftQuote from "../../Assets/left-quote.png";
import RightQuote from "../../Assets/right-quote.png";
import LeftArrow from "../../Assets/left-arrow.png";
import RightArrow from "../../Assets/right-arrow.png";

function Carousel(props) {
  const testimonials = props.content;

  return (
    <div className="complete-component">
      <CarouselProvider
        naturalSlideWidth={400}
        naturalSlideHeight={200}
        totalSlides={testimonials.length}
        infinite={true}
      >
        <ButtonBack className="testimonial-btn testimonial-back-btn">
          <img className="back-icon" src={LeftArrow} alt="left arrow" />
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
                <div className="testimonial-container">
                  <div className="testimonial">{testimonial.content}</div>
                  <div className="testimonial-author-box">
                    <h5 className="testimonial-author">
                      {`-- ${testimonial.author}`}
                    </h5>
                  </div>
                </div>
                <div className="testimonial-button-container">
                  <Link className="add-testimonial" to={`/create-testimonial`}>
                    add testimonial
                  </Link>
                  <Link
                    className="edit-testimonial"
                    to={{
                      pathname: `/detail-testimonial/${testimonial._id}`,
                      props: testimonial,
                    }}
                  >
                    edit testimonial
                  </Link>
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
        <ButtonNext className="testimonial-btn testimonial-forward-btn">
          <img className="forward-icon" src={RightArrow} alt="right arrow" />
        </ButtonNext>
      </CarouselProvider>
    </div>
  );
}

export default Carousel;