import React from 'react'
import {NavLink} from 'react-router-dom'

function NavBar() {
  return (
    <div className="navBar">
        <div className="navWrapper">
            <NavLink to="/"> <img src="/assets/shared/desktop/logo.svg" alt="Logo" className="navLogo"/></NavLink>
            <ul>
                <li><NavLink to="/">HOME</NavLink></li>
                <li><NavLink to="/Headphones">HEADPHONES</NavLink></li>
                <li><NavLink to="/Speakers">SPEAKERS</NavLink></li>
                <li><NavLink to="/Earphones">EARPHONES</NavLink></li>
            </ul>
            <img src="/assets/shared/desktop/icon-cart.svg" alt="Checkout Cart" className="navCheckOut"/>
        </div>
        <div className="navDivider"/>
    </div>
  )
}

export default NavBar