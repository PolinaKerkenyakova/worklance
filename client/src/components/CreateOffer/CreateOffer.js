import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { createNewOffer } from '../../api/data';
import { useAuth } from '../../contexts/AuthContext';

import PrimaryNavigation from '../Navigations/PrimaryNavigation/PrimaryNavigation';
import PrimaryButton from '../Buttons/PrimaryButton';
import Footer from '../Footer/Footer';
import FormInput from '../UI/FormInput';
import TextAreaInput from '../UI/TextAreaInput';

import './CreateOffer.css';

const CreateOffer = () => {

    const navigate = useNavigate();

    const [isError, setIsError] = useState(false);

    const { user } = useAuth();

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

                const offer = await createNewOffer({
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

                navigate(`/offers/${offer._id}`);
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
                    <h1>Create Offer</h1>

                    <form onSubmit={onSubmitHandler} className="flow create-form">
                        <FormInput type="text" placeholder="Title" name="title" />
                        <select name="category" className="offer-category-options">
                            <option value="Repair and Construction">Repair and Contruction</option>
                            <option value="Digital Services">Digital Services</option>
                            <option value="Craftsmen">Craftsmen</option>
                            <option value="Beauty">Beauty</option>
                            <option value="Health">Health</option>
                            <option value="Educational and Social Activities">Educational and Social Activities</option>
                            <option value="Auto Services">Auto Services</option>
                            <option value="Professional Services">Professional Services</option>
                        </select>
                        <FormInput type="text" placeholder="City" name="city" />
                        <FormInput type="text" placeholder="Price" name="price" />
                        <TextAreaInput placeholder="Description..." name="description" />
                        <TextAreaInput placeholder="Keywords... (e.g. photographer, logo, marketing)" name="keywords" />
                        <FormInput type="text" placeholder="https://" name="image" />
                        <PrimaryButton>Create</PrimaryButton>
                        {isError && <p>All fields are required!</p>}
                    </form>
                </div>
            </main >
            <Footer />
        </div >
    );
}

export default CreateOffer;