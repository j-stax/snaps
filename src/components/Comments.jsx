import './Comments.scss'
import { useState, useEffect } from 'react'
import axios from 'axios'

export default function Comments({ photoId, apiKey, timestampToDate }) {
    const [comments, setComments] = useState([])

    useEffect(() => {
        const fetchComments = async () => {
            try {
                const response = await axios.get(`https://unit-3-project-c5faaab51857.herokuapp.com/photos/${photoId}/comments?api_key=${apiKey}`)
                if (response.status == 200) {
                    setComments(response.data)
                } else {
                    console.log(`Fetching comments status: ${response.status}`)
                }
            } catch (err) {
                console.log(`Error fetching comments: ${err}`)
            }
        }

        fetchComments()
    }, [photoId])


    function CommentComponent({ comment }) {
        return (
            <div>
                <hr className="comments__ruler" />
                <div className="comments__component-header">
                    <span>{comment.name}</span>
                    <span>{timestampToDate(comment.timestamp)}</span>
                </div>
                <p className="comments__comment">{comment.comment}</p>
            </div>
        )
    }

    return (
        <>
            {comments && <section className="comments">
                <span className="comments__title">
                    {comments.length == 1 ? "1 Comment" : `${comments.length} Comments`}
                </span>
                {comments.map(comment => <CommentComponent key={comment.id} comment={comment} />)}
            </section>}
        </>
    )
}