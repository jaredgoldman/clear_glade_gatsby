import React from "react"
import { AuthProvider } from "../../contexts/AuthContext"
import Footer from "../Footer/Footer"
import Header from "../Header/Header"

export default function Layout({ children }) {
  return (
    <AuthProvider>
      <main>
        <Header/>
          {children}
        <Footer/>
      </main>
    </AuthProvider>
  )
}
