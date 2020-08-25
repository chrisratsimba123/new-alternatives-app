import React, { Component } from 'react'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import { NavLink } from 'react-router-dom'
import 'react-dropdown/style.css'
import './Nav.css'
import Social from '../../Social/Social'


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
      <div>
        <div className='nav-component'>
          <div className='title' alt='new alternatives'>
            <h4>New<br />Alternatives<br />(title)</h4>
          </div>
          <div className='nav-bar'>
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
            <Social />
            <button className='donate' alt='donate button'>Donate</button>
          </div>
        </div>
      </div>
    )
  }
} 

export default Nav


