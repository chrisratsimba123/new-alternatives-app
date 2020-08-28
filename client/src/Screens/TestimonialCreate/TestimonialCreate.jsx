import React, { useState, useEffect } from "react";
import "./TestimonialCreate.css";
import { useHistory } from "react-router-dom";
import Layout from "../../Components/Shared/Layout/Layout";
import { createTestimonial } from "../../Services/Testimonials";
import LeftQuote from "../../Assets/left-quote.png";
import RightQuote from "../../Assets/right-quote.png";
import { Transition } from "react-transition-group";

const TestimonialCreate = () => {
  // =========================================
  const [inProp, updateInProp] = useState(false);

  const defaultStyle = {
    transition: "opacity 500ms ease-in-out",
    opacity: 0,
  };

  const transitionStyles = {
    entering: { opacity: 1 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
  };

  // =========================================

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const history = useHistory();
  const [testimonial, updateTestimonial] = useState({
    content: "",
    author: "",
  });

  const [isCreated, updateIsCreated] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    updateTestimonial({ ...testimonial, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const created = await createTestimonial(testimonial);
    updateIsCreated({ created });
  };

  const testingRedirect = () => {
    history.push("/our-stories");
  };

  if (isCreated) {
    // ==============================
    updateInProp(true);
    // ===============================
    // setTimeout(testingRedirect, 3000);

    return (
      <div className="submit-thankyou-container">
        {/* ========================================= */}
        <Transition in={inProp} timeout={500}>
          {(state) => (
            <div
              style={{
                ...defaultStyle,
                ...transitionStyles[state],
              }}
            >
              <h1 className="submit-thankyou">Thank You!</h1>
              <p className="submit-thankyou-text">
                All new testimonials are reviewed and posted within 7 to 10
                working days.
              </p>
            </div>
          )}
        </Transition>
        {/* ========================================= */}
      </div>
    );
  }

  return (
    <Layout>
      <div className="complete-testimonial-create-screen">
        <h1 className="testimonial-title">Add New Testimonial</h1>
        <p className="testimonial-subtitle">
          Please enter your new testimonial below.
          <br />
          (350 character limit)
        </p>
        <form className="create-form" onSubmit={handleSubmit}>
          <img
            src={LeftQuote}
            alt="quote mark"
            className="quote-create left-quote-create"
          />
          <label htmlFor="content" />
          <textarea
            className="textarea-content"
            rows={6}
            maxLength="350"
            placeholder="Testimonial:"
            value={testimonial.content}
            name="content"
            required
            onChange={handleChange}
          />
          <label htmlFor="author" />
          <input
            className="input-author"
            placeholder="Author:"
            value={testimonial.author}
            maxLength="25"
            name="author"
            required
            onChange={handleChange}
          />
          <button type="submit" className="submit-button">
            Submit
          </button>
          <img
            src={RightQuote}
            alt="quote mark"
            className="quote-create right-quote-create"
          />
        </form>
      </div>
    </Layout>
  );
};

export default TestimonialCreate;
