import './FormOAuthButton.scss';

const FormOAuthButton = (props) => {
    return (
        <button className="flex oauth-btn"><img src={props.src} alt={props.alt} className="oauth-btn__icon" />{props.children}</button>

    )
}

export default FormOAuthButton;