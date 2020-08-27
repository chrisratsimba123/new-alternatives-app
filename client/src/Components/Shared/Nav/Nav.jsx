import React from "react";

import { NavLink } from "react-router-dom";
import "./Nav.css";
import Social from "../../Social/Social";
import Logo from "../../../Assets/new-alternatives-title.png";

const Nav = () => {
  return (
    <>
      <div className="nav-component">
        <div className="title" alt="new alternatives">
          <div>
            <NavLink className="nav-links-logo" to="/">
              <img className="logo" src={Logo} alt="New Alternatives Logo" />
            </NavLink>
          </div>
        </div>
        <div className="nav-bar">
          <div className="top-nav-bar">
            <div>
              <NavLink className="contact-us nav-links" to="/coming-soon">
                Contact Us
              </NavLink>
            </div>
            <div className="social-media-box">
              <Social />
            </div>
            <button className="donate" alt="donate button">
              <a
                href="https://fundraise.newalternativesnyc.org/give/157653/#!/donation/checkout"
                target="_blank"
              >
                Donate
              </a>
            </button>
          </div>

          <div className="nav-menu" alt="navigation menu">
            <NavLink className="nav-links" to="/">
              Home
            </NavLink>

            <NavLink className="nav-links" to="/coming-soon">
              About Us
            </NavLink>

            <NavLink className="nav-links" to="/our-stories">
              Our Stories
            </NavLink>

            <NavLink className="nav-links" to="/coming-soon">
              Get Help
            </NavLink>

            <NavLink className="nav-links" to="/coming-soon">
              Get Involved
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
