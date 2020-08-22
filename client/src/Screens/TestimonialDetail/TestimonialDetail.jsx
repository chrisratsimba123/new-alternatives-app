import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import './TestimonialDetail.css'
import { getTestimonial } from '../../Services/Testimonials'

const TestimonialDetail = () => {

    const [testimonial, setTestimonial] =  useState({ 
        content: '',
        author: '',
    })
    let { id } = useParams()

    useEffect(() => {
        const grabTestimonial = async () => {
            const testimonial = await getTestimonial(id)
            setTestimonial(testimonial)
        }
        grabTestimonial()
    }, [id])

    const handleChange = (e) => {
        const { key, value } = e.target
        setTestimonial({
            ...testimonial, 
            [key]: value
        })
    }

    return (
        <div className="testimonial-detail">
            <div className="testimonial">
                <form>
                    <textarea 
                        className="edit-content"
                        value={testimonial.content}
                        key='content'
                        required
                        onChange={handleChange}
                        placeholder="This is my testimonial to new alternatives"
                    />
                    <input 
                        className="edit-author"
                        value={testimonial.author}
                        key="author"
                        required
                        onChange={handleChange}
                        placeholder="- This is who wrote it"
                    />
                    <div className="button-container">
                        <button className="button-edit">Edit</button>
                        <button className="button-delete">Delete</button>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default TestimonialDetail


   