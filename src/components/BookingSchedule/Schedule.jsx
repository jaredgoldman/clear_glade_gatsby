import React from "react"
import RoomCalendar from "./RoomCalendar/RoomCalendar"
import RoomList from "./RoomList/RoomList"
import * as styles from "./Schedule.module.scss"

export default function Schedule() {

  return (
    <div className={styles.root}>
      <h1>Lodging Schedule</h1>
      <RoomCalendar/>
      <RoomList/>
    </div>
  )
}