import Head from 'next/head'
import Layout from '../components/layout/layout'

import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Kanelinkasvattaja() {
  return (
    <Layout title="Kanelin kasvattaja">
      <Container>
        <Row>
          <Col>
            <h1>Kanelin kasvattaja</h1>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}
