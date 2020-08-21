import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import './TestimonialDetail.css'
/* import { getTestimonial, updateTestimonial, deleteTestimonial } from '../Services/Testimonials' */

const TestimonialDetail = () => {

/*     const [content, setContent] =  */

    return (
        <div className="testimonial-detail">
            <div className="testimonial">
                <div className="content">This is my testimonial to new alternatives</div>
                <div className="author">- This is who wrote it</div>
                <div className="button-container">
                    <button className="button-edit">Edit</button>
                    <button className="button-delete">Delete</button>
                </div>
            </div>
        </div>

    )
}

export default TestimonialDetail


   