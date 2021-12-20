import './Comment.css';

const Comment = ({ comment }) => {
    return (
        <div className="comment">
            <div className="flex comment-info">
                <p className="comment-commentator">{comment.commentator}</p>
                <p className="flex"><img src="/images/star.svg" alt="Star icon" className="star-icon" />{comment.rating}</p>
            </div>
            <p>{comment.comment}</p>
        </div>
    )

}

export default Comment;