import './Comments.scss'
import { useEffect } from 'react'

export default function Comments({ photoId, timestampToDate, fetchComments, comments }) {

    useEffect(() => {
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