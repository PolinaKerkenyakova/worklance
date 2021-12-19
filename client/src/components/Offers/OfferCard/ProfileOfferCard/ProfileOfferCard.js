import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { delOffer } from '../../../../api/data';

import PrimaryButton from '../../../Buttons/PrimaryButton';
import SecondaryButton from '../../../Buttons/SecondaryButton';
import Modal from '../../../UI/Modal';

import './ProfileOfferCard.css';

const ProfileOfferCard = ({
    _id,
    image,
    title,
    category
}) => {

    const [showHideModal, setShowHideModal] = useState(false);

    let navigate = useNavigate();

    const onEditHandler = () => {
        try {
            navigate(`/offers/${_id}/edit`);
        } catch (err) {
            console.log(err);
        }
    }

    const onDeletePreHandler = async () => {
        setShowHideModal(true);
    }

    const onDeleteHandler = async () => {
        navigate('/offers');
        setShowHideModal(false);
        await delOffer(_id);
    }

    const onCancelHandler = () => {
        setShowHideModal(false);
    }

    return (
        <>
            {showHideModal &&
                <Modal onCancel={onCancelHandler}>
                    <div className="flex modal-buttons">
                        <p>Are you sure you want to delete this offer?</p>
                        <div>
                            <SecondaryButton onClick={onCancelHandler}>Cancel</SecondaryButton>
                            <PrimaryButton onClick={onDeleteHandler}>Delete</PrimaryButton>
                        </div>
                    </div>
                </Modal>
            }

            <div className="profile-offer-card flex">
                <Link to={`/offers/${_id}`}>
                    <div className="profile-offer-img-container">
                        <img src={image} alt="Offer cover" />
                    </div>
                </Link>

                <div className="flex profile-offer-info">
                    <div>
                        <Link to={`/offers/${_id}`}><p className="text-accent">{title}</p></Link>
                        <p>{category}</p>
                    </div>
                    <div>
                        <button className="btn-primary" onClick={onEditHandler}>Edit</button>
                        <button className="btn-primary" onClick={onDeletePreHandler}>Delete</button>
                    </div>
                </div>
            </div>
        </>

    );
}

export default ProfileOfferCard;