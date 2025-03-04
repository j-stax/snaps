import './Header.scss'
import FilterIcon from '../assets/images/Filter.svg?react'
import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'


export default function Header({ toggle, isOpen }) {
    const [isHovered, setIsHovered] = useState(false)
    const navRef = useRef(null)

    useEffect(() => {
        navRef.current.scrollIntoView({ behavior: 'smooth' })
    }, [])

    // Handling hover effects 
    function handleMouseOver() {
        setIsHovered(true)
    }

    // Handle filter drawer opened state
    function handleMouseOut() {
        if (!isOpen) {
            setIsHovered(false)
        }
    }

    const buttonStyles= isHovered ? "header__filter-btn header__filter-btn--dark" : "header__filter-btn"
    const filterIconStyles = isHovered ? "header__filter-icon header__filter-icon--light" : "header__filter-icon"

    return (
        <nav className="header" ref={navRef}>
            <Link className="header__logo" to="/" >Snaps</Link>
            <button 
                className={buttonStyles}
                onMouseOver={handleMouseOver} 
                onMouseOut={handleMouseOut}
                onClick={toggle}
            >
                Filters
                <FilterIcon className={filterIconStyles} />
            </button>
        </nav>
    )
}