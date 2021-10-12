import React, { useEffect, useState } from "react";
import announcementData from "../../../mocks/announcementData";
import Announcement from "./Announcement"
import axios from "axios";

import * as AnnouncementsStyles from "./Announcements.module.scss"

export default function Announcements() {
  const [posts, setPosts] = useState()

  useEffect(() => {
    const fetchAnnoucments = async () => {
      try {
        const res = await axios.get('/posts/')
        setPosts(res.data)
      } catch(e) {
        console.log(e.response);
      }
    }
    fetchAnnoucments()
  }, [])

  const announcements = posts?.map(post => {
    const { title, content, created_at, id } = post;
    return <Announcement
      title={title}
      content={content}
      date={created_at}
      key={id}
    />
  })

  return (
    <div className={AnnouncementsStyles.announcements}>
      <h2 className={AnnouncementsStyles.heading}>- Announcements -</h2>
      {announcements}
    </div>
  )
}
