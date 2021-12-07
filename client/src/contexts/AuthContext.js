import { createContext, useContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const initialState = { name: '', email: '', _id: '' }

    const [user, setUser] = useState(initialState);

    const onLogoutHandler = () => {
        setUser(initialState);
    }

    const onLoginHandler = (name, email, _id) => {
        setUser({ name, email, _id });
    }

    return (
        <AuthContext.Provider value={{ user, onLogoutHandler, onLoginHandler, isAuthenticated: Boolean(user.email) }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => {
    const authState = useContext(AuthContext);

    return authState;
}

