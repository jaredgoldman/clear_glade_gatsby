import React from "react"
import roomData from "../../../mocks/roomData"
import Room from "./Room"
import roomImage from "../../../images/room.png"

export default function RoomList() {
 
  const rooms = roomData.map((room, i) => {
    const { roomName } = room;
    return <Room 
      roomName={roomName}
      roomImage={roomImage}
    />
  })

  return (
    <>
      <h2>Our Rooms</h2>
      <div>
        {rooms}
      </div>
    </>
  )
}