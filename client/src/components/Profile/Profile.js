import { useEffect, useState } from 'react';
import { getUserById } from '../../api/data';
import { useAuth } from '../../contexts/AuthContext';

import PrimaryNavigation from '../Navigations/PrimaryNavigation/PrimaryNavigation';

const Profile = () => {
    const { user } = useAuth();

    const [userInfo, setUserInfo] = useState({});
    const [userPosts, setUserPosts] = useState({});

    useEffect(() => {
        (async () => {
            const data = await getUserById(user._id);
                setUserInfo(data.user);
                setUserPosts(data.offers);
        })();
    }, []);

    return (
        <>
            <header>
                <PrimaryNavigation />
            </header>
            <main className="container">
                <div>
                    <img src="" alt="" />
                </div>
            </main>
        </>
    );
}

export default Profile;