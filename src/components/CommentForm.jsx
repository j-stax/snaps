import './CommentForm.scss'

export default function CommentForm() {

    function handleSubmit(event) {
        event.preventDefault()
        const name = event.target.name.value.trim()
        const comment = event.target.comment.value.trim()
        console.log(name, comment)
    }

    return (
        <form className="form" onSubmit={handleSubmit} method="POST">
            <label className="form__label">Name</label>
            <input className="form__input-name" type="text" name="name" />
            <label className="form__label">Comment</label>
            <textarea 
                className="form__input-comment" 
                type="text" 
                name="comment"
                rows="4"
            ></textarea>
            <button className="form__button" type="submit">Submit</button>
        </form>
    )
}