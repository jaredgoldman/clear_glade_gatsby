import React, { useEffect, useState } from 'react'
import announcementData from '../../../mocks/announcementData'
import Announcement from './Announcement'
import axios from 'axios'
import * as styles from './Announcements.module.scss'
const serverURL = process.env.GATSBY_SERVER_URL

export default function Announcements() {
  const [posts, setPosts] = useState([])

  // useEffect(() => {
  //   const fetchAnnoucments = async () => {
  //     try {
  //       const res = await axios.get(`${serverURL}/posts/`)
  //       setPosts(res.data)
  //     } catch (e) {
  //       console.log(e.response)
  //     }
  //   }
  //   fetchAnnoucments()
  // }, [])

  // const announcements = posts?.reverse().map((post, i) => {
  const announcements = announcementData.map((post, i) => {
    if (i <= 5) {
      const { title, content, created_at, id, attachments } = post
      return (
        <Announcement
          title={title}
          content={content}
          date={created_at}
          attachments={attachments}
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
