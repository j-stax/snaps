import Header from '../components/Header/Header'
import Filters from '../components/Filters/Filters'
import Hero from '../components/Hero/Hero'
import PhotoCards from '../components/PhotoCards/PhotoCards'
import Footer from '../components/Footer/Footer'
import { useState } from 'react'

export default function Home() {
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
                />
                }
                <Hero />
                <PhotoCards 
                    isOpen={isFiltersOpen}
                    selectedFilterTag={selectedFilterTag}
                />
            </div>
            <Footer />
        </>
    )
}