export default function FilterTag({ tag, handleClick, selectedTag }) {
    

    const handleMouseOver = (event) => {
        event.target.classList.add("filters__tag--dark")
    }

    const handleMouseOut = (event) => {
        if (event.target.textContent !== selectedTag) {
            event.target.classList.remove("filters__tag--dark")
        }
    } 

    return (
        <button 
            className={`filters__tag${tag === selectedTag ? " filters__tag--dark" : ""}`}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            onClick={(e) => handleClick(e.target)}
        >{tag}</button>
    )
}