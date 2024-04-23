import React from 'react'
import { NavLink } from 'react-router-dom'
import { useState } from 'react';

const MobileNavBar = () => {
    const [isActive, setIsActive] = useState(false);

    const toggleShow = () => {
      setIsActive(!isActive);
    }
    const handleBlur = () => {
      setIsActive(false);
    }

  return (
    <>
    <div id="mobile-nav-bar-header" className={isActive ? "show" : "hide"} onBlur={handleBlur}>
        <img src="/SVG/mobile-lines.svg" onFocus={toggleShow} />
        <ul>
            <li><NavLink to="/" className="nav-link">Home</NavLink></li>
            <li><NavLink to="/design-development" className="nav-link">Design/Development</NavLink></li>
            <li><NavLink to="/audio-visual" className="nav-link">Audio/Visual</NavLink></li>
            <li><NavLink to="/contact" className="nav-link">Contact</NavLink></li>
        </ul>
    </div>
    </>
  )
}

export default MobileNavBar