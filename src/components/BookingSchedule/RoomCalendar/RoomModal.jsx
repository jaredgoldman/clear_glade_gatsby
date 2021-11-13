import React, { useState, useEffect, useRef } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import RoomOption from "./RoomOption";
// import rooms from '../../../mocks/roomData'
import { useBooking } from "../../../contexts/BookingContext";

import * as styles from "./RoomModal.module.scss"

export default function RoomModal({
  showModal,
  setShowModal,
  weekInfo,
  bookings
}) {
  
  const [showConfirm, setShowConfirm] = useState(false)
  const [selectedRoomData, setSelectedRoom] = useState()
  const { rooms, processingBooking, setProcessingBooking, bookRoom } = useBooking()

  const isBooked = (id) => {
    if (bookings) {
      for (let booking of bookings) {
        const correctId = booking.roomId === id;
        if (correctId) {
          return true
        }
      }
    }
  }

  const roomOptions = rooms?.map((room, i) => {
    const { roomName, id, type } = room;

    const booked = isBooked(id)

    return (
      <RoomOption 
        roomName={roomName} 
        id={id}
        weekInfo={weekInfo}
        setShowConfirm={setShowConfirm}
        setSelectedRoom={setSelectedRoom}
        booked={booked}
        setProcessingBooking={setProcessingBooking}
        processingBooking={processingBooking}
        type={type}
        key={id}
      />
    )
  })

  const handleCloseModal = () => {
    setShowModal(false)
    setShowConfirm(false)
  }

  const handleCancelConfirm = () => {
    setShowConfirm(false)
  }

  const handleBookRoom = () => {
    bookRoom(selectedRoomData)
    setProcessingBooking((prevValue) => !prevValue)
    handleCloseModal() // Remove this?
    setTimeout(() => {
      setShowConfirm(false)
    }, 1000)
    // TODO: add snackbar confirmation notifcation
  }

  return (
    <div className={styles.root}>
      <Modal show={showModal} size="lg">
        <Modal.Header>
          Book A Room:
        </Modal.Header>
        <Modal.Body>
          <div className={styles.roomOptions}>
            {rooms && roomOptions}
          </div>
        </Modal.Body>
        <Modal.Footer>
          {showConfirm && 
            <>
              <Button
                onClick={() => handleCancelConfirm()}
                variant="secondary"
              >
                Cancel
              </Button>
              <Button
                onClick={() => handleBookRoom()}    
                variant="primary"  
              >
                Confirm Booking
              </Button>
            </>
          }
          <Button
            onClick={() => handleCloseModal()}
            disabled={showConfirm}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
