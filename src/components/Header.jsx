import './Header.scss'
import FilterIcon from '../assets/images/Filter.svg?react'
import { useState, forwardRef, useRef} from 'react'

const FilterIconWithRef = forwardRef((props, ref) => {
    return (
        <svg ref={ref} {...props}>
            <FilterIcon />
        </svg>
    )
})

export default function Header({ toggle, isOpen }) {
    const [isHovered, setIsHovered] = useState(false)
    const filterRef = useRef()

    function handleMouseOver() {
        setIsHovered(true)
        const filterElemPath = filterRef.current.children[0].children[0]
        filterElemPath.classList.add("header__filter-icon-hovered")
    }

    function handleMouseOut() {
        if (!isOpen) {
            setIsHovered(false)
            filterRef.current.children[0].children[0]
                .classList.remove("header__filter-icon-hovered")
        }
    }

    return (
        <nav className="header">
            <a className="header__logo" href="#">Snaps</a>
            <button 
                className={isHovered ? "header__filter-btn header__filter-btn-hovered" : "header__filter-btn"}
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