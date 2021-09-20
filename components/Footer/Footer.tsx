import React from 'react'
import Link from 'next/link'
import { Container, Grid, Header, List, Segment } from 'semantic-ui-react'
import footer from './footer.module.css'

export const Footer = () => {
  return (
    <Segment vertical as="footer" className={footer.segment}>
      <Container text>
        <Grid stackable>
          <Grid.Row>
            <Grid.Column width={4}>
              <Header as="h4" content="About" />
              <List>
                <List.Item>
                  <Link href="/about">
                    <a>About us</a>
                  </Link>
                </List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={5}>
              <Header as="h4" content="About" />
              <List>
                <List.Item>
                  <Link href="/home">
                    <a>All currencies</a>
                  </Link>
                </List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={7}>
              <Header as="h4">Done for</Header>
              <p>
                <a href="https://steplix.com/">Startup Argentina</a> for{' '}
                <a href="https://twitter.com/flecherdev">@flecherdev</a>
              </p>
              <List horizontal style={{ display: 'flex' }}>
                <List.Item
                  icon="twitter"
                  style={{ display: 'flex' }}
                  content={<a href="https://twitter.com/flecherdev">Twitter</a>}
                />
                <List.Item
                  icon="github"
                  style={{ display: 'flex' }}
                  content={<a href="https://github.com/flecherdev/">GitHub</a>}
                />
              </List>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <div className={footer.material}>
          <p className={footer.material__content}>
            Icons made by{' '}
            <a
              target="_blank"
              href="https://www.flaticon.com/"
              title="Flaticon"
            >
              Flaticon
            </a>
            {' from '}
            <a
              target="_blank"
              href="https://www.flaticon.com/"
              title="Flaticon"
            >
              www.flaticon.com
            </a>
          </p>
        </div>
      </Container>
    </Segment>
  )
}
