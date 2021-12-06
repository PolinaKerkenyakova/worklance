import { createContext, useContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const initialState = { isAuthenticated: false, email: '', _id: '' }

    const [user, setUser] = useState(initialState);

    const onLogoutHandler = () => {
        setUser(initialState);
    }

    const onLoginHandler = () => {
        setUser({ isAuthenticated: true, _id: user._id, email: user.email });
    }

    return (
        <AuthContext.Provider value={{ user, onLogoutHandler, onLoginHandler }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => {
    const authState = useContext(AuthContext);

    return authState;
}

