import photoData from '../data/photos.json'
import './PhotoCards.scss'

export default function PhotoCards({ selectedFilterTag }) {

    const filteredData = selectedFilterTag === "" ? photoData :
        photoData.filter(photoObj => photoObj.tags.includes(selectedFilterTag))
    
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
            {filteredData.map(photoObj => <Card key={photoObj.id} photoObj={photoObj} />)}
        </section>
    )
}