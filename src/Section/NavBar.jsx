import React, { Component } from "react";
import "./NavBar.css";

export default class NavBar extends Component {
  state = {clicked: false};
  render(){
  return (
    <div className="container">
      <div className="logo">
        <img src="./public/image/logo.ico" />
      </div>

      <ul id="links">
        <li>
          <a href="#">
            Solutions <i className="fa-solid fa-angle-down"></i>
          </a>
        </li>
        <li>
          <a href="#">
            Why Nezuware <i className="fa-solid fa-angle-down"></i>
          </a>
        </li>
        <li>
          <a href="#">
            Resource <i className="fa-solid fa-angle-down"></i>
          </a>
        </li>
        <li>
          <a href="#">Pricing </a>
        </li>
      </ul>

      <div className="contact">
        <button className="login">Login</button>
        <button className="signup">Sign Up</button>
        <div id="menu">
          <i id="bar" className={this.state.clicked ? "fa-solid fa-times" : "fa-solid fa-bars"}></i>
        </div>
      </div>
    </div>
  );
}
}
