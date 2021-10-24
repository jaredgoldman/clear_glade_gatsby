import React, { useEffect, useState } from 'react'
import * as UserLandingStyles from "./UserLanding.module.scss"

import { useAuth } from '../../contexts/AuthContext'

import Announcements from "./Announcements/Announcements"
import Rules from "./Rules"
import Amenities from "./Amenities"

export default function UserLanding() {

  const { currentUser } = useAuth()

  return (
    <div className={UserLandingStyles.userLanding}>
      <h1>{`Welcome, ${currentUser?.user.firstName}`}</h1>
      <div className={UserLandingStyles.content}>
        <Announcements />
        <Rules/>
        <Amenities/>
      </div>
    </div>
  )
}