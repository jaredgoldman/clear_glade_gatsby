import React from 'react'
import InvTableRow from './InvTableRow'

import * as styles from './InvTable.module.scss'

export default function InvTable({ rows }) {
  const inventoryRows = rows.map((product, i) => {
    const { description, quantity, name, price, image } = product
    return (
      <InvTableRow
        name={name}
        quantity={quantity}
        price={price}
        description={description}
        imageUrl={image.url}
        key={i}
      />
    )
  })

  return (
    <table className={styles.table}>
      <thead className={styles.tableHeading}>
        <th>Item</th>
        <th>Quantity</th>
        <th>Price</th>
        <th></th>
        {/* <th>Image</th> */}
      </thead>
      <tbody>{inventoryRows}</tbody>
    </table>
  )
}
