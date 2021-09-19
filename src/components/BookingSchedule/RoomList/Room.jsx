import React from "react"
import * as RoomStyles from "./Room.module.scss"

export default function Room({
  roomName,
  roomImage
}) {
  
  return (
    <div className={RoomStyles.room}>
      <h3>{roomName}</h3>
      <div className={RoomStyles.imageDetails}>
        <img src={roomImage} className={RoomStyles.image}/>
        <ul>
          <li>Attribute 1</li>
          <li>Attribute 2</li>
          <li>Attribute 3</li>
          <li>Attribute 4</li>
        </ul>
      </div>
    </div>
  )
}