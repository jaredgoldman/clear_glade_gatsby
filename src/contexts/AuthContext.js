import React, { useContext, useState, useEffect } from 'react'
import axios from 'axios';
import ls from 'local-storage'
import { navigate } from "gatsby-link";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
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
      const user = await axios.post('/auth/local/', {
        identifier: email,
        password
      })
      ls('user', user.data)
      navigate('/user/')
    } catch(e) {
      console.log('error');
      console.log(e.response);
    }
  }
 
  const logout = () => {
    ls.remove('user')
  }

  const value = {
    login,
    logout,
    loggedIn,
    currentUser
  }
  
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}
