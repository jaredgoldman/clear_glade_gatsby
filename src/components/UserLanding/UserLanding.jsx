import React, { useEffect, useState } from 'react'
import * as UserLandingStyles from "./UserLanding.module.scss"

import { useAuth } from '../../contexts/AuthContext'

import Announcements from "./Announcements/Announcements"
import Rules from "./Rules"
import Amenities from "./Amenities"

export default function UserLanding() {

  const { getUser } = useAuth()
  const [currentUser, setCurrentUser] = useState()

  useEffect(() => {
    const userData = getUser()
    setCurrentUser(userData.user)
  }, [])

  return (
    <div className={UserLandingStyles.userLanding}>
      <h1>{`Welcome, ${currentUser?.firstName}`}</h1>
      <div className={UserLandingStyles.content}>
        <Announcements />
        <Rules/>
        <Amenities/>
      </div>
    </div>
  )
}