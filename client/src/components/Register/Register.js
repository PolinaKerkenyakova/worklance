import { Link, useNavigate } from 'react-router-dom';
import PrimaryNavigation from '../Navigations/PrimaryNavigation/PrimaryNavigation';

import { register } from '../../api/data.js';

const Register = () => {
    const navigate = useNavigate();

    const formSubmitHandler = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);

        const email = formData.get('email');
        const password = formData.get('password');
        const rePass = formData.get('rePass');

        await register(email, password, rePass);
        navigate('/offers')
    }

    return (
        <>
            <header>
                <PrimaryNavigation />
            </header>
            <main>
                <div className="form-card">
                    <h1>Join worklance</h1>
                    <button><span><img src="/images/icon-google.svg" alt="Google icon" /></span>Continue with Google</button>
                    <p>OR</p>
                    <form className="flex" method="POST" action="/auth/register" onSubmit={formSubmitHandler}>
                        <input type="text" placeholder="Email" name="email" />
                        <input type="text" placeholder="Password" name="password" />
                        <input type="text" placeholder="Repeat password" name="rePass" />
                        <button>Continue</button>
                    </form>
                    <div className="flex">
                        <label htmlFor="remember">
                            <input type="checkbox" id="remember" />
                            Remember Me
                        </label>
                        <p><Link to="/">Forgot Password?</Link></p>
                    </div>
                    <p>Already a member? <Link to="/login">Sign In</Link></p>
                </div>
            </main>
        </>
    )
}

export default Register;