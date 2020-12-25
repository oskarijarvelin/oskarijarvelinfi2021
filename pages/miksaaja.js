import Head from 'next/head'
import Layout from '../components/layout/layout'

import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Miksaaja() {
  return (
    <Layout title="Miksaaja">
      <Container>
        <Row>
          <Col>
            <h1>Miksaaja</h1>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}
