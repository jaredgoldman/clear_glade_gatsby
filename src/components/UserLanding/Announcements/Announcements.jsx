import React from "react";
import announcementData from "../../../mocks/announcementData";
import Announcement from "./Announcement"

import * as AnnouncementsStyles from "./Announcements.module.scss"

export default function Announcements() {

  const announcements = announcementData.map((announcement, i) => {
    const { subject, content, date} = announcement;
    return <Announcement
      subject={subject}
      content={content}
      date={date}
      key={i}
    />
  })

  return (
    <div className={AnnouncementsStyles.announcements}>
      <h2 className={AnnouncementsStyles.heading}>- Announcements -</h2>
      {announcements}
    </div>
  )
}
