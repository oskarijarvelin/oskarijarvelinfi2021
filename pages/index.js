import Link from 'next/link'
import Layout from '../components/layout/layout'
import Hero from '../components/hero/hero'

import Moment from 'react-moment'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

export default function Home() {
  const onlyYears = (d) => {
    return d.substring(0, d.length - 6)
  }

  return (
    <Layout title="Kuinka voin palvella?">
      <Hero title="Kuinka voin palvella?" breadcrumbs={false}>
        <p className="lead py-3">Olen <Moment toNow ago filter={onlyYears}>1994-09-29</Moment>-vuotias <Link href="https://digimoguli.fi/"><a className="fw-bolder" target="_blank" rel="nofollow">Digimogulin</a></Link> Web Developer ja tapahtumatekniikan moniosaaja Oulusta. Laaja-alaisesta oppimisen nälästä on syntynyt monipuolinen osaaminen, jota olen viime vuosina laajentanut aiempaakin määrätietoisemmin ja tavoitteellisemmin.</p>

        <Button href="tel:+35845 898 3883" size="lg" className="d-inline-flex align-items-center mb-2 me-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-telephone-fill me-3" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
          </svg>
          045 898 3883
        </Button>

        <Button href="https://www.linkedin.com/in/oskarijarvelin/" target="_blank" rel="nofollow" size="lg" className="d-inline-flex align-items-center mb-2 me-2" variant="secondary">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-envelope-fill me-3" viewBox="0 0 16 16">
            <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"/>
          </svg>
          contact@oskarijarvelin.fi
        </Button>
      </Hero>
    </Layout>
  )
}
