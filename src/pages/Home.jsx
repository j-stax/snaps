import Header from '../components/Header'
import Filters from '../components/Filters'
import Hero from '../components/Hero'
import PhotoCards from '../components/PhotoCards'
import Footer from '../components/Footer'
import { useState } from 'react'

export default function Home({ apiKey }) {
    const [isFiltersOpen, setIsFiltersOpen] = useState(false)
    const [selectedFilterTag, setSelectedFilterTag] = useState("")

    function toggleFilters() {
        setIsFiltersOpen(prev => !prev)
    }

    return (
        <>
            <Header toggle={toggleFilters} isOpen={isFiltersOpen} />
            <div className="home__main">
                {isFiltersOpen && <Filters 
                    selectedTag={selectedFilterTag}
                    setSelectedTag={setSelectedFilterTag} 
                    apiKey={apiKey}
                />
                }
                <Hero />
                <PhotoCards 
                    isOpen={isFiltersOpen}
                    selectedFilterTag={selectedFilterTag} 
                    apiKey={apiKey}
                />
            </div>
            <Footer />
        </>
    )
}