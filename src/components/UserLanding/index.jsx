import React from 'react'
import * as styles from './index.module.scss'

import Announcements from './Announcements/Announcements'

export default function UserLanding({ data }) {
  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <Announcements data={data} />
      </div>
    </div>
  )
}
