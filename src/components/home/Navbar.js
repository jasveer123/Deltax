import React from 'react'

import image from './1.png'
import { NavLink } from 'react-router-dom'

import './navbar.css'

function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="logo">
          <img className="logo_img" src={image} alt="image not found" />
        </div>
        <div className="home">
          <NavLink className="home" to="/">
            Home
          </NavLink>
        </div>
        <NavLink className="home" to="/about">
          About
        </NavLink>
      </div>
    </>
  )
}

export default Navbar
