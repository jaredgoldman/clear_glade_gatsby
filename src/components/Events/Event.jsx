import React from 'react'
import * as styles from './Event.module.scss'
import format from 'date-fns/format'
// import eventImage from '../../images/pathway.png'

export default function Event({ summary, description, start, end, attachments }) {
  const attachment = attachments ? `https://drive.google.com/uc?id=${attachments[0].fileId}` : ''
  const dateRange = `${format(new Date(start), 'PPp')} - ${format(new Date(end), 'p')}`

  return (
    <div className={styles.root}>
      <h2 className={styles.eventHeading}>{summary}</h2>
      <div className={styles.eventDetails__date}>{dateRange}</div>
      {attachment && (
        <div className={styles.attachment}>
          <div className={styles.imageContainer}>
            <img src={attachment} alt='' />
          </div>
        </div>
      )}
      <div className={styles.eventDetails}>
        <div className={styles.eventDetails__description}>{description}</div>
      </div>
    </div>
  )
}
