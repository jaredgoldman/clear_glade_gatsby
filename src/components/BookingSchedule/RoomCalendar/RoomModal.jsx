import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import RoomOption from "./RoomOption";
// import rooms from '../../../mocks/roomData'
import { useBooking } from "../../../contexts/BookingContext";

import * as RoomModalStyles from "./RoomModal.module.scss"
import ConfirmRoomModal from "./ConfirmRoomModal";

export default function RoomModal({
  showModal,
  setShowModal,
  weekInfo
}) {
  
  const [showConfirm, setShowConfirm] = useState(false)
  const [selectedRoom, setSelectedRoom] = useState()
  const [booked, setBooked] = useState(false);
  const [processingBooking, setProcessingBooking] = useState(false)
  const { rooms } = useBooking();

  const roomOptions = rooms?.map(room => {
    const { type, name, id } = room;

    return (
      <RoomOption 
        type={type}
        name={name} 
        id={id}
        weekInfo={weekInfo}
        setShowConfirm={setShowConfirm}
        setSelectedRoom={setSelectedRoom}
        booked={booked}
        setBooked={setBooked}
        setProcessingBooking={setProcessingBooking}
        processingBooking={processingBooking}
        key={id}
      />
    )
  })

  const handleCloseModal = () => {
    setShowModal(false);
  }

  return (
    <>
      <ConfirmRoomModal 
        showConfirm={showConfirm}
        setShowConfirm={setShowConfirm}
        selectedRoom={selectedRoom}
        setBooked={setBooked}
        setProcessingBooking={setProcessingBooking}
      />
      <Modal show={showModal}>
        <Modal.Header>
          Book A Room:
        </Modal.Header>
        <Modal.Body>
          <div className={RoomModalStyles.roomOptions}>
            {rooms && roomOptions}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={() => handleCloseModal()}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
