import Link from 'next/link'
import Image from 'next/image'
import Layout from '../components/layout/layout'
import Hero from '../components/hero/hero'

import Moment from 'react-moment'

import { TelephoneFill, EnvelopeFill, CodeSlash, BrightnessHigh, CameraVideo, MusicNoteBeamed, ArrowRight, CaretRightFill, ClockHistory, UiChecks, GraphUp } from 'react-bootstrap-icons';
import { Container, Row, Col, Button, Card } from 'react-bootstrap'

export default function Home() {
  const onlyYears = (d) => {
    return d.substring(0, d.length - 6)
  }

  return (
    <Layout title="Kuinka voin palvella?">
      <Hero title="Kuinka voin palvella?" breadcrumbs={false} image="/hero-index.jpg" imageHeight={465} imageWidth={696}>
        <p className="lead py-3">Olen <Moment toNow ago filter={onlyYears}>1994-09-29</Moment>-vuotias <Link href="https://digimoguli.fi/"><a className="fw-bolder" target="_blank" rel="nofollow">Digimogulin</a></Link> Web Developer ja tapahtumatekniikan moniosaaja Oulusta. Laaja-alaisesta oppimisen nälästä on syntynyt monipuolinen osaaminen, jota olen viime vuosina laajentanut aiempaakin määrätietoisemmin ja tavoitteellisemmin.</p>

        <Button href="tel:+35845 898 3883" className="d-inline-flex align-items-center mb-2 me-2">
          <TelephoneFill className="me-2" />
          045 898 3883
        </Button>

        <Button href="https://www.linkedin.com/in/oskarijarvelin/" target="_blank" rel="nofollow" className="d-inline-flex align-items-center mb-2 me-2" variant="secondary">
          <EnvelopeFill className="me-2" />
          contact@oskarijarvelin.fi
        </Button>
      </Hero>

      <div className="bg-light my-5">
        <Container className="py-lg-5">
          <Row className="pt-5">
            <Col lg={12}>
              <h2 className="mb-5 text-center">Osaaminen</h2>
            </Col>
          </Row>
          <Row className="row-cols-1 row-cols-sm-2 row-cols-xl-4 g-5 pb-5">
            <Col>
              <Card className="bg-light border-0">
                <Card.Title className="d-flex align-items-center pb-2">
                  <CodeSlash className="me-2" />
                  Web-kehitys
                </Card.Title>
                <Card.Text>
                  Toteutan työkseni pääasiassa WordPress- ja Jamstack-sivustoja. Erikoisosaamistani ovat sivustojen nopeus, saavutettavuus ja turvallisuus.
                </Card.Text>
                <Link href="/web-kehitys"><a className="card-link">Lue lisää<ArrowRight className="ms-1"/></a></Link>
              </Card>
            </Col>

            <Col>
              <Card className="bg-light border-0">
                <Card.Title className="d-flex align-items-center pb-2">
                  <BrightnessHigh className="me-2" />
                  Valaistus
                </Card.Title>
                <Card.Text>
                  Freelancerina valaisen festivaalilavoja, konsertteja ja rakennusten julkisivuja. Ennen koronapandemiaa työskentelin myös Oulun teatterissa.
                </Card.Text>
                <Link href="/valaistus"><a className="card-link">Lue lisää<ArrowRight className="ms-1"/></a></Link>
              </Card>
            </Col>

            <Col>
              <Card className="bg-light border-0">
                <Card.Title className="d-flex align-items-center pb-2">
                  <CameraVideo className="me-2" />
                  Livestriimit
                </Card.Title>
                <Card.Text>
                  Teen livestriimejä, webinaareja ja verkkotapahtumia myös kansainvälisesti sekä koulutan niiden tekemistä mm. opettajille koulujen etäjuhlia varten.
                </Card.Text>
                <Link href="/livestriimit"><a className="card-link">Lue lisää<ArrowRight className="ms-1"/></a></Link>
              </Card>
            </Col>

            <Col>
              <Card className="bg-light border-0">
                <Card.Title className="d-flex align-items-center pb-2">
                <MusicNoteBeamed className="me-2" />
                  Tapahtumat
                </Card.Title>
                <Card.Text>
                  Olen tehnyt tapahtumia jo yläasteelta lähtien pääasiassa teknisen toteutuksen osalta. Viisi viime vuotta olen toiminut ammattimaisesti freelancerina.
                </Card.Text>
                <Link href="/tapahtumat"><a className="card-link">Lue lisää<ArrowRight className="ms-1"/></a></Link>
              </Card>
            </Col>

          </Row>
        </Container>
      </div>

      <Container>
          <Row className="pt-lg-5">
            <Col lg={12}>
              <h2 className="m-0 pb-5">Hyödynnä laaja osaamiseni</h2>
            </Col>
          </Row>
          <Row className="g-5 pb-lg-5">

            <Col md={10} lg={6} className="pe-5">
              <h3 className="mb-3">Web-kehitys</h3>

              <p>Osaamistani web-kehityksen parissa tarjoaa yksinoikeudella Oululainen Digimoguli Oy. Digimoguli on modernin markkinoinnin ja myynnin palveleva asiantuntijayritys, jolla on pitkä kokemus erilaisista digitaalisen markkinoinnin ja viestinnän projekteista sekä ratkaisuista.</p>

              <Button href="https://digimoguli.fi" target="_blank" rel="nofollow" className="d-inline-flex align-items-center mt-2 mb-2 me-2">
                <CaretRightFill className="me-2" />
                Digimoguli Oy
              </Button>
            </Col>

            <Col md={10} lg={6} className="pe-5">
              <h3 className="mb-3">Valaistus, tapahtumat ja livestriimit</h3>

              <p>Freelancer-teknikkona voit ostaa osaamistani suoraan minulta tai esimerkiksi Oululaisen Livepaletti Oy:n kautta. Livepaletti on toiminut pitkään alalla, omistaa laadukasta kalustoa erilaisiin tarpeisiin ja on valittu Vuoden Palveluntarjoajaksi Pohjoisen Parhaat 2018 -gaalassa.</p>

              <Button href="https://livepaletti.fi" target="_blank" rel="nofollow" className="d-inline-flex align-items-center mt-2 mb-2 me-2">
                <CaretRightFill className="me-2" />
                Livepaletti Oy
              </Button>
            </Col>

          </Row>
        </Container>

        <div className="bg-light my-5">
        <Container className="py-lg-5">
          <Row className="pt-5">
            <Col lg={12}>
              <h2 className="m-0 pb-5 text-center">Toimintani kulmakivet</h2>
            </Col>
          </Row>
          <Row className="text-center row-cols-1 row-cols-lg-3 g-5 pt-4 pb-5">
            <Col>
              <p className="h1 mb-4"><ClockHistory /></p>
              <h5>Joustava palvelu</h5>
            </Col>

            <Col>
              <p className="h1 mb-4"><UiChecks /></p>
              <h5>Monialainen osaaminen</h5>
            </Col>

            <Col>
              <p className="h1 mb-4"><GraphUp /></p>
              <h5>Tavoitteellinen kehittyminen</h5>
            </Col>

          </Row>
        </Container>
      </div>

      <Container>
          <Row className="pb-5 pt-lg-5">
            <Col>
              <h2 className="m-0">Tuoreimmat artikkelit</h2>
            </Col>
          </Row>
          <Row className="row-cols-1 row-cols-sm-2 row-cols-xl-4 g-4">

            <Col>
              <Card className="bg-light rounded-0 shadow">
                <Link href="https://digimoguli.fi/blogi/wordpress-15-tarkeinta-asiaa-mita-sinun-tulee-tietaa/">
                  <a target="_blank" rel="nofollow">
                    <Image src="/blogi4.jpg" height={299} width={532} className="card-img-top rounded-0" />
                  </a>
                </Link>
                <Card.Body>
                  <Card.Title className="pb-2 fs-6">
                    WordPress – 15 tärkeintä asiaa, mitä sinun tulee tietää
                  </Card.Title>
                  <Card.Text className="text-muted">
                    <small>15.12.2020</small> | <small>digimoguli.fi</small>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card className="bg-light rounded-0 shadow">
                <Link href="https://digimoguli.fi/blogi/wordpress-kotisivut-miksi-ulkoistaa-huolenpito/">
                  <a target="_blank" rel="nofollow">
                    <Image src="/blogi3.jpg" height={299} width={532} className="card-img-top rounded-0" />
                  </a>
                </Link>
                <Card.Body>
                  <Card.Title className="pb-2 fs-6">
                    WordPress-kotisivut – miksi ulkoistaa huolenpito?
                  </Card.Title>
                  <Card.Text className="text-muted">
                    <small>25.03.2020</small> | <small>digimoguli.fi</small>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card className="bg-light rounded-0 shadow">
                <Link href="https://digimoguli.fi/blogi/laadukkaat-verkkosivut-ovat-hyvaa-asiakaspalvelua/">
                  <a target="_blank" rel="nofollow">
                    <Image src="/blogi2.jpg" height={299} width={532} className="card-img-top rounded-0" />
                  </a>
                </Link>
                <Card.Body>
                  <Card.Title className="pb-2 fs-6">
                    Laadukkaat verkkosivut ovat hyvää asiakaspalvelua
                  </Card.Title>
                  <Card.Text className="text-muted">
                    <small>03.03.2020</small> | <small>digimoguli.fi</small>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card className="bg-light rounded-0 shadow">
                <Link href="https://digimoguli.fi/blogi/wordpress-52-turvallisempaa-yllapitoa-jokaiselle/">
                  <a target="_blank" rel="nofollow">
                    <Image src="/blogi1.jpg" height={299} width={532} className="card-img-top rounded-0" />
                  </a>
                </Link>
                <Card.Body>
                  <Card.Title className="pb-2 fs-6">
                    WordPress 5.2 – Helpompaa ja turvallisempaa ylläpitoa
                  </Card.Title>
                  <Card.Text className="text-muted">
                    <small>23.10.2019</small> | <small>digimoguli.fi</small>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

          </Row>
          <Row className="pt-4 pb-lg-5">
            <Col className="d-flex align-items-center justify-content-end py-0">
              <Button href="https://digimoguli.fi/kirjoittaja/oskari/" target="_blank" rel="nofollow" variant="outline-primary" size="sm" className="d-inline-flex align-items-center m-0">
                Näytä kaikki
              </Button>
            </Col>
          </Row>
        </Container>

    </Layout>
  )
}
