import { Link } from 'react-router-dom';

const PrimaryLink = ({
    link,
    children
}) => {
    return (
        <Link to={link} className="text-accent">{children}</Link>
    )
}

export default PrimaryLink;