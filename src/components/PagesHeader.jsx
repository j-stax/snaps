import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Arrow from '../assets/images/Arrow.svg?react'
import './PagesHeader.scss'

export default function PagesHeader() {
    const pagesHeaderRef = useRef(null)

    useEffect(() => {
        pagesHeaderRef.current.scrollIntoView({ behavior: 'smooth' })
    }, [])

    return (
        <header className="pages-header" ref={pagesHeaderRef}>
            <Link to="/" className="pages-header__logo">Snaps</Link>
            <Link to="/" className="pages-header__return-link">
                <Arrow className="pages-header__arrow" />
                Home
            </Link>
        </header>
    )
}