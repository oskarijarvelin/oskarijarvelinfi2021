import Link from 'next/link'
import Layout from '../components/layout/layout'
import Hero from '../components/hero/hero'

import Moment from 'react-moment'

import { TelephoneFill, EnvelopeFill, CodeSlash, BrightnessHigh, CameraVideo, MusicNoteBeamed, ArrowRight, CaretRightFill } from 'react-bootstrap-icons';
import { Container, Row, Col, Button, Card } from 'react-bootstrap'

export default function Home() {
  const onlyYears = (d) => {
    return d.substring(0, d.length - 6)
  }

  return (
    <Layout title="Kuinka voin palvella?">
      <Hero title="Kuinka voin palvella?" breadcrumbs={false}>
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
        <Container>
          <Row className="pt-5">
            <Col lg={12}>
              <h2 className="m-0 pb-5 text-center">Osaaminen</h2>
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
                  Olen tehnyt livestriimejä, webinaareja ja verkkotapahtumia kansainvälisellä tasolla sekä kouluttanut niiden tekemistä mm. opettajille koulujen etäjuhlia varten.
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
          <Row className="pt-5">
            <Col lg={12}>
              <h2 className="m-0 pb-5">Hyödynnä laaja osaamiseni</h2>
            </Col>
          </Row>
          <Row className="g-5 pb-5">

            <Col md={10} lg={6} className="pe-5">
              <h3 className="mb-3">Web-kehitys ja livestriimit</h3>

              <p>Osaamistani web-kehityksen parissa tarjoaa yksinoikeudella Oululainen Digimoguli Oy. Digimoguli on modernin markkinoinnin ja myynnin palveleva asiantuntijayritys, jolla on pitkä kokemus erilaisista digitaalisen markkinoinnin ja viestinnän projekteista sekä ratkaisuista.</p>

              <p>Suosittelen lämpinästi myös Digimogulin striimauspalveluita, sillä pystymme palvelemaan tapahtumien toteuttamisessa muita laajemmin. Teknisesti vakuuttavan monikameratuotannon lisäksi pystymme auttamaan tapahtumia ilmeen ja sisällön suunnittelussa sekä tapahtuman markkinoinnissa hyödyntäen esimerkiksi moderneja myynnin ja markkinoinnin automaatioita.</p>

              <Button href="https://digimoguli.fi" target="_blank" rel="nofollow" className="d-inline-flex align-items-center mt-2 mb-2 me-2">
                <CaretRightFill className="me-2" />
                Digimoguli Oy
              </Button>
            </Col>

            <Col md={10} lg={6} className="pe-5">
              <h3 className="mb-3">Valaistus ja tapahtumat</h3>

              <p>Toimin tapahtumatekniikan freelancerina, jolloin voit ostaa osaamistani suoraan minulta tai esimerkiksi Oululaisen Livepaletti Oy:n kautta. Kun tarvitset tapahtumaasi ammattitekijän lisäksi myös tekniikan, suosittelen kääntymään suoraan Livepaletin puoleen.</p>

              <p>Livepaletilta löytyy tapahtuman äänentoiston, valaistuksen ja lavarakenteiden lisäksi uutena palveluna myös livestriimit monikameratuotantona.</p>

              <Button href="https://livepaletti.fi" target="_blank" rel="nofollow" className="d-inline-flex align-items-center mt-2 mb-2 me-2">
                <CaretRightFill className="me-2" />
                Livepaletti Oy
              </Button>
            </Col>

          </Row>
        </Container>

    </Layout>
  )
}
