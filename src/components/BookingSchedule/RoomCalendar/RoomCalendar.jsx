import React from "react";
import Week from "./Week"
import * as RoomCalendarStyles from "./RoomCalendar.module.scss"
import { useBooking } from "../../../contexts/BookingContext";


export default function RoomCalendar() {

  const { weeks } = useBooking();

  const schedule = weeks?.map((week, i) => {
    const { start, end, thursday } = week;

    return <Week 
      start={start}
      thursday={thursday}
      end={end}
      // roomsAvailable={roomsAvailable}
      key={i}
    />
  })

  return (
    <div>
      <div className={RoomCalendarStyles.weeksContainer}>
        <div className={RoomCalendarStyles.weeks}>
          {schedule}
        </div>
      </div>
    </div>
  )
}