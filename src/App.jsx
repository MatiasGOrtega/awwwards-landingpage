import About from "./sections/About"
import Features from "./sections/Features"
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
    </main>
  )
}

export default App
