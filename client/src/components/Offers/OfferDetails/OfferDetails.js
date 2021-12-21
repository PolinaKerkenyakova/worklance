import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { addComment, getOfferById, getUserById } from '../../../api/data';
import { useAuth } from '../../../contexts/AuthContext';

import PrimaryNavigation from '../../Navigations/PrimaryNavigation/PrimaryNavigation';
import Footer from '../../Footer/Footer';
import Rating from '../../Rating/Rating';
import PrimaryButton from '../../Buttons/PrimaryButton';
import Modal from '../../UI/Modal';
import SecondaryButton from '../../Buttons/SecondaryButton';
import TextAreaInput from '../../UI/TextAreaInput';
import Comment from '../Comment/Comment';

import './OfferDetails.css';

const OfferDetails = () => {
    const [offerData, setOfferData] = useState({});
    const [showHideModal, setShowHideModal] = useState(false);
    const [rating, setRating] = useState('');
    const [creatorData, setCreatorData] = useState({});

    const { id } = useParams();
    const { user } = useAuth();

    useEffect(() => {
        (async () => {
            const offer = await getOfferById(id);
            setOfferData(offer);
            const userData = await getUserById(offer.creator);
            setCreatorData(userData);
        })();
    }, [id]);

    const ShowHideContactsHandler = () => {
        setShowHideModal(true);
    }

    const closeContactsHandler = () => {
        setShowHideModal(false);
    }

    const onCommentSubmitHandler = async (e) => {
        e.preventDefault();
        const comment = e.target.comment.value;

        if (user._id && /[A-Za-z ]*/.test(comment)) {

            const offer = await addComment(offerData._id, {
                commentator: user.name,
                comment,
                rating,
                _id: Math.random() * 1000000000
            });

            setOfferData(offer);
        }
    }

    const onRateHandler = (rate) => {
        setRating(rate);
    }

    return (
        <div className="site-wrapper">
            {showHideModal &&
                <Modal onCancel={closeContactsHandler}>
                    <div className="contacts-modal flex">
                        <p>Contacts</p>
                        <div className="flex">
                            <p>{creatorData.name}</p>
                            <p>{creatorData.email}</p>
                        </div>
                        <div>
                            <SecondaryButton onClick={closeContactsHandler}>Cancel</SecondaryButton>
                        </div>
                    </div>
                </Modal>
            }

            <header>
                <PrimaryNavigation />
            </header>
            <main className="container offers-wrapper">
                <div className="flex offer-details-title">
                    <h1>{offerData.title}</h1>
                    <div className="flex offer-details-city">
                        <img src="/images/map.svg" alt="Map icon" />
                        <p>{offerData.city}</p>
                    </div>

                </div>

                <section className="flex offer-details-content">
                    <section className="offer-details-info flow">
                        <section className="flex offer-details-author-info">
                            <div className="flex">
                                <div>
                                    <img src={creatorData.profileImage} className="author-profile-img" />
                                </div>
                                <p>{creatorData.name}</p>
                            </div>

                            <div className='flex offer-details-author-rating'>
                                <>
                                    <p>Stars</p>
                                    <img src="/images/star.svg" alt="Star icon" className="star-icon" />
                                    <p>{(offerData.comments?.reduce((previous, { rating }) => previous + Number(rating), 0)) / offerData.comments?.length || '0'} / 5</p>
                                </>
                            </div>
                        </section>

                        <PrimaryButton onClick={ShowHideContactsHandler}>Contacts</PrimaryButton>

                        <section className="flow">
                            <p className="offer-details-description">Description</p>
                            <p>{offerData.description}</p>
                            <p>Price:<span className="text-accent"> ${offerData.price}</span></p>
                        </section>
                    </section>

                    <div className="offer-details-images">
                        <img src={offerData.image} alt="Offer cover" />
                    </div>
                </section>

                <section className="section-comments flex">
                    <h2>Comments</h2>

                    {(((user._id !== null) && (user._id !== offerData.creator)) && !offerData.comments?.find(c => c.commentator === user.name)) &&
                        <div className="offer-comment-form">
                            <form className="flow" onSubmit={onCommentSubmitHandler}>
                                <TextAreaInput placeholder='Write your comment here...' name="comment"></TextAreaInput>
                                <label className="text-accent">Rate this offer:</label>
                                <Rating onRate={onRateHandler} />
                                <PrimaryButton>Comment</PrimaryButton>
                            </form>
                        </div>
                    }

                    <section>
                        {offerData.comments?.length > 0
                            ?
                            offerData.comments.map(c => <Comment key={c._id} comment={c} />)
                            :
                            <p>No comments yet!</p>
                        }
                    </section>
                </section>

            </main>
            <Footer />
        </div>
    )
}

export default OfferDetails;