import React from "react";
import { format } from "date-fns"
import * as WeekStyles from "./Week.module.scss"

export default function Week({
  start,
  end,
  thursday,
  setShowModal,
}) {

  const handleShowModal = () => {
    setShowModal(true);
  }
  
  const dateRange = `${format(thursday, 'E LLL do')} - ${format(end, 'E LLL do')}`
  
  return (
    <div className={WeekStyles.week}>
      <h3>{dateRange}</h3>
      <div>There are currently 5 rooms available</div>
      <button
        onClick={() => handleShowModal()}
      >Book A Room</button>
    </div>
  )
}