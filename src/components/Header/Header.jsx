import React from "react";
import { Link } from "gatsby";
import logo from "../../images/logo.png"
import * as HeaderStyles from "./Header.module.scss"
import { useAuth } from '../../contexts/AuthContext'

export default function Header() {

  const { logout, loggedIn } = useAuth();

  const handleLogout = async () => {
    logout()
  }

  return (
    <nav className={HeaderStyles.nav}>
      <Link to="/">
        <div className={HeaderStyles.navLogoImage}>
          <p>Clear Glade Farm</p>
          <img src={logo} alt="" className={HeaderStyles.logoImage} />
        </div>
      </Link>
      <div className={HeaderStyles.buttons}>
      {!loggedIn &&
        <Link to="/login">
          Login
        </Link>
      }           
      {loggedIn &&
        <>
          <Link to="/about">
            About
          </Link>
          <Link to="/user">
            Home
          </Link>
          <Link to="/inventory">
            Inventory
          </Link>
          <Link to="/schedule">
            Schedule
          </Link>
          <Link to="/media">
            Media
          </Link>
          <Link to="/"
            onClick={() => handleLogout()}
          >
            Logout
          </Link>
        </>
      }
      </div>
    </nav>
  )
}
