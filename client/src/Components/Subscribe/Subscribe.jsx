import React from 'react'
import './Subscribe.css'


const Subscribe = () => {

    return(
    <>
    <form>
        <input 
            className="input-email"
            placeholder="Email"
        />
        <button type="submit" className="subscribe-button">Subscribe</button>
    </form>
    </>
    )
}

export default Subscribe