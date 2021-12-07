import { Link, useNavigate } from 'react-router-dom';

import PrimaryNavigation from '../Navigations/PrimaryNavigation/PrimaryNavigation';

import { register } from '../../api/data';

import { useAuth } from '../../contexts/AuthContext';

const Register = () => {
    const navigate = useNavigate();
    const { onLoginHandler } = useAuth();


    const formSubmitHandler = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);

        const name = formData.get('name');
        const email = formData.get('email');
        const password = formData.get('password');
        const rePass = formData.get('rePass');
        const profileImage = formData.get('profileImage');

        const user = await register(name, email, password, rePass, profileImage);

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
                    <h1>Join worklance</h1>
                    <button><span><img src="/images/icon-google.svg" alt="Google icon" /></span>Continue with Google</button>
                    <p>OR</p>
                    <form className="flex" method="POST" action="/auth/register" onSubmit={formSubmitHandler}>
                        <input type="text" placeholder="Profile Name" name="name"/>
                        <input type="text" placeholder="Email" name="email" />
                        <input type="text" placeholder="Password" name="password" />
                        <input type="text" placeholder="Repeat password" name="rePass" />
                        <input type="text" placeholder="Profile Image" name="profileImage"/>
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