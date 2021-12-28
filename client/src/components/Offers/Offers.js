import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';

import { getAllOffers } from '../../api/data';

import Footer from '../Footer/Footer';
import PrimaryNavigation from '../PrimaryNavigation/PrimaryNavigation';
import OfferCard from './OfferCard/OfferCard';

import './Offers.scss';

const Offers = () => {
    const [offers, setOffers] = useState([]);

    const { search } = useLocation();
    const searchText = search.split('=')[1].split('+').join(' ');

    useEffect(() => {
        if (search) {
            (async () => {
                const offersData = await getAllOffers(searchText);
                setOffers(offersData);
            })();
        }

        (async () => {
            const offersData = await getAllOffers(search);
            setOffers(offersData);
        })();
    }, [search, searchText]);

    const onCategoryChange = async (e) => {
        const offersData = await getAllOffers(e.target.textContent);
        setOffers(offersData);
    }

    const onSearchHandler = async (e) => {
        e.preventDefault();
        const search = e.target.search.value.trim();
        if (/[A-Za-z ]*/.test(search)) {
            const offersData = await getAllOffers(search);
            setOffers(offersData);
        }
    }

    return (
        <div className="site-wrapper">
            <header>
                <PrimaryNavigation />
                <form className="offers__search-form container flex" onSubmit={onSearchHandler}>
                    <input type="text" placeholder='Try "Photographer"' name="search" />
                    <button className="btn-primary">Search</button>
                </form>

                <ul className="categories__list flex container--small">
                    <li className="categories__item btn-primary" onClick={onCategoryChange}>Digital Services</li>
                    <li className="categories__item btn-primary" onClick={onCategoryChange}>Repair and Construction</li>
                    <li className="categories__item btn-primary" onClick={onCategoryChange}>Craftsmen</li>
                    <li className="categories__item btn-primary" onClick={onCategoryChange}>Beauty</li>
                    <li className="categories__item btn-primary" onClick={onCategoryChange}>Health</li>
                    <li className="categories__item btn-primary" onClick={onCategoryChange}>Educational and Social Activities</li>
                    <li className="categories__item btn-primary" onClick={onCategoryChange}>Auto Services</li>
                    <li className="categories__item btn-primary" onClick={onCategoryChange}>Professional Services</li>
                    <li className="categories__item btn-primary" onClick={onCategoryChange}>See All</li>
                </ul>
            </header>
            <main className="container">
                <div className="offers__wrapper flex">
                    <h1 className="offers__title">Offers</h1>

                    <section className="flex offers__container">
                        {offers.length > 0
                            ?
                            offers.map(offer => <OfferCard key={offer._id} {...offer} />)
                            :
                            <p>No offers in the database!</p>
                        }
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default Offers;