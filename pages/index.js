import Head from 'next/head'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Home() {
  return (
    <main>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <Row>
          <Col>
            <h1 className="title">
              Welcome to <a href="https://nextjs.org">Next.js!</a>
            </h1>

            <p className="description">
              Get started by editing <code>pages/index.js</code>
            </p>

            <Button>Bootstrap buttoni</Button>
          </Col>
        </Row>
      </Container>
    </main>
  )
}
