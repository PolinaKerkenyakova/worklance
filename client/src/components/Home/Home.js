import PrimaryNavigation from '../Navigations/PrimaryNavigation/PrimaryNavigation';
import PopularServices from './PopularServices/PopularServices';
import SellingPoints from './SellingPoints/SellingPoints';
import Footer from '../Footer/Footer';

import './Home.css';

const Home = () => {
    return (
        <>
            <header className="primary-header">
                <PrimaryNavigation />

                <div className="hero">
                    <div className="hero-wrapper flex container">
                        <h1 className="text-accent">Find the perfect service for you</h1>
                        <form action="" className="primary-search-form">
                            <input type="text" placeholder='Try "Photographer"' />
                            <button>Search</button>
                        </form>
                    </div>
                </div>
            </header>
            <main>
                <PopularServices />
                <SellingPoints />
            </main>
            <Footer />
        </>
    );
}

export default Home;