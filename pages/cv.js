import Head from 'next/head'
import Layout from '../components/layout/layout'

import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Cv() {
  return (
    <Layout title="CV">
      <Container>
        <Row>
          <Col>
            <h1>Curriculum Vitae</h1>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}
