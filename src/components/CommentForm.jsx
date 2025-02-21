import './CommentForm.scss'
import axios from 'axios'

export default function CommentForm({ photoId, apiKey, fetchComments }) {

    const handleSubmit = async (event) => {
        event.preventDefault()
        const formElem = event.target
        const name = formElem.name.value.trim()
        const comment = formElem.comment.value.trim()
        if (name.length > 0 && comment.length > 0) {
            const newComment = {
                name,
                comment,
            }
            const url = `https://unit-3-project-c5faaab51857.herokuapp.com/photos/${photoId}/comments?api_key=${apiKey}`
            
            try {
                const response = await axios.post(url, newComment)
                if (response.status == 201) {
                    fetchComments()
                }
                else {
                    console.log(`POST-ing new comment status: ${response.status}`)
                }
            } catch (err) {
                console.log(`Error POST-ing new comment: ${err}`)
            }
            formElem.reset()
        }
    }

    return (
        <form className="form" onSubmit={handleSubmit} method="POST">
            <label className="form__label">Name
                <input className="form__input-name" type="text" name="name" />
            </label>
            <label className="form__label" htmlFor="comment">Comment</label>
            <textarea 
                className="form__input-comment" 
                id="comment"
                type="text" 
                name="comment"
                rows="4"
            ></textarea>
            <button className="form__button" type="submit">Submit</button>
        </form>
    )
}