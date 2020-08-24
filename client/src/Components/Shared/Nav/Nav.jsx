import React from 'react'

export default function Nav() {
  return (
    <div>
       <div className='nav-component'>
          <div className='title' alt='new alternatives'>
            <h4>New<br />Alternatives<br />(title)</h4>
          </div>
       <div className='nav-bar'>
            <div className='nav-menu' alt='navigation menu'>
              <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Our Stories</li>
                <li>Get Help</li>
                <li>Get Involved</li>
              </ul>
            </div>
          <button className='donate' alt='donate button'>Donate</button>
          </div>
      </div>
    </div>
  )
}
