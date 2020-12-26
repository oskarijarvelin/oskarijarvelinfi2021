import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout/layout'

import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'

export default function Webkehitys() {
  return (
    <Layout title="Web-kehitys">
      <Container>
        <Row>
          <Col>
            <Nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li class="breadcrumb-item"><Link href="/"><a>Etusivu</a></Link></li>
                <li class="breadcrumb-item active">Osaaminen</li>
                <li class="breadcrumb-item"></li>
              </ol>
            </Nav>

            <h1>Web-kehitys</h1>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}
