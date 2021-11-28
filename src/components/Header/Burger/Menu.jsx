import React, { useEffect, useRef } from 'react'
import * as styles from './Menu.module.scss'
import { Link } from 'gatsby'
import { useAuth } from '../../../contexts/AuthContext'

export default function Menu({ setShowMenu }) {
  const { logout, loggedIn } = useAuth()
  const menuRef = useRef()

  const handleLogout = async () => {
    logout()
  }

  const handleClick = (e) => {
    if (menuRef.current.contains(e.target)) {
      return
    }
    setShowMenu(false)
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClick)
    return () => {
      document.removeEventListener('mousedown', handleClick)
    }
  }, [])

  return (
    <div ref={menuRef} className={styles.root}>
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
        <button className={styles.close} onClick={() => setShowMenu(false)}>
          Close menu
        </button>
      </div>
    </div>
  )
}
