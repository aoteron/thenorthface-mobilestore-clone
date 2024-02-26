// authContext.js

import { createContext, useCallback, useMemo, useState } from "react";
import PropTypes from 'prop-types';

const myAuthApp = "myAuthApp01"

export const AuthContext = createContext();

export function AuthContextProvider({children}) {
    const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem('myAuthApp') ?? false);

    const login = useCallback(function () {
        localStorage.setItem(myAuthApp, true);
        setIsAuthenticated(true);
    }, []);
    
    const logout = useCallback(function () {
        window.localStorage.removeItem(myAuthApp);
        setIsAuthenticated(false);
    }, []);

    const value = useMemo(
        () => ({
        login,
        logout,
        isAuthenticated,
    }),
    [login, logout, isAuthenticated] );

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

AuthContextProvider.PropTypes = {
    children: PropTypes.object
};