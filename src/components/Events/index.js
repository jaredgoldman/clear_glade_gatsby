import React from 'react'
// import { get } from 'lodash'
import Event from './Event'
import * as styles from './Events.module.scss'

export default function Events({
  events
}) {
  
  const upcomingEvents = events.map(event => {
    const { summary, description, start, end, id, attachments } = event;

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
      <h1>Upcoming Events</h1>
      <div>
        {upcomingEvents}  
      </div>
    </div>
  )
}
