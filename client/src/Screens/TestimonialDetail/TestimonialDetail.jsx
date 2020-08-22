import React, { useState, useEffect } from 'react'
import { useParams, Redirect } from 'react-router-dom'

import './TestimonialDetail.css'
import { getTestimonial, updateTestimonial } from '../../Services/Testimonials'

const TestimonialDetail = (props) => {

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
        let { id } = props.match.params
        const updateReq = await updateTestimonial(id, testimonial)
        setUpdated(updateReq) 
    }

     if (updated){
        return <Redirect to={`/testimonials/${props.match.params.id}`}/>
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
                        placeholder="- This is who wrote it"
                    />
                    <div className="button-container">
                        <button type='submit' className="button-save">Save</button>
                        <button className="button-delete">Delete</button>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default TestimonialDetail


   