import React, { useState, useEffect } from 'react'
import './Home.css'

const Home = () => {

  return (
    <>
      <div className='layout'>
        
        <div className='nav-component'>
          <div className='title' alt='new alternatives'>
            <h2>New<br />Alternatives<br />(title)</h2>
          </div>
          {/*<h1>Nav</h1>*/}
          <div className='social-component'>
            <div className='social-icon' alt='facebook'>
            </div>
            <div className='social-icon' alt='twitter'>
            </div>
            <div className='social-icon' alt='instagram'>
            </div>
          </div>
          <button className='donate' alt='donate button'>Donate</button>
        </div>
      
        <div className='hero'>
          <h1>Hero</h1>
        </div>

        <div className='purple-icons-first'>
          <h1>Three Purple Icons</h1> 
        </div>

        <div className='who-we-help'>
          <h1 className='who-we-help-h1'>Who We Help</h1>
          <p className='who-we-help-p'>We assist LGBTQ+ youth and young adults who are 16-30 years old and homeless or at risk of homelessness. We define homelessness broadly to include living on the street, in a shelter, in a transitional living program, or lacking permanent housing.</p>
        </div>

        <div className='carousel-we-exist-to'>
          <h1>We Exist To Carousel</h1>
          <p>DO NOT STYLE</p>
        </div>

        <div className='get-involved'>
          <h1>Get Involved</h1>
        </div>

        <div className='footer'>
          <h1>Footer</h1>
        </div>
          
    </div>
    </>
    )
}

export default Home