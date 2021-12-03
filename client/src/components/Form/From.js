import { Link } from 'react-router-dom';

const Form = ({
    title,
    inputs,
    memberText,
    sign
}) => {
    return (
        <div className="form-card">
            <h1>{title}</h1>
            <button><span><img src="/images/icon-google.svg" alt="Google icon" /></span>Continue with Google</button>
            <p>OR</p>
            <form className="flex ">
              {inputs}
                <button>Continue</button>
            </form>
            <div className="flex">
                <label htmlFor="remember">
                    <input type="checkbox" id="remember" />
                    Remember Me
                </label>
                <p><a href="#">Forgot Password?</a></p>
            </div>
            <p>{memberText} <Link to={sign === 'Sign In' ? '/login' : '/register'}>{sign}</Link></p>
        </div>
    );
}

export default Form;