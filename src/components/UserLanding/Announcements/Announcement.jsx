import React from 'react'
import * as styles from './Announcement.module.scss'
import format from 'date-fns/format'
const URL = process.env.GATSBY_URL

export default function Announcement({ title, content, date, attachments }) {
  // const attachmentURL = `${URL}${attachments[0]?.url}`
  const attachmentURL = `https://drive.google.com/uc?id=${attachments[0]?.url}`

  const formattedDate = format(new Date(date), 'EEEE, LLL do - p')

  return (
    <div className={styles.root}>
      {attachments && (
        <div className={styles.attachment}>
          <img src={attachmentURL} alt='' />
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
