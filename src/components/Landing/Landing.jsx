import React from "react"
import logo from "../../images/logo.png"
import "./Landing.scss"

export default function Landing() {

  return (
    <div className="landing-container">
      <div className="main-landing-image">
        <div className="welcome">
          <div className="welcome_heading">Welcome To Clear Glade Farm</div>
          <div className="welcome_sub-heading">Private Agricultural Co-op</div>
        </div>
      </div>
      <div className="mission">
        <div className="mission_text">
          <h1>Mission Statement Header</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <img src={logo}></img>
      </div>
      <div className="house">
      </div>
    </div>
  )
}