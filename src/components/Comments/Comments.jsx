import './Comments.scss'

export default function Comments({ timestampToDate, comments }) {
    return (
        <>
            {comments && <section className="comments">
                <span className="comments__title">
                    {comments.length == 1 ? "1 Comment" : `${comments.length} Comments`}
                </span>
                {comments.map(comment => 
                    <div key={comment.id}>
                        <hr className="comments__ruler" />
                        <div className="comments__component-header">
                            <span>{comment.name}</span>
                            <span>{timestampToDate(comment.timestamp)}</span>
                        </div>
                        <p className="comments__comment">{comment.comment}</p>
                    </div>
                )}
            </section>}
        </>
    )
}