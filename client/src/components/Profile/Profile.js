import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { getUserProfileData } from '../../api/data';
import { useAuth } from '../../contexts/AuthContext';

import Footer from '../Footer/Footer';
import PrimaryNavigation from '../PrimaryNavigation/PrimaryNavigation';
import ProfileOfferCard from '../Profile/ProfileOfferCard/ProfileOfferCard';

import './Profile.scss';

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
        <div className="site-wrapper">
            <header>
                <PrimaryNavigation />
            </header>
            <main className="container profile">

                <section className="profile__user flex">
                    <div className="profile__user-img-container">
                        <img src={userInfo.profileImage} alt="User profile" />
                    </div>
                    <div>
                        <p>{userInfo.name}</p>
                        <p>{userInfo.email}</p>
                    </div>
                </section>

                <section className="profile__offers flow flex">
                    <h2>Your Offers</h2>
                    <div className="profile__offers-container flex">
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
        </div>
    );
}

export default Profile;