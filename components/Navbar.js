import React from 'react'
import logos from '../assets/pizzaLogo.png'
import './Navbar.css'
import gunn from "../assets/margherita.jpg"
import {Link}  from 'react-router-dom';

function Navbar() {
  return (
    <div className='navbar'>
        <div className='left'>
        {/* <img src={logos}></img> */}
        <img src={gunn}></img>
        <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        
      </ul>

        </div>
        
      
    </div>
  )
}

export default Navbar
