import React, { useContext, useState, useEffect } from 'react'
import axios from 'axios';
import ls from 'local-storage'

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {

  const [currentUser, setCurrentUser] = useState();
  const [loggedIn, setLoggedIn] = useState(false)

  const login = async (email, password) => {
    try{
      const user = await axios.post('http://localhost:1337/auth/local', {
        identifier: email,
        password
      })
      ls('jwt', user.data.jwt)
      setCurrentUser(user.data)
    } catch(e) {
      console.log(e);
    }
  }

  const checkIfLoggedIn = () => {
    const user = ls.get('jwt')
    if (user) return true
    else return false
  }

  useEffect(() => {
    if (checkIfLoggedIn()) {
      setLoggedIn(true)
    }
  }, [currentUser])

  const logout = () => {
    ls.remove('jwt')
  }

  const value = {
    currentUser,
    login,
    logout,
    loggedIn
  }
  
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}
