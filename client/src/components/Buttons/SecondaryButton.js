import './SecondaryButton.css';

const SecondaryButton = (props) => {
    return (
        <button className="btn-secondary" {...props}>{props.children}</button>
    )
}

export default SecondaryButton;