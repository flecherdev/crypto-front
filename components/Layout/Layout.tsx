import React from 'react'
import { Navbar } from '@components/Navbar/Navbar'
import styles from './layout.module.css'
import { Container } from 'semantic-ui-react'
import { Footer } from '@components/Footer/Footer'

export const Layout: React.FC = ({ children }) => {
  return (
    <div className={styles.container}>
      <Navbar />
      <Container>{children}</Container>
      <Footer />
    </div>
  )
}
