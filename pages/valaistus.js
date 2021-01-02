import Link from 'next/link'
import Layout from '../components/layout/layout'
import Hero from '../components/hero/hero'

export default function Valaistus() {
  return (
    <Layout title="Valaistus">
      <Hero title="Valaistus" parent="Osaaminen" image="/ulkopotretit-4200.jpg" imageHeight={4016} imageWidth={6016}>
        <p className="lead py-3">Freelancerina olen työskennellyt pääasiassa valaistuksen parissa. Olen ollut mukana toteuttamassa tapahtumien ja festivaalien valaistuksia, valotaideteoksia sekä toimitilojen ja julkisivujen juhlavalaistuksia. Suurin toimeksiantajani on Oululainen <Link href="https://livepaletti.fi"><a className="fw-bolder" target="_blank" rel="nofollow">Livepaletti Oy</a></Link>.</p>
      </Hero>
    </Layout>
  )
}
