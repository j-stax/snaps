import Header from '../components/Header'
import Filters from '../components/Filters'
import Hero from '../components/Hero'
import PhotoCards from '../components/PhotoCards'
import Footer from '../components/Footer'
import { useEffect, useState } from 'react'

export default function Home({ API_KEY }) {
    const [isFiltersOpen, setIsFiltersOpen] = useState(false)
    const [selectedFilterTag, setSelectedFilterTag] = useState("")
    
    useEffect(() => {
        if (!sessionStorage.getItem('API_KEY')) {
            sessionStorage.setItem('API_KEY', API_KEY)
            console.log("api_key stored.")
        }
    }, [])

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