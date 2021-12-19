import { Link } from 'react-router-dom';

import './OfferCard.css';

const OfferCard = ({
    image,
    price,
    title,
    _id
}) => {

    return (
        <div className="offer-card">
            <div className="offer-img-container">
                <Link to={`/offers/${_id}`}>
                    <img src={image} alt={title} className="offer-img" />
                </Link>
            </div>

            <div className="offer-wrapper flow">
                {/* <div className="flex offer-author-info-container">
                    <div className="flex offer-author-info">
                        <div>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR6z_kO944stHlHumtPr3ULtRD8_2fw-di-3bPBky9ACAPATb7QkI4ggkR8ElA5IveM9I&usqp=CAU" alt="" className="author-profile-img" />
                        </div>
                        <p>John Doe</p>
                    </div>
                    <div className="flex offer-author-rating">
                        <img src="/images/star.svg" alt="Star icon" className="star-icon" />
                        <p>Stars</p>
                    </div>
                </div> */}

                <div>
                    <Link to={`/offers/${_id}`}>
                        <p className="offer-title">{title}</p>
                    </Link>
                </div>


                <div className="flex offer-info">
                    <Link to="/service-add-to-users-watch-list">
                        <div className="add-to-watch-list">
                            <img src="/images/binoculars.svg" alt="Heart icon" />
                            <span className="add-to-watch-list-text">Add to Watch List!</span>
                        </div>
                    </Link>
                    <p>
                        Price: $ {price}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default OfferCard;