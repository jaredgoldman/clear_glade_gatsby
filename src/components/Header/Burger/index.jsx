import React, { useState } from 'react'
import * as styles from './index.module.scss'
import Menu from './Menu'

export default function Burger() {
  const [showMenu, setShowMenu] = useState(false)

  if (showMenu) {
    return <Menu setShowMenu={setShowMenu} />
  } else {
    return (
      <>
        <div className={styles.root} onClick={() => setShowMenu((prevValue) => !prevValue)}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </>
    )
  }
}
