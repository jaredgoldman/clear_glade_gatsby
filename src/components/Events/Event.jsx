import React from 'react'
import * as styles from './Event.module.scss'
import format from 'date-fns/format';

export default function Event({
  summary,
  description,
  start,
  end,
  attachments
}) {

  const attachment = attachments ? attachments[0] : ''

  console.log(`https://drive.google.com/uc?export=view&id=${attachment.fileId}`);

  const dateRange = `${format(new Date(start.dateTime), 'PPp')} - ${format(new Date(end.dateTime), 'p')}`;

  return (

    <div className={styles.root}>
      {attachment &&
        <div className={styles.eventAttachment}>
          <img 
            src={`https://drive.google.com/uc?id=${attachment.fileId}`} alt=""
          />
        </div>
      } 
      <div className={styles.eventDetails}>
        <h4 className={styles.eventHeading}>
          {summary}
        </h4>
        <div className={styles.eventDetails__date}>
          {dateRange}
        </div>
        <div className={styles.eventDetails__description}>
          {description}
        </div>
      </div>
    </div>
  )
}