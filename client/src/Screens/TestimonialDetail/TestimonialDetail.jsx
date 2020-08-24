import React, { useState, useEffect } from 'react'
import { useParams, Redirect } from 'react-router-dom'

import './TestimonialDetail.css'
import '../../Components/Shared/Nav/Nav.css'
import Nav from '../../Components/Shared/Nav/Nav'
import { getTestimonial, updateTestimonial, deleteTestimonial } from '../../Services/Testimonials'

const TestimonialDetail = (props) => {

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
        let { id } = props.match.params
        const updateReq = await updateTestimonial(id, testimonial)
        setUpdated(updateReq);
    };

     if (updated){
        return <Redirect to={"/our-stories"}/>
    } 
    return (
        <>
            <Nav />
            <div className="complete-testimonial-detail-screen">
                <form  className="testimonial-form" onSubmit={handleSubmit}>
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
        </>
    );
};

export default TestimonialDetail;