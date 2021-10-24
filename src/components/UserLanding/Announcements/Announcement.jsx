import React from "react"
import * as styles from "./Announcement.module.scss"
import format from "date-fns/format"
const URL = process.env.GATSBY_URL

export default function Announcement({
  title,
  content,
  date,
  attachments
}) {

  const attachmentURL = `${URL}${attachments[0]?.url}`

  const formattedDate = format((new Date(date)), 'EEEE, LLL do - p')

  return (
    <div className={styles.announcement}>
      <div className={styles.announcementData}>
        <h2>{title}</h2>
        <p className="announcement_content">{content}</p>
        <div className="announcement_date">
          <p>{formattedDate}</p>
        </div>
      </div>
      {attachments && 
        <div className={styles.attachment}>
          <img src={attachmentURL} alt="" />
        </div>
      }
    </div>
  )
}
