export default function FilterTag({ tag, handleClick, selectedTag }) {
    

    const handleMouseOver = (event) => {
        event.target.classList.add("filters__tag--dark")
    }

    const handleMouseOut = (event) => {
        if (event.target.textContent !== selectedTag) {
            event.target.classList.remove("filters__tag--dark")
        }
    }
    
    const buttonStyles = tag === selectedTag ? "filters__tag filters__tag--dark" : "filters__tag"

    return (
        <button 
            className={buttonStyles}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            onClick={(e) => handleClick(e.target)}
        >{tag}</button>
    )
}