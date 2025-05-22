import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
// ...rest of your code


export const AppContext = createContext(null);

export const AppContextProvider = ({ children }) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [isSeller, setIsSeller] = useState(false);
    const [showUserLogin, setShowUserLogin] = useState(false);

    const value = { navigate, user, setUser, isSeller, setIsSeller, showUserLogin, setShowUserLogin };

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => useContext(AppContext);
