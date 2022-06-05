import React, { useState, useContext } from 'react'

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [showSidebar, setShowSidebar] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const sidebarHandler = () => {
        setShowSidebar(!showSidebar);
    }

    const modalHandler = () => {
        setShowModal(!showModal);
    }

    return (
        <AppContext.Provider value={{ showSidebar, sidebarHandler, showModal, modalHandler }}>
            {children}
        </AppContext.Provider>
    );
};

// custom hook to encapulate the useContext() where it needs
const useGlobalContext = () => {
    return useContext(AppContext);
}


export { AppContext, AppProvider, useGlobalContext };
