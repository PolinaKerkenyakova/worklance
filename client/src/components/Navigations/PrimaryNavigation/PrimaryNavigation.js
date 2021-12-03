import { Link } from 'react-router-dom';

import './PrimaryNavigation.css';

const PrimaryNavigation = () => {
    return (
        <div className="flex primary-navigation container">
            <div className="text-accent">worklance</div>

            <div>
                {/* <button onClick={showMenuHandler} className="mobile-nav-toggle" aria-controls="primary-navigation"><span className="sr-only" aria-expanded={isMenuExpanded}>Menu</span><img src={isMenuExpanded ? closeMenu : openMenu} alt="" /></button> */}
                <nav>
                    <ul className="flex header-nav" /*id="primary-navigation"  className={`primary-navigation underline-indicators flex ${isMenuExpanded ? 'expand-menu' : ''}`}*/>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/offers">Offers</Link></li>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/register">Join</Link></li>
                        <li><Link to="/logout">Logout</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default PrimaryNavigation;