import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { logout } from '../../api/api';

const Logout = () => {

    useEffect(() => {

        (async () => {
            await logout()
        })()

    }, [])

    return <Navigate to="/" />
}

export default Logout;