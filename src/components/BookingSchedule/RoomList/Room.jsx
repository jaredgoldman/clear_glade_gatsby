import React from "react"
import * as RoomStyles from "./Room.module.scss"

export default function Room({
  type,
  name,
  roomImage
}) {

  const capitalizeFirstLetter = (type) => {
   return type.slice(0, 1).toUpperCase() + type.slice(1)
  }

  return (
    <div className={RoomStyles.room}>
      <h3>{capitalizeFirstLetter(type)} {name}</h3>
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