import React, { useState, useEffect } from "react";
import "./OurStories.css";
import TestimonialsCarousel from "../../Components/TestimonialsCarousel/TestimonialsCarousel";
import { getTestimonials } from "../../Services/Testimonials";
<<<<<<< HEAD
import VideoCarousel from "../../Components/VideoCarousel/VideoCarousel";
=======
import Layout from "../../Components/Shared/Layout/Layout";
>>>>>>> 0388cc6010a8d4ed8f59f7cfc9c94e77e9c521a5

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
<<<<<<< HEAD
    <div className="complete-our-stories">
      <h1>Our Stories</h1>
      <TestimonialsCarousel content={testimonials} />
      <VideoCarousel />
    </div>
=======
    <Layout>
      <div className="complete-our-stories">
        <h1>Our Stories</h1>
        <TestimonialsCarousel content={testimonials} />
      </div>
    </Layout>
>>>>>>> 0388cc6010a8d4ed8f59f7cfc9c94e77e9c521a5
  );
};

export default OurStories;
