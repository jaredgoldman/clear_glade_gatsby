import React, { useContext, useState, useEffect } from 'react'
import axios from 'axios'
import ls from 'local-storage'
import { navigate } from 'gatsby-link'

const serverURL = process.env.GATSBY_SERVER_URL

const AuthContext = React.createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [loggedIn, setLoggedIn] = useState(false)
  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    const user = ls.get('user')
    if (user) {
      setCurrentUser(user)
      setLoggedIn(true)
    }
  }, [])

  const login = async (email, password) => {
    try {
      const user = await axios.post(`${serverURL}/auth/local/`, {
        identifier: email,
        password,
      })
      ls('user', user.data)
      navigate('/about')
    } catch (e) {
      console.log('error')
      console.log(e)
    }
  }

  const logout = () => {
    ls.remove('user')
    setLoggedIn(false)
  }

  const { jwt } = ls.get('user') || {}

  const authToken = {
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
  }

  const value = {
    authToken,
    login,
    logout,
    loggedIn,
    currentUser,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
