import React, { Component, useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { NavLink } from "react-router-dom";
// import 'react-dropdown/style.css'
import "./Nav.css";
import Social from "../../Social/Social";
import Logo from "../../../Assets/new-alternatives-title.png";

const Nav = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  // export class Nav extends React.Component {
  //   constructor(props) {
  //     super(props)

  //     this.toggle = this.toggle.bind(this)
  //     this.onMouseEnter = this.onMouseEnter.bind(this)
  //     this.onMouseLeave = this.onMouseLeave.bind(this)
  //     this.state = {
  //       dropdownOpen: false
  //     }
  //   }
  //   toggle() {
  //     this.setState(prevState => ({
  //       dropdownOpen: !prevState.dropdownOpen
  //     }))
  //   }
  //   onMouseEnter() {
  //     this.setState({dropdownOpen: true})
  //   }
  //   onMouseLeave() {
  //     this.setState({dropdownOpen: false})
  //   }
  //   render() {
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
              <NavLink className="nav-links" to="/coming-soon">
                <h6 className="contact-us">Contact Us</h6>
              </NavLink>
            </div>

            <Social className="social-media" />
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
              {/* <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                  <DropdownToggle caret> */}
              Get Help
              {/* </DropdownToggle> */}
              {/* <DropdownMenu className="get-help-menu">
                    <DropdownItem className="dropdown-item">Registration + Schedule</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem className="dropdown-item">Support Programs</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem className="dropdown-item">Client Resources</DropdownItem>
                  </DropdownMenu>
                </Dropdown> */}
            </NavLink>

            <NavLink className="nav-links" to="/coming-soon">
              {/* <Dropdown className='get-involved' onMouseOver={this.onMouseEnter} onMouseLeave={this.onMouseLeave} isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                  <DropdownToggle caret> */}
              Get Involved
              {/* </DropdownToggle>
                  <DropdownMenu className="get-involved-menu">
                    <DropdownItem className="dropdown-item">Volunteer</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem className="dropdown-item">Fundraise</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem className="dropdown-item">Upcoming Events</DropdownItem>
                  </DropdownMenu>
                </Dropdown> */}
            </NavLink>
          </div>
          {/* <ul>
              <h5>Contact Us</h5>
            </ul> */}
        </div>
      </div>
    </>
  );
};

export default Nav;
