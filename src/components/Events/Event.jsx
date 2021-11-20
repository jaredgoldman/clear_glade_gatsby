import React from 'react'
import * as styles from './Event.module.scss'
import format from 'date-fns/format'
import eventImage from '../../images/pathway.png'

export default function Event({ summary, description, start, end, attachments }) {
  // const attachment = attachments ? attachments[0] : ''

  const dateRange = `${format(new Date(start), 'PPp')} - ${format(new Date(end), 'p')}`
  // const dateRange = `${format(new Date(start.dateTime), 'PPp')} - ${format(
  //   new Date(end.dateTime),
  //   'p'
  // )}`

  const attachment = `https://drive.google.com/uc?id=1dlYrKiighPAw-ICnFpqMchaW2_0SFQOL`

  return (
    <div className={styles.root}>
      <h2 className={styles.eventHeading}>{summary}</h2>
      <div className={styles.eventDetails__date}>{dateRange}</div>
      {attachment && (
        <div className={styles.attachment}>
          <div className={styles.imageContainer}>
            <img src={eventImage} alt='' />
          </div>
        </div>
      )}
      <div className={styles.eventDetails}>
        <div className={styles.eventDetails__description}>{description}</div>
      </div>
    </div>
  )
}
