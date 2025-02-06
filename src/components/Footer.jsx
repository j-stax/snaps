import './Footer.scss'
import facebookIcon from '../assets/images/Facebook.svg'
import xIcon from '../assets/images/X_twitter.svg'
import igIcon from '../assets/images/Instagram.svg'
import pinterestIcon from '../assets/images/Pinterest.svg'


export default function Footer() {
    return (
        <footer className="footer">
            <a className="footer__logo" href="#">Snaps</a>
            <div className="footer__keywords-container">
                <span>For photographers</span>
                <span>Hire talent</span>
                <span>Inspiration</span>
            </div>
            <nav className="footer__nav">
                <a className="footer__nav-link" href="">About</a>
                <a className="footer__nav-link" href="">Careers</a>
                <a className="footer__nav-link" href="">Support</a>
            </nav>
            <div className="footer__socials">
                <img src={facebookIcon} alt="Facebook icon" />
                <img src={xIcon} alt="X/Twitter icon" />
                <img src={igIcon} alt="Instagram icon" />
                <img src={pinterestIcon} alt="Pinterest icon" />
            </div>
            <div className="footer__legal-text-container">
                <span>&copy; 2024 Snaps</span>
                <span>. Terms</span>
                <span>Privacy</span>
                <span>Cookies</span>
            </div>
        </footer>
    )
}