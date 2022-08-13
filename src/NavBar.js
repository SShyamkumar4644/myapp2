//rfce
import React from 'react'
import {Link} from 'react-router-dom'
import './navbar.css'

function NavBar() {
  return (
    <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/teams">Teams</Link>
    </div>
  )
}

export default NavBar