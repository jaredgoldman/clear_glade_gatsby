// import React, { useContext, useState, useEffect } from 'react'
// import { auth } from '../firebase';
// import { signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth'

// const AuthContext = React.createContext();

// export function useAuth() {
//   return useContext(AuthContext);
// }

// export function AuthProvider({ children }) {

//   const [currentUser, setCurrentUser] = useState();

//   const login = (email, password) => {
//     signInWithEmailAndPassword(auth, email, password)
//     .catch((error) => {
//       console.log(error.message);
//     });
//   }

//   const logout = () => {
//     setCurrentUser(null);
//     return signOut(auth);
//   }

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       if (user) {
//         setCurrentUser(user);
//       } else {
//         setCurrentUser(null);
//       }
//     });
//     return unsubscribe;
//   }, [])

//   const value = {
//     currentUser,
//     login,
//     logout
//   }
  
//   return (
//     <AuthContext.Provider value={value}>
//       {children}
//     </AuthContext.Provider>
//   )
// }
