import React from "react"
import logo from "../../images/logo.png"
import * as styles from "./Landing.module.scss"
import houseImage from "./../../images/house.png"

export default function Landing() {

  return (
    <div className={styles.root}>
      <div className={styles.hero}>
        <div className={styles.hero__welcome}>
          <div className={styles.hero__welcomeHeading}>Welcome To Clear Glade Farm</div>
          <div className={styles.hero__welcomeSubHeading}>Private Agricultural Co-op</div>
        </div>
      </div>
      <div className={styles.mission}>
        <div className={styles.missonText}>
          <h1>Mission Statement Header</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <img src={logo}></img>
      </div>
      <div className={styles.house}/>
    </div>
  )
}