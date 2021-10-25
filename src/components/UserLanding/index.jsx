import React, { useEffect, useState } from 'react'
import * as styles from "./UserLanding.module.scss"

import { useAuth } from '../../contexts/AuthContext'

import Announcements from "./Announcements/Announcements"
import Rules from "./Rules"
import Amenities from "./Amenities"

export default function UserLanding() {

  const { currentUser } = useAuth()

  return (
    <div className={styles.root}>
      <h2>{`Welcome, ${currentUser?.user.firstName}`}</h2>
      <div className={styles.content}>
        <Announcements />
        <Rules/>
        <Amenities/>
      </div>
    </div>
  )
}