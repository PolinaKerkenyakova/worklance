import './Footer.scss';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__wrapper grid container">

                <div>
                    <h5 className="ff-accent footer__title">worklance</h5>
                    <ul className="footer__list flex">
                        <li className="footer___item">
                            <a href="/" className="footer__link">
                                <img src="/images/facebook-icon.svg" alt="Facebook" className="footer__social-icon" />
                            </a>
                        </li>
                        <li className="footer__item">
                            <a href="/" className="footer__link">
                                <img src="/images/instagram-icon.svg" alt="Instagram" className="footer__social-icon"/>
                            </a>
                        </li>
                        <li className="footer__item">
                            <a href="/" className="footer__link">
                                <img src="/images/twitter-icon.svg" alt="Twitter" className="footer__social-icon"/>
                            </a>
                        </li>
                    </ul>
                </div>

                 <div>
                    <h5 className="footer__title">About</h5>
                    <ul className="footer__list">
                        <li className="footer__item">
                            <a href="/" className="footer__link">Careers</a>
                        </li>
                        <li className="footer__item">
                            <a href="/" className="footer__link">Privacy Policy</a>
                        </li>
                        <li className="footer__item">
                            <a href="/" className="footer__link">Terms of Service</a>
                        </li>
                        <li className="footer__item">
                            <a href="/" className="footer__link">Help and Support</a>
                        </li>
                    </ul>
                </div>

                <div>
                    <h5 className="footer__title">Categories</h5>
                    <ul className="footer__list">
                        <li className="footer__item">
                            <a href="/" className="footer__link">Digital Services</a>
                        </li>
                        <li className="footer__item">
                            <a href="/" className="footer__link">Repair and Construction</a>
                        </li>
                        <li className="footer__item">
                            <a href="/" className="footer__link">Craftsmen</a>
                        </li>
                        <li className="footer__item">
                            <a href="/" className="footer__link">Beauty</a>
                        </li>
                    </ul>
                </div>


                <ul className="footer__list">
                    <li className="footer__item">
                        <a href="/" className="footer__link">Health</a>
                    </li>
                    <li className="footer__item">
                        <a href="/" className="footer__link">Education and Social Activities</a>
                    </li>
                    <li className="footer__item">
                        <a href="/" className="footer__link">Auto Services</a>
                    </li>
                    <li className="footer__item">
                        <a href="/" className="footer__link">Professional Services</a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;