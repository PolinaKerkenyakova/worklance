import './PrimaryButton.css';

const PrimaryButton = (props) => {
    return (
        <button className="btn-primary" {...props}>{props.children}</button>
    )
}

export default PrimaryButton;