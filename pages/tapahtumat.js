import Link from 'next/link'
import Layout from '../components/layout/layout'
import Hero from '../components/hero/hero'

export default function Tapahtumat() {
  return (
    <Layout title="Tapahtumat">
      <Hero title="Tapahtumat" parent="Osaaminen" image="/ulkopotretit-4200.jpg" imageHeight={4016} imageWidth={6016}>
        <p className="lead py-3">Valaisen, miksaan, kuvaan, roudaan, ajan, organisoin, viestin ja palvelen. Asiakkaani ovat arvostaneet monialaista osaamistani ja pitkää kokemustani alalta. C-kortillisena freelancerina olen ehtinyt työskentelemään monelle alan yritykselle Suomessa, mutta parhaiten olen viihtynyt Oululaisen <Link href="https://livepaletti.fi"><a className="fw-bolder" target="_blank" rel="nofollow">Livepaletin</a></Link> palveluksessa.</p>
      </Hero>
    </Layout>
  )
}
