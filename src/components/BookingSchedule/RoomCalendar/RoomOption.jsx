import React from 'react'
import './RoomOption.scss'
import { useAuth } from '../../../contexts/AuthContext';

export default function RoomOption({
  weekInfo,
  id,
  setShowConfirm,
  setSelectedRoom,
  booked,
  roomName,
  type
}) {
  
  const { currentUser } = useAuth()

  // pass room info to confirm modal
  const handleSetSelectedRoom = () => {
    setSelectedRoom({
      ...weekInfo, 
      firstName: currentUser.user.firstName,
      lastName: currentUser.user.lastName,
      email: currentUser.user.email,
      roomId: id,
      roomName,
      type
    });
    setShowConfirm(true)
  }
  
  return (
    <div 
      className="room-option"
      onClick={() => handleSetSelectedRoom()}
    >
      {booked && <div>{`Booked by ${currentUser.user.firstName}`}</div>}
      {roomName}
    </div>
  )
}
