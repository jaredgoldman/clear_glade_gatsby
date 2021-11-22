import React from 'react'
import * as styles from './index.module.scss'

import Announcements from './Announcements/Announcements'

export default function UserLanding() {
  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <Announcements />
      </div>
    </div>
  )
}
