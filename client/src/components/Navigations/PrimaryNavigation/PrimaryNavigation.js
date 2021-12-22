import { useState } from 'react';
import { Link } from 'react-router-dom';

import { useAuth } from '../../../contexts/AuthContext';

import openMenu from '../assets/icon-hamburger.svg';
import closeMenu from '../assets/icon-close.svg';

import './PrimaryNavigation.css';

const PrimaryNavigation = () => {
    const { isAuthenticated } = useAuth();

    const [isMenuExpanded, setIsMenuExpanded] = useState(false);
    const showMenuHandler = (e) => {
        setIsMenuExpanded(!isMenuExpanded);
    }

    return (
        <nav className="flex primary-navigation container">
            <div className="flex logo-container">
                <Link to="/"><span className="text-accent ff-accent primary-navigation-logo">worklance</span></Link>

                <div onClick={showMenuHandler} className="menu-icon-container">
                    {isMenuExpanded ? <img src={closeMenu} alt="Close menu" /> : <img src={openMenu} alt="Open menu" />}
                </div>
            </div>


            <ul className={`header-nav ${isMenuExpanded ? 'expanded' : ''}`}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/offers">Offers</Link></li>
                {isAuthenticated
                    ?
                    <>
                        <li><Link to="/create-offer">Create Offer</Link></li>
                        <li><Link to="/profile">Profile</Link></li>
                        <li><Link to="/logout">Logout</Link></li>
                    </>
                    :
                    <>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/register">Join</Link></li>
                    </>
                }
            </ul>
        </nav>
    )
}

export default PrimaryNavigation;