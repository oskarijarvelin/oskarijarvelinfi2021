import Link from 'next/link'
import Layout from '../components/layout/layout'
import Hero from '../components/hero/hero'
import { Container, Row, Col, ProgressBar } from 'react-bootstrap'

export default function Opiskelu() {
  var op = 0
  var progress = Math.round(op / 210 * 100)
  var color = (op === 210) ? 'success' : 'primary'

  return (
    <Layout title="Opiskelu">
      <Hero title="Opiskelu" image="/ulkopotretit-4200.jpg" imageHeight={4016} imageWidth={6016}>
        <p className="lead py-3">Opiskelen <b><abbr title="Oulun Ammattikorkeakoulu">OAMK</abbr>:ssa</b> <Link href="https://www.oamk.fi/fi/koulutus/ammattikorkeakoulututkinnot/tradenomi-amk-tietojenkasittely"><a className="fw-bolder" target="_blank" rel="nofollow">tietojenkäsittelyn Tradenomiksi</a></Link> monimuoto-toteutuksena osallistumalla verkko-opetukseen kolmena arki-iltana viikossa. Tutkinnon laajuus on 210 op eli 3,5 vuotta, joista yksi vuosi opiskellaan englanniksi. Koulutus suuntautuu digitaalisten tuotteiden ja palveluiden kehittämiseen. Taustaltani olen vuoden 2013 <b>ylioppilas</b> Limingan lukiosta.</p>
      </Hero>

      <div className="bg-light my-5">
        <Container className="py-lg-5">
          <Row className="pt-5">
            <Col xs={12} lg={{ span: 6, offset: 3 }}>
              <h2 className="mb-3 text-lg-center">Portfolio</h2>
            </Col>

            <Col xs={12} lg={{ span: 6, offset: 3 }} className="mb-5">
              <p className="lead text-lg-center">Tähän osioon tulen listaamaan ja linkittämään kaikki koulutyöni, projektit, ryhmätyöt sekä opinnäytetyön niiden valmistuttua.</p>
            </Col>
          </Row>
        </Container>
      </div>

      <Container>
          <Row className="pb-5 pt-lg-5">
            <Col xs={12}>
              <h2 className="mb-3">Edistyminen</h2>
            </Col>

            <Col xs={12} lg={6}>
              <p className="lead">Opintojen edistymistavoite on 60 opintopistettä / vuosi. Opiskelu alkaa tammikuussa 2021 ja valmistumistavoite on kesällä 2024.</p>
            </Col>
          </Row>
          <Row className="g-5">
            <Col>
              <ProgressBar now={op} min={0} max={210} label={`${op} op`} variant={color} />
              <p className="pt-1 text-end">{op} / 210 op ({progress}%)</p>
            </Col>
          </Row>
        </Container>
    </Layout>
  )
}
