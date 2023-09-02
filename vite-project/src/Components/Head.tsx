import React from 'react'
import Logo from "../assets/logo.jpeg"
import "./head.css"

export default function Head() {
  return (
    <nav className='head'>
      <div className="headDiv">
        <img src={Logo} alt="" />
      </div>
      <div className="contactUs">
        <h2>Contact Us</h2>
      </div>



    </nav>
  )
}
