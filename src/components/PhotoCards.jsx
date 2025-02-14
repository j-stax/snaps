import photoData from '../data/photos.json'
import './PhotoCards.scss'
import { useState, useEffect } from 'react'

export default function PhotoCards({ isOpen, selectedFilterTag }) {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)

    // Filter the photo data if a filter selection has been made.
    const filteredData = selectedFilterTag === "" ? photoData :
        photoData.filter(photoObj => photoObj.tags.includes(selectedFilterTag))

    // Apply or remove desktop-specific styling the photos section upon 
    // rerender, or a change in state for filter or the screen width
    useEffect(() => {
        if (screenWidth >= 1280 && isOpen) {
            document.querySelector(".photos").classList.add("photos-desktop")
            document.querySelectorAll(".card").forEach(card => {
                card.classList.add("card-desktop")
            })
        }
        if (!isOpen || (screenWidth < 1280 && isOpen)) {
            document.querySelector(".photos").classList.remove("photos-desktop")
            document.querySelectorAll(".card").forEach(card => {
                card.classList.remove("card-desktop")
            })
        }
    }, [isOpen, screenWidth]) 

    window.addEventListener('resize', () => setScreenWidth(window.innerWidth))
    
    function Card({ photoObj }) {
        return (
            <div className={`card${screenWidth >= 1280 && isOpen ? " card-desktop" : ""}`}>
                <div className="card__image-container">
                    <img className="card__image" src={photoObj.photo} alt={photoObj.photoDescription} />
                    <span className="card__photographer">{photoObj.photographer}</span>
                </div>
                <div className="card__tags-container">
                    { photoObj.tags.map((tag, index) => 
                        <span key={index} className="card__tag">{tag}</span> 
                    )}
                </div>
            </div>
        )
    }

    return (
        <section className="photos">
            {filteredData.map(photoObj => <Card key={photoObj.id} photoObj={photoObj} />)}
        </section>
    )
}