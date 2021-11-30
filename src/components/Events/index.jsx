import React from 'react'
import Event from './Event'
import eventData from '../../mocks/eventData'
import * as styles from './index.module.scss'

export default function Events({ events }) {
  // const upcomingEvents = eventData.map((event) => {
  const upcomingEvents = events.nodes.map((event) => {
    const { name, start, end, updated_at, created_at, description, image } = event

    return (
      <Event
        name={name}
        start={start}
        end={end}
        updatedAt={updated_at}
        createdAt={created_at}
        description={description}
        imageUrl={image.url}
      />
    )
  })

  return (
    <div className={styles.root}>
      <div className={styles.heading}>
        <h1>Upcoming Events</h1>
      </div>
      <div className={styles.events}>{upcomingEvents}</div>
    </div>
  )
}
