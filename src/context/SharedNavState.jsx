import { useState, createContext, useContext } from "react";

const SharedNavStateContext = createContext();

export const useSharedNavState = () => {
    const context = useContext(SharedNavStateContext);
    if (!context) {
        throw new Error("useSharedNavState must be used within a SharedNavStateProvider");
    }
    return context;
};

export const SharedNavStateProvider = ({ children }) => {
    const [isMobileNavVisible, setMobileNavVisibility] = useState(false);

    const toggleNav = () => {
        setMobileNavVisibility(!isMobileNavVisible);
    }

    const turnOffNav = () => {
        setMobileNavVisibility(false);
    }

    return (
        <SharedNavStateContext.Provider value={{ isMobileNavVisible, toggleNav, turnOffNav }}>
            {children}
        </SharedNavStateContext.Provider>
    );
};