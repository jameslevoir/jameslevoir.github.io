import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  

  return (
    <nav className="container" id="nav-bar">
        <ul>
            <li><NavLink to="/" className="nav-link">Home</NavLink></li>
            <li><NavLink to="/design-development" className="nav-link">Design/Development</NavLink></li>
            <li><NavLink to="/audio-visual" className="nav-link">Audio/Visual</NavLink></li>
            <li><NavLink to="/contact" className="nav-link">Contact</NavLink></li>
        </ul>
    </nav>
  )
}

export default NavBar