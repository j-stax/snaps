import photoData from '../data/photos.json'
import './PhotoCards.scss'
import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

export default function PhotoCards({ isOpen, selectedFilterTag }) {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)
    const photosRef = useRef(null)

    // Filter the photo data if a filter selection has been made.
    const filteredData = selectedFilterTag === "" ? photoData :
        photoData.filter(photoObj => photoObj.tags.includes(selectedFilterTag))

    // Apply or remove desktop-specific styling for the photos section upon rerender,
    // if filter button is clicked, or the screen is in desktop view
    useEffect(() => {
        if (screenWidth >= 1280 && isOpen) {
            photosRef.current.classList.add("photos-desktop")
            document.querySelectorAll(".card").forEach(card => {
                card.classList.add("card-desktop")
            })
        }
        if (!isOpen || (screenWidth < 1280 && isOpen)) {
            photosRef.current.classList.remove("photos-desktop")
            document.querySelectorAll(".card").forEach(card => {
                card.classList.remove("card-desktop")
            })
        }
    }, [isOpen, screenWidth]) 

    window.addEventListener('resize', () => setScreenWidth(window.innerWidth))
    
    // Card component
    function Card({ photoObj }) {
        const cardStyles = screenWidth >= 1280 && isOpen ? "card card-desktop" : "card"

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
        <section ref={photosRef} className="photos">
            {filteredData.map(photoObj => 
                <Card key={photoObj.id} photoObj={photoObj} />
            )}
        </section>
    )
}