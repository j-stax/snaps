import './CommentForm.scss'
import axios from 'axios'
import { useState, useRef } from 'react'

export default function CommentForm({ photoId, apiKey, fetchComments }) {
    const [inputs, setInputs] = useState({ name: "", comment: "" })
    const nameRef = useRef(null)
    const commentRef = useRef(null)

    const handleInputChange = (event) => {
        const { name, value } = event.target
        setInputs({...inputs, [name]: value})
        if (!isValid(value)) {
            event.target.classList.add(`form__input-${name}--invalid`)
        } else {
            event.target.classList.remove(`form__input-${name}--invalid`)
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        const name = inputs.name.trim()
        const comment = inputs.comment.trim()

        if (isValid(name) && isValid(comment)) {
            const newComment = {
                name: toTitleCase(name),
                comment: comment[0].toUpperCase() + comment.slice(1)
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

            setInputs({ name: "", comment: "" })
        } else {
            alert("Both name and comment are required!")
            nameRef.current.classList.add("form__input-name--invalid")
            commentRef.current.classList.add("form__input-comment--invalid")
        }
    }

    const isValid = (value) => {
        if (!value) {
            return false
        }
        return true
    }

    const toTitleCase = (str) => {
        const items = str.split(" ")
        const modItems = items.map(item => item[0].toUpperCase() + item.slice(1))
        return modItems.join(" ")
    }

    return (
        <form className="form" onSubmit={handleSubmit} method="POST">
            <label className="form__label">Name
                <input 
                    ref={nameRef}
                    onChange={handleInputChange} 
                    className="form__input-name" 
                    type="text" 
                    name="name" 
                    value={inputs.name} 
                />
            </label>
            <label className="form__label" htmlFor="comment">Comment</label>
            <textarea 
                ref={commentRef}
                onChange={handleInputChange}
                className="form__input-comment" 
                id="comment"
                type="text" 
                name="comment"
                rows="4"
                value={inputs.comment}
            ></textarea>
            <button className="form__button" type="submit">Submit</button>
        </form>
    )
}