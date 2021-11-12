import React from "react"
import * as styles from "./Room.module.scss"

export default function Room({
  roomName,
  roomImage,
  description
}) {

  return (
    <div className={styles.root}>
      <div className={styles.imageContainer}>
        <img src={roomImage}/>
      </div>
      <div className={styles.details}>
        <h3>{roomName}</h3>
        <div>{description}</div>
      </div>
    </div>
  )
}