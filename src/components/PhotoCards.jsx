import photoData from '../data/photos.json'
import './PhotoCards.scss'

export default function PhotoCards() {
    
    function Card({ photoObj }) {
        return (
            <div className="card">
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
            { photoData.map(photo => <Card key={photo.id} photoObj={photo} />) }
        </section>
    )
}