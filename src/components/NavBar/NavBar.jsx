import React from 'react'
import "./navbar.css"
import logo from"../../assets/logo-four.png"

const NavBar = () => {
  return (
    <div className='navbar'>
        <div className="navContainer">
            <img src={logo} className="logo" alt='ReserveIt'/>
            <div className="navItems">
                <button className="navButton">Register</button>
                <button className="navButton">Login</button>
            </div>
        </div>
        
    </div>
  )
}

export default NavBar