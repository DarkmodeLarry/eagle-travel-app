import Explore from '../components/Explore'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import Cards from '../components/Cards'
import { live, discover } from '../data'
import Footer from '../components/Footer'
import Hosting from '../components/Hosting'

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Explore />
        <Banner />
        <Cards {...live} />
        <Cards {...discover} />
        <Hosting />
      </main>

      <Footer />
    </>
  )
}
