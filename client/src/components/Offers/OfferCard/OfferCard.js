import { Link } from 'react-router-dom';

import './OfferCard.scss';

const OfferCard = ({
    image,
    price,
    title,
    _id
}) => {

    return (
        <div className="offer">
            <div>
                <Link to={`/offers/${_id}`}>
                    <img src={image} alt={title} className="offer__img" />
                </Link>
            </div>

            <div className="offer__wrapper flow">
                <div>
                    <Link to={`/offers/${_id}`}>
                        <p className="text-dark">{title}</p>
                    </Link>
                </div>

                <div className="flex offer__info">
                    <Link to="/service-add-to-users-watch-list">
                        <div className="add-to-watch-list">
                            <img src="/images/binoculars.svg" alt="Heart icon" />
                            <span className="add-to-watch-list__text">Add to Watch List!</span>
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