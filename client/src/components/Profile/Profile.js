import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { getUserProfileData } from '../../api/data';
import { useAuth } from '../../contexts/AuthContext';

import Footer from '../Footer/Footer';
import PrimaryNavigation from '../Navigations/PrimaryNavigation/PrimaryNavigation';
import ProfileOfferCard from '../Offers/OfferCard/ProfileOfferCard/ProfileOfferCard';

import './Profile.css';

const Profile = () => {
    const { user } = useAuth();

    const [userInfo, setUserInfo] = useState({});
    const [userOffers, setUserOffers] = useState([]);
    // const [watchList, setWatchList] = useState([]);

    useEffect(() => {
        (async () => {
            const data = await getUserProfileData(user._id);
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

                <section className="user-profile flex">
                    <div className="user-profile-image">
                        <img src={userInfo.profileImage} alt="User profile" />
                    </div>
                    <div className="user-profile-info">
                        <p>{userInfo.name}</p>
                        <p>{userInfo.email}</p>
                    </div>
                </section>

                <section className="profile-offers flow flex">
                    <h2>Your Offers</h2>
                    <div className="offers-container flex">
                        {userOffers.length > 0
                            ?
                            userOffers.map(o => <ProfileOfferCard key={o._id} {...o} />)
                            :
                            <p>No created offers, yet! <Link to="/create-offer" className="text-accent">Create</Link></p>
                        }
                    </div>
                </section>

                {/* <section className="profile-offers flow">
                    <h2>Watch List</h2>
                </section> */}
            </main>
            <Footer />
        </>
    );
}

export default Profile;