import './CommentForm.scss'
import axios from 'axios'
import { useState, useRef } from 'react'

export default function CommentForm({ photoId, fetchComments }) {
    const [inputs, setInputs] = useState({ name: "", comment: "" })
    const nameRef = useRef(null)
    const commentRef = useRef(null)
    const nameErrorRef = useRef(null)
    const commentErrorRef = useRef(null)

    const handleInputChange = (event) => {
        const { name, value } = event.target
        setInputs({...inputs, [name]: value})
        if (!isValid(value)) {
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

        if (isValid(name) && isValid(comment)) {
            // New comment object for POST-ing
            const newComment = {
                name: toTitleCase(name),
                comment: comment[0].toUpperCase() + comment.slice(1)
            }

            const url = `https://unit-3-project-c5faaab51857.herokuapp.com/photos/${photoId}/comments?api_key=${sessionStorage.getItem('API_KEY')}`
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
            setInputs({ name: "", comment: "" })    // Reset input fields

        } else if (!isValid(name) && !isValid(comment)) {
            nameRef.current.classList.add("form__input-name--invalid")
            commentRef.current.classList.add("form__input-comment--invalid")
            showErrorMsg("name")
            showErrorMsg("comment")
        }
        else if (!isValid(name)) {
            nameRef.current.classList.add("form__input-name--invalid")
            showErrorMsg("name")
        } else {
            commentRef.current.classList.add("form__input-comment--invalid")
            showErrorMsg("comment")
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