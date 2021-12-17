import { useEffect, useState } from 'react';
import { getUserById } from '../../api/data';
import { useAuth } from '../../contexts/AuthContext';
import Footer from '../Footer/Footer';

import PrimaryNavigation from '../Navigations/PrimaryNavigation/PrimaryNavigation';
import ProfileOfferCard from '../Offers/OfferCard/ProfileOfferCard/ProfileOfferCard';

const Profile = () => {
    const { user } = useAuth();

    const [userInfo, setUserInfo] = useState({});
    const [userOffers, setUserOffers] = useState([]);

    useEffect(() => {
        (async () => {
            const data = await getUserById(user._id);
            setUserInfo(data.user);
            setUserOffers(data.offers);
        })();
    }, [user._id]);

    return (
        <>
            <header>
                <PrimaryNavigation />
            </header>
            <main className="container--small">
                <section>
                    <div>
                        <img src={userInfo.image} alt="User profile photo" />
                    </div>
                </section>

                <section className="flow">
                    {userOffers.map(o => <ProfileOfferCard key={o._id} {...o}/>)}
                </section>
            </main>
            <Footer />
        </>
    );
}

export default Profile;