import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import './TestimonialDetail.css'
import { getTestimonial, updateTestimonial, deleteTestimonial } from '../../Services/Testimonials'

const TestimonialDetail = () => {

    const [testimonial, setTestimonial] =  useState({ 
        content: '',
        author: '',
    })
    /* const [updated, setUpdated] = useState(false) */
    let { id } = useParams()

    useEffect(() => {
        const grabTestimonial = async () => {
            const testimonial = await getTestimonial(id)
            setTestimonial(testimonial)
        }
        grabTestimonial()
    }, [id])

    const handleChange = (e) => {
        const { key, value } = e.target.value
        setTestimonial({
            ...testimonial, 
            [key]: value
        })

    }

    return (
        <div className="testimonial-detail">
            <div className="testimonial">
                <textarea 
                    className="content"
                    value={testimonial.content}
                    key = 'content'
                    required
                    onChange={handleChange}
                    placeholder="This is my testimonial to new alternatives"
                />
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


   