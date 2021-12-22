import './Footer.css';

const Footer = () => {
    return (

        <footer className="footer">
            <div className="footer-wrapper grid container">

                <div>
                    <h5 className="ff-accent">worklance</h5>
                    <ul className="footer-list flex">
                        <li className="footer-item">
                            <a href="/" className="footer-link">
                                <img src="/images/facebook-icon.svg" alt="Facebook" />
                            </a>
                        </li>
                        <li className="footer-item">
                            <a href="/" className="footer-link">
                                <img src="/images/instagram-icon.svg" alt="Instagram" />
                            </a>
                        </li>
                        <li className="footer-item">
                            <a href="/" className="footer-link">
                                <img src="/images/twitter-icon.svg" alt="Twitter" />
                            </a>
                        </li>
                    </ul>
                </div>

                 <div>
                    <h5>About</h5>
                    <ul className="footer-list">
                        <li className="footer-item">
                            <a href="/" className="footer-link">Careers</a>
                        </li>
                        <li className="footer-item">
                            <a href="/" className="footer-link">Privacy Policy</a>
                        </li>
                        <li className="footer-item">
                            <a href="/" className="footer-link">Terms of Service</a>
                        </li>
                        <li className="footer-item">
                            <a href="/" className="footer-link">Help and Support</a>
                        </li>
                    </ul>
                </div>

                <div>
                    <h5>Categories</h5>
                    <ul className="footer-list">
                        <li className="footer-item">
                            <a href="/" className="footer-link">Digital Services</a>
                        </li>
                        <li className="footer-item">
                            <a href="/" className="footer-link">Repair and Construction</a>
                        </li>
                        <li className="footer-item">
                            <a href="/" className="footer-link">Craftsmen</a>
                        </li>
                        <li className="footer-item">
                            <a href="/" className="footer-link">Beauty</a>
                        </li>
                    </ul>
                </div>


                <ul className="footer-list">
                    <li className="footer-item">
                        <a href="/" className="footer-link">Health</a>
                    </li>
                    <li className="footer-item">
                        <a href="/" className="footer-link">Education and Social Activities</a>
                    </li>
                    <li className="footer-item">
                        <a href="/" className="footer-link">Auto Services</a>
                    </li>
                    <li className="footer-item">
                        <a href="/" className="footer-link">Professional Services</a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;