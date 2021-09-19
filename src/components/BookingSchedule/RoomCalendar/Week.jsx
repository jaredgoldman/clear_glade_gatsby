import React, { useState } from "react";
import { format } from "date-fns"
import RoomModal from './RoomModal'
import * as WeekStyles from "./Week.module.scss"

export default function Week({
  start,
  end,
  thursday,
}) {
  
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  }
  
  const dateRange = `${format(thursday, 'E LLL do')} - ${format(end, 'E LLL do')}`;

  return (
    <div className={WeekStyles.week}>
      <RoomModal 
        showModal={showModal}
        setShowModal={setShowModal}
        weekInfo={{start, thursday, end}}
      />
      <h3>{dateRange}</h3>
      <div>There are currently 5 rooms available</div>
      <button
        onClick={() => handleShowModal()}
      >Book A Room</button>
    </div>
  )
}