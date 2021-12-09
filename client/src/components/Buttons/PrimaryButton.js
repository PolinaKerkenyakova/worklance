import './PrimaryButton.css';

const PrimaryButton = ({
    children
}) => {
    return (
        <button className="btn-primary">{children}</button>
    )
}

export default PrimaryButton;