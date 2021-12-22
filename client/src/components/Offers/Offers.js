import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { getAllOffers } from '../../api/data';

import Footer from '../Footer/Footer';
import PrimaryNavigation from '../Navigations/PrimaryNavigation/PrimaryNavigation';
import OfferCard from './OfferCard/OfferCard';

import './Offers.css';

const Offers = () => {

    const [searchCategory, setSearchCategory] = useState('See All');
    const [offers, setOffers] = useState([]);

    const location = useLocation();


    useEffect(() => {

        // doesn't work every time ?!
        let searchText = location.search.split('=')[1];

        if (searchText) {
            setSearchCategory(searchText);
        }

        (async () => {
            const offersData = await getAllOffers(searchCategory);
            setOffers(offersData);
        })();
    }, [location.search, searchCategory]);

    const onCategoryChange = (e) => {
        setSearchCategory(e.target.textContent);
    }

    const onSearchHandler = async (e) => {
        e.preventDefault();
        const search = e.target.search.value.trim();
        if (/[A-Za-z ]*/.test(search)) {
            setSearchCategory(search);
        }
    }

    return (
        <div className="site-wrapper">
            <header>
                <PrimaryNavigation />
                <form className="offers-search-form container flex" onSubmit={onSearchHandler}>
                    <input type="text" placeholder='Try "Photographer"' name="search" />
                    <button className="btn-primary">Search</button>
                </form>

                <ul className="categories-list flex container--small">
                    <li className="categories-item btn-primary" onClick={onCategoryChange}>Digital Services</li>
                    <li className="categories-item btn-primary" onClick={onCategoryChange}>Repair and Construction</li>
                    <li className="categories-item btn-primary" onClick={onCategoryChange}>Craftsmen</li>
                    <li className="categories-item btn-primary" onClick={onCategoryChange}>Beauty</li>
                    <li className="categories-item btn-primary" onClick={onCategoryChange}>Health</li>
                    <li className="categories-item btn-primary" onClick={onCategoryChange}>Educational and Social Activities</li>
                    <li className="categories-item btn-primary" onClick={onCategoryChange}>Auto Services</li>
                    <li className="categories-item btn-primary" onClick={onCategoryChange}>Professional Services</li>
                    <li className="categories-item btn-primary" onClick={onCategoryChange}>See All</li>
                </ul>
            </header>
            <main className="container offers-wrapper">
                <h1>Offers</h1>

                <section className="flex offers-section">
                    {offers.length > 0
                        ?
                        offers.map(offer => <OfferCard key={offer._id} {...offer} />)
                        :
                        <p>No offers in the database!</p>
                    }
                </section>

            </main>
            <Footer />
        </div>
    )
}

export default Offers;