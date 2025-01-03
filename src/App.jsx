import About from "./sections/About"
import Contact from "./sections/Contact"
import Features from "./sections/Features"
import Footer from "./sections/Footer"
import Hero from "./sections/Hero"
import NavBar from "./sections/NavBar"
import FloatingImage from "./sections/Story"

function App() {
  return (
    <main className='relative min-h-screen w-screen overflow-x-hidden'>
      <NavBar />
      <Hero />
      <About />
      <Features />
      <FloatingImage />
      <Contact />
      <Footer />
    </main>
  )
}

export default App
