import React, { useState, useEffect } from "react";
import "./OurStories.css";
import TestimonialsCarousel from "../../Components/TestimonialsCarousel/TestimonialsCarousel";
import { getTestimonials } from "../../Services/Testimonials";
import VideoCarousel from "../../Components/VideoCarousel/VideoCarousel";

const OurStories = () => {
  const [testimonials, updateTestimonials] = useState([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      const res = await getTestimonials();
      updateTestimonials(res);
    };
    fetchTestimonials();
  }, []);

  return (
    <div className="complete-our-stories">
      <h1>Our Stories</h1>
      <TestimonialsCarousel content={testimonials} />
      <VideoCarousel />
    </div>
  );
};

export default OurStories;
