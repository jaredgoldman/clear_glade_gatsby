import React from "react"
import RoomCalendar from "./RoomCalendar/RoomCalendar"
import RoomList from "./RoomList/RoomList"

export default function Schedule() {

  return (
    <>
      <h1>Lodging Schedule</h1>
      <RoomCalendar/>
      <RoomList/>
    </>
  )
}