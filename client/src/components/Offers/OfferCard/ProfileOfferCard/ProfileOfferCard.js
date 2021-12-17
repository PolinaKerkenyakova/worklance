import { Link, useNavigate } from 'react-router-dom';
import EditOffer from '../../../EditOffer/EditOffer';

import './ProfileOfferCard.css';

const ProfileOfferCard = ({
    _id,
    image,
    title,
    category
}) => {

    let navigate = useNavigate();

    const onEditHandler = () => {
        navigate(`/offers/${_id}/edit`);
    }

    const onDeleteHandler = () => {

    }

    return (
        <div className="profile-offer-card flex">
            <Link to={`/offers/${_id}`}>
                <div className="profile-offer-img-container">
                    <img src={image} alt="Offer image" />
                </div>
            </Link>

            <div className="flex profile-offer-info">
                <div>
                    <Link to={`/offers/${_id}`}><p className="text-accent">{title}</p></Link>
                    <p>{category}</p>
                </div>
                <div>
                    <button className="btn-primary" onClick={onEditHandler}>Edit</button>
                    <button className="btn-primary" onClick={onDeleteHandler}>Delete</button>
                </div>
            </div>
        </div>
    )
}

export default ProfileOfferCard;