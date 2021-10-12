import React from "react"
import Room from "./Room"
import roomImage from "../../../images/room.png"
import { useBooking } from "../../../contexts/BookingContext"

export default function RoomList() {

  const { rooms } = useBooking();

  const roomSelection = rooms?.map(room => {
    const { name, type, id } = room;
    return <Room 
      type={type}
      name={name}
      roomImage={roomImage}
      key={id}
    />
  })

  return (
    <>
      <h2>Our Rooms</h2>
      <div>
        {roomSelection}
      </div>
    </>
  )
}