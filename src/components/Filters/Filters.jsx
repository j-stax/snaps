import './Filters.scss'
import FilterTag from './FilterTag'
import { useState, useEffect } from 'react'
import axios from 'axios'

const API_URL = import.meta.env.VITE_APP_API_URL || "https://snapsapi.netlify.app"

export default function Filters({ selectedTag, setSelectedTag }) {
    const [tags, setTags] = useState([])

    useEffect(() => {
        const fetchTags = async () => {
            try {
                const response = await axios.get(`${API_URL}/tags`)
                if (response.status == 200) {
                    setTags(response.data)
                } else {
                    console.log(`Fetching filter tags status: ${response.status}`)
                }
            } catch (err) {
                console.log(`Error fetching tags for filter drawer: ${err}`)
            }
        }

        fetchTags()
    }, [])

    const handleClick = (tagElem) => {
        if (tagElem.textContent === selectedTag) {
            setSelectedTag("")
            tagElem.classList.remove("filters__tag--dark")
        }
        else {
            setSelectedTag(tagElem.textContent)
            tagElem.classList.add("filters__tag--dark")
        }
    }

    return (
        <div className="filters">
            <h2 className="filters__heading">Filters</h2>
            <div className="filters__tags-container">
                {tags.map(tag => 
                    <FilterTag 
                        key={tag} 
                        tag={tag}
                        handleClick={handleClick} 
                        selectedTag={selectedTag}
                    />
                )}
            </div>
        </div>
    )
}