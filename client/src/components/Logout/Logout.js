import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { logout } from '../../api/api';
import { useAuth } from '../../contexts/AuthContext';

const Logout = () => {

    const { onLogoutHandler } = useAuth();
    
    useEffect(() => {

        (async () => {
            await logout()
        })()

    }, [])

    onLogoutHandler();
    return <Navigate to="/" />
}

export default Logout;