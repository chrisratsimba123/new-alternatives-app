import React, { Component, useState } from 'react'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import { NavLink } from 'react-router-dom'
// import 'react-dropdown/style.css'
import './Nav.css'
import Social from '../../Social/Social'
import Logo from '../../../Assets/new-alternatives-title.png'


const Nav = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const toggle = () => setDropdownOpen(prevState => !prevState)


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
        <div className='nav-component'>
          <div className='title' alt='new alternatives'>
            <NavLink className="nav-links" to="/">
              <img src={Logo} alt="New Alternatives Logo"/>
            </NavLink>
          </div>
          <div className='nav-bar'>
              <div className="top-nav-bar">
                <button className='donate' alt='donate button'><a href="https://fundraise.newalternativesnyc.org/give/157653/#!/donation/checkout" target="_blank">Donate</a></button>
                <Social className="social-media"/>
                <NavLink className="nav-links" to="/coming-soon">
                  <h6 className="contact-us">Contact Us</h6>
                </NavLink>
              </div>
              <div className='nav-menu' alt='navigation menu'>
                <ul>
                <NavLink className="nav-links" to="/">
                  <li>Home</li>
                </NavLink>

                <NavLink className="nav-links" to="/coming-soon">
                  <li>About Us</li>
                </NavLink>

                <NavLink className="nav-links" to="/our-stories">
                  <li>Our Stories</li>
                </NavLink>

                <NavLink className="nav-links" to="/coming-soon">
                {/* <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                  <DropdownToggle caret> */}
                  <li>Get Help</li>
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
                  <li>Get Involved</li>
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
                </ul>
              </div>
            {/* <ul>
              <h5>Contact Us</h5>
            </ul> */}
          </div>
        </div>
      </>
    )
  }


export default Nav


