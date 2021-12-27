import { Link } from 'react-router-dom';

import './PopularServices.scss';

const PopularServices = () => {

    return (
        <section className="popular-services container">
            <h2>Popular professional services</h2>

            <ul className="popular-services__container flex">
                <li className="popular-services__service">
                    <Link to={`/offers/?search=Digital+services`}>
                        <div className="digital-services"></div>
                        <h4 className="popular-services__title">Digital Services</h4>
                    </Link>
                </li>

                <li className="popular-services__service">
                    <Link to={`/offers/?search=Repair+and+Construction`}>
                        <div className="construction-services"></div>
                        <h4 className="popular-services__title">Repair and Construction</h4>
                    </Link>
                </li>

                <li className="popular-services__service">
                    <Link to={`/offers/?search=Craftsmen`}>
                        <div className="craftsmen-services"></div>
                        <h4 className="popular-services__title">Craftsmen</h4>
                    </Link>
                </li>

                <li className="popular-services__service">
                    <Link to={`/offers/?search=Beauty`}>
                        <div className="beauty-services"></div>
                        <h4 className="popular-services__title">Beauty</h4>
                    </Link>
                </li>

                <li className="popular-services__service">
                    <Link to={`/offers/?search=Health`}>
                        <div className="health-services"></div>
                        <h4 className="popular-services__title">Health</h4>
                    </Link>
                </li>



                <li className="popular-services__service">
                    <Link to={`/offers/?search=Educational+and+Social+Activities`}>
                        <div className="educational-activities"></div>
                        <h4 className="popular-services__title">Educational and Social Activities</h4>
                    </Link>
                </li>


                <li className="popular-services__service">
                    <Link to={`/offers/?search=Auto+Services`}>
                        <div className="auto-services"></div>
                        <h4 className="popular-services__title">Auto Services</h4>
                    </Link>
                </li>

                <li className="popular-services__service">
                    <Link to={`/offers/?search=Professional+Services`}>
                        <div className="professional-services"></div>
                        <h4 className="popular-services__title">Professional Services</h4>
                    </Link>
                </li>
            </ul>
        </section>
    );
}


export default PopularServices;