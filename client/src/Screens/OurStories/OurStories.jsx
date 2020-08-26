import React, { useState, useEffect } from "react";
import "./OurStories.css";
import TestimonialsCarousel from "../../Components/TestimonialsCarousel/TestimonialsCarousel";
import { getTestimonials } from "../../Services/Testimonials";
import Layout from "../../Components/Shared/Layout/Layout";
import PhotoCarousel from "../../Components/PhotoCarousel/PhotoCarousel";
import "./OurStories.css";

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
    <Layout>
      <div className="complete-our-stories">
        <div className="our-stories-hero-container">
          <div className="our-stories-shadow-box">
            <h2>Our Stories</h2>
            <p>
              We all have a story... We all deserve the right to a happy ever
              after. New Alternatives is here to make sure the LGBTQ+ youth have
              the tools they need to create their own success stories.
            </p>
          </div>
        </div>
        <TestimonialsCarousel content={testimonials} />
        <PhotoCarousel />
      </div>
    </Layout>
  );
};

export default OurStories;
