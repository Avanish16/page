import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <div className='footer'>
      <div className='footer1'>
        <div className="f1">
            <img src="./image/logo.ico" alt="" />
            <p>Subscribe to our newsletter and be the first to know about</p>
            <input type="text" placeholder='Enter your Email' />
            <br/>
            <button>Subscribe</button>
        </div>
        <div className="f1">
            <h3>Services</h3>
            <p>Hire Employees</p>
            <p>Hire Contractors</p>
            <p>Competitive Benefits</p>
            <p>Global Talent Network</p>
        </div>
        <div className="f1">
            <h3>Solutions</h3>
            <p>For Legal Teams</p>
            <p>For Finance Teams</p>
            <p>For People Teams</p>
            <p>Compliance</p>
            <p>For Founders</p>
        </div>
        <div className="f1">
            <h3>Resources</h3>
            <p>Case Studies</p>
            <p>Pricing</p>
            <p>About Us</p>
            <p>Blogs</p>
        </div>
      </div>
      <div className='footer3'>
        <h3>Our Social Media</h3>
        
        <span>
        <i class="fa-brands fa-square-instagram"></i>
        <i class="fa-brands fa-linkedin"></i>
        <i class="fa-brands fa-square-facebook"></i>
        <i class="fa-brands fa-twitter"></i>
        </span>
      </div>
      <hr/>
      <div className='footer4'><h5>2000 &#169; Nezuware. All Rights Reserved</h5></div>
    </div>
  )
}
