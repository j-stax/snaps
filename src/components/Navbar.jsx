import './Navbar.scss'
import filterIcon from '../assets/images/Filter.svg'
import { ReactSVG } from "react-svg"
import { useState, useRef, useEffect } from 'react'

export default function Navbar({ toggle, isOpen }) {
    const [isHovered, setIsHovered] = useState(false)
    const filterRef = useRef(null)

    function handleMouseOver() {
        setIsHovered(true)
        const filterElemPath = filterRef.current.reactWrapper.querySelector("path")
        filterElemPath.classList.add("header__filter-icon-hovered")
    }

    function handleMouseOut() {
        if (!isOpen) {
            setIsHovered(false)
            filterRef.current.reactWrapper.querySelector("path")
                .classList.remove("header__filter-icon-hovered")
        }
    }

    function handleClick() {
        setIsHovered(true)
        filterRef.current.reactWrapper.querySelector("path")
            .classList.toggle("header__filter-icon-hovered")
        toggle()
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
                <ReactSVG src={filterIcon} ref={filterRef} />
            </button>
        </nav>
    )
}