import React, { useState, useEffect } from 'react'
import './RoomOption.scss'
import { useBooking } from '../../../contexts/BookingContext'

export default function RoomOption({
  type,
  name,
  weekInfo,
  id,
}) {
  const [booked, setBooked] = useState(false)

  useEffect(() => {
    if (isBooked()) {
      setBooked(true);
    }
  }, [])
  
  const username = 'Jared Goldman'
  const { bookRoom, bookings } = useBooking();
  const { start } = weekInfo;
  
  const handleBookRoom = () => {
    bookRoom({...weekInfo, username, roomId: id})
    setBooked(true)
  }

  const isBooked = () => {
    for (let booking of bookings) {
      // const bookingCopy = {...booking}
      // console.log(bookingCopy);
      // console.log('booking id: ', booking.roomId);
      // console.log('room id: ', id)
      // console.log('id comparison: ', (booking.roomId === id));
      // console.log('start date: ', new Date(start));
      // console.log('booking date: ', new Date(booking.start))
      // console.log('date comparison: ',  Number(new Date(start)) == Number(new Date(booking.start)));

    // return ((booking.roomId === id) && (Number(new Date(start)) === Number(new Date(booking.start))))

      const correctId = (booking.roomId === id);
      const correctDate = (Number(new Date(start)) == Number(new Date(booking.start)));
      if (correctId && correctDate) {
        return true
      }
    }
  }

 

  return (
    <div 
      className="room-option"
      onClick={() => handleBookRoom()}
    >
      {booked && <div>Booked</div>}
      {type} {name}
    </div>
  )
}
