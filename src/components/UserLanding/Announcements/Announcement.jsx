import React from 'react'
import * as styles from './Announcement.module.scss'
import format from 'date-fns/format'
const URL = process.env.GATSBY_SERVER_URL

export default function Announcement({
  title,
  content,
  publishedAt,
  // updatedAt,
  imageUrl,
}) {
  const formattedDate = format(new Date(publishedAt), 'EEEE, LLL do - p')
  const imageSrc = `${URL}${imageUrl}`

  return (
    <div className={styles.root}>
      {imageUrl && (
        <div className={styles.attachment}>
          <img src={imageSrc} alt='' />
        </div>
      )}
      <div className={styles.body}>
        <h3 className={styles.heading}>{title}</h3>
        <p className={styles.content}>{content}</p>
        <div className={styles.date}>
          <p>{formattedDate}</p>
        </div>
      </div>
    </div>
  )
}
