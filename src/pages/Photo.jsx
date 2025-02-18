import { useParams } from 'react-router-dom'
import photoData from '../data/photos.json'
import './Photo.scss'
import LikeOutline from '../assets/images/Like_Outline.svg?react'
import PagesHeader from '../components/PagesHeader'
import CommentForm from '../components/CommentForm'
import Comments from '../components/Comments'
import Footer from '../components/Footer'

const dateMap = {
    0: "01",
    1: "02",
    2: "03",
    3: "04",
    4: "05",
    5: "06",
    6: "07",
    7: "08",
    8: "09",
    9: "10",
    10: "11",
    11: "12",
}

export default function Photo() {
    const { id } = useParams()

    const photoObj = photoData.find(photo => photo.id === id)
    const tags = photoObj.tags.map((tag, index) => <span key={index} className="photo__tag">{tag}</span>)
    let date = new Date(photoObj.timestamp)
    date = `${dateMap[date.getMonth()]}\/${date.getDate()}\/${date.getFullYear()}`

    return (
        <div className="photo">
            <PagesHeader />
            <main>
                <div className="photo__component">
                    <img className="photo__image" src={photoObj.photo} alt={photoObj.photoDescription} />
                    <div className="photo__component-content">
                        <div className="photo__tags-container">
                            {tags}
                        </div>
                        <div className="photo__component-content-main">
                            <div className="photo__likes">
                                <LikeOutline className="photo__likes-icon" />
                                <span className="photo__likes-text">{photoObj.likes} likes</span>
                            </div>
                            <span>{date}</span>
                        </div>
                        <span className="photo__photographer">Photo by {photoObj.photographer}</span>
                    </div>
                </div>
                <CommentForm />
                <Comments />
            </main>
            <Footer />
        </div>
    )
}