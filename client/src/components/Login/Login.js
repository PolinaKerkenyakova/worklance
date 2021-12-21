import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import useInput from '../../hooks/useInput';
import { login } from '../../api/data';
import { useAuth } from '../../contexts/AuthContext';

import PrimaryNavigation from '../Navigations/PrimaryNavigation/PrimaryNavigation';
import FormInput from '../UI/FormInput';
import FormOAuthButton from '../Buttons/FormOAuthButton';
import WordSeparator from '../FormElements/WordSeparator';
import PrimaryButton from '../Buttons/PrimaryButton';
import PasswordActions from '../FormElements/PasswordActions';
import Footer from '../Footer/Footer';

import './Login.css';

const Login = () => {
    const navigate = useNavigate();

    const { onLoginHandler } = useAuth();

    const {
        value: enteredEmail,
        isValid: enteredEmailIsValid,
        hasError: emailInputHasError,
        valueChangeHandler: emailChangedHandler,
        inputBlurHandler: emailBlurHandler,
        reset: resetEmailInput,
    } = useInput((value) => value.trim().includes('@'));

    const {
        value: enteredPassword,
        isValid: enteredPasswordIsValid,
        hasError: passwordInputHasError,
        valueChangeHandler: passwordChangedHandler,
        inputBlurHandler: passwordBlurHandler,
        reset: resetPasswordInput,
    } = useInput((value) => /[A-Za-z0-9]+/.test(value));

    let formIsValid = false;

    if (enteredEmailIsValid && enteredPasswordIsValid) {
        formIsValid = true;
    }

    const formSubmitHandler = async (e) => {
        e.preventDefault();

        try {
            if (formIsValid) {
                const user = await login(enteredEmail, enteredPassword);

                resetEmailInput();
                resetPasswordInput();
                onLoginHandler(user.name, user.email, user._id);
                navigate('/offers');
            }
        } catch (err) {
            console.log(err.message);
            (() => toast.error(err.message))();
        }
    }

    const emailInputClasses = emailInputHasError ? 'form-input invalid-input' : 'form-input';
    const passwordInputClasses = passwordInputHasError ? 'form-input invalid-input' : 'form-input';

    return (
        <div className="site-wrapper">
            <header>
                <PrimaryNavigation />
            </header>
            <main className="flex page-wrapper">
                <div className="login-card">
                    <div className="login-wrapper flex">
                        <h1>Sign In to <span className="text-accent ff-accent">worklance</span></h1>
                        <FormOAuthButton src="/images/icon-google.svg" alt="Google icon">Continue with Google</FormOAuthButton>

                        <WordSeparator>OR</WordSeparator>

                        <form className="login-form flex" method="POST" action="/auth/login" onSubmit={formSubmitHandler}>

                            <FormInput type="text" placeholder="Email" name="email" classes={emailInputClasses} onChange={emailChangedHandler}
                                onBlur={emailBlurHandler}
                                value={enteredEmail} />
                            {emailInputHasError && (
                                <span className='input-error-text'>Enter a valid email.</span>
                            )}

                            <FormInput type="password" placeholder="Password" name="password" classes={passwordInputClasses} onChange={passwordChangedHandler}
                                onBlur={passwordBlurHandler}
                                value={enteredPassword} />
                            {passwordInputHasError && <span className='input-error-text'>Password should contain only numbers and letters</span>}

                            <PrimaryButton>Continue</PrimaryButton>
                        </form>

                        <PasswordActions />
                        <p>Not a member yet? <Link to="/register" className="text-accent">Join now</Link></p>
                    </div>
                </div>

            </main>
            <Footer />
        </div>
    )
}

export default Login;