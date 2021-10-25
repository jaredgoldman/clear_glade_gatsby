import React from "react";
import { Link } from "gatsby";
import logo from "../../images/logo.png"
import * as styles from "./Header.module.scss"
import { useAuth } from '../../contexts/AuthContext'

export default function Header() {

  const { logout, loggedIn } = useAuth();

  const handleLogout = async () => {
    logout()
  }

  return (
    <nav className={styles.root}>
      <div className={styles.navLogoImage}>
        <Link to="/">
          <div>
            <div>Clear Glade Farm</div>
          </div>
        </Link>
      <img src={logo} alt="" className={styles.logoImage} />
      </div>
      <div className={styles.buttons}>
      {!loggedIn &&
        <Link to="/login">
          Login
        </Link>
      }           
      {loggedIn &&
        <>
          <Link to="/user">
            Home
          </Link>
          <Link to="/about">
            About
          </Link>
          <Link to="/events">
            Schedule
          </Link>
          <Link to="/inventory">
            Inventory
          </Link>
          <Link to="/schedule">
            Book A Room
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
