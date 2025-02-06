import './Navbar.scss'
import filter from '../assets/images/Filter.svg'

export default function Navbar() {
    return (
        <nav className="header">
            <a className="header__logo" href="#">Snaps</a>
            <button className="header__filter-btn">
                Filters
                <img className="header__filter-icon" src={filter} alt="Filter icon" />
            </button>
        </nav>
    )
}