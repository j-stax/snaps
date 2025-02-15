import './Header.scss'
import FilterIcon from '../assets/images/Filter.svg?react'
import { useState, forwardRef, useRef} from 'react'

// Wrap the FilterIcon to be able to manipulate its properties on events
const FilterIconWithRef = forwardRef((props, ref) => {
    return (
        <svg ref={ref} {...props}>
            <FilterIcon />
        </svg>
    )
})

// Header component
export default function Header({ toggle, isOpen }) {
    const [isHovered, setIsHovered] = useState(false)
    const filterRef = useRef(null)

    function handleMouseOver() {
        setIsHovered(true)
        // Target the <path> child element of the filter icon svg and change the fill color
        const filterElemPath = filterRef.current.children[0].children[0]
        filterElemPath.classList.add("header__filter-icon-hovered")
    }

    function handleMouseOut() {
        if (!isOpen) {
            setIsHovered(false)
            // Remove hover effect
            filterRef.current.children[0].children[0]
                .classList.remove("header__filter-icon-hovered")
        }
    }

    const buttonStyles= isHovered ? "header__filter-btn header__filter-btn-hovered" : "header__filter-btn"

    return (
        <nav className="header">
            <a className="header__logo" href="#">Snaps</a>
            <button 
                className={buttonStyles}
                onMouseOver={handleMouseOver} 
                onMouseOut={handleMouseOut}
                onClick={toggle}
            >
                Filters
                <FilterIconWithRef className="header__filter-icon" ref={filterRef} />
            </button>
        </nav>
    )
}