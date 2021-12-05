import './ProjectCard.css';

const ProjectCard = () => {
    return (
    <div className="project-card">
        <a href="link-to-offer">
            <img src="image-from-the-offer" alt="" />
        </a>

        <div className="project-info">
            <div className="seller-profile-image">
                <img src="" alt="" />
            </div>
            <div className="seller-ifo">
                <p>Book Design</p>
                <p>by creator username</p>
            </div>
        </div>
    </div>
)
}

export default ProjectCard;