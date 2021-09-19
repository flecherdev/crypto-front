import React from 'react'
import { Navbar } from '../Navbar/Navbar'

export const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <footer> this is the footer </footer>
    </div>
  )
}
