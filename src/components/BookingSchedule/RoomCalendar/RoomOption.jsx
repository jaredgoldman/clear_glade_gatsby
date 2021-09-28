import React from 'react'
import './RoomOption.scss'

export default function RoomOption({
  type,
  name,
  weekInfo,
  id,
  setShowConfirm,
  setSelectedRoom,
  booked
}) {

  const username = 'Jared Goldman'

  // pass room info to confirm modal
  const handleSetSelectedRoom = () => {
    setSelectedRoom({...weekInfo, username, roomId: id});
    setShowConfirm(true)
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
