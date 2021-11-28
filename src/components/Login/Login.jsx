import React from 'react'
import { useState } from 'react'

import * as styles from './Login.module.scss'

import { useAuth } from '../../contexts/AuthContext'
import xImage from '../../images/x.png'

export default function Login() {
  const { login, authError, setAuthError } = useAuth()

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const handleSetEmail = (e) => {
    setEmail(e.target.value)
  }

  const handleSetPassword = (e) => {
    setPassword(e.target.value)
  }

  const handleLogin = async () => {
    await login(email, password)
  }

  const handleCloseAuthError = () => {
    setAuthError('')
  }

  return (
    <div className={styles.root}>
      <div className={styles.container}>
        {authError && (
          <div className={styles.error}>
            <div>{authError}</div>
            <div onClick={() => handleCloseAuthError()} className={styles.imageContainer}>
              <img src={xImage} />
            </div>
          </div>
        )}
        <h2 className={styles.heading}>Login</h2>
        <form
          className={styles.form}
          onSubmit={(e) => {
            e.preventDefault()
            handleLogin()
          }}
        >
          <div className={styles.formItem}>
            <label>Email</label>
            <input onChange={(e) => handleSetEmail(e)}></input>
          </div>
          <div className={styles.formItem}>
            <label>Password</label>
            <input type='password' onChange={(e) => handleSetPassword(e)}></input>
          </div>
          <button className={styles.loginButton} type='submit'>
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}
