import Header from './components/Header'
import FaqSection from './components/FaqSection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <Header />
      <main className="flex-1">
        <FaqSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
