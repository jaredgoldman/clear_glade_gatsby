import React from 'react'
import * as styles from './Event.module.scss'
import format from 'date-fns/format'
const URL = process.env.GATSBY_SERVER_URL

export default function Event({ name, start, end, description, imageUrl }) {
  const dateRange = `${format(new Date(start), 'PPp')} - ${format(new Date(end), 'p')}`
  const imageSrc = `${URL}${imageUrl}`

  return (
    <div className={styles.root}>
      <h2 className={styles.eventHeading}>{name}</h2>
      <div className={styles.eventDetails__date}>{dateRange}</div>
      {imageUrl && (
        <div className={styles.attachment}>
          <div className={styles.imageContainer}>
            <img src={imageSrc} alt='' />
          </div>
        </div>
      )}
      <div className={styles.eventDetails}>
        <div className={styles.eventDetails__description}>{description}</div>
      </div>
    </div>
  )
}
