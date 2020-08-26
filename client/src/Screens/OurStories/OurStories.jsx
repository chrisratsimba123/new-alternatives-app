import React, { useState, useEffect } from "react";
import "./OurStories.css";
import TestimonialsCarousel from "../../Components/TestimonialsCarousel/TestimonialsCarousel";
import { getTestimonials } from "../../Services/Testimonials";
import Layout from "../../Components/Shared/Layout/Layout";
import PhotoCarousel from "../../Components/PhotoCarousel/PhotoCarousel";

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
        <TestimonialsCarousel content={testimonials} />
        <PhotoCarousel />
      </div>
    </Layout>
  );
};

export default OurStories;
