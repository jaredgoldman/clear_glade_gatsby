import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import RoomOption from "./RoomOption";
import rooms from '../../../mocks/roomData'

import * as RoomModalStyles from "./RoomModal.module.scss"

export default function RoomModal({
  showModal,
  setShowModal,
}) {
 
  const roomOptions = rooms?.map((room, i)=> {
    return (
      <RoomOption roomNumber={room.name} key={i}/>
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
