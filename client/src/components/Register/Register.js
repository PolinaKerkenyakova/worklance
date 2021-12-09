import { Link, useNavigate } from 'react-router-dom';

import useInput from '../../hooks/useInput';
import { register } from '../../api/data';
import { useAuth } from '../../contexts/AuthContext';

import PrimaryNavigation from '../Navigations/PrimaryNavigation/PrimaryNavigation';
import FormInput from '../UI/FormInput';
import FormOAuthButton from '../Buttons/FormOAuthButton';
import PrimaryButton from '../Buttons/PrimaryButton';
import WordSeparator from '../FormElements/WordSeparator';

import './Register.css';

const Register = () => {
    const navigate = useNavigate();
    const { onLoginHandler } = useAuth();

    const {
        value: enteredName,
        isValid: enteredNameIsValid,
        hasError: nameInputHasError,
        valueChangeHandler: nameChangedHandler,
        inputBlurHandler: nameBlurHandler,
        reset: resetNameInput,
    } = useInput((value) => value.trim() !== '');

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

    const {
        value: enteredRePassword,
        isValid: enteredRePasswordIsValid,
        hasError: rePasswordInputHasError,
        valueChangeHandler: rePasswordChangedHandler,
        inputBlurHandler: rePasswordBlurHandler,
        reset: resetRePasswordInput,
    } = useInput((value) => /[A-Za-z0-9]+/.test(value));

    const {
        value: enteredImage,
        isValid: enteredImageIsValid,
        hasError: imageInputHasError,
        valueChangeHandler: imageChangedHandler,
        inputBlurHandler: imageBlurHandler,
        reset: resetImageInput,
    } = useInput((value) => value.trim() !== '');


    let formIsValid = false;

    if (enteredNameIsValid && enteredEmailIsValid && enteredPasswordIsValid && enteredRePasswordIsValid && enteredImageIsValid) {
        formIsValid = true;
    }

    const formSubmitHandler = async (e) => {
        e.preventDefault();

        if (formIsValid) {
            const user = await register(enteredName, enteredEmail, enteredPassword, enteredRePassword, enteredImage);
            resetNameInput();
            resetEmailInput();
            resetPasswordInput();
            resetRePasswordInput();
            resetImageInput();
            onLoginHandler(user.name, user.email, user._id);
            navigate('/offers');
        }
    }

    const nameInputClasses = nameInputHasError ? 'form-input invalid-input' : 'form-input';
    const emailInputClasses = emailInputHasError ? 'form-input invalid-input' : 'form-input';
    const passwordInputClasses = passwordInputHasError ? 'form-input invalid-input' : 'form-input';
    let rePasswordInputClasses = rePasswordInputHasError ? 'form-input invalid-input' : 'form-input';
    const imageInputClasses = imageInputHasError ? 'form-input invalid-input' : 'form-input';


    let arePasswordsDifferent = false;


    if (enteredPassword !== enteredRePassword && enteredRePassword !== '') {
        arePasswordsDifferent = true;
    }

    rePasswordInputClasses = arePasswordsDifferent ? 'form-input invalid-input' : 'form-input';

    return (
        <>
            <header>
                <PrimaryNavigation />
            </header>
            <main className="flex page-wrapper">
                <div className="register-card">
                    <div className="register-wrapper flex">
                        <h1>Join <span className="text-accent ff-accent">worklance</span></h1>
                        <FormOAuthButton src="/images/icon-google.svg" alt="Google icon">Continue with Google</FormOAuthButton>

                        <WordSeparator>OR</WordSeparator>

                        <form className="register-form flex" method="POST" action="/auth/register" onSubmit={formSubmitHandler}>

                            <FormInput type="text" placeholder="Profile name" name="name" classes={nameInputClasses} onChange={nameChangedHandler}
                                onBlur={nameBlurHandler}
                                value={enteredName} />
                            {nameInputHasError && (
                                <span className='input-error-text'>Name must not be empty.</span>
                            )}

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

                            <FormInput type="password" placeholder="Repeat password" name="rePass" classes={rePasswordInputClasses} onChange={rePasswordChangedHandler}
                                onBlur={rePasswordBlurHandler}
                                value={enteredRePassword} />
                            {rePasswordInputHasError && <span className='input-error-text'>Repeated password should match the entered password</span>}

                            {arePasswordsDifferent && <span className='input-error-text'>Passwords don't match</span>}

                            <FormInput type="text" placeholder="Profile image" name="profileImage" classes={imageInputClasses} onChange={imageChangedHandler}
                                onBlur={imageBlurHandler}
                                value={enteredImage} />
                            {imageInputHasError && (
                                <span className='input-error-text'>Enter valid URL</span>
                            )}

                            <PrimaryButton>Continue</PrimaryButton>
                        </form>

                        <p>Already a member? <Link to="/login" className="text-accent">Sign In</Link></p>
                    </div>
                </div>
            </main>
        </>
    );
}

export default Register;