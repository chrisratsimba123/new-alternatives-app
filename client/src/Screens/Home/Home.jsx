import React, { useState, useEffect } from 'react'
import './Home.css'

const Home = () => {

  return (
    <>
      <div className='layout'>
        
        <div className='nav-component'>

          <div className='title' alt='new alternatives'>
            <h4>New<br />Alternatives<br />(title)</h4>
          </div>

          <div className='nav-bar'>
            <div className='nav-menu' alt='navigation menu'>
              <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Our Stories</li>
                <li>Get Help</li>
                <li>Get Involved</li>
              </ul>
             
            </div>
            <div className='social-component'>
              <div className='social-icon' alt='facebook'>
              </div>
              <div className='social-icon' alt='twitter'>
              </div>
              <div className='social-icon' alt='instagram'>
              </div>
            </div>
            
          </div>
          
          <button className='donate' alt='donate button'>Donate</button>
        </div>
      
        <div className='hero'>
          <div className='shadow-box'>
            <h2>New Alternatives for LGBTQ+ Homeless Youth</h2>
            <p>New Alternatives increases the self-sufficiency of LGBTQ+ homeless youth by enabling them to transition out of the shelter system to stable adult lives.</p>
          </div>
        </div>

        <div className='purple-icons-first'>
          <div className='icon'>
            <div className='icon-text'>
              <h1>$500K</h1>
              <p>raised in one year</p>
            </div>
          </div>
          <div className='icon'>
            <div className='icon-text'>
              <h1>40%</h1>
              <p>of LGBTQ+ are<br/>homeless in NYC</p>
            </div>
          </div>
          <div className='icon'>
            <div className='icon-text'>
              <h1>10K</h1>
              <p>meals provided thus far</p>
            </div>
          </div>
        </div>

        <div className='who-we-help'>
          <h1 className='who-we-help-h1'>Who We Help</h1>
          <p className='who-we-help-p'>We assist LGBTQ+ youth and young adults who are 16-30 years old and homeless or at risk of homelessness. We define homelessness broadly to include living on the street, in a shelter, in a transitional living program, or lacking permanent housing.</p>
        </div>

        <div className='carousel-we-exist-to'>
          <h1>We Exist To Carousel DO NOT STYLE</h1>
        </div>

        <div className='get-involved'>
          <h1>Get Involved</h1>
          <div className='get-involved-icon'>

          </div>
          <div className='get-involved-text'>
          <h2>Get Help</h2>
          <h2>Volunteer</h2>
          <h2>Donate</h2>
          </div> 
          
        </div>

        <div className='footer'>
          <h1>Footer DO NOT STYLE</h1>
        </div>
          
    </div>
    </>
    )
}

export default Home