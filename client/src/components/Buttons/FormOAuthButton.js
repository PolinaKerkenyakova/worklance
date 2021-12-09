import './FormOAuthButton.css';

const FormOAuthButton = (props) => {
    return (
        <button className="flex oauth-btn"><img src={props.src} alt={props.alt} className="oauth-icon" />{props.children}</button>

    )
}

export default FormOAuthButton;