import React from 'react'
// import announcementData from "../../../mocks/announcementData";
import Announcement from './Announcement'

import * as styles from './Announcements.module.scss'

export default function Announcements({ data }) {
  const posts = data.nodes

  const announcements = posts?.reverse().map((post, i) => {
    if (i <= 5) {
      const { title, content, published_at, updated_at, id, attachments, image } = post
      return (
        <Announcement
          title={title}
          content={content}
          publishedAt={published_at}
          updatedAt={updated_at}
          attachments={attachments}
          imageUrl={image.url}
          key={id}
        />
      )
    }
  })

  return (
    <div className={styles.root}>
      <h2 className={styles.heading}>Recent Announcements</h2>
      <div className={styles.announcements}>{announcements}</div>
    </div>
  )
}
