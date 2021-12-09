import { Link } from 'react-router-dom';

import './PasswordActions.css';

const PasswordActions = () => {
    return (
        <div className="flex password-actions">
            <label htmlFor="remember">
                <input type="checkbox" id="remember" />
                Remember Me
            </label>
            <p><Link to="/" className="text-accent">Forgot Password?</Link></p>
        </div>
    )
}


export default PasswordActions;