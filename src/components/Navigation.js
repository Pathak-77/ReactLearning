import React, { useState } from "react";
import logo from "../img/Logo .svg";

const Nav = () => {
   const [menuOpen, setMenuOpen] = useState(false);

   const toggle = () => {
    setMenuOpen(!menuOpen);
   }
    return( 
        <nav className= {`navbar ${menuOpen ? 'open' : ''}`}>
            <a href ="/" className="logo">
                <img 
                    src={logo} 
                    alt="logo_image" 
                />   
            </a>
           {/*for phone*/} 
           <div className="menu-icon" onClick={toggle}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
           </div>
           {/*....*/}
           <ul className={`nav-links ${menuOpen ? "visible" : ""}`}>
            <li>
                <a href="/">Home</a>
            </li>
            <li>
                <a href="/">About</a>
            </li>
            <li>
                <a href="/">Services</a>
            </li>
            <li>
                <a href="/">Menu</a>
            </li>
            <li>
                <a href="/">Reservation</a>
            </li>
            <li>
                <a href="/">Sign up</a>
            </li>
           </ul>
            
        </nav>
    )
}

export default Nav