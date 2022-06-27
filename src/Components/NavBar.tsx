import React from 'react'
import {NavLink} from 'react-router-dom'

function NavBar() {
  return (
    <div className="navBar">
        <div className="componentWrapper">
            <NavLink to="/"> <img src="/assets/shared/desktop/logo.svg" alt="Logo" className="navLogo"/></NavLink>
            <ul>
                <li><NavLink to="/">HOME</NavLink></li>
                <li><NavLink to="/a">HEADPHONES</NavLink></li>
                <li><NavLink to="/s">SPEAKERS</NavLink></li>
                <li><NavLink to="/c">EARPHONES</NavLink></li>
            </ul>
            <img src="/assets/shared/desktop/icon-cart.svg" alt="Checkout Cart" className="navCheckOut"/>
        </div>
    </div>
  )
}

export default NavBar