import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <Header />
      <main className="flex-1"></main>
      <Footer />
    </div>
  )
}

export default App
