import { useEffect, useState } from 'react';
import { getAllOffers } from '../../api/data';
import PrimaryNavigation from '../Navigations/PrimaryNavigation/PrimaryNavigation';

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
        <>
            <header>
                <PrimaryNavigation />
            </header>
            <main>
                <h1>Offers</h1>
                {offers.map(offer => (
                    <div>{offer.title}</div>
                ))}
            </main>
        </>
    )
}

export default Offers;