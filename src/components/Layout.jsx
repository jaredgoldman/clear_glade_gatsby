import React from "react"
import { AuthProvider } from "../contexts/AuthContext"
import Footer from "./Footer"
import Header from "./Header"

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
