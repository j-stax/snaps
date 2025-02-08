import './App.scss'
import Header from './components/Navbar'
import Hero from './components/Hero'
import PhotoCards from './components/PhotoCards'
import Footer from './components/Footer'
import Filters from './components/Filters'
import { useState } from "react"

function App() {
  const [isFiltersOpen, setIsFiltersOpen] = useState(false)

  function toggleFilters() {
    setIsFiltersOpen(prev => !prev)
  }

  return (
    <>
      <Header toggle={toggleFilters} />
      <Filters />
      <Hero />
      <PhotoCards />
      <Footer />
    </>
  )
}

export default App
