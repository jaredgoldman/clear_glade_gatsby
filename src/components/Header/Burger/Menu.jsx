import React from 'react'
import * as styles from './Menu.module.scss'
import { Link } from 'gatsby'
import { useAuth } from '../../../contexts/AuthContext'

export default function Menu({ setShowMenu }) {
  const { logout, loggedIn } = useAuth()

  const handleLogout = async () => {
    logout()
  }

  return (
    <div className={styles.root}>
      <div className={styles.buttons}>
        {!loggedIn && <Link to='/login'>Login</Link>}
        {loggedIn && (
          <>
            <Link to='/about'>About</Link>
            <Link to='/announcements'>Annoucements</Link>
            <Link to='/events'>Schedule</Link>
            <Link to='/inventory'>Inventory</Link>
            <Link to='/schedule'>Book A Room</Link>
            <Link to='/media'>Media</Link>
            <Link to='/' onClick={() => handleLogout()}>
              Logout
            </Link>
          </>
        )}
        <button onClick={() => setShowMenu(false)}>Close</button>
      </div>
    </div>
  )
}
