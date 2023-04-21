import {Hero, HowItWorks, About, CleanEnergy, Delivery, BookDelivery, Faq, BookBanner} from '../features/Home'
import Header from '../components/Header'
export default function Home() {
  return (
    <>
      <Header/>
      <Hero />
      <HowItWorks />
      <About />
      <CleanEnergy/>
      <Delivery/>
      <BookDelivery/>
      <Faq/>
      <BookBanner/>
    </>
  )
}
