import { Link, useNavigate, useParams } from 'react-router-dom'
import photoData from '../data/photos.json'
import './Photo.scss'

export default function Photo() {
    const { id } = useParams()

    const photoObj = photoData.find(photo => photo.id === id)
    console.log(photoObj)

    return (
        <div className="photo">
            <Link to="/" className="photo__logo">Snaps</Link>
            {/* <img src={photoObj.photo} alt={photoObj.photoDescription} /> */}
        </div>
    )
}