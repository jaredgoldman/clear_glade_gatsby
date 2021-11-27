import React from 'react'
// import { get } from 'lodash'
import Event from './Event'
import eventData from '../../mocks/eventData'
import * as styles from './index.module.scss'

export default function Events({ events }) {
  const upcomingEvents = eventData.map((event) => {
    const { summary, description, start, end, id, attachments } = event

    return (
      <Event
        summary={summary}
        description={description}
        start={start}
        end={end}
        attachments={attachments}
        key={id}
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
