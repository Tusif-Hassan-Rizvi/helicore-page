import Header from './components/Header'
import Hero from './components/Hero'
import FounderSection from './components/FounderSection'
import TreatmentFocusSection from './components/TreatmentFocusSection'
import QuoteBannerSection from './components/QuoteBannerSection'
import FaqSection from './components/FaqSection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <Header />
      <main className="flex-1">
        <Hero />
        <FounderSection />
        <TreatmentFocusSection />
        <QuoteBannerSection />
        <FaqSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
