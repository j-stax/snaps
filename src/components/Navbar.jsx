import './Navbar.scss'
import filterIcon from '../assets/images/Filter.svg'
import { ReactSVG } from "react-svg"
import { useState, useRef, useEffect } from 'react'

export default function Navbar() {
    const [isHovered, setIsHovered] = useState(false)
    const filterRef = useRef(null)

    function handleMouseOver() {
        setIsHovered(true)
        const filterElemPath = filterRef.current.reactWrapper.querySelector("path")
        filterElemPath.classList.add("header__filter-icon-hovered")
    }

    function handleMouseOut() {
        setIsHovered(false)
        filterRef.current.reactWrapper.querySelector("path")
            .classList.remove("header__filter-icon-hovered")
    }

    return (
        <nav className="header">
            <a className="header__logo" href="#">Snaps</a>
            <button 
                onMouseOver={handleMouseOver} 
                onMouseOut={handleMouseOut}
                className={isHovered ? "header__filter-btn header__filter-btn-hovered" : "header__filter-btn"}
            >
                Filters
                <ReactSVG 
                    src={filterIcon} 
                    ref={filterRef}
                />
            </button>
        </nav>
    )
}