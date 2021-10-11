import React from "react"
import * as AnnouncementStyles from "./Announcement.module.scss"
import format from "date-fns/format"

export default function Announcement({
  title,
  content,
  date
}) {

  const formattedDate = format((new Date(date)), 'E LLL do')

  return (
    <div className={AnnouncementStyles.announcement}>
      <h2>{title}</h2>
      <p className="announcement_content">{content}</p>
      <div className="announcement_date">
        <p>{formattedDate}</p>
      </div>
    </div>
  )
}
