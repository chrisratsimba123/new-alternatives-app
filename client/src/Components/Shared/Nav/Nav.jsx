import React, { Component } from 'react'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import { NavLink } from 'react-router-dom'
import 'react-dropdown/style.css'
import './Nav.css'
import Social from '../../Social/Social'
import Logo from '../../../Assets/new-alternatives-title.png'


export class Nav extends React.Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.onMouseEnter = this.onMouseEnter.bind(this)
    this.onMouseLeave = this.onMouseLeave.bind(this)
    this.state = {
      dropdownOpen: false
    }
  }
  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }))
  }
  onMouseEnter() {
    this.setState({dropdownOpen: true})
  }
  onMouseLeave() {
    this.setState({dropdownOpen: false})
  }
  render() {
    return (
      <>
        <div className='nav-component'>
          <div className='title' alt='new alternatives'>
            <img src={Logo} alt="New Alternatives Logo"/>
          </div>
          <div className='nav-bar'>
              <div className="top-nav-bar">
                <button className='donate' alt='donate button'>Donate</button>
                <Social className="social-media"/>
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
                <Dropdown className='get-help' onMouseOver={this.onMouseEnter} onMouseLeave={this.onMouseLeave} isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                  <DropdownToggle caret>
                  <li>Get Help</li>
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem>Registration + Schedule</DropdownItem>
                    <DropdownItem>Support Programs</DropdownItem>
                    <DropdownItem>Client Resources</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
                </NavLink>

                <NavLink className="nav-links" to="/coming-soon">
                <Dropdown className='get-help' onMouseOver={this.onMouseEnter} onMouseLeave={this.onMouseLeave} isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                  <DropdownToggle caret>
                  <li>Get Involved</li>
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem>Volunteer</DropdownItem>
                    <DropdownItem>Fundraise</DropdownItem>
                    <DropdownItem>Upcoming Events</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
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
} 

export default Nav


