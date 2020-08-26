import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";
import Subscribe from "../../Subscribe/Subscribe";
import Social from "../../Social/Social";
import Seal from "../../../Assets/seal-of-transparency.png";
import Facebook from '../../../Assets/facebook-white.png'
import Twitter from '../../../Assets/twitter-white.png'
import Instagram from '../../../Assets/instagram-white.png'

const Footer = () => {
  return (
    <>

      <div className="footer-component">
        <div className="top-footer">
          <ul>
            <NavLink className="links" to="/coming-soon">
              About Us
            </NavLink>
            <NavLink className="links" to="/our-stories">
              Our Stories
            </NavLink>
            <NavLink className="links" to="/coming-soon">
              Get Help
            </NavLink>
            <NavLink className="links" to="/coming-soon">
              Get Involved
            </NavLink>
            <NavLink className="links" to="/">
              Financial Report
            </NavLink>
            <NavLink className="links" to="/">
              Contact Us
            </NavLink>
          </ul>
        </div>
        <div className="email-subscribe">
          <h5>Join Our Mailing List</h5>
          <Subscribe />
        </div>
        <div className="social-media">
          <div className="social-icon" alt='Facebook Logo'>
            <a href="https://www.facebook.com/NewAlternatives/">
              <img src={Facebook} />
            </a>
          </div>
          <div className='social-icon' >
            <a href="https://twitter.com/NewAlternatives">
              <img src={Twitter} alt='Twitter Logo'/>
            </a>
          </div>
          <div className='social-icon' >
            <a href="https://www.instagram.com/new_alternatives_nyc/">
              <img src={Instagram} alt='Instagram Logo'/>
            </a>
          </div>
        </div>

        <div className="bottom-footer">
          <h6>
            © 2020 by New Alternatives | 410 West 40th Street, New York, NY
            10018 | info@newalternativesnyc.org
          </h6>
          <img className="seal" src={Seal} />
        </div>
      </div>
    </>
  );
};

export default Footer;
