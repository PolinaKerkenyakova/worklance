import PrimaryNavigation from '../Navigations/PrimaryNavigation/PrimaryNavigation';

import './Home.css';

const Home = () => {
    return (

        <header className="primary-header">
            <PrimaryNavigation />

            <div className="hero flex container">
                <h1 className="text-white">Find the perfect service for you</h1>
                <img src="/images/hero-image.png" alt="" />
            </div>
        </header>
    );
}

export default Home