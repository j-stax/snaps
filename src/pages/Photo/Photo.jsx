import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import './Photo.scss'
import LikeOutline from '../../assets/images/Like_Outline.svg?react'
import PagesHeader from '../../components/PagesHeader/PagesHeader'
import CommentForm from '../../components/CommentForm/CommentForm'
import Comments from '../../components/Comments/Comments'
import Footer from '../../components/Footer/Footer'
import axios from 'axios'

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

const API_URL = import.meta.env.VITE_APP_API_URL

export default function Photo() {
    const [photo, setPhoto] = useState({})
    const [comments, setComments] = useState([])
    const { id } = useParams()

    useEffect(() => {
        const fetchPhoto = async () => {
            try {
                const response = await axios.get(`${API_URL}/photos/${id}`)
                if (response.status == 200) {
                    setPhoto(response.data)
                } else {
                    console.log(`Fetching photo status: ${response.status}`)
                }
            } catch (err) {
                console.log(`Error fetching photo ${id}: ${err}`)
            }    
        }

        fetchPhoto()
        fetchComments()
    }, [id])

    const fetchComments = async () => {
        try {
            const response = await axios.get(`${API_URL}/photos/${id}/comments`)
            if (response.status == 200) {
                const sortedData = response.data.sort((a, b) => b.timestamp - a.timestamp)
                setComments(sortedData)
            } else {
                console.log(`Fetching comments status: ${response.status}`)
            }
        } catch (err) {
            console.log(`Error fetching comments: ${err}`)
        }
    }

    function timestampToDate(timestamp) { 
        const date = new Date(timestamp)
        return `${dateMap[date.getMonth()]}\/${date.getDate()}\/${date.getFullYear()}`
    }

    return (
        <>
            {photo && <div className="photo">
                <PagesHeader />
                <main className="photo__main">
                    <div className="photo__component">
                        <img className="photo__image" src={photo.photo} alt={photo.photoDescription} />
                        <div className="photo__component-content">
                            <div className="photo__tags-container">
                                {photo.tags && photo.tags.map((tag, index) => 
                                    <span key={index} className="photo__tag">{tag}</span>)}
                            </div>
                            <div className="photo__component-content-main">
                                <div className="photo__likes">
                                    <LikeOutline className="photo__likes-icon" />
                                    <span className="photo__likes-text">{photo.likes} likes</span>
                                </div>
                                <span className="photo__photographer photo__photographer--tablet">Photo by {photo.photographer}</span>
                                <span>{timestampToDate(photo.timestamp)}</span>
                            </div>
                            <span className="photo__photographer photo__photographer--mobile">Photo by {photo.photographer}</span>
                        </div>
                    </div>
                    <CommentForm photoId={id} fetchComments={fetchComments} />
                    <Comments 
                        photoId={id} 
                        timestampToDate={timestampToDate} 
                        comments={comments}
                    />
                </main>
                <Footer /> 
            </div>}
        </>
    )
}