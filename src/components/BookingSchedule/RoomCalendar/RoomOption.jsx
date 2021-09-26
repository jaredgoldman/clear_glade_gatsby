import React, { useState, useEffect } from 'react'
import './RoomOption.scss'
import { useBooking } from '../../../contexts/BookingContext'

export default function RoomOption({
  type,
  name,
  weekInfo,
  id,
  setShowConfirm,
  setSelectedRoom,
  processingBooking,
  setProcessingBooking
}) {

  const username = 'Jared Goldman'
  const { getBookings } = useBooking();
  const [booked, setBooked] = useState(false)
  const [currentBookings, setCurrentBookings] = useState()
  const { start } = weekInfo;

  useEffect(() => {
    if (currentBookings) {
      if (isBooked()) {
        setBooked(true);
      }
    }
  }, [currentBookings])

  useEffect(() => {
    getBookings().then(bookings => {
      if (bookings) {
        setCurrentBookings(bookings)
      }
    })
    .catch(e => {
      console.log(e.response);
    })
    setProcessingBooking(false)
  }, [processingBooking])

  
  
  const handleSetSelectedRoom = () => {
    setSelectedRoom({...weekInfo, username, roomId: id});
    setShowConfirm(true)
  }

  const isBooked = () => {
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

  return (
    <div 
      className="room-option"
      onClick={() => handleSetSelectedRoom()}
    >
      {booked && <div>{`Booked by ${username}`}</div>}
      {type} {name}
    </div>
  )
}
