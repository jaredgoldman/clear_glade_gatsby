import React, { useState, useEffect } from "react";
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
  const [selectedRoomData, setSelectedRoom] = useState()
  const [processingBooking, setProcessingBooking] = useState(false)
  const [currentBookings, setCurrentBookings] = useState()
  const { rooms, getBookings } = useBooking()

  // refresh bookings when processing a new booking
  useEffect(() => {
    getBookings().then(bookings => {
      if (bookings) {
        setCurrentBookings(bookings)
      }
    })
    .catch(e => {
      console.log(e.response);
    })
  }, [processingBooking])

  const isBooked = (id, start) => {
    if (currentBookings) {
      for (let booking of currentBookings) {
        // TODO: Find out why my first approach mutated the data
        // const bookingCopy = {...booking}
        // console.log(bookingCopy);
        // console.log('booking id: ', booking.roomId);
        // console.log('room id: ', id)
        // console.log('id comparison: ', (booking.roomId === id));
        // console.log('start date: ', new Date(start));
        // console.log('booking date: ', new Date(booking.start))
        // console.log('date comparison: ',  Number(new Date(start)) == Number(new Date(booking.start)));
  
      // return ((booking.roomId === id) && (Number(new Date(start)) === Number(new Date(booking.start))))
  
        const correctId = booking.roomId === id;
        const correctDate = Number(new Date(start)) == Number(new Date(booking.start));
        if (correctId && correctDate) {
          return true
        }
      }
    }
  }

  const roomOptions = rooms?.map((room, i) => {
    const { type, name, id } = room;

    const booked = isBooked(id, weekInfo.start)

    return (
      <RoomOption 
        type={type}
        name={name} 
        id={id}
        weekInfo={weekInfo}
        setShowConfirm={setShowConfirm}
        setSelectedRoom={setSelectedRoom}
        booked={booked}
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
        selectedRoomData={selectedRoomData}
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
