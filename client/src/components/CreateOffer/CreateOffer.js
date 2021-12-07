import { createNewOffer } from '../../api/data';
import { useAuth } from '../../contexts/AuthContext';
import PrimaryButton from '../Buttons/PrimaryButton';
import PrimaryNavigation from '../Navigations/PrimaryNavigation/PrimaryNavigation';

const CreateOffer = () => {

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
        const creator = user._id;

        await createNewOffer({
            title,
            category,
            city,
            price,
            description,
            keywords,
            image,
            creator
        });


    }
    return (
        <>
            <header>
                <PrimaryNavigation />
            </header>
            <main>
                <h1>Create Offer</h1>
                <form onSubmit={onSubmitHandler}>
                    <input type="text" placeholder="Title" name="title" />
                    <input type="text" placeholder="Category" name="category" />
                    <input type="text" placeholder="City" name="city" />
                    <input type="text" placeholder="Price" name="price" />
                    <input type="textarea" placeholder="Description..." name="description" />
                    <input type="textarea" placeholder="Keywords..." name="keywords" />
                    <input type="text" placeholder="Image" name="image" />

                    <PrimaryButton>Create</PrimaryButton>
                </form>
            </main>
        </>
    );
}

export default CreateOffer;