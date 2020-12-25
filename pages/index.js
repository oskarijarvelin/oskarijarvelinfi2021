import Head from 'next/head'
import Layout from '../components/layout/layout'

import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Home() {
  return (
    <Layout title="Kuinka voin palvella?">
      <Container>
        <Row>
          <Col>
            <h1>Kuinka voin palvella?</h1>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}
