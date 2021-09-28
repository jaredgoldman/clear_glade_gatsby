import React, { useContext, useState, useEffect } from 'react'
import axios from 'axios';
import ls from 'local-storage'

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {

  const [currentUser, setCurrentUser] = useState();

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

  const user = ls.get('jwt')
  console.log(user);

  const logout = () => {
    ls.remove('jwt')
  }

  const value = {
    currentUser,
    login,
    logout,
    user
  }
  
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}
