import './Comment.scss';

const Comment = ({ comment }) => {
    return (
        <div className="comment">
            <div className="flex comment__info">
                <p className="comment__commentator">{comment.commentator}</p>
                <p className="flex"><img src="/images/star.svg" alt="Star icon" className="comment__star-icon" />{comment.rating}</p>
            </div>
            <p className="comment__text">{comment.comment}</p>
        </div>
    );
}

export default Comment;