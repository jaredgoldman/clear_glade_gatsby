import React, { useEffect, useState, useRef } from "react";
import { format } from "date-fns"
import RoomModal from './RoomModal'
import * as styles from "./Week.module.scss"

export default function Week({
  start,
  end,
  thursday,
  bookings
}) {
  
  const [showModal, setShowModal] = useState(false);
  const [availabilites, setAvailabilites] = useState({})

  useEffect(() => {
    const availableRooms = getAvailableBookings()
    setAvailabilites(availableRooms)
  }, [bookings])

  const getAvailableBookings = () => {
    let rooms = 0
    let campSites = 0
    for (let booking of bookings) {
      if (booking.type === 'room') {
        rooms += 1
      } else {
        campSites += 1
      }
    }
    const availableRooms = 6 - rooms
    const availableCampSites = 2 - campSites
    return {
      rooms: availableRooms,
      campSites: availableCampSites
    }
  }

  const handleShowModal = () => {
    setShowModal(true);
  }
  
  const dateRange = `${format(thursday, 'E LLL do')} - ${format(end, 'E LLL do')}`;

  return (
    <div className={styles.root}>
      <RoomModal 
        showModal={showModal}
        setShowModal={setShowModal}
        weekInfo={{start, thursday, end}}
        bookings={bookings}
      />
      <h3>{dateRange}</h3>
      <div>{`There are currently ${availabilites.rooms} rooms available and ${availabilites.campSites} campsite available`}</div>
      <div className={styles.buttonContainer}>
        <button
          className={styles.button}
          onClick={() => handleShowModal()}
        >Book a room this week
        </button>
      </div>
    </div>
  )
}