import tags from '../data/tags.json'
import './Filters.scss'

export default function Filters() {
    
    function Tag({ tag }) {
        return (
            <button className="filters__tag">{tag}</button>
        )
    }

    return (
        <div className="filters">
            <h2 className="filters__heading">Filters</h2>
            <div className="filters__tags-container">
                {tags.map((tag, index) => 
                    <Tag key={index} tag={tag} />
                )}
            </div>
        </div>
    )
}