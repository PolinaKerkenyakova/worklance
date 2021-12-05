import { Link } from 'react-router-dom';

import './CategoryCard.css';

const CategoryCard = () => {
    return (
        <div>
            <Link to="/filtered-offeres/category">
                <h4>Customize your webside <span>Wordpress</span></h4>
                <img src="/image-of-the-category" alt="" />
            </Link>
        </div>
    )
}

export default CategoryCard;