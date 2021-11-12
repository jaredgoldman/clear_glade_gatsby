import React from "react"
import InvTableRow from "./InvTableRow"

import * as styles from "./InvTable.module.scss"

export default function InvTable({
  rows
}) {

  const inventoryRows = rows.map(product => {
    const { 
      item,
      quantity,
      price,
      description,
      image
    } = product.node
    
    return <InvTableRow 
      item={item}
      quantity={quantity}
      price={price}
      description={description}
      image={image}
      key={item}
    />
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
      <tbody>
        {inventoryRows}
      </tbody>
    </table>
  )
}