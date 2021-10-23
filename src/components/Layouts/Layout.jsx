import React from "react"
import { AuthProvider } from "../../contexts/AuthContext"
import Footer from "../Footer/Footer"
import Header from "../Header/Header"
import * as styles from './Layout.module.scss'

export default function Layout({ children }) {
  return (
    <AuthProvider>
      <main>
        <Header/>
          <div className={styles.root}>
            {children}
          </div>
        <Footer/>
      </main>
    </AuthProvider>
  )
}
