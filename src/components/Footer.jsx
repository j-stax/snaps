import './Footer.scss'
import FacebookIcon from '../assets/images/Facebook.svg?react'
import XIcon from '../assets/images/X_twitter.svg?react'
import IgIcon from '../assets/images/Instagram.svg?react'
import PinterestIcon from '../assets/images/Pinterest.svg?react'

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer__main">
                <a className="footer__logo" href='/'>Snaps</a>
                <div className="footer__content-wrapper">
                    <div className="footer__text-container">
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
                    </div>
                    <div className="footer__desktop-socials-wrapper">
                        <div className="footer__desktop-socials">
                            <a className="footer__desktop-socials-link" href="https://www.facebook.com/" target='_blank'>
                                <FacebookIcon className="footer__desktop-socials-icon" />
                            </a>
                            <a className="footer__desktop-socials-link" href="https://www.x.com/" target='_blank'>
                                <XIcon className="footer__desktop-socials-icon" />
                            </a>
                            <a className="footer__desktop-socials-link" href="https://www.instagram.com/" target='_blank'>
                                <IgIcon className="footer__desktop-socials-icon" />
                            </a>
                            <a className="footer__desktop-socials-link" href="https://www.pinterest.com/" target='_blank'>
                                <PinterestIcon className="footer__desktop-socials-icon" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer__socials">
                <a className="footer__socials-link" href="https://www.facebook.com/" target='_blank'>
                    <FacebookIcon className="footer__socials-icon" />
                </a>
                <a className="footer__socials-link" href="https://www.x.com/" target='_blank'>
                    <XIcon className="footer__socials-icon" />
                </a>
                <a className="footer__socials-link" href="https://www.instagram.com/" target='_blank'>
                    <IgIcon className="footer__socials-icon" />
                </a>
                <a className="footer__socials-link" href="https://www.pinterest.com/" target='_blank'>
                    <PinterestIcon className="footer__socials-icon" />
                </a>
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