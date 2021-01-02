import Link from 'next/link'
import Layout from '../components/layout/layout'
import Hero from '../components/hero/hero'

export default function Webkehitys() {
  return (
    <Layout title="Web-kehitys">
      <Hero title="Web-kehitys" parent="Osaaminen" image="/ulkopotretit-4200.jpg" imageHeight={4016} imageWidth={6016}>
        <p className="lead py-3">Työskentelen <Link href="https://digimoguli.fi"><a className="fw-bolder" target="_blank" rel="nofollow">Digimogulin</a></Link> Web Developerina ja vastuualueisiini kuuluvat web-kehityksen lisäksi integraatioihin, versionhallintaan ja tietoturvaan liittyvät tehtävät. Erikoisosaamistani ovat sivustojen nopeus, turvallisuus, ja saavutettavuus.</p>
      </Hero>
    </Layout>
  )
}
