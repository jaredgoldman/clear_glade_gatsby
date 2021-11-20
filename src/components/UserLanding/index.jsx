import React from 'react'
import * as styles from './index.module.scss'

import { useAuth } from '../../contexts/AuthContext'

import Announcements from './Announcements/Announcements'
import Rules from './Rules'
import Amenities from './Amenities'

export default function UserLanding() {
  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <Announcements />
        <Amenities />
        <Rules />
      </div>
    </div>
  )
}
