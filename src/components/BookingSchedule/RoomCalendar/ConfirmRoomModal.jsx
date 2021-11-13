import React from 'react'
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useBooking } from '../../../contexts/BookingContext';

export default function ConfirmRoomModal({
  setShowConfirm,
  showConfirm,
  selectedRoomData,
  handleCloseModal
}) {

  const { bookRoom, setProcessingBooking } = useBooking();

  const handleCancelConfirm = () => {
    setShowConfirm(false)
  }

  const handleBookRoom = () => {
    bookRoom(selectedRoomData)
    setProcessingBooking((prevValue) => !prevValue)
    handleCloseModal()
    setShowConfirm(false)
    // TODO: add snackbar confirmation notifcation
  }

  return (
    <Modal show={showConfirm}>
      <Button
        onClick={() => handleBookRoom()}    
        variant="primary"  
      >Confirm Booking</Button>
      <Button
        onClick={() => handleCancelConfirm()}
        varint="secondary"
      >Cancel
      </Button>
    </Modal>
  )
}
