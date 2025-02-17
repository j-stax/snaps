import './CommentForm.scss'

export default function CommentForm() {
    return (
        <form className="form" method="POST">
            <label className="form__label">Name</label>
            <input className="form__input-name" type="text" name="name" />
            <label className="form__label">Comment</label>
            <textarea 
                className="form__input-comment" 
                type="text" 
                name="comment"
                rows="4"
            ></textarea>
        </form>
    )
}