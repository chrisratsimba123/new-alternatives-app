import React from 'react'
import './Subscribe.css'


const Subscribe = () => {

    // let subscribeButton = document.querySelector('subscribe-button')
    // subscribeButton.addEventListener('click', (e) => {
    //     e.preventDefault()
    //     let savedEmails = JSON.parse(window.localStorage.getItem('email'))
    //     if(savedEmails === null) {
    //         savedEmails = []
    //     }
    //     // savedEmails.push(sampleDeveloper) Push text input into savedEmails Array
    //     window.localStorage.setItem('email', JSON.stringify(savedEmails))
    // })
    
    return(
    <>
    <form className="email-form">
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