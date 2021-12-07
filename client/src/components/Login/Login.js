import { Link, useNavigate } from 'react-router-dom';

import PrimaryNavigation from '../Navigations/PrimaryNavigation/PrimaryNavigation';

import { login } from '../../api/data';
import { useAuth } from '../../contexts/AuthContext';

const Login = () => {
    const navigate = useNavigate();
    const { onLoginHandler } = useAuth();

    const formSubmitHandler = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);

        const email = formData.get('email');
        const password = formData.get('password');

        const user = await login(email, password);

        onLoginHandler(user.name, user.email, user._id);
        navigate('/offers');
    }

    return (
        <>
            <header>
                <PrimaryNavigation />
            </header>
            <main>
                <div className="form-card">
                    <h1>Sign In to worklance</h1>
                    <button><span><img src="/images/icon-google.svg" alt="Google icon" /></span>Continue with Google</button>
                    <p>OR</p>
                    <form className="flex" method="POST" action="/auth/register" onSubmit={formSubmitHandler}>
                        <input type="text" placeholder="Email" name="email" />
                        <input type="text" placeholder="Password" name="password" />
                        <button>Continue</button>
                    </form>
                    <div className="flex">
                        <label htmlFor="remember">
                            <input type="checkbox" id="remember" />
                            Remember Me
                        </label>
                        <p><Link to="/">Forgot Password?</Link></p>
                    </div>
                    <p>Not a member yet? <Link to="/login">Join now</Link></p>
                </div>
            </main>
        </>
    )
}

export default Login;