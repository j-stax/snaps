import './Filters.scss'
import FilterTag from './FilterTag'
import { useState, useEffect } from 'react'
import axios from 'axios'

export default function Filters({ selectedTag, setSelectedTag }) {
    const [tags, setTags] = useState([])

    useEffect(() => {
        const fetchTags = async () => {
            try {
                const response = await axios.get(`https://unit-3-project-c5faaab51857.herokuapp.com/tags?api_key=${sessionStorage.getItem('API_KEY')}`)
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