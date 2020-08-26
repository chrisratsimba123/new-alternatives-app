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
            <NavLink className="links" to="/">
              Home
            </NavLink>
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
          </ul>
        </div>
        <div className="email-subscribe">
          <h5>Join Our Mailing List</h5>
          <Subscribe />
        </div>
        <div className="social-media">
          <Social />
        </div>
        {/* <img className="seal" src={Seal} /> */}
        <div className="bottom-footer">
          <h6>
            © 2020 by New Alternatives | 410 West 40th Street, New York, NY
            10018 | info@newalternativesnyc.org
          </h6>

        </div>
      </div>
    </>
  );
};

export default Footer;
