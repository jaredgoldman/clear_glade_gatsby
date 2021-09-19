import React from "react";
import { Link } from "gatsby";
import logo from "../images/logo.png"
import * as HeaderStyles from "./Header.module.scss"

export default function Header() {

  // const { currentUser, logout } = useAuth();
  // const history = useHistory();

  const handleLogout = async () => {
    console.log('logged out');
  }

  const currentUser = 'Jared'

  return (
    <nav className={HeaderStyles.nav}>
      <Link to="/">
        <div className={HeaderStyles.navLogoImage}>
          <p>Clear Glade Farm</p>
          <img src={logo} alt="" className={HeaderStyles.logoImage} />
        </div>
      </Link>
      <div className={HeaderStyles.buttons}>
      {/* {currentUser ? <Redirect to='/user-landing'/> :
        <Link to="/login">
          Login
        </Link>
      }            */}
      {currentUser &&
        <>
          <Link to="/about/">
            About
          </Link>
          <Link to="/user/">
            Home
          </Link>
          <Link to="/inventory/">
            Inventory
          </Link>
        <Link to="/schedule/">
            Schedule
          </Link>
          <Link to="/logout/"
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
