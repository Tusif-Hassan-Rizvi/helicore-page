import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Header from './components/Header'
import Hero from './components/Hero'
import FounderSection from './components/FounderSection'
import TreatmentFocusSection from './components/TreatmentFocusSection'
import QuoteBannerSection from './components/QuoteBannerSection'
import ServicesSection from './components/ServicesSection'
import WhyChooseUsSection from './components/WhyChooseUsSection'
import TestimonialsSection from './components/TestimonialsSection'
import FourStepsSection from './components/FourStepsSection'
import StatesSection from './components/StatesSection'
import FaqSection from './components/FaqSection'
import Footer from './components/Footer'

function App() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: 'ease-out-cubic',
      once: true,
      offset: 50,
    })
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-cream-secondary text-white">
      <Header />
      <main className="flex-1">
        <Hero />
        <FounderSection />
        <TreatmentFocusSection />
        <QuoteBannerSection />
        <ServicesSection />
        <WhyChooseUsSection />
        <TestimonialsSection />
        <FourStepsSection />
        <StatesSection />
        <FaqSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
