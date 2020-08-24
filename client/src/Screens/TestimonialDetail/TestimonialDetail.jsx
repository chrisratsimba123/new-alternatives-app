import React, { useState, useEffect } from 'react'
import { useParams, Redirect } from 'react-router-dom'

import './TestimonialDetail.css'
import { getTestimonial, updateTestimonial, deleteTestimonial } from '../../Services/Testimonials'

const TestimonialDetail = () => {

    const [testimonial, setTestimonial] =  useState({ 
        content: '',
        author: '',
    })
    let { id } = useParams()

    const [updated, setUpdated] = useState(false)

    useEffect(() => {
        const grabTestimonial = async () => {
            const testimonial = await getTestimonial(id)
            setTestimonial(testimonial)
        }
        grabTestimonial()
    }, [id])

    const handleChange = (e) => {
        const { name, value } = e.target
        setTestimonial({
            ...testimonial, 
            [name]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const updateReq = await updateTestimonial(id, testimonial)
        setUpdated(true) 
    }

     if (updated){
        return <Redirect to={'/our-stories'}/>
    } 
    return (
        <div className="testimonial-detail">
            <div className="testimonial">
                <form onSubmit={handleSubmit}>
                    <textarea 
                        className="edit-content"
                        name="content"
                        value={testimonial.content}
                        onChange={handleChange}
                        required
                    />
                    <input 
                        className="edit-author"
                        value={testimonial.author}
                        name="author"
                        required
                        onChange={handleChange}
                    />
                    <div className="button-container">
                        <button type='submit' className="button-save">Save</button>
                        <button 
                            className="button-delete"
                            onClick={()=> deleteTestimonial(testimonial._id)}
                        >Delete</button>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default TestimonialDetail