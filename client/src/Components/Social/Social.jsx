import React from "react"
import "./Social.css"
import Facebook from "../../Assets/facebook.png"
import Twitter from "../../Assets/twitter.png"
import Instagram from "../../Assets/instagram.png"

export default function Social() {
  return (
      <div className="social-component">
        <div className="social-icon" alt="Facebook Logo">
        <a href="https://www.facebook.com/NewAlternatives/">
          <img src={Facebook}/>
        </a>
        </div>
        <div className="social-icon" alt="Twitter Logo">
        <a href="https://twitter.com/NewAlternatives">
          <img src={Twitter}/>
        </a>
        </div>
        <div className="social-icon" alt="Instagram Logo">
        <a href="https://www.instagram.com/new_alternatives_nyc/">
          <img src={Instagram}/>
        </a>
        </div>
      </div>
  )
}
