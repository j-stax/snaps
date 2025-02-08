import './App.scss'
import Header from './components/Header'
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
      <Header toggle={toggleFilters} isOpen={isFiltersOpen} />
      {isFiltersOpen && <Filters />}
      <Hero />
      <PhotoCards />
      <Footer />
    </>
  )
}

export default App
