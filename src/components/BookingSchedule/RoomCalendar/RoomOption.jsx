import React from 'react'
import './RoomOption.scss'

export default function RoomOption({
  roomNumber
}) {

  const handleBookRoom = () => {
    
  }

  return (
    <div 
      className="room-option"
      onClick={() => handleBookRoom()}
    >
      Room {roomNumber}
    </div>
  )
}
