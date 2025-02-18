import './Comments.scss'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

export default function Comments({ photoId }) {
    const [comments, setComments] = useState([])

    useEffect(() => {
        const fetchComment = async () => {

        }
    })

    function CommentComponent() {
        return (
            <div>
                <hr className="comments__ruler" />
                <div className="comments__component-header">
                    <span>Casey Schmidt</span>
                    <span>08/29/2024</span>
                </div>
                <p className="comments__comment">The mood and atmosphere in this shot are beautiful.</p>
            </div>
        )
    }

    return (
        <section className="comments">
            <span className="comments__title">3 Comments</span>
            {/* Map over list of comments */}
            {CommentComponent()}
            {CommentComponent()}
        </section>
    )
}