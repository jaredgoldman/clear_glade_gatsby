import React from "react";
import { useState } from "react"

import "./Login.scss"

import { useAuth } from "../../contexts/AuthContext";

export default function Login() {
  const { login } = useAuth()

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSetEmail = (e) => {
    setEmail(e.target.value)
  }

  const handleSetPassword = (e) => {
    setPassword(e.target.value)
  }

  const handleLogin = async () => {
    await login(email, password)
  }

  return (
    <div className="login">
      <div className="login_box">
        <h2>Login</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault()
            handleLogin();
          }}
        >
          <label>Email</label>
          <input
            onChange={(e) => handleSetEmail(e)}
          ></input>
          <label>Password</label>
          <input
            onChange={(e) => handleSetPassword(e)}
          ></input>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  )
}