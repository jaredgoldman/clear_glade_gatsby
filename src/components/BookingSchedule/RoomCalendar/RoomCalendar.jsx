import React from "react";
import { useState } from "react";
import Week from "./Week"
import RoomModal from "./RoomModal";
import weekData from "../../../mocks/weekData"
import * as RoomCalendarStyles from "./RoomCalendar.module.scss"


export default function RoomCalendar() {
  const [showModal, setShowModal] = useState(false);

  const schedule = weekData.map((week, i) => {
    const { start, end, thursday, roomsAvailable } = week;

    return <Week 
      start={start}
      thursday={thursday}
      end={end}
      roomsAvailable={roomsAvailable}
      setShowModal={setShowModal}
      key={i}
    />
  })

  return (
    <div className>
      <RoomModal 
        showModal={showModal}
        setShowModal={setShowModal}
      />
      <div className={RoomCalendarStyles.weeksContainer}>
        <div className={RoomCalendarStyles.weeks}>
          {schedule}
        </div>
      </div>
    </div>
  )
}