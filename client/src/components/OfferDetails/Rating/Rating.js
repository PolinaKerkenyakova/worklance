import './Rating.scss';

const Rating = ({ onRate }) => {
    const getRatingHandler = (e) => {
        onRate(e.target.htmlFor.split('-')[1]);
    }

    return (
        <div className="rating">
            <input type="radio" className="rating" id="rating-5" />
            <label htmlFor="rating-5" onClick={getRatingHandler}></label>
            <input type="radio" className="rating" id="rating-4" />
            <label htmlFor="rating-4" onClick={getRatingHandler}></label>
            <input type="radio" className="rating" id="rating-3" />
            <label htmlFor="rating-3" onClick={getRatingHandler}></label>
            <input type="radio" className="rating" id="rating-2" />
            <label htmlFor="rating-2" onClick={getRatingHandler}></label>
            <input type="radio" className="rating" id="rating-1" />
            <label htmlFor="rating-1" onClick={getRatingHandler}></label>
        </div>
    );
}

export default Rating;