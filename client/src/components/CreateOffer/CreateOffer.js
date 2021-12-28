import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { createNewOffer } from '../../api/data';
import { useAuth } from '../../contexts/AuthContext';

import PrimaryNavigation from '../PrimaryNavigation/PrimaryNavigation';
import PrimaryButton from '../Buttons/PrimaryButton';
import Footer from '../Footer/Footer';
import FormInput from '../FormElements/Inputs/FormInput';
import TextAreaInput from '../FormElements/Inputs/FormInput';

import './CreateOffer.scss';

const CreateOffer = () => {

    const navigate = useNavigate();

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

                navigate(`/offers/${offer._id}`);
            } else {
                (() => toast.error('All input fields are required!'))();
            }
        } catch (err) {
            console.log(err.message);
            (() => toast.error(err.message))();
        }
    }

    return (
        <div className="site-wrapper">
            <header>
                <PrimaryNavigation />
            </header>
            <main className="flex create">
                <div className="create__card">
                    <div className="create__wrapper flex">
                        <h1>Create Offer</h1>

                        <form onSubmit={onSubmitHandler} className="create__form flex">
                            <FormInput type="text" placeholder="Title" name="title" />
                            <select name="category" className="create__options">
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
                        </form>
                    </div>
                </div>
            </main >
            <Footer />
        </div >
    );
}

export default CreateOffer;