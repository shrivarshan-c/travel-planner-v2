import React from 'react';
import './nav.css';
import {FiMenu} from 'react-icons/fi'

function Nav() {
  return (
    <div className='nav'>

 <div>Logo</div>

<div className='right-nav'>
        <h3>Home</h3>
        <h3>features</h3>
        <h3>Destination</h3>
        <h3>Blogs</h3>
  </div>

      <div className="menu-icon">
        <FiMenu size={26} />
      </div>

    </div>
  )
}

export default Nav
