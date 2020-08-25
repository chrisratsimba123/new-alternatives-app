import React, { useState, useEffect } from 'react'
import './Home.css'
import Nav from '../../Components/Shared/Nav/Nav'
import Hero from '../../Components/Hero/Hero'
import Footer from '../../Components/Shared/Footer/Footer'

const Home = () => {

  return (
    <>
      <div className='layout'>

        <Nav />

        <Hero />

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
              <p>of LGBTQ+ are<br />homeless in NYC</p>
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
        <Footer />

      </div>
    </>
  )
}

export default Home