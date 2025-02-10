import tags from '../data/tags.json'
import './Filters.scss'
import FilterTag from './FilterTag'
import { useState } from 'react'

export default function Filters({ selectedTag, setSelectedTag }) {
    // const [selectedTag, setSelectedTag] = useState("")

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