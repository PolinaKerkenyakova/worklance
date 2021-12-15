import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { getAllOffers } from '../../api/data';

import Footer from '../Footer/Footer';
import PrimaryNavigation from '../Navigations/PrimaryNavigation/PrimaryNavigation';
import OfferCard from './OfferCard/OfferCard';

import './Offers.css';

const Offers = () => {
    const [offers, setOffers] = useState([]);
    
    useEffect(() => {
        (async () => {
            const offers = await getAllOffers();
            console.log(offers);
            setOffers(offers);
        })();
    }, [])

    console.log(offers);
    return (
        <div className="site-wrapper">
            <header>
                <PrimaryNavigation />
                <form method="POST" className="offers-search-form container flex">
                    <input type="text" placeholder='Try "Photographer"' />
                    <button className="btn-primary">Search</button>
                </form>

                <ul className="categories-list flex container--small">
                    <Link to="/"><li className="categories-item btn-primary">Digital Services</li></Link>
                    <Link to="/"><li className="categories-item btn-primary">Repair and Contruction</li></Link>
                    <Link to="/"><li className="categories-item btn-primary">Craftsmen</li></Link>
                    <Link to="/"><li className="categories-item btn-primary">Beauty</li></Link>
                    <Link to="/"><li className="categories-item btn-primary">Health</li></Link>
                    <Link to="/"><li className="categories-item btn-primary">Education and Social Activities</li></Link>
                    <Link to="/"><li className="categories-item btn-primary">Auto Services</li></Link>
                    <Link to="/"><li className="categories-item btn-primary">Professional Services</li></Link>
                    <Link to="/"><li className="categories-item btn-primary">See All</li></Link>
                </ul>
            </header>
            <main className="container offers-wrapper">
                <h1>Offers</h1>

                <section className="flex offers-section flow">
                    {offers.map(offer => <OfferCard key={offer._id} {...offer} />)}

                </section>

            </main>
            <Footer />
        </div>
    )
}

export default Offers;