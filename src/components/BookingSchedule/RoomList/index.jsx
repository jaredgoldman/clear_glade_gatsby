import React from "react"
import Room from "./Room"
import roomImage from "../../../images/room.png"
import { useBooking } from "../../../contexts/BookingContext"
import * as styles from "./index.module.scss"

export default function RoomList() {

  const { rooms } = useBooking();

  const roomSelection = rooms?.map(room => {
    const { roomName, type, id, description } = room;
    return <Room 
      type={type}
      roomName={roomName}
      roomImage={roomImage}
      description={description}
      key={id}
    />
  })

  return (
    <div className={styles.root}>
      <h2 className={styles.heading}>Our Rooms</h2>
      <div className={styles.rooms}>
        {roomSelection}
      </div>
    </div>
  )
}