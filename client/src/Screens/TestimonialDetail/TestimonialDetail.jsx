import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./TestimonialDetail.css";

const TestimonialDetail = (props) => {
  const params = useParams();
  const chosen = props.location.props;

  return (
    <div>
      <h1>Update Testimonial</h1>
      <h3>{`The _id is in params: ${params.id}`}</h3>
      <h3>Below comes from props:</h3>
      <p>{chosen.content}</p>
      <h4>{`--${chosen.author}`}</h4>
    </div>
  );
};

export default TestimonialDetail;
