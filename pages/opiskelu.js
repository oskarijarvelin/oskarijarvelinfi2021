import Link from 'next/link'
import Layout from '../components/layout/layout'
import Hero from '../components/hero/hero'

export default function Opiskelu() {
  return (
    <Layout title="Opiskelu">
      <Hero title="Opiskelu" image="/ulkopotretit-4200.jpg" imageHeight={4016} imageWidth={6016}>
        <p className="lead py-3">Opiskelen <b>Oulun Ammattikorkeakoulussa</b> tietojenkäsittelyn <Link href="https://www.oamk.fi/fi/koulutus/ammattikorkeakoulututkinnot/tradenomi-amk-tietojenkasittely"><a className="fw-bolder" target="_blank" rel="nofollow">Tradenomiksi</a></Link> monimuoto-toteutuksena osallistumalla verkko-opetukseen kolmena arki-iltana viikossa. Tutkinnon laajuus on 210 op eli 3,5 vuotta, joista yksi vuosi opiskellaan englanniksi. Koulutus suuntautuu digitaalisten tuotteiden ja palveluiden kehittämiseen.</p>
      </Hero>
    </Layout>
  )
}
