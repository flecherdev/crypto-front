import React from 'react'
import { Navbar } from '@components/Navbar/Navbar'
import styles from './layout.module.css'

export const Layout: React.FC = ({ children }) => {
  return (
    <div className={styles.container}>
      <Navbar />
      {children}
      <footer> this is the footer </footer>
    </div>
  )
}
