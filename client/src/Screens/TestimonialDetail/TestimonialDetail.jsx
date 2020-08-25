import React, { useState, useEffect } from 'react'
import { useParams, Redirect } from 'react-router-dom'

import './TestimonialDetail.css'
import '../../Components/Shared/Nav/Nav.css'
import Nav from '../../Components/Shared/Nav/Nav'
import { getTestimonial, updateTestimonial, deleteTestimonial } from '../../Services/Testimonials'
import Layout from '../../Components/Shared/Layout/Layout'

const TestimonialDetail = () => {

    const [testimonial, setTestimonial] =  useState({ 
        content: "",
        author: "",
    });

    const [updated, setUpdated] = useState(false);
    let { id } = useParams();

    useEffect(() => {
        const grabTestimonial = async () => {
            const testimonial = await getTestimonial(id)
            setTestimonial(testimonial)
        }
        grabTestimonial()
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target
        setTestimonial({
            ...testimonial, 
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        const updateReq = await updateTestimonial(id, testimonial)
        setUpdated(true) 
    }


     if (updated){
        return <Redirect to={"/our-stories"}/>
    } 
    return (
        <Layout>
        <div className="complete-testimonial-detail-screen">
            <div className="testimonial-form">
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
                        name="author"
                        value={testimonial.author}
                        onChange={handleChange}
                        required
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
        </Layout>
    )
}

export default TestimonialDetail;