import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { getOfferById } from '../../../api/data';

import PrimaryNavigation from '../../Navigations/PrimaryNavigation/PrimaryNavigation';
import Footer from '../../Footer/Footer';

import './OfferDetails.css';

const OfferDetails = () => {
    const [offerData, setOfferData] = useState({});

    const { id } = useParams();

    useEffect(() => {
        (async () => {
            const offer = await getOfferById(id);
            setOfferData(offer)
        })();
    }, [id]);

    console.log(offerData);


    return (
        <div className="site-wrapper">
            <header>
                <PrimaryNavigation />
            </header>
            <main className="container offers-wrapper">
                <div className="flex offer-details-title">
                    <h1>{offerData.title}</h1>
                    <div className="flex offer-details-city">
                        <img src="/images/map.svg" alt="Map icon" />
                        <p>{offerData.city}</p>
                    </div>

                </div>

                <section className="flex offer-details-content">
                    <section className="offer-details-info flow">
                        <section className="flex offer-details-author-info">
                            <div className="flex">
                                <div>
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR6z_kO944stHlHumtPr3ULtRD8_2fw-di-3bPBky9ACAPATb7QkI4ggkR8ElA5IveM9I&usqp=CAU" alt="" className="author-profile-img" />
                                </div>
                                <p>John Doe</p>

                            </div>
                            <div className='flex offer-details-author-rating'>
                                <p>Rating</p>
                                <img src="/images/star.svg" alt="Star icon" className="star-icon" />
                                <p>0.00</p>
                            </div>
                        </section>

                        <button className="btn-primary">Contacts</button>

                        <section>
                            <h2>Description</h2>
                            <p>{offerData.description}</p>

                            <p>Price: ${offerData.price}$</p>
                        </section>
                    </section>

                    <div className="offer-details-images">
                        <img src={offerData.image} alt="Offer image" />
                    </div>
                </section>

                <section>
                    <h2>Comments</h2>
                </section>
            </main>
            <Footer />
        </div>
    )
}

export default OfferDetails;