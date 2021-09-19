import React from "react"
import "./InvTableRow.scss"

export default function InvTableRow({
  item,
  quantity,
  price,
  description,
  image
}) {

  return (
    <tr>
      <td>{item}</td>
      <td>{quantity}</td>
      <td>${price}</td>
      <td>{description}</td>
      <td className="img-row">
        <img src={image} className="product-image"/>
      </td>
    </tr>
  )
}