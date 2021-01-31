import Layout from '../components/layout/layout'
import Hero from '../components/hero/hero'

export default function Livestriimit() {
  return (
    <Layout title="Livestriimit">
      <Hero title="Livestriimit" parent="Osaaminen" image="/ulkopotretit-4200.jpg" imageHeight={4016} imageWidth={6016}>
        <p className="lead py-3">Olen pitkään valaissut, miksannut ja kuvannut livestriimejä, mutta koronapandemian myötä olen tavoitteellisesti laajentanut ja kehittänyt osaamistani. Nyt pystyn palvelemaan kokonaisvaltaisesti livestriimien parissa nojaten monialaiseen osaamiseeni ja pitkään kokemukseeni alalta.</p>
      </Hero>
    </Layout>
  )
}
