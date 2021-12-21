import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import { editOffer, getOfferById } from '../../api/data';

import { useAuth } from '../../contexts/AuthContext';
import PrimaryButton from '../Buttons/PrimaryButton';
import Footer from '../Footer/Footer';
import PrimaryNavigation from '../Navigations/PrimaryNavigation/PrimaryNavigation';
import FormInput from '../UI/FormInput';
import TextAreaInput from '../UI/TextAreaInput';

import './EditOffer.css';

const EditOffer = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    const { user } = useAuth();

    const [offer, setOffer] = useState({});
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        let isMounted = true;

        (async () => {
            const offerData = await getOfferById(id);
            if (isMounted) setOffer(offerData);
        })();

        return () => isMounted = false;
    }, [id]);

    const onSubmitHandler = async (e) => {
        e.preventDefault();

        const data = new FormData(e.target);

        const title = data.get('title');
        const category = data.get('category');
        const city = data.get('city');
        const price = data.get('price');
        const description = data.get('description');
        const keywords = data.get('keywords');
        const image = data.get('image');

        try {
            if (title.trim() && category.trim() && city.trim() && price.trim() && description.trim() && keywords.trim() && image.trim()) {
                await editOffer(id,
                    {
                        title,
                        category,
                        city,
                        price,
                        description,
                        keywords,
                        image,
                        creator: user._id
                    });

                setIsError(false);

                navigate(`/offers/${id}`)
            }
        } catch (err) {
            console.log(err.message);
            (() => toast.error(err.message))();
        }


        setIsError(true);
    }
    return (
        <div className="site-wrapper">
            <header>
                <PrimaryNavigation />
            </header>
            <main className="flex page-wrapper">
                {/* className="create-offer-wrapper flex */}
                <div className="create-form-wrapper">
                    <h1>Edit Offer</h1>

                    <form onSubmit={onSubmitHandler} className="flow create-form">
                        <FormInput type="text" placeholder="Title" name="title" defaultValue={offer.title} />
                        <select name="category" className="offer-category-options" defaultValue={offer.category}>
                            <option value="Repair and Construction">Repair and Contruction</option>
                            <option value="Digital Services">Digital Services</option>
                            <option value="Craftsmen">Craftsmen</option>
                            <option value="Beauty">Beauty</option>
                            <option value="Health">Health</option>
                            <option value="Educational and Social Activities">Educational and Social Activities</option>
                            <option value="Auto Services">Auto Services</option>
                            <option value="Professional Services">Professional Services</option>
                        </select>
                        <FormInput type="text" placeholder="City" name="city" defaultValue={offer.city} />
                        <FormInput type="text" placeholder="Price" name="price" defaultValue={offer.price} />
                        <TextAreaInput placeholder="Description..." name="description" defaultValue={offer.description} />
                        <TextAreaInput placeholder="Keywords... (e.g. photographer, logo, marketing)" name="keywords" defaultValue={offer.keywords} />
                        <FormInput type="text" placeholder="https://" name="image" defaultValue={offer.image} />
                        <PrimaryButton>Save</PrimaryButton>
                        {isError && <p>All fields are required!</p>}
                    </form>
                </div>
            </main >
            <Footer />
        </div >
    );
}

export default EditOffer;