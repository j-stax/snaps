import './PhotoCards.scss'
import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function PhotoCards({ isOpen, selectedFilterTag }) {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)
    const [photos, setPhotos] = useState([])
    const photosRef = useRef(null)  

    useEffect(() => {
        const fetchPhotos = async () => {
            try {
                const response = await axios.get(`https://unit-3-project-c5faaab51857.herokuapp.com/photos?api_key=${sessionStorage.getItem('API_KEY')}`)
                if (response.status == 200) {
                    setPhotos(response.data)
                } else {
                    console.log(`Fetching photos status: ${response.status}`)
                }
            } catch (err) {
                console.log(`Error fetching photos data: ${err}`)
            }
        }

        fetchPhotos()
    }, [])

    // Filter the photo data if a filter selection has been made.
    const filteredData = selectedFilterTag === "" ? photos :
        photos.filter(photoObj => photoObj.tags.includes(selectedFilterTag))

    // Keep a check on screen width
    window.addEventListener('resize', () => setScreenWidth(window.innerWidth))

    // Handle resizing while filter drawer is open to maintain correct styling for desktop view
    const photosStyles = screenWidth >= 1280 && isOpen ? "photos photos--filter-open-desktop" : "photos"
    
    // Card component
    function Card({ photoObj }) {
        const cardStyles = screenWidth >= 1280 && isOpen ? "card card--filter-open-desktop" : "card"

        return (
            <Link to={`/photo/${photoObj.id}`} className={cardStyles}>
                <div className="card__image-container">
                    <img className="card__image" src={photoObj.photo} alt={photoObj.photoDescription} />
                    <span className="card__photographer">{photoObj.photographer}</span>
                </div>
                <div className="card__tags-container">
                    { photoObj.tags.map((tag, index) => 
                        <span key={index} className="card__tag">{tag}</span> 
                    )}
                </div>
            </Link>
        )
    }

    return (
        <section ref={photosRef} className={photosStyles}>
            {filteredData.map(photoObj => 
                <Card key={photoObj.id} photoObj={photoObj} />
            )}
        </section>
    )
}