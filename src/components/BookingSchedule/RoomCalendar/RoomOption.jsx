import React from 'react'
import './RoomOption.scss'
import { useBooking } from '../../../contexts/BookingContext'

export default function RoomOption({
  type,
  name,
  weekInfo
}) {
  
  const username = 'Jared Goldman'
  const { bookRoom } = useBooking();
  
  const handleBookRoom = () => {
    bookRoom({...weekInfo, username})
  }

  return (
    <div 
      className="room-option"
      onClick={() => handleBookRoom()}
    >
      {type} {name}
    </div>
  )
}
