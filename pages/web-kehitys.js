import Link from 'next/link'
import Layout from '../components/layout/layout'
import Hero from '../components/hero/hero'

import { Lightning, Lock, ClipboardCheck, AppIndicator, ClockHistory, UiChecks, GraphUp } from 'react-bootstrap-icons';
import { Container, Row, Col, Card } from 'react-bootstrap'

export default function Webkehitys() {
  return (
    <Layout title="Web-kehitys">
      <Hero title="Web-kehitys" parent="Osaaminen" image="/hero-web-kehitys.jpg" imageHeight={435} imageWidth={696}>
        <p className="lead py-3">Työskentelen <Link href="https://digimoguli.fi"><a className="fw-bolder" target="_blank" rel="nofollow">Digimogulin</a></Link> Web Developerina ja vastuualueisiini kuuluvat web-kehityksen lisäksi integraatioihin, versionhallintaan ja tietoturvaan liittyvät tehtävät. Erikoisosaamistani ovat sivustojen nopeus, turvallisuus, ja saavutettavuus.</p>
      </Hero>
      <div className="bg-light my-5">
        <Container className="py-lg-5">
          <Row className="pt-5">
            <Col lg={12}>
              <h2 className="mb-5 text-center">Erikoisosaaminen</h2>
            </Col>
          </Row>
          <Row className="row-cols-1 row-cols-sm-2 row-cols-xl-4 g-5 pb-5">
            <Col>
              <Card className="bg-light border-0">
                <Card.Title className="d-flex align-items-center pb-2">
                  <Lightning className="me-2" />
                  Nopeus
                </Card.Title>
                <Card.Text>
                  Verkkosivun nopeuteen voi vaikuttaa oikeilla valinnoilla palvelinohjelmiston, käytettävien web-teknologioiden, resurssien käytön ja selaimen välimuistin hyödyntämisen suhteen.
                </Card.Text>
              </Card>
            </Col>

            <Col>
              <Card className="bg-light border-0">
                <Card.Title className="d-flex align-items-center pb-2">
                  <Lock className="me-2" />
                  Tietoturva
                </Card.Title>
                <Card.Text>
                  Sivuston turvallisuus muodostuu hyökkäysvektoreiden tunnistamisesta ja torjumisesta. Tärkeää on myös ylläpitää ajantasaista tilannekuvaa uusista haavoittuvuuksista.
                </Card.Text>
              </Card>
            </Col>

            <Col>
              <Card className="bg-light border-0">
                <Card.Title className="d-flex align-items-center pb-2">
                  <ClipboardCheck className="me-2" />
                  Saavutettavuus
                </Card.Title>
                <Card.Text>
                  Saavutettavuus on tärkeää, jotta mahdollisimman moni pystyisi käyttämään sivustoa. Saavutettavuutta arvioidaan kansainvälisen WCAG-stantardin kolmiportaisella asteikolla.
                </Card.Text>
              </Card>
            </Col>

            <Col>
              <Card className="bg-light border-0">
                <Card.Title className="d-flex align-items-center pb-2">
                <AppIndicator className="me-2" />
                  Webapplikaatiot
                </Card.Title>
                <Card.Text>
                  Progressiivinen webapplikaatio (PWA) mahdollistaa sivuston asentamisen mobiililaitteelle, laitteen omien sovellusrajapintojen hyödyntämisen ja sivuston käyttämisen ilman verkkoyhteyttä.
                </Card.Text>
              </Card>
            </Col>

          </Row>
        </Container>
      </div>

      <Container>
          <Row className="pt-lg-5">
            <Col lg={7}>
              <h2 className="m-0 pb-3">Web-teknologiat</h2>
              <p className="lead pb-5">Webteknologiat kehittyvät nopeampaa kuin ikinä ennen ja rima verkkopalvelun laadun suhteen nousee yhä ylemmäs. Ajantasaisen osaamisen ylläpitäminen vaatii yhä aktiivisempaa ja määrätietoisempaa otetta webkehityksestä. Samalla kun palveluiden hinnat laskevat, nousee asiantuntijan osaamisen arvo.</p>
            </Col>
          </Row>
        </Container>
    </Layout>
  )
}
