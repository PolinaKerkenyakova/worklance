import { useNavigate } from 'react-router-dom';

import PrimaryNavigation from '../Navigations/PrimaryNavigation/PrimaryNavigation';
import PopularServices from './PopularServices/PopularServices';
import SellingPoints from './SellingPoints/SellingPoints';
import Footer from '../Footer/Footer';

import './Home.css';

const Home = () => {
    let navigate = useNavigate();

    const onSearchHandler = async (e) => {
        e.preventDefault();
        const search = e.target.search.value.trim();
        if (/[A-Za-z ]*/.test(search)) {
            navigate(`/offers/?search=${search}`)
        }
    }

    return (
        <div className="site-wrapper">
            <header className="primary-header">
                <PrimaryNavigation />

                <div className="hero">
                    <div className="hero-wrapper flex container">
                        <h1 className="text-accent">Find the perfect service for you</h1>
                        <form className="primary-search-form" onSubmit={onSearchHandler}>
                            <input type="text" placeholder='Try "Photographer"' name="search" />
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
        </div>
    );
}

export default Home;