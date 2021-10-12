import React from 'react'
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useBooking } from '../../../contexts/BookingContext';

export default function ConfirmRoomModal({
  setShowConfirm,
  showConfirm,
  selectedRoomData,
}) {

  const { bookRoom, setProcessingBooking } = useBooking();

  const handleCancelConfirm = () => {
    setShowConfirm(false)
  }

  const handleBookRoom = () => {
    bookRoom(selectedRoomData)
    setProcessingBooking((prevValue) => !prevValue)
  }

  return (
    <Modal show={showConfirm}>
      <div>{}</div>
      <Button
        onClick={() => handleBookRoom()}      
      >Confirm Booking</Button>
      <Button
        onClick={() => handleCancelConfirm()}
      >Cancel
      </Button>
    </Modal>
  )
}
