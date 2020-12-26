import Layout from '../components/layout/layout'
import Hero from '../components/hero/hero'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Home() {
  return (
    <Layout title="Kuinka voin palvella?">
      <Hero title="Kuinka voin palvella?" breadcrumbs={false} />

      <Container>
        <Row>
          <Col>
            <p className="lead pt-3">Olen 26-vuotias Oululainen</p>
          </Col>
        </Row>
      </Container>

    </Layout>
  )
}
