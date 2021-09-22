import React from 'react'
import Link from 'next/link'
import { Container, Menu } from 'semantic-ui-react'
import navbar from './navbar.module.css'
import { useRouter } from 'next/router'

export const Navbar = () => {
  const { pathname } = useRouter()
  return (
    <Menu className={navbar.huge} size="huge" borderless pointing as="header">
      <Container text>
        <Link href="/" passHref>
          <Menu.Item active={pathname === '/'}>
            <img src="/img/bitcoin-nav.png" />
            Currencies
          </Menu.Item>
        </Link>
        <Link href="/rates/addrate" passHref>
          <Menu.Item active={pathname === '/addrate'}>
            <img src="/img/new-currency.png" />
            New Rate
          </Menu.Item>
        </Link>
        <Link href="/statistic/rates" passHref>
          <Menu.Item active={pathname === '/rates'}>
            <img src="/img/investment.png" />
            Statistic
          </Menu.Item>
        </Link>
      </Container>
      <style jsx global>{`
        .ui.menu.huge {
          font-size: 1.9rem;
        }
      `}</style>
    </Menu>
  )
}
