import { useState } from 'react';
import { Link } from 'react-router-dom';

import { useAuth } from '../../contexts/AuthContext';

import openMenu from './assets/icon-hamburger.svg';
import closeMenu from './assets/icon-close.svg';

import './PrimaryNavigation.scss';

const PrimaryNavigation = () => {
    const { isAuthenticated } = useAuth();

    const [isMenuExpanded, setIsMenuExpanded] = useState(false);

    const showMenuHandler = () => {
        setIsMenuExpanded(!isMenuExpanded);
    }

    return (
        <nav className="flex primary-navigation container">
            <div className="flex primary-navigation__logo-container">
                <Link to="/"><span className="text-accent ff-accent primary-navigation__logo">worklance</span></Link>

                <div onClick={showMenuHandler} className="primary-navigation__icon-container">
                    {isMenuExpanded ? <img src={closeMenu} alt="Close menu" /> : <img src={openMenu} alt="Open menu" />}
                </div>
            </div>

            <ul className={`primary-navigation__list ${isMenuExpanded ? 'expanded' : ''}`}>
                <li><Link to="/" className="primary-navigation__link">Home</Link></li>
                <li><Link to="/offers" className="primary-navigation__link">Offers</Link></li>
                {isAuthenticated
                    ?
                    <>
                        <li><Link to="/create-offer" className="primary-navigation__link">Create Offer</Link></li>
                        <li><Link to="/profile" className="primary-navigation__link">Profile</Link></li>
                        <li><Link to="/logout" className="primary-navigation__link">Logout</Link></li>
                    </>
                    :
                    <>
                        <li><Link to="/login" className="primary-navigation__link">Login</Link></li>
                        <li><Link to="/register" className="primary-navigation__link">Join</Link></li>
                    </>
                }
            </ul>
        </nav>
    );
}

export default PrimaryNavigation;