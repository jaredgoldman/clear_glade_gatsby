import React from 'react'
import * as UserLandingStyles from "./UserLanding.module.scss"

import Announcements from "./Announcements/Announcements"
import Rules from "./Rules"
import Amenities from "./Amenities"

export default function userLanding() {

  return (
    <div className={UserLandingStyles.userLanding}>
      <h1>Welcome, username</h1>
      <div className={UserLandingStyles.content}>
        <Announcements />
        <Rules/>
        <Amenities/>
      </div>
    </div>
  )
}