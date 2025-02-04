import filter from '../assets/images/Filter.svg'

export default function Header() {
    return (
        <header className="header">
            <h1 className="header__logo">Snaps</h1>
            <button className="header__filter-btn">
                Filters
                <img className="header__filter-icon" src={filter} alt="Filter icon" />
            </button>
        </header>
    )
}