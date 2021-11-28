import React from 'react'
import * as styles from './InvTableRow.module.scss'

export default function InvTableRow({ item, quantity, price, description }) {
  return (
    <tr>
      <td className={styles.item}>
        <strong>{item}</strong>
      </td>
      <td className={styles.quantity}>{quantity}</td>
      <td className={styles.price}>${price}</td>
      <td className={styles.description}>{description}</td>
    </tr>
  )
}
