import React from 'react'
import * as styles from './InvTableRow.module.scss'

export default function InvTableRow({ name, quantity, price, description, imageUrl }) {
  return (
    <tr>
      <td className={styles.item}>
        <strong>{name}</strong>
      </td>
      <td className={styles.quantity}>{quantity}</td>
      <td className={styles.price}>${price}</td>
      <td className={styles.description}>{description}</td>
    </tr>
  )
}
