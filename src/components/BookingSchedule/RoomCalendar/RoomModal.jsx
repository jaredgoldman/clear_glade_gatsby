import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import RoomOption from "./RoomOption";
// import rooms from '../../../mocks/roomData'
import { useBooking } from "../../../contexts/BookingContext";

import * as RoomModalStyles from "./RoomModal.module.scss"

export default function RoomModal({
  showModal,
  setShowModal,
  weekInfo
}) {
  
  const { rooms } = useBooking()
 
  const roomOptions = rooms?.map((room, i)=> {
    const { type, name, id } = room;
    return (
      <RoomOption 
        type={type}
        name={name} 
        weekInfo={weekInfo}
        key={id}
      />
    )
  })

  const handleCloseModal = () => {
    setShowModal(false);
  }

  return (
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
  )
}
