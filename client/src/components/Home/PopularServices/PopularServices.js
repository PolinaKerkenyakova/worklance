import { Link } from 'react-router-dom';

import './PopularServices.css';

const PopularServices = () => {
    return (
        <section className="section-popular-services container">
            <h2>Popular professional services</h2>

            <ul className="popular-services flex">
                <li className="popular-service">
                    <Link to="/link to this category">
                        <div className="popular-service-wrapper">
                            <div className="digital-services">
                                <h4>Digital Services</h4>
                            </div>
                        </div>
                    </Link>
                </li>

                <li className="popular-service">
                    <Link to="/link to this category">
                        <div className="popular-service-wrapper">
                            <div className="construction-services">
                                <h4>Repair and Construction</h4>
                            </div>
                        </div>
                    </Link>
                </li>

                <li className="popular-service">
                    <Link to="/link to this category">
                        <div className="popular-service-wrapper">
                            <div className="craftsmen-services">
                                <h4>Craftsmen</h4>
                            </div>
                        </div>
                    </Link>
                </li>

                <li className="popular-service">
                    <Link to="/link to this category">
                        <div className="popular-service-wrapper">
                            <div className="beauty-services">
                                <h4>Beauty</h4>
                            </div>
                        </div>
                    </Link>
                </li>

                <li className="popular-service">
                    <Link to="/link to this category">
                        <div className="popular-service-wrapper">
                            <div className="health-services">
                                <h4>Health</h4>
                            </div>
                        </div>
                    </Link>
                </li>

                <li className="popular-service">
                    <Link to="/link to this category">
                        <div className="popular-service-wrapper">
                            <div className="educational-activities">
                                <h4>Educational and Social Activities</h4>
                            </div>
                        </div>
                    </Link>
                </li>

                <li className="popular-service">
                    <Link to="/link to this category">
                        <div className="popular-service-wrapper">
                            <div className="auto-services">
                                <h4>Auto Services</h4>
                            </div>
                        </div>
                    </Link>
                </li>

                <li className="popular-service">
                    <Link to="/link to this category">
                        <div className="popular-service-wrapper">
                            <div className="professional-services">
                                <h4>Professional Services</h4>
                            </div>
                        </div>
                    </Link>
                </li>
            </ul>
        </section>
    );
}


export default PopularServices;