import Head from 'next/head'
import Layout from '../components/layout/layout'

import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Koulu() {
  return (
    <Layout title="Koulu">
      <Container>
        <Row>
          <Col>
            <h1>Koulu</h1>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}
