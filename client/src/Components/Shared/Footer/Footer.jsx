import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";
import Subscribe from "../../Subscribe/Subscribe";
import Social from "../../Social/Social";
import Seal from "../../../Assets/seal-of-transparency.png";

const Footer = () => {
  return (
    <>

      <div className="footer-component">
        <div className="top-footer">
          <ul>
            <NavLink className="links" to="/coming-soon">
              About Us
            </NavLink>
            <NavLink className="live-link" to="/our-stories">
              Our Stories
            </NavLink>
            <NavLink className="live-link" to="/coming-soon">
              Get Help
            </NavLink>
            <NavLink className="links" to="/coming-soon">
              Get Involved
            </NavLink>
            <a href='https://c8f5851f-9831-4bab-aa48-25c2b4f1b185.filesusr.com/ugd/9bb66f_f663ee9dc031481db99d551d043c6ae2.pdf' className="live-link" target="_blank">Financial Report</a>
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
          <Social />
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
