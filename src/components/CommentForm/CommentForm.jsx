import './CommentForm.scss'
import axios from 'axios'
import { useState, useRef } from 'react'

const API_URL = import.meta.env.VITE_APP_API_URL || "https://snapsapi.netlify.app"

export default function CommentForm({ photoId, fetchComments }) {
    const [inputs, setInputs] = useState({ name: "", comment: "" })
    const nameRef = useRef(null)
    const commentRef = useRef(null)
    const nameErrorRef = useRef(null)
    const commentErrorRef = useRef(null)

    const handleInputChange = (event) => {
        const { name, value } = event.target
        setInputs({...inputs, [name]: value})
        if (!value) {
            event.target.classList.add(`form__input-${name}--invalid`)
            showErrorMsg(name)
        } else {
            event.target.classList.remove(`form__input-${name}--invalid`)
            hideErrorMsg(name)
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        const name = inputs.name.trim()
        const comment = inputs.comment.trim()

        if (name && comment) {
            // New comment object
            const newComment = {
                name: toTitleCase(name),
                comment: comment[0].toUpperCase() + comment.slice(1)
            }

            try {
                const response = await axios.post(`${API_URL}/photos/${photoId}/comments`, newComment)
                if (response.status == 201) {
                    // Reload comments to reflect newly added comment, with delay to avoid server write/read file conflict
                    setTimeout(() => {
                        fetchComments()
                    }, 900)
                }
                else {
                    console.log(`POST request for new comment returned status code ${response.status}`)
                }
            } catch (err) {
                console.log(`Error POST-ing new comment: ${err}`)
            }
            setInputs({ name: "", comment: "" })    // Reset input fields

        } else if (!name && !comment) {
            nameRef.current.classList.add("form__input-name--invalid")
            commentRef.current.classList.add("form__input-comment--invalid")
            showErrorMsg("name")
            showErrorMsg("comment")
        }
        else if (!name) {
            nameRef.current.classList.add("form__input-name--invalid")
            showErrorMsg("name")
        } else {
            commentRef.current.classList.add("form__input-comment--invalid")
            showErrorMsg("comment")
        }
    }

    const toTitleCase = (str) => {
        const items = str.split(" ")
        const modItems = items.map(item => item[0].toUpperCase() + item.slice(1))
        return modItems.join(" ")
    }

    const showErrorMsg = (inputName) => {
        if (inputName === "name") {
            nameErrorRef.current.classList.remove("hidden")
        } else {
            commentErrorRef.current.classList.remove("hidden")
        }
    }

    const hideErrorMsg = (inputName) => {
        if (inputName === "name") {
            nameErrorRef.current.classList.add("hidden")
        } else {
            commentErrorRef.current.classList.add("hidden")
        }
    } 

    return (
        <form className="form" onSubmit={handleSubmit} method="POST">
            <label htmlFor="name">Name</label>
            <input 
                ref={nameRef}
                onChange={handleInputChange} 
                id="name"
                className="form__input-name" 
                type="text" 
                name="name" 
                value={inputs.name} 
            />
            <span ref={nameErrorRef} className="form__error-msg form__error-msg--name hidden">Please enter a name.</span>
            <label className="form__label-comment" htmlFor="comment">Comment</label>
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
            <span ref={commentErrorRef} className="form__error-msg form__error-msg--comment hidden">Please enter a comment.</span>
            <button className="form__button" type="submit">Submit</button>
        </form>
    )
}