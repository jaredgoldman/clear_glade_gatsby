import React from "react"
import InvTable from "./InvTable"

export default function Inventory() {

  return (
    <>
      <h1>Current Inventory</h1>
      <InvTable/>
      <div className="inventory-notes">
        <h2>Notes about our inventory...</h2>
        <ul>
          <li>Note 1</li>
          <li>Note 2</li>
          <li>Note 3</li>
          <li>Note 4</li>
        </ul>
      </div>
    </>
  )
}